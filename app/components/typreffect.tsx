"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Create",
    },
    {
      text: "stunning",
    },
    {
      text: "designs",
    },
    {
      text: "with",
    },
    {
      text: "Agraphicart.",
      className: "text-green-500 dark:text-[#6810c1]",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        The journey to creativity begins here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
      </div>
      <p className="text-neutral-600 dark:text-neutral-200 text-center mt-6 max-w-3xl text-xl sm:text-2xl">
      As a graphic designer, I turn ideas into visual stories. From logos to websites, I craft designs that inspire, connect, and bring brands to life.
  </p>
    </div>
  );
}

