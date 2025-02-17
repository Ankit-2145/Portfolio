"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-6xl mx-4 md:mx-auto text-left">
      <div className="flex justify-center gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-medium font-OpenSans">
            About Me{" "}
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 0 }}
          whileInView={{ opacity: 1, scale: 2, y: -10 }}
          transition={{
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
            width={36}
            height={36}
            className="w-[30px] h-[30px] md:w-9 md:h-9 ml-2 rounded-full"
          />
        </motion.div>
      </div>
      <div className="my-8">
        <div className="space-y-4 text-justify max-w-5xl mx-auto">
          <p className="text-base text-muted-foreground font-OpenSans font-medium leading-relaxed">
            Hi, I&apos;m{" "}
            <strong className="text-lime-700 dark:text-lime-400">
              Ankit Sharma
            </strong>
            , a{" "}
            <strong className="text-highlightTwo dark:text-darkHighlightTwo">
              Frontend Developer
            </strong>{" "}
            and{" "}
            <strong className="text-indigo-700 dark:text-indigo-400">
              UI/UX Enthusiast
            </strong>{" "}
            with over a year of experience crafting engaging and
            high-performance web applications.
          </p>

          <p className="text-base text-muted-foreground font-OpenSans font-medium leading-relaxed">
            I specialize in building{" "}
            <strong className="text-highlightOne dark:text-darkHighlightOne">
              sleek,
            </strong>{" "}
            <strong className="text-amber-700 dark:text-amber-300">
              scalable,
            </strong>{" "}
            and{" "}
            <strong className="text-emerald-700 dark:text-emerald-400">
              user-friendly interfaces
            </strong>{" "}
            using modern technologies like React, Next.js, Tailwind CSS, and
            Node.js.
          </p>

          <p className="text-base text-muted-foreground font-OpenSans font-medium leading-relaxed">
            I have worked on multiple freelance projects, including{" "}
            <strong className="text-violet-700 dark:text-violet-400">
              full-stack applications,
            </strong>{" "}
            <strong className="text-rose-700 dark:text-rose-400">
              dynamic websites,
            </strong>{" "}
            <strong className="text-orange-700 dark:text-orange-400">
              LMS,
            </strong>{" "}
            <strong className="text-sky-700 dark:text-sky-400">CMS,</strong> and{" "}
            <strong className="text-pink-700 dark:text-pink-400">
              research-based portals.
            </strong>{" "}
            My goal is to create seamless digital experiences that are both
            visually appealing and functionally robust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
