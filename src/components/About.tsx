"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white dark:bg-[#121212] font-OpenSans border-t-2 py-24 lg:py-32"
    >
      <div className="max-w-6xl xl:mx-auto flex flex-col lg:flex-row justify-between items-start gap-4 mx-4">
        <div>
          <h2 className="text-xl font-medium leading-relaxed">
            📁. . . /About me . . .
          </h2>
        </div>
        <div className="max-w-2xl">
          <p className="text-base text-secondary-foreground dark:text-muted-foreground text-left font-normal leading-relaxed mt-4 md:mt-0">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center mt-16 lg:mt-24 max-w-6xl mx-4 xl:mx-auto gap-8 lg:gap-0">
        <div className="order-2 lg:order-1 font-medium">
          <div className="border border-secondary-foreground dark:border-border rounded-3xl p-4 text-secondary-foreground dark:text-muted-foreground mt-4">
            <h3 className="text-xl">Front-end</h3>
            <p className="text-sm mt-4 font-FiraCode font-normal">
              HTML / JavaScript / TypeScript / React / Nextjs / Redux Toolkit
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="w-1/2 border border-secondary-foreground dark:border-border rounded-3xl p-4 text-secondary-foreground dark:text-muted-foreground">
              <h3 className="text-xl">Styles</h3>
              <p className="text-sm mt-4 font-FiraCode font-normal">
                Tailwind CSS / SCSS / Material-UI / ShadcnUI
              </p>
            </div>
            <div className="w-fit mx-auto">
              <Link
                href="https://github.com/Ankit-2145"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex">
                  <FaGithub className="h-9 w-9 border rounded-full p-2" />
                  <ArrowDown className="h-9 w-9 border rounded-full bg-[#121212] dark:bg-[#F5F5F5] text-[#F5F5F5] dark:text-[#121212] -rotate-[120deg] -ml-2 p-2" />
                </span>
              </Link>
            </div>
          </div>
          <div className="border border-secondary-foreground dark:border-border rounded-3xl p-4 text-secondary-foreground dark:text-muted-foreground mt-4">
            <h3 className="text-xl">Back-end</h3>
            <p className="text-sm mt-4 font-FiraCode font-normal">
              Node.js / Express / MongoDB / Firebase / RESTful APIs
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-full">
              <p className="text-base text-secondary-foreground dark:text-muted-foreground text-left font-normal leading-relaxed">
                Some of my{" "}
                <span className="font-medium italic text-blue-700 dark:text-blue-400">
                  favourite technologies,{" "}
                </span>
                <span className="font-medium italic text-pink-700 dark:text-pink-400">
                  topics,{" "}
                </span>
                or{" "}
                <span className="font-medium italic text-red-700 dark:text-red-400">
                  tools
                </span>{" "}
                that I worked with
              </p>
            </div>
            <div className="w-full border border-secondary-foreground dark:border-border rounded-3xl p-4 text-secondary-foreground dark:text-muted-foreground mt-4">
              <h3 className="text-xl">DevOps</h3>
              <p className="text-sm mt-4 font-FiraCode font-normal">
                Git / GitHub / Netlify / Vercel
              </p>
            </div>
          </div>
        </div>
        <motion.div
          className="order-1 lg:order-2"
          layoutId="memoji"
          initial={{ opacity: 0, scale: 0, y: -10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            scale: {
              type: "spring",
              bounce: 0.5,
              ease: "easeOut",
            },
          }}
        >
          <Image
            src="/memoji_about.svg"
            alt="About me memoji"
            width={300}
            height={300}
            className="w-40 h-40 lg:w-80 lg:h-80 mx-auto rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
