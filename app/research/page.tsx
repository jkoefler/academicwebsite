'use client';
import Publications from "@/app/components/Publications.js";

export default function Research() {
    return (
        <div className="flex flex-col gap-14 pb-20 lg:mx-16">
            <h1 className="text-balance font-extrabold text-4xl ml-[23px]">
                Research
            </h1>
            
            <div className="relative">
            <Publications/>
            </div>
        </div>
    );
}
