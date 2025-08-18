import Link from "next/link";
import { eventNames } from "process";

export default function UpcomingEvents() {

  const events = [
    {days: "03. - 05.", month: "Nov", year: "2025", location: "UVA, Amsterdam", link: "https://indico.mpp.mpg.de/event/11215/",  title: "Cosmology meets Non-Linear Algebra"},
    {days: "25. - 29.", month: "Aug", year: "2025", location: "ETH Zurich, Switzerland", link: "https://eth-its.ethz.ch/activities/CAG.html",  title: "Computations in Algebraic Geometry: Complex, Real, and Tropical"},
    //{days: "07. - 11.", month: "Jul", year: "2025", location: "Madison, Wisconsin", link: "https://www.siam.org/conferences-events/siam-conferences/ag25/",  title: "SIAM: Applied Algebraic Geometry"},
    //{days: "29. - 04.", month: "Jun - Jul", year: "2025", location: "Les Diablerets, Switzerland", link: "https://swissmaprs.ch/events/the-amplituhedron-structure-combinatorics-and-positive-geometry/",  title: "The Amplituhedron: Structure, Combinatorics, and Positive Geometry"},
    //{days: "23. - 06.", month: "Jun", year: "2025", location: "Leipzig, Germany", link: "https://www.mis.mpg.de/events/series/slmath-summer-school-new-perspectives-on-discriminants-and-their-applications", title: "New perspectives on discriminants and their applications"},
    //{days: "02.-04.", month: "Jun.", year: "2025", location: "Leipzig, Germany", link: "https://www.mis.mpg.de/de/events/series/the-11th-conference-of-the-fachgruppe-computeralgebra",  title: "The 11th Conference of the Fachgruppe Computeralgebra"},
    // {days: "17.-22.", month: "Nov.", year: "2024", location: "Princeton, New Jersey", link: "https://www.ias.edu/mathematical-physics/combinatorics-fundamental-physics-workshop",  title: "Combinatorics for fundamental physics"}
  ]

  return (
    <div id="events" className="flex flex-col gap-8 mb-4 lg:mx-16">
      <h1 className="text-balance font-extrabold text-4xl">
        Upcoming & Recent Events
      </h1>
      {events.map(({ days, year, month, link, title, location }, index) => {
        return <Event key={index} days={days} year={year} month={month} link={link} title={title} location={location}/>
      })}
    </div>
  );
}


function Event({ days, month, year, location, link, title }) {
  return (
    <div className="flex flex-col shadow-lg max-w-2xl">
      {/* sm:items-center vertically centers the two columns on larger screens */}
      <div className="flex flex-col sm:flex-row rounded-lg bg-black sm:items-center gap-6 p-5 sm:pl-5 sm:pr-9 py-5">
        {/* remove aspect-square / h-full; use a fixed width and self-center to vertically center */}
        <div className="rounded py-4 px-6 border-zinc-100 border-2 sm:border-none sm:bg-zinc-100 flex flex-col justify-center sm:gap-2 text-center sm:w-[150px] sm:self-center">
          <span className="text-zinc-100 sm:text-black font-semibold text-2xl">{days}</span>
          <span className="text-zinc-100 sm:text-black font-semibold text-2xl">{month} {year}</span>
        </div>

        <div className="text-white flex-1 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-1">
            <Link href={link} className="font-bold text-xl">{title}</Link>
            <span className="font-thin">{location}</span>
          </div>

          <div>
            <button className="flex flex-row items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
              <Link href={link} className="text-base">Visit website</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}