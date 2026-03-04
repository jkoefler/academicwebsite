'use client';
import Courses from "@/app/components/courses.js";

export default function Teaching() {
    return (
        <div className="flex flex-col gap-14 pb-20 lg:mx-16 relative">
            <h1 className="text-balance font-extrabold text-4xl ml-[23px]">
            Teaching
            </h1>
            <div className="flex items-center justify-center">
            <Courses/>
        </div>
    </div>
);
}