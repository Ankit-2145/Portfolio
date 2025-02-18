"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { TextReveal } from "@/components/magicui/text-reveal";

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-4xl mx-4 md:mx-auto">
      <div className="flex justify-center gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-medium font-OpenSans">
            About Me{" "}
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0, y: -10 }}
          whileInView={{ opacity: 1, scale: 1.2, y: 0 }}
          transition={{
            delay: 1,
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
            className="w-[30px] h-[30px] md:w-9 md:h-9"
          />
        </motion.div>
      </div>
      <div className="my-8">
        <div className="z-10 flex min-h-64 items-center justify-center border bg-white dark:bg-black">
          <TextReveal
            text="
Hi, I'm Ankit Sharma, a Frontend Developer and UI/UX Enthusiast with over a year of experience crafting engaging and high-performance web applications. I specialize in building sleek, scalable, and user-friendly interfaces using modern technologies like React, Next.js, Tailwind CSS, and Node.js. I have worked on multiple freelance projects, including full-stack applications, dynamic websites, LMS, CMS, and research-based portals. My goal is to create seamless digital experiences that are both visually appealing and functionally robust."
          />
          {/* <p className="text-base text-muted-foreground font-OpenSans font-medium leading-loose">
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
            high-performance web applications. I specialize in building{" "}
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
            Node.js. I have worked on multiple freelance projects, including{" "}
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
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default About;

// "use client";

// import { TextReveal } from "@/components/magicui/text-reveal";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function Moto() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"], // Animation starts when the section enters the viewport
//   });

//   // Control speed (similar to `data-speed`)
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]); // Adjust speed effect

//   return (
//     <motion.div
//       ref={ref}
//       style={{ y }} // Apply smooth motion
//       className="z-10 flex min-h-64 items-center justify-center border bg-white dark:bg-black"
//     >
//       <TextReveal text="Design. Code. Launch." />
//     </motion.div>
//   );
// }

// Beyond design. Beyond development. Beyond limits.
