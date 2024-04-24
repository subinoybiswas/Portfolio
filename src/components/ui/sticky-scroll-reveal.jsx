"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgba(31, 41, 55, 0.8)", // Slate 900 with 0.8 opacity
    "rgba(0, 0, 0, 0.8)", // Black with 0.8 opacity
    "rgba(31, 41, 55, 0.8)", // Neutral 900 with 0.8 opacity
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, #06B6D4, #10B981)", // Cyan 500, Emerald 500
    "linear-gradient(to bottom right, #EC4899, #6366F1)", // Pink 500, Indigo 500
    "linear-gradient(to bottom right, #F97316, #F59E0B)", // Orange 500, Yellow 500
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        backdropFilter: "blur(5px)",
      }}
      className="h-[90%] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl ">
          <h1 className="text-4xl">EXPERIENCES</h1>
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        className={cn(
          "hidden lg:grid h-[320px] w-[480px] rounded-md bg-white sticky top-20",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
