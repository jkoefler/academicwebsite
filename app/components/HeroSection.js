'use client'
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { PrimaryButton } from "./PrimaryButton";


export default function HeroSection() {

    const heading = "Ph.D. candidate at Max-Planck-Institute for Mathematics in the Sciences"
    const text = "Since October 2023 I am a PhD candidate under the supervision of Rainer Sinn at the Max-Planck-Institute of Mathematics int the Sciences.";

    return (
        <div className="snap-start flex flex-col items-left lg:mx-16 gap-6 sm:gap-10 lg:gap-12 transform transition-all duration-700 ease-in-out">
            <h1 className="text-balance font-black text-4xl text- sm:text-5xl lg:text-6xl mr-8 sm:mr-14 lg:mr-32 select-none"> {heading} </h1>
            <p className="text-balance text-zinc-600 tracking-wider sm:tracking-wide sm:text-lg mr-28 sm:mr-64 lg:mr-96 select-none"> {text} </p>
            <div className="flex flex-row space-x-10">
                <PrimaryButton href={"/research"} text={"Research"} />
                <button className="secondary-button flex flex-row items-center justify-center gap-1" >
                    <Link href="/#timeline"> Learn More </Link>
                    <ChevronDownIcon className="size-5" />
                </button>
            </div>
        </div>
    );

}