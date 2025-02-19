"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#F5F5F5] dark:bg-[#121212] font-OpenSans border-t-2 pt-24 lg:pt-32"
    >
      <div className="flex flex-col md:flex-row justify-evenly items-start gap-4 mx-4 lg:mx-0">
        <div>
          <h2 className="text-lg font-normal leading-relaxed">
            📂... /About me ...
          </h2>
        </div>
        <div className="max-w-xl">
          <p className="text-base text-muted-foreground text-left font-normal leading-relaxed mt-4 md:mt-0">
            Hello, I&apos;m{" "}
            <span className="font-medium italic text-lime-700 dark:text-lime-400">
              Ankit Sharma
            </span>
            , a{" "}
            <span className="font-medium italic text-highlightTwo dark:text-darkHighlightTwo">
              Frontend Developer
            </span>{" "}
            and{" "}
            <span className="font-medium italic text-indigo-700 dark:text-indigo-400">
              UI/UX Enthusiast
            </span>{" "}
            with over a year of experience. I specialize in crafting{" "}
            <span className="font-medium italic text-highlightOne dark:text-darkHighlightOne">
              sleek,
            </span>{" "}
            <span className="font-medium italic text-amber-700 dark:text-amber-300">
              scalable,
            </span>{" "}
            and{" "}
            <span className="font-medium italic text-emerald-700 dark:text-emerald-400">
              user-friendly interfaces
            </span>{" "}
            using React, Next.js, Tailwind CSS, and Node.js.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
