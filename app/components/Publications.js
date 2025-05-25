import Link from "next/link";
import Abstract from "@/app/components/Abstract.js";

export default function Publications() {
  return (
    <div className="flex flex-col gap-9 lg:mx-16">
      {/*2025*/}
      <div className="w-full border-t border-gray-300 mt-8 relative">
      <span className="absolute left-0 top-2 text-gray-500 text-sm">2025</span>
      </div>

      {/* New Section with Image on Left and Text on Right */}
    <div className="flex flex-col lg:flex-row items-center justify-start text-center lg:text-left px-4 lg:px-8 gap-12 transition-all duration-700 ease-in-out">
        {/* Left - Image */}
        <div className="flex justify-center w-1/2 lg:w-1/4">
          <img src="/connectionMatrices.png" alt="Project Image" className="rounded-xl  object-contain w-auto h-auto lg:h-auto mx-auto" />
        </div>
        {/* Right - Text */}
        <div className=" flex-shrink-0 w-full lg:w-3/4 text-center lg:text-left p-4">
          {/* Highlited publication section */}
          <h2 className = "text-balance font-bold text-2xl mt-0 mb-0">
            Connection Matrices in Macaulay2
          </h2>
          <p className="text-balance text-gray-600 mt-0">  {/* Removed margin-top */}
            with Paul Görlach, Anna-Laura Sattelberger, Mahrud Sayrafi, Hendrik Schroeder, Nicolas Weiss, Francesca Zaffalon
          </p>
          <Abstract
          text="Systems of homogeneous linear PDEs can be represented as left ideals in the Weyl algebra. Using Gröbner basis techniques, these systems can be systematically encoded by connection matrices. In fundamental particle physics and theoretical cosmology, when investigating scattering amplitudes and cosmological correlators, they turn up as systems of differential equations in matrix form. We explain the implementation of our package ConnectionMatrices in Macaulay2 and showcase a few examples from physics."
          />
          <Link href="https://arxiv.org/abs/2504.01362" target="_blank" rel="noopener noreferrer" className="text-balance font-semibold text-1xl mb-1 hover:underline">
            arXiv
          </Link>
        </div>
      </div>

    {/* New Section with Image on Left and Text on Right */}
    <div className="flex flex-col lg:flex-row items-center justify-start text-center lg:text-left px-4 lg:px-8 gap-12 transition-all duration-700 ease-in-out">
        {/* Left - Image */}
        <div className="flex justify-center w-1/2 lg:w-1/4">
          <img src="/limit_amplituhedron.png" alt="Project Image" className="rounded-xl  object-contain w-auto h-auto lg:h-auto mx-auto" />
        </div>
        {/* Right - Text */}
        <div className=" flex-shrink-0 w-full lg:w-3/4 text-center lg:text-left p-4">
          {/* Highlited publication section */}
          <h2 className = "text-balance font-bold text-2xl mt-0 mb-0">
            Taking the amplituhedron to the limit
          </h2>
          <p className="text-balance text-gray-600 mt-0">  {/* Removed margin-top */}
            with Rainer Sinn
          </p>
          <Abstract
          text="The amplituhedron is a semialgebraic set given as the image of the non-negative Grassmannian under a linear map subject to a choice of additional parameters. We define the limit amplituhedron as the limit of amplituhedra by sending one of the parameters, namely the number of particles n, to infinity. We study this limit amplituhedron for m=2 and any k, relating to the number of negative helcity particles. We determine its algebraic boundary in terms of Chow hypersurfaces. This hypersurface in the Grassmannian is stratified by singularities in terms of higher order secants of the rational normal curve. In conclusion, we show that the limit amplituhedron is a positive geometry with a residual arrangement that is empty."
          />
          <Link href="https://arxiv.org/abs/2501.08221" target="_blank" rel="noopener noreferrer" className="text-balance font-semibold text-1xl mb-1 hover:underline">
            arXiv
          </Link>
        </div>
      </div>

      {/*2024*/}
      <div className="w-full border-t border-gray-300 mt-8 relative">
      <span className="absolute left-0 top-2 text-gray-500 text-sm">2024</span>
      </div>  
      {/* New Section with Image on Left and Text on Right */}
    <div className="flex flex-col lg:flex-row items-center justify-start text-center lg:text-left px-4 lg:px-8 gap-12 transition-all duration-700 ease-in-out">
        {/* Left - Image */}
        <div className="flex justify-center w-1/2 lg:w-1/4">
          <img src="/Gravity_amplitude.png" alt="Project Image" className="rounded-xl  object-contain w-auto h-auto lg:h-auto mx-auto" />
        </div>
        {/* Right - Text */}
        <div className="flex-shrink-0 w-full lg:w-3/4 text-center lg:text-left p-4">
          {/* Highlited publication section */}
          <Link href="https://arxiv.org/abs/2412.08713" target="_blank" rel="noopener noreferrer" className="text-balance font-semibold text-2xl mb-1 hover:underline">
            Uniqueness of MHV Gravity Amplitudes
          </Link>
          <p className="text-balance text-gray-600 mt-0">  {/* Removed margin-top */}
            with Umut Oktem, Shruti Paranjape, Jaroslav Trnka and Bailee Zacovic
          </p>
          <Abstract
          text = "We investigate MHV tree-level gravity amplitudes as defined on the spinor-helicity variety. Unlike their gluon counterparts, the gravity amplitudes do not have logarithmic singularities and do not admit Amplituhedron-like construction. Importantly, they are not determined just by their singularities, but rather their numerators have interesting zeroes. We make a conjecture about the uniqueness of the numerator and explore this feature from a more mathematical perspective. This leads us to a new approach for examining adjoints. We outline steps of our proposed proof and provide computational evidence for its validity in specific cases."
          />
          <Link href="https://lematematiche.dmi.unict.it/index.php/lematematiche" target="_blank" rel="noopener noreferrer" className="text-balance font-semibold mb-1 hover:underline">
            Le Mathematiche, special volume on Positive Geometry.
          </Link>
        </div>
      </div>    
    </div>
  );
}

