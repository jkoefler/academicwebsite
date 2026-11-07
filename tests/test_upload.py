"""Exercise deployment behavior with local build and transfer stand-ins only.

Run with: python3 -B -m unittest discover -s tests -p 'test_upload.py' -v
No test invokes the installed npm/duck or contacts the deployment server.
"""

import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest


PROJECT_ROOT = Path(__file__).resolve().parents[1]

MOCK_TOOL = r'''
import json
import os
from pathlib import Path
import sys

tool = Path(sys.argv[0]).name
args = sys.argv[1:]
log = Path(os.environ["DEPLOY_TEST_LOG"])
with log.open("a", encoding="utf-8") as stream:
    stream.write(json.dumps({"tool": tool, "args": args, "cwd": os.getcwd()}) + "\n")

if tool == "npm":
    if args != ["run", "build"]:
        raise SystemExit("Unexpected npm invocation: " + repr(args))
    if os.environ.get("MOCK_BUILD_FAIL") == "1":
        print("Simulated build failure", file=sys.stderr)
        raise SystemExit(12)
    mode = os.environ.get("MOCK_OUTPUT_MODE", "normal")
    output = Path("out")
    output.mkdir(exist_ok=True)
    if mode != "empty":
        files = {
            "index.html": "new home page",
            "404.html": "new error page",
            "cv.html": "new CV page",
            "research.txt": "new route data",
            "Academic CV.pdf": "new PDF",
            ".well-known/security.txt": "new hidden asset",
            ".DS_Store": "do not publish",
            ".htaccess": "do not use the exported copy",
        }
        if mode != "missing_next":
            files["_next/static/app.js"] = "new application code"
        if mode == "missing_index":
            del files["index.html"]
        if mode == "missing_404":
            del files["404.html"]
        for name, content in files.items():
            target = output / name
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(content, encoding="utf-8")
elif tool == "duck":
    if any(flag in args for flag in ("--delete", "-D", "--move", "--purge")):
        raise SystemExit("A destructive transfer was attempted")
    if "--list" in args:
        if os.environ.get("MOCK_FAIL_LIST") == "1":
            print("Simulated listing failure", file=sys.stderr)
            raise SystemExit(23)
        print("index.html\n_next\n.htaccess")
    elif "--upload" in args:
        calls = [json.loads(line) for line in log.read_text().splitlines()]
        stage = sum(call["tool"] == "duck" and "--upload" in call["args"] for call in calls)
        if os.environ.get("MOCK_FAIL_UPLOAD_STAGE") == str(stage):
            print("Simulated upload failure", file=sys.stderr)
            raise SystemExit(24)
    else:
        raise SystemExit("Unexpected duck invocation: " + repr(args))
'''


class UploadScriptTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory(prefix="upload regression ")
        self.addCleanup(self.temporary.cleanup)
        self.base = Path(self.temporary.name).resolve()
        self.repo = self.base / "website with spaces"
        self.repo.mkdir()
        self.outside = self.base / "outside repository"
        self.outside.mkdir()
        self.bin = self.base / "mock bin"
        self.bin.mkdir()
        self.key = self.base / "fixture identity with spaces"
        self.key.write_text("test identity, not a real private key\n")
        self.htaccess = self.repo / ".htaccess"
        shutil.copy2(PROJECT_ROOT / ".htaccess", self.htaccess)
        self.script = self.repo / "upload.sh"
        shutil.copy2(PROJECT_ROOT / "upload.sh", self.script)
        self.next = self.repo / "node_modules" / ".bin" / "next"
        self.next.parent.mkdir(parents=True)
        self.next.write_text("#!/bin/sh\nexit 0\n")
        self.next.chmod(0o755)
        for name in ("npm", "duck"):
            executable = self.bin / name
            executable.write_text("#!" + sys.executable + "\n" + MOCK_TOOL)
            executable.chmod(0o755)
        self.log = self.base / "tool calls.jsonl"
        self.env = {
            "PATH": str(self.bin) + ":/usr/bin:/bin",
            "DEPLOY_IDENTITY_FILE": str(self.key),
            "DEPLOY_TEST_LOG": str(self.log),
            "LC_ALL": "C",
            "TERM": "dumb",
        }
        # Preserve only platform runtime variables; deployment overrides and
        # credentials from the developer's environment must not affect tests.
        for name in ("TMPDIR", "SYSTEMROOT", "WINDIR"):
            if name in os.environ:
                self.env[name] = os.environ[name]

    def run_upload(self, *args, **extra_env):
        return subprocess.run(
            ["/bin/bash", str(self.script), *args],
            cwd=self.outside,
            env={**self.env, **extra_env},
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            timeout=15,
        )

    def calls(self):
        if not self.log.exists():
            return []
        return [json.loads(line) for line in self.log.read_text().splitlines()]

    def reset_calls(self):
        if self.log.exists():
            self.log.unlink()

    def assert_failed(self, result):
        self.assertNotEqual(result.returncode, 0, result.stdout)
        self.assertNotIn("deployment complete", result.stdout.lower(), result.stdout)
        self.assertNotIn("✅", result.stdout, result.stdout)

    def duck_calls(self):
        return [call for call in self.calls() if call["tool"] == "duck"]

    def upload_calls(self):
        return [call for call in self.duck_calls() if "--upload" in call["args"]]

    def upload_parts(self, call):
        arguments = call["args"]
        index = arguments.index("--upload")
        return arguments[index + 1], arguments[index + 2 :]

    def local_sources(self, call):
        _, sources = self.upload_parts(call)
        return {(Path(call["cwd"]) / source).resolve() for source in sources}

    def test_help_works_without_deployment_prerequisites(self):
        for path in (self.bin / "npm", self.bin / "duck", self.key, self.next, self.htaccess):
            path.unlink()
        result = self.run_upload("--help")
        self.assertEqual(result.returncode, 0, result.stdout)
        self.assertIn("--dry-run", result.stdout)
        self.assertIn("--check", result.stdout)
        self.assertEqual(self.calls(), [])

    def test_invalid_and_conflicting_options_do_not_invoke_tools(self):
        for options in (("--unknown",), ("--check", "--dry-run"), ("--dry-run", "--check")):
            with self.subTest(options=options):
                result = self.run_upload(*options)
                self.assert_failed(result)
                self.assertEqual(self.calls(), [])

    def test_missing_or_empty_prerequisites_prevent_build_and_network(self):
        cases = (
            ("npm", self.bin / "npm", "missing"),
            ("duck", self.bin / "duck", "missing"),
            ("identity", self.key, "missing"),
            ("identity", self.key, "empty"),
            ("htaccess", self.htaccess, "missing"),
            ("htaccess", self.htaccess, "empty"),
            ("next", self.next, "missing"),
            ("next", self.next, "not executable"),
        )
        for name, path, mode in cases:
            with self.subTest(prerequisite=name, mode=mode):
                content, permissions = path.read_bytes(), path.stat().st_mode
                try:
                    if mode == "missing":
                        path.unlink()
                    elif mode == "empty":
                        path.write_bytes(b"")
                    else:
                        path.chmod(0o644)
                    result = self.run_upload()
                    self.assert_failed(result)
                    self.assertEqual(self.calls(), [], result.stdout)
                finally:
                    path.write_bytes(content)
                    path.chmod(permissions)
                    self.reset_calls()

    def test_build_failure_prevents_any_server_contact(self):
        result = self.run_upload(MOCK_BUILD_FAIL="1")
        self.assert_failed(result)
        self.assertEqual([call["tool"] for call in self.calls()], ["npm"])

    def test_missing_build_outputs_prevent_any_server_contact(self):
        for mode in ("missing_index", "missing_404", "missing_next", "empty"):
            with self.subTest(output=mode):
                if (self.repo / "out").exists():
                    shutil.rmtree(self.repo / "out")
                self.reset_calls()
                result = self.run_upload(MOCK_OUTPUT_MODE=mode)
                self.assert_failed(result)
                self.assertEqual([call["tool"] for call in self.calls()], ["npm"])

    def test_check_only_lists_the_remote_directory(self):
        result = self.run_upload("--check")
        self.assertEqual(result.returncode, 0, result.stdout)
        calls = self.calls()
        self.assertEqual(len(calls), 1, calls)
        self.assertEqual(calls[0]["tool"], "duck")
        arguments = calls[0]["args"]
        self.assertIn("--list", arguments)
        self.assertTrue(arguments[arguments.index("--list") + 1].endswith("/public_html/"))
        self.assertEqual(self.upload_calls(), [])
        self.assertFalse((self.repo / "out").exists())

    def test_dry_run_builds_and_prints_three_uploads_without_invoking_duck(self):
        result = self.run_upload("--dry-run")
        self.assertEqual(result.returncode, 0, result.stdout)
        self.assertEqual([call["tool"] for call in self.calls()], ["npm"])
        self.assertTrue((self.repo / "out" / "index.html").is_file())
        self.assertEqual(result.stdout.count("--upload"), 3, result.stdout)
        self.assertIn("/public_html/.htaccess", result.stdout)
        self.assertNotIn("--delete", result.stdout)

    def test_listing_failure_stops_before_upload(self):
        for options in ((), ("--check",)):
            with self.subTest(options=options):
                self.reset_calls()
                result = self.run_upload(*options, MOCK_FAIL_LIST="1")
                self.assert_failed(result)
                self.assertEqual(len(self.duck_calls()), 1)
                self.assertIn("--list", self.duck_calls()[0]["args"])
                self.assertEqual(self.upload_calls(), [])

    def test_each_upload_failure_stops_all_later_stages(self):
        for stage in (1, 2, 3):
            with self.subTest(stage=stage):
                self.reset_calls()
                result = self.run_upload(MOCK_FAIL_UPLOAD_STAGE=str(stage))
                self.assert_failed(result)
                self.assertEqual(len(self.duck_calls()), stage + 1)
                self.assertEqual(len(self.upload_calls()), stage)
                self.assertIn("--list", self.duck_calls()[0]["args"])

    def test_success_uploads_assets_then_pages_then_configuration_without_deletion(self):
        result = self.run_upload()
        self.assertEqual(result.returncode, 0, result.stdout)
        calls = self.calls()
        self.assertEqual([call["tool"] for call in calls], ["npm", "duck", "duck", "duck", "duck"])
        self.assertEqual(calls[0]["args"], ["run", "build"])
        self.assertEqual(Path(calls[0]["cwd"]), self.repo)
        self.assertIn("--list", calls[1]["args"])
        assets, pages, configuration = self.upload_calls()
        output = self.repo / "out"
        self.assertEqual(
            self.local_sources(assets),
            {output / "_next", output / ".well-known", output / "research.txt", output / "Academic CV.pdf"},
        )
        self.assertEqual(self.local_sources(pages), {output / "index.html", output / "404.html", output / "cv.html"})
        self.assertEqual(self.local_sources(configuration), {self.htaccess})
        for call in (assets, pages):
            target, _ = self.upload_parts(call)
            self.assertTrue(target.endswith("/public_html/"), target)
        target, _ = self.upload_parts(configuration)
        self.assertTrue(target.endswith("/public_html/.htaccess"), target)
        for call in self.duck_calls():
            arguments = call["args"]
            self.assertTrue(set(arguments).isdisjoint({"--delete", "-D", "--move", "--purge"}), arguments)
            self.assertNotIn("--assumeyes", arguments)
            self.assertNotIn("-y", arguments)
            self.assertEqual(arguments[arguments.index("--identity") + 1], str(self.key))
        for call in (assets, pages, configuration):
            arguments = call["args"]
            self.assertEqual(arguments[arguments.index("--existing") + 1], "overwrite")

    def test_identity_override_with_spaces_is_passed_as_one_argument(self):
        override = self.base / "separate identity with spaces"
        override.write_text("fake identity override\n")
        self.key.unlink()
        result = self.run_upload("--check", DEPLOY_IDENTITY_FILE=str(override))
        self.assertEqual(result.returncode, 0, result.stdout)
        arguments = self.duck_calls()[0]["args"]
        self.assertEqual(arguments[arguments.index("--identity") + 1], str(override))


if __name__ == "__main__":
    unittest.main()
