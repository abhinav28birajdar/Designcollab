"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Create",
      className: "text-white", // Added white text for Create
    },
    {
      text: "stunning",
      className: "text-white", // Added white text for stunning
    },
    {
      text: "designs",
      className: "text-white", // Added white text for designs
    },
    {
      text: "with",
      className: "text-white", // Added white text for with
    },
    {
      text: "Designcollab.",
      className: "text-indigo-600 dark:text-[#6810c1]",
    },
    {
      text: "", 
      className: "text-indigo-600 dark:text-[#6810c1]", 
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-100 dark:text-neutral-200 text-xs sm:text-base">
        The journey to creativity begins here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <button className="w-40 h-10 rounded-xl bg-black border-2 border-solid border-white text-white text-sm">
  Join now
</button>
      </div>
      <p className="text-neutral-100 dark:text-neutral-200 text-center mt-6 max-w-3xl text-xl sm:text-2xl">
        As a graphic designer, I turn ideas into visual stories. From logos to websites, I craft designs that inspire, connect, and bring brands to life.
      </p>
    </div>
  );
}