import Link from "next/link";

export default function ResearchInterest() {
  return (
    <div className="flex flex-col gap-9 lg:mx-16">
      <h1 className="text-balance font-extrabold text-4xl">
        Research Interest
      </h1>
      <div className="flex flex-col gap-5">
        <p className="text-balance tracking-wider lg:tracking-normal text-zinc-600 text-lg select-none">
          I am interested in studying the algebro-geometric and combinatorial background of scattering amplitudes in fundamental Physics. In particular, I am interested in semi-algebraic sets appearing as positive geometries, such as the amplituhedron and their adjoint hypersurfaces. I am also part of the <Link className="underline font-bold" href="https://positive-geometry.com/"> UNIVERSE+</Link> project, where we explore more connections between fundamental Physics and Positive Geometry.
        </p>
      </div>
      {/*Highlited publication section*/}
      <h1 className="text-balance font-bold text-2xl mt-0 mb-0">
        Highlighted Publication
      </h1>
    {/* New Section with Image on Left and Text on Right */}
    <div className="flex flex-col lg:flex-row items-center justify-start text-center lg:text-left px-4 lg:px-8 gap-12 transition-all duration-700 ease-in-out">
        {/* Left - Image */}
        <div className="flex justify-center w-1/2 lg:w-1/4">
          <img src="/limit_amplituhedron.png" alt="Project Image" className="rounded-xl  object-contain w-auto h-auto lg:h-auto mx-auto" />
        </div>
        {/* Right - Text */}
        <div className="flex-shrink-0 w-full lg:w-1/2 text-center lg:text-left p-4">
          {/* Highlited publication section */}
          <Link href="https://arxiv.org/abs/2501.08221" target="_blank" rel="noopener noreferrer" className="text-balance font-semibold text-2xl mb-1 hover:underline">
            Limit Amplituhedron
          </Link>
          <p className="text-balance text-sm text-gray-600 mt-0">  {/* Removed margin-top */}
            joint work with Rainer Sinn
          </p>
          <p className="text-balance text-lg text-gray-700 mt-2">
            {/*In this project we took the classical amplituhedron to the limit by sending one of the parameters to infinity. The resulting semi algebraic set, the limit amplituhedron, turns out to be a positive geometry with a very nice geometric boundary stratification.*/}
            If you ever wondered why a pizza point-blank refuses to be a positive geometry, you might want to push things to the limit. This limit amplituhedron turns out to be a positive geometry with a very nice geometric boundary stratification.
          </p>
        </div>
      </div>
      <button className="flex flex-row items-center gap-2 font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
          <Link href="/research" class="text-lg">More about my research</Link>
        </button>
    </div>
  );
}
