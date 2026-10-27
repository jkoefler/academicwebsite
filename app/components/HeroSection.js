'use client'
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {

    const heading = "Ph.D. candidate"
    const text = "Hey, I am Joris Koefler. Starting September 2026, I will be a research fellow at the School of Natural Sciences studying with Nima Arkani-Hamed. I did my PhD under the supervision of Rainer Sinn in Bernd Sturmfels' nonlinear algebra group at the MPI MiS in Leipzig. Before that, I studied with Diane Maclagan at the University of Warwick and Christian Stump at Ruhr University Bochum.";

    const handleClick = (e) => {
        const target = e.target;
        if (target.className === 'primary-button') {
            const element = document.getElementById('about');
            element?.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            const element = document.getElementById('events');
            element?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-[calc(100svh-6.3rem)] flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-4 py-8 lg:px-8 lg:py-0 gap-8 lg:gap-12 transition-all duration-700 ease-in-out">
            
            {/* Left - Profile Picture */}
            <div className="h-56 w-56 sm:h-72 sm:w-72 lg:h-[70vh] lg:w-[50vh] flex shrink-0 justify-center">
                <img 
                    src="/headshot_small.jpg" 
                    alt="Joris Koefler" 
                    className="h-full w-full object-cover rounded-full shadow-lg" 
                />
            </div>

            {/* Right - Text Content Block */}
            <div className="flex flex-col items-center lg:items-start gap-6 max-w-lg">
                
                <h1 className="font-black text-4xl lg:text-5xl select-none">
                    {heading}
                </h1>

                <p className="text-balance text-zinc-600 tracking-wider text-lg select-none">
                    {text}
                </p>

                {/* Email */}
                <p className="text-zinc-600 tracking-wider text-lg">
                    Email:{" "}
                    <a
                        href="mailto:koefler@mis.mpg.de"
                        className="underline hover:text-black transition"
                    >
                        koefler@mis.mpg.de
                    </a>
                </p>

                <div className="flex flex-row space-x-6">
                    <button onClick={handleClick} className="primary-button">
                        Research
                    </button>

                    <div className="py-2 px-3 rounded-lg hover:bg-black hover:text-white text-base font-semibold leading-7 text-gray-900 flex items-center gap-1">
                        <button onClick={handleClick}>Meet Me</button>
                        <ChevronDownIcon className="size-5" />
                    </div>
                </div>

            </div>

        </div>
    );
}
