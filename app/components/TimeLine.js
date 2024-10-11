'use client'
import 'animate.css';

export default function TimeLine() {

  const data = [
    { containerCSS: "timeline-container timeline-container-right", logoURL: "/RUB.png", logoCSS: "timeline-logo-right", title: "Ruhr University Bochum", date: "2018 - 2020", subtitle: "B.Sc. in Physics (3-year) - First Class", bullets: ["Advisor: Evgeny Epelbaum", "Thesis: Application of a subtractive renormalisation scheme in Nucleon-Nucleon scattering in Effective Field Theory"], arrow: "right-container-arrow" },
    { containerCSS: "timeline-container timeline-container-left", logoURL: "/RUB.png", logoCSS: "timeline-logo-left", title: "Ruhr University Bochum", date: "2020 - 2022", subtitle: "B.Sc in Mathematics (3-year) - First Class", bullets: ["Advisor: Christian Stump", "Thesis: On combinatorial models for the positive Grassmannian with a view towards Amplituhedra"], arrow: "left-container-arrow" },
    { containerCSS: "timeline-container timeline-container-right", logoURL: "/warwick.png", logoCSS: "timeline-logo-right", title: "Warwick University", date: "2022 - 2023", subtitle: "M.Sc. in Mathematics (1-year) - First Class", bullets: ["Advisor: Diane Maclagan", "Thesis: A computational approach for tropical solutions to enumerative problems"], arrow: "right-container-arrow" },
    { containerCSS: "timeline-container timeline-container-left", logoURL: "/Max-Planck.jpg", logoCSS: "timeline-logo-left", title: "Max-Planck-Institute", date: "2023 - Present", subtitle: "PhD in Mathematics", bullets: ["Advisor: Rainer Sinn"], arrow: "left-container-arrow" },
  ]

  return (
    <div id="timeline" className="snap-start relative max-w-6xl mx-6 lg:mx-16 after:absolute after:h-full after:w-[2px] after:bg-zinc-300 after:rounded-lg after:top-0 after:left-8 lg:after:left-2/4 after:-ml-[3px] -z-[1]">
      {data.map(({ containerCSS, logoURL, logoCSS, date, title, subtitle, bullets }) =>
        <div className={containerCSS}>
          <img src={logoURL} className={logoCSS} />
          <div className="p-5 sm:p-10 bg-white shadow-lg shadow-inherant relative rounded-2xl text-sm sm:text-lg flex flex-col gap-2">
            <p className="font-extralight text-base">{date}</p>
            <h1 className="font-bold text-2xl">{title}</h1>
            <ul className='list-disc list-inside text-lg'>
              <span>{subtitle}</span>
              {bullets.map(j => <li className='pl-5'>{j}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
