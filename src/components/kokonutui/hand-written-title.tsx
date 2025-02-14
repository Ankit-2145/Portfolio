"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

export default function HandWrittenTitle({ title }: HandWrittenTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const draw = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div ref={ref} className="relative w-fit md:max-w-4xl mx-auto">
      <div className="block md:hidden absolute inset-0">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full h-full"
        >
          <title>Fullstack</title>
          <motion.path
            d="M 580 140 
                         C 1200 -200, 3390 480, 400 580
                         C -2000 520, 0 -250, 800 100"
            fill="none"
            strokeWidth="16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="text-foreground opacity-90"
          />
        </motion.svg>
      </div>
      <div className="hidden md:block absolute inset-0">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full h-full"
        >
          <title>Fullstack</title>
          <motion.path
            d="M 650 90 
                           C 1200 -200, 3900 480, 400 580
                           C -2600 420, 0 -240, 800 100"
            fill="none"
            strokeWidth="16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="text-foreground opacity-90"
          />
        </motion.svg>
      </div>
      <div className="relative z-10">
        <motion.h1
          className="text-3xl xs:text-4xl lg:text-7xl text-foreground font-medium"
          animate={isInView}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
