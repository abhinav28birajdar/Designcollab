"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/untils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const quarter = Math.ceil(images.length / 4);
  const firstPart = images.slice(0, quarter);
  const secondPart = images.slice(quarter, 2 * quarter);
  const thirdPart = images.slice(2 * quarter, 3 * quarter);
  const fourthPart = images.slice(3 * quarter);

  return (
    <div
      className={cn("min-h-screen w-full overflow-hidden py-20", className)}
      ref={containerRef}
    >
      {/* Centered Collection Title */}
      <h1 className="text-6xl font-extrabold text-center text-[#6810c1] mb-16">
        Collection 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-[90rem] mx-auto px-6">
        {/* First Column */}
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={`grid-1-${idx}`}
              className="overflow-hidden rounded-2xl"
            >
              <Image
                src={el}
                className="h-[30rem] w-full object-cover rounded-2xl"
                height={600}
                width={500}
                alt={`Image ${idx + 1}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Second Column */}
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={`grid-2-${idx}`}
              className="overflow-hidden rounded-2xl"
            >
              <Image
                src={el}
                className="h-[30rem] w-full object-cover rounded-2xl"
                height={600}
                width={500}
                alt={`Image ${idx + 1}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Third Column */}
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={`grid-3-${idx}`}
              className="overflow-hidden rounded-2xl"
            >
              <Image
                src={el}
                className="h-[30rem] w-full object-cover rounded-2xl"
                height={600}
                width={500}
                alt={`Image ${idx + 1}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Fourth Column */}
        <div className="grid gap-10">
          {fourthPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFourth }}
              key={`grid-4-${idx}`}
              className="overflow-hidden rounded-2xl"
            >
              <Image
                src={el}
                className="h-[30rem] w-full object-cover rounded-2xl"
                height={600}
                width={500}
                alt={`Image ${idx + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
