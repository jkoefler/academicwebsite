import Link from "next/link";
import Abstract from "@/app/components/Abstract.js";


export default function Publications() {

  const ongoing = [
    {title: "Hyperplane Arrangements and a Quadric", 
    abstract: "We study the cohomology groups, genera and combinatorial ranks of an arrangement of hyperplanes together with a smooth quadric hypersurface. If the arrangement is generic enough the answers to these questions depends only on the combinatorics, and we can explicitly construct a basis of the relative homology groups.",
    coauthors: "",
    link: "",
    link_title: "",
    image:"2D_arrangement" },

    {title: "Hodges Map, MHV Gravity Amplitudes, and Pentad Varieties", 
    abstract: "We study some geometric aspects behind the Hodges matrix appearing in the context of scattering amplitudes for the $\mathcal N=8$ supergravity. Through a vector bundle construction, we show that the Hodges matrix gives rise to a canonical rational map from the two-step flag variety to symmetric matrices, called the {\it Hodges map}. This construction allows to define the amplitude geometrically: its vanishing locus is a divisor, which we call the {\it MHV gravity divisor}. Inspired by the Hodges map, we introduce the notion of Hadamard ratio of two varieties. In the case relevant to gravity, this is ratio of two Grassmannians,which we call the \emph{pentad variety}, connecting it to the pentad constraint from algebraic statistics. Moreover, we show that the pentad variety is closely related to the affine slope variety introduced by Jeremy Martin.",
    coauthors: "Emanuele Ventura, Hongmiao Yu",
    link: "",
    link_title: "",
    image:"pentadWheel" },
  ];

  const papers26 = [
    {title: "Positive Geometry of Yang-Mills Correlators", 
    abstract: "We develop a positive-geometric formulation of tree-level Yang--Mills correlators in de Sitter space at three and four points through their helicity-stripped representatives on the cosmological Grassmannian. In its Pfaffian (or spinor) embedding, physical singularities become natural geometric boundaries. At three points, the Yang--Mills correlator is the canonical form of the non-negative orthant in the Grassmannian. At four points, the Mandelstam divisors partition the Pfaffian-positive domain of the Grassmannian into four positive geometries. Requiring factorization into three-point forms, together with the correct flat-space limit, uniquely selects an oriented union of two of these regions, whose canonical form reproduces the reduced color-ordered Yang--Mills correlator. The full color-ordered correlator, on the other hand, arises from a uniquely fixed signed linear combination of homology cycles. Thus, the broader homological formulation of positive geometry is essential for capturing the complete four-point result. Our construction provides a concrete starting point for a geometric description of higher-point cosmological correlators.",
    coauthors: "Mattia Arundine, Veronica Calvo Cortez, Facundo Rost",
    link: "",
    link_title: "",
    image:"cosmo" },
  ];

  const papers25 = [
    {title: "Positive Genus Pairs from Amplituhedra", 
    abstract: "A main conjecture in the field of Positive Geometry states that amplituhedra, which are certain semi-algebraic sets in the Grassmannian, are positive geometries. It is motivated by examples showing that the canonical forms of certain amplituhedra compute scattering amplitudes in particle physics. Beyond a small number of special cases, this conjecture is still open. In recent work, Brown and Dupont introduced a new framework, based on mixed Hodge theory, connecting canonical forms and de Rham cohomology via genus zero pairs. We give short proofs that the amplituhedron gives rise to a genus zero pair in the cases when it is known to be a positive geometry. However, in the general case we show that amplituhedra inside the Grassmannian give rise to pairs of strictly positive genus. We provide an explicit example of a genus one pair arising from a positive geometry in projective space, showing that having genus zero is not a necessary condition to be a positive geometry. Finally, we show that this positive geometry still gives rise to a genus zero pair in a different ambient variety.",
    coauthors: "Dmitrii Pavlov, Rainer Sinn",
    link: "https://arxiv.org/abs/2601.11142",
    link_title: "arXiV",
    image:"3D_DelPezzo" },

    {title: "Connection Matrices in Macaulay2", 
    abstract: "Systems of homogeneous linear PDEs can be represented as left ideals in the Weyl algebra. Using Gröbner basis techniques, these systems can be systematically encoded by connection matrices. In fundamental particle physics and theoretical cosmology, when investigating scattering amplitudes and cosmological correlators, they turn up as systems of differential equations in matrix form. We explain the implementation of our package ConnectionMatrices in Macaulay2 and showcase a few examples from physics.",
    coauthors: "Paul Görlach, Anna-Laura Sattelberger, Mahrud Sayrafi, Hendrik Schroeder, Nicolas Weiss, Francesca Zaffalon",
    link: "https://arxiv.org/abs/2504.01362",
    link_title: "arXiV",
    image:"connectionMatrices" },
  
    {title: "Taking the Amplituhedron to the limit", 
    abstract: "The amplituhedron is a semialgebraic set given as the image of the non-negative Grassmannian under a linear map subject to a choice of additional parameters. We define the limit amplituhedron as the limit of amplituhedra by sending one of the parameters, namely the number of particles n, to infinity. We study this limit amplituhedron for m=2 and any k, relating to the number of negative helcity particles. We determine its algebraic boundary in terms of Chow hypersurfaces. This hypersurface in the Grassmannian is stratified by singularities in terms of higher order secants of the rational normal curve. In conclusion, we show that the limit amplituhedron is a positive geometry with a residual arrangement that is empty.",
    coauthors: "Rainer Sinn",
    link: "https://arxiv.org/abs/2501.08221",
    link_title: "arXiV",
    image:"limit_amplituhedron" },
  ];
  
  const papers24 = [
    {title: "Uniqueness of MHV Gravity Amplitudes", abstract: "We investigate MHV tree-level gravity amplitudes as defined on the spinor-helicity variety. Unlike their gluon counterparts, the gravity amplitudes do not have logarithmic singularities and do not admit Amplituhedron-like construction. Importantly, they are not determined just by their singularities, but rather their numerators have interesting zeroes. We make a conjecture about the uniqueness of the numerator and explore this feature from a more mathematical perspective. This leads us to a new approach for examining adjoints. We outline steps of our proposed proof and provide computational evidence for its validity in specific cases." , coauthors: "Umut Oktem, Shruti Paranjape, Jaroslav Trnka and Bailee Zacovic", link: "https://lematematiche.dmi.unict.it/index.php/lematematiche", link_title: "Le Mathematiche, special volume on Positive Geometry.", image:"Gravity_amplitude" },
  ];

  return (
    <div id="papers" className="flex flex-col gap-8 mb-4 lg:mx-16">
      <div className="flex flex-col gap-9 lg:mx-4">
              {/*ONGOING*/}
              <div className="mx-4 border-t border-gray-300 mt-8 relative">
              <span className="absolute left-0 top-2 text-gray-500 text-sm">ongoing</span>
              </div>
              {ongoing.map(({title, abstract, coauthors, link, link_title, image }, index) => {
                return <Paper key={index} title={title} abstract={abstract} coauthors={coauthors} link={link} link_title={link_title} image={image} />
              })}
      </div>

      <div className="flex flex-col gap-9 lg:mx-4">
         {/*2026*/}
         <div className="mx-4 border-t border-gray-300 mt-8 relative">
         <span className="absolute left-0 top-2 text-gray-500 text-sm">2026</span>
         </div>
        {papers26.map(({title, abstract, coauthors, link, link_title, image }, index) => {
          return <Paper key={index} title={title} abstract={abstract} coauthors={coauthors} link={link} link_title={link_title} image={image} />
        })}
      </div>

      <div className="flex flex-col gap-9 lg:mx-4">
         {/*2025*/}
         <div className="mx-4 border-t border-gray-300 mt-8 relative">
         <span className="absolute left-0 top-2 text-gray-500 text-sm">2025</span>
         </div>
        {papers25.map(({title, abstract, coauthors, link, link_title, image }, index) => {
          return <Paper key={index} title={title} abstract={abstract} coauthors={coauthors} link={link} link_title={link_title} image={image} />
        })}
      </div>

      <div className="flex flex-col gap-9 lg:mx-4">
         {/*2024*/}
         <div className="mx-4 border-t border-gray-300 mt-8 relative">
         <span className="absolute left-0 top-2 text-gray-500 text-sm">2024</span>
         </div>
        {papers24.map(({title, abstract, coauthors, link, link_title, image }, index) => {
          return <Paper key={index} title={title} abstract={abstract} coauthors={coauthors} link={link} link_title={link_title} image={image} />
        })}
      </div>
    </div>
  );
}

function Paper({title, abstract, coauthors, link, link_title, image }) {
  return(
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-start text-center lg:text-left px-4 lg:px-8 gap-12 transition-all duration-700 ease-in-out">
        {/* Left - Image */}
        <div className="flex justify-center w-1/2 lg:w-1/3">
          <img src={`/${image}.png`}alt="Project Image" className="rounded-xl  object-contain w-auto h-auto lg:h-auto mx-auto" />
        </div>
        {/* Right - Text */}
        <div className=" flex-shrink-0 w-full lg:w-2/3 text-center lg:text-left p-4">
          {/* Publication details */}
          <h2 className = "text-balance font-bold text-2xl mt-0 mb-0">
            {title}
          </h2>
          {coauthors && (
            <p className="text-gray-600 mt-0 text-sm">
              with {coauthors}
            </p>
          )}
          <Abstract
          text={abstract}
          />
          <Link href={link} target="_blank" rel="noopener noreferrer" className="text-balance font-semibold text-1xl mb-1 hover:underline">
            {link_title}
          </Link>
        </div>
      </div>
    </div>
  );
}
