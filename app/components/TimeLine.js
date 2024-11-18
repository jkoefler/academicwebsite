'use client'
import 'animate.css';

export default function TimeLine() {

  const data = [
    { containerCSS: "timeline-container timeline-container-left", logoURL: "/Max-Planck.jpg", title: "Max-Planck-Institute", date: "2023 - Present", subtitle: "PhD in Mathematics", bullets: ["Advisor: Rainer Sinn"]},
    { containerCSS: "timeline-container timeline-container-right", logoURL: "/warwick.png", title: "Warwick University", date: "2022 - 2023", subtitle: "M.Sc. in Mathematics (1-year) - First Class", bullets: ["Advisor: Diane Maclagan", "Thesis: A computational approach for tropical solutions to enumerative problems"]},
    { containerCSS: "timeline-container timeline-container-left", logoURL: "/RUB.png", title: "Ruhr University Bochum", date: "2020 - 2022", subtitle: "B.Sc in Mathematics (3-year) - First Class", bullets: ["Advisor: Christian Stump", "Thesis: On combinatorial models for the positive Grassmannian with a view towards Amplituhedra"]},
    { containerCSS: "timeline-container timeline-container-right", logoURL: "/RUB.png", title: "Ruhr University Bochum", date: "2018 - 2020", subtitle: "B.Sc. in Physics (3-year) - First Class", bullets: ["Advisor: Evgeny Epelbaum", "Thesis: Application of a subtractive renormalisation scheme in Nucleon-Nucleon scattering in Effective Field Theory"]},
    
  ]

  return (
    <div id="timeline" className="relative max-w-6xl mx-8 lg:mx-16 after:absolute after:h-full after:w-[3px] after:bg-black after:rounded-lg after:top-0">
      {data.map(({ logoURL, date, title, subtitle, bullets }) =>
        <div className="pl-10 lg:pl-20 py-6 relative w-full">
          <img src={logoURL} className="shadow-lg absolute w-12 rounded-full -left-[23px] top-[3.5rem] z-10" />
          <div className="p-5 sm:p-10 bg-black text-white  shadow-lg shadow-inherant relative rounded-lg text-sm sm:text-lg flex flex-col gap-1 lg:gap-2">
            <p className="font-extralight text-xs lg:text-base">{date}</p>
            <h1 className="font-bold text-2xl lg:text-2xl">{title}</h1>
            <ul className='list-disc list-inside text-sm lg:text-lg'>
              <span className='text-base lg:text-lg'>{subtitle}</span>
              {bullets.map(j => <li className='pl-5'>{j}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
