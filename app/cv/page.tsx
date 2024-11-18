import TimeLine from "@/app/components/TimeLine.js";
export default function CV() {
    return (
        <div className="flex flex-col gap-14 pb-20 lg:mx-16">
            <h1 className="text-balance font-extrabold text-4xl ml-[23px]">
                Curriculum vitae
            </h1>
            <TimeLine />
            <a href="/AcademicCV.pdf" target="_blank" rel="noopener noreferrer" className="self-center p-4 rounded-lg hover:bg-zinc-200 hover:text-black bg-black text-lg font-semibold leading-7 text-white">
                 Open CV 
            </a>
        </div>
    );
}