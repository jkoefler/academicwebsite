#!/bin/bash

set -Eeuo pipefail
trap 'deploy_status=$?; printf "Error: deployment script stopped at line %s (exit %s).\n" "$LINENO" "$deploy_status" >&2; exit "$deploy_status"' ERR

usage() {
  cat <<'USAGE'
Usage: ./upload.sh [--check | --dry-run | --help]

  (no option)  Build and upload the site without deleting existing remote files.
  --check      Check prerequisites and make a read-only server directory listing.
  --dry-run    Build and print the upload commands without connecting to the server.
  --help       Show this help.

The SSH key defaults to ~/.ssh/hetzner. Override it with DEPLOY_IDENTITY_FILE.
USAGE
}

if [ "$#" -gt 1 ]; then
  usage >&2
  exit 2
fi

case "${1:-}" in
  "") MODE="deploy" ;;
  --check) MODE="check" ;;
  --dry-run) MODE="dry-run" ;;
  --help|-h) usage; exit 0 ;;
  *) usage >&2; exit 2 ;;
esac

# Resolve paths from this script, even when it is run from another directory.
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
cd "$SCRIPT_DIR"

REMOTE_USER="joriska"
REMOTE_HOST="162.55.254.31"
REMOTE_PATH="/public_html"
REMOTE_URL="sftp://$REMOTE_HOST$REMOTE_PATH/"
LOCAL_BUILD_DIR="$SCRIPT_DIR/out"
HTACCESS_FILE="$SCRIPT_DIR/.htaccess"
IDENTITY_FILE="${DEPLOY_IDENTITY_FILE:-$HOME/.ssh/hetzner}"

fail() {
  printf 'Error: %s\n' "$*" >&2
  exit 1
}

command -v npm >/dev/null 2>&1 || fail "npm is missing. Install Node.js first."
command -v duck >/dev/null 2>&1 || fail "duck is missing. Install it with: brew install duck"
[ -f "$IDENTITY_FILE" ] && [ -r "$IDENTITY_FILE" ] && [ -s "$IDENTITY_FILE" ] \
  || fail "SSH key is missing, empty, or unreadable: $IDENTITY_FILE"
[ -f "$HTACCESS_FILE" ] && [ -r "$HTACCESS_FILE" ] && [ -s "$HTACCESS_FILE" ] \
  || fail "The .htaccess file is missing, empty, or unreadable: $HTACCESS_FILE"
[ -x "$SCRIPT_DIR/node_modules/.bin/next" ] \
  || fail "Project dependencies are missing. Run npm ci in $SCRIPT_DIR first."

DUCK_OPTIONS=(--username "$REMOTE_USER" --identity "$IDENTITY_FILE")

check_connection() {
  printf 'Checking the server (read-only): %s\n' "$REMOTE_URL"
  duck "${DUCK_OPTIONS[@]}" --list "$REMOTE_URL"
}

if [ "$MODE" = "check" ]; then
  check_connection
  printf 'Prerequisite and connection checks passed. Nothing was uploaded.\n'
  exit 0
fi

printf 'Building the site...\n'
npm run build

# Never contact the server or upload stale output after a failed/incomplete build.
[ -s "$LOCAL_BUILD_DIR/index.html" ] || fail "Build output is missing out/index.html."
[ -s "$LOCAL_BUILD_DIR/404.html" ] || fail "Build output is missing out/404.html."
[ -d "$LOCAL_BUILD_DIR/_next" ] || fail "Build output is missing out/_next/."

# Upload immediate children so that an extra 'out' directory is not created.
# Include useful hidden paths (for example .well-known), but skip Finder metadata.
shopt -s nullglob dotglob
ASSET_FILES=()
HTML_FILES=()
for entry in "$LOCAL_BUILD_DIR"/*; do
  case "${entry##*/}" in
    .DS_Store|.htaccess) continue ;;
    *.html) HTML_FILES+=("$entry") ;;
    *) ASSET_FILES+=("$entry") ;;
  esac
done

upload() {
  local description="$1"
  shift
  printf '\n%s\n' "$description"
  if [ "$MODE" = "dry-run" ]; then
    printf '  '
    printf '%q ' duck "${DUCK_OPTIONS[@]}" --existing overwrite --upload "$@"
    printf '\n'
  else
    duck "${DUCK_OPTIONS[@]}" --existing overwrite --upload "$@"
  fi
}

if [ "$MODE" = "dry-run" ]; then
  printf '\nDry run: no connection to the server will be made.\n'
else
  check_connection
fi

# Publish assets before HTML so new pages can load their matching JS/CSS.
# Keep old hashed assets available to visitors who still have older pages open.
upload "Uploading assets..." "$REMOTE_URL" "${ASSET_FILES[@]}"
upload "Uploading pages..." "$REMOTE_URL" "${HTML_FILES[@]}"
upload "Uploading .htaccess..." "${REMOTE_URL}.htaccess" "$HTACCESS_FILE"

if [ "$MODE" = "dry-run" ]; then
  printf '\nDry run complete. Nothing was uploaded.\n'
else
  printf '\nDeployment complete. Existing remote files were not deleted.\n'
fi
