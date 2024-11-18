'use client';
import HeroSection from "@/app/components/HeroSection.js";
import ResearchInterest from "@/app/components/ResearchInterest";
import UpcomingEvents from "./components/UpcomingEvents";

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection/>
      <div id="about" className="flex flex-col gap-20 px-7 py-12">
        <ResearchInterest />
        <UpcomingEvents />
      </div>
    </div>
  );
}

