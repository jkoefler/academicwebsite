import Link from "next/link";

// Local helper component
function HighlightedPublication({ image, title, authors, description, link }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-start text-center lg:text-left px-4 lg:px-8 gap-12 transition-all duration-700 ease-in-out">
      {/* Left - Image */}
      <div className="flex justify-center w-1/2 lg:w-1/4">
        <img
          src={image}
          alt="Publication Image"
          className="rounded-xl object-contain w-auto h-auto lg:h-auto mx-auto"
        />
      </div>

      {/* Right - Text */}
      <div className="flex-shrink-0 w-full lg:w-1/2 text-center lg:text-left p-4">
        {/* Title with link */}
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-balance font-semibold text-2xl mb-1 hover:underline"
        >
          {title}
        </Link>

        {/* Authors */}
        <p className="text-balance text-sm text-gray-600 mt-0">
          {authors}
        </p>

        {/* Description */}
        <p className="text-justify text-lg text-gray-700 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ResearchInterest() {
  return (
    <div className="flex flex-col gap-9 lg:mx-16">
      <h1 className="text-balance font-extrabold text-4xl">
        Research Interest
      </h1>

      <div className="flex flex-col gap-5">
        <p className="text-balance tracking-wider lg:tracking-normal text-zinc-600 text-lg select-none">
          My research is in real-algebra geometry, combinatorics and their application to scattering amplitudes in fundamental particles Physics. In particular, I am interested in semi-algebraic sets appearing as positive geometries, such as the amplituhedron, and their adjoint hypersurfaces. I am also part of the {" "}
          <Link className="underline font-bold" href="https://positive-geometry.com/">UNIVERSE+</Link> {" "}
           project, where we explore more connections between fundamental Physics and Positive Geometry. I am also a contributor to the Math-AI benchmark{" "} <Link className="underline font-bold" href="https://math.science-bench.ai">science-bench</Link>.
        </p>
      </div>

      {/* Highlighted publication section */}
      <h1 className="text-balance font-bold text-2xl mt-0 mb-0">
        Highlighted Publication
      </h1>

      <HighlightedPublication
        image="/3D_DelPezzo.png"
        title="Positive Geometries of Postive Genus"
        authors="joint work with Dmitrii Pavlov, and Rainer Sinn"
        description="If you thought positive geometries must make genus zero pairs, you will like our Del Pezzo cube! It has a nice canonical form, but an elliptic curve in its residual arrangement, so it makes a genus 1 pair."
        link="https://arxiv.org/abs/2601.11142"
      />

      <button className="flex flex-row items-center gap-2 font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
        <Link href="/research" className="text-lg">
          More about my research
        </Link>
      </button>
    </div>
  );
}