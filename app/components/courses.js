// Local helper component
function TeachingItem({ title, date, description }) {
    return (
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-gray-700 text-balance mt-1">{description}</p>
      </div>
    );
  }
  
// Teaching tab
export default function Teaching() {
  return (
    <div className="flex flex-col gap-8 mx-8">
      {/* Courses section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-balance font-extrabold text-4xl mb-4">
          Teaching
        </h1>

        <TeachingItem
          title="Combinatorial Commutative Algebra"
          date="Spring 2024; University of Leipzig"
          description="We are following the book 'Monomial Ideals' by Herzog and Hibi."
        />

        <TeachingItem
          title="Mathematical Methods in Physics"
          date="2020-2022; Bochum University"
          description="Regular course as part of the undergradute degree in Physics."
        />

        <TeachingItem
          title="Lab supervisor for Physics"
          date="2020-2022; Bochum University"
          description="Regular course as part of the undergradute degree in Biology, Medicine, Chemistry, and Engineering."
        />
      </div>

      {/* Reading Groups section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-balance font-extrabold text-4xl mb-4">
          Reading Groups
        </h1>

        <TeachingItem
          title="3264 and all that: A second course in Algebraic Geometry"
          date="Fall 2025"
          description="We are covering the first few chapters of the book '3264 and all that' by Eisenbud and Harris."
        />

        <TeachingItem
          title="Introduction to Cluster Algebras"
          date="Summer 2025"
          description="We are covering fundamentals of cluster algebras and their connections to tropical geometry."
        />
      </div>
    </div>
  );
}

  