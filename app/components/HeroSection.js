'use client'
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {

    const heading = "Ph.D. candidate at Max-Planck-Institute"
    const text = "Since October 2023, I have been pursuing my PhD under the supervision of Rainer Sinn at the Max Planck Institute for Mathematics in the Sciences.";

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
        <div className="h-[calc(100vh-6.3rem)] flex text-center flex-col justify-center items-center px-[0.7rem] lg:items-start lg:text-left lg:mx-16 gap-12 transform transition-all duration-700 ease-in-out">
            <h1 className="font-black text-5xl lg:text-6xl lg:mr-32 select-none"> {heading} </h1>
            <p className="text-balance text-zinc-600 tracking-wider sm:tracking-wide text-lg lg:mr-96 select-none"> {text} </p>
            <div className="flex flex-row space-x-6 lg:space-x-10">
                <button onClick={(e) => handleClick(e)} className="primary-button"> Research </button>
                <div className="py-2 px-3 rounded-lg hover:bg-black hover:text-white text-base font-semibold leading-7 text-gray-900 flex flex-row items-center justify-center gap-1" >
                    <button onClick={(e) => handleClick(e)}> Meet Me </button>
                    <ChevronDownIcon className="size-5" />
                </div>
            </div>
        </div>
    );

}