import Link from "next/link";

export default function ResearchInterest() {
  return (
    <div className="flex flex-col gap-9 lg:mx-16">
      <h1 className="text-balance font-extrabold text-4xl">
        Research Interest
      </h1>
      <div className="flex flex-col gap-5">
        <p className="text-balance tracking-wider lg:tracking-normal text-zinc-600 text-lg select-none">
          I am interested in studying the algebro-geometric and combinatorial background of fundamental Physics. In particular, I am interested in semi-algebraic sets appearing as positive geometries, such as the amplituhedron. I am also part of the <Link className="underline font-bold" href="https://positive-geometry.com/"> UNIVERSE+</Link> project which is funded by the ERC, where we explore more connections between fundamental physics and positive geometries.
        </p>
        <button className="flex flex-row items-center gap-2 font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
          <Link href="/research" class="text-lg">More about my research</Link>
        </button>
      </div>
    </div>
  );
}
