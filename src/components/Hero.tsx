"use client";

import Image from "next/image";
import type React from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SocialButtons } from "@/components/ui/socialButtons";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BriefcaseBusiness, ChevronRight, Download } from "lucide-react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

const Hero: React.FC = () => {
  const constraintsRef = useRef(null);

  // Button Group Component for Reusability
  const ButtonGroup = () => (
    <>
      <Button
        className="group text-xs font-OpenSans relative cursor-pointer px-4 py-2 mr-4 border bg-white rounded-full overflow-hidden text-black text-center"
        variant="outline"
        aria-label="Download Resume"
      >
        <span className="inline-flex items-center gap-2 translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300">
          {/* Icon for Work Button */}
          <BriefcaseBusiness /> View My Work
        </span>
        <div className="inline-flex items-center gap-2 text-white bg-[#121212] z-10 absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
          {/* Icon for Work Button */}
          <BriefcaseBusiness /> View My Work
        </div>
      </Button>

      <Button
        className="group text-xs font-OpenSans relative cursor-pointer px-4 py-2 border bg-white rounded-full overflow-hidden text-black text-center"
        variant="outline"
        aria-label="Download Resume"
      >
        <span className="inline-flex items-center gap-2 translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300">
          {/* Icon for Resume Download Button */}
          <Download /> Download Resume
        </span>
        <div className="inline-flex items-center gap-2 text-white bg-[#121212] z-10 absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
          {/* Icon for Resume Download Button */}
          <Download /> Download Resume
        </div>
      </Button>
    </>
  );

  // Animated Gradient component for Reusability
  const AnimatedGradientGroup = () => (
    <>
      <AnimatedGradientText className="font-OpenSans">
        <div className="bg-green-500 size-2.5 rounded-full animate-pulse"></div>{" "}
        <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent tracking-wide`
          )}
        >
          Available for Projects
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </>
  );

  // Image Component for Reusability
  const MemojiGroup = () => (
    <motion.div
      drag
      whileDrag={{ scale: 1.2 }}
      dragConstraints={constraintsRef}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: {
          type: "spring",
          bounce: 0.5,
          ease: "easeOut",
        },
      }}
      // className="w-32 h-32 rounded-full z-20 drop-shadow-[-10px_10px_15px_rgba(255,255,25)] dark:drop-shadow-[0_20px_20px_rgba(255,255,255,0.25)]"
    >
      <Image
        src="/memoji2.svg"
        alt="memoji"
        className="rounded-b-full pointer-events-none"
        width={120}
        height={120}
      />
    </motion.div>
  );

  return (
    <div
      ref={constraintsRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#F5F5F5] dark:bg-[#121212]"
    >
      {/* Main Content Container */}
      <main className=" mt-24 lg:mt-32">
        {/* Hero Section for Small Screens */}
        <div className="lg:hidden mx-4">
          <div className="flex flex-col items-start md:items-center space-y-4">
            {/* Availability Badge */}
            <AnimatedGradientGroup />
            {/* Profile Badge */}
            <MemojiGroup />
            {/* Animated Title */}
            <div className="flex gap-2">
              <TextAnimate
                className="text-3xl xs:text-4xl text-foreground font-medium"
                as="h1"
                animation="slideUp"
                by="word"
              >
                Frontend
              </TextAnimate>
              <TextAnimate
                className="text-3xl xs:text-4xl text-foreground font-medium"
                as="h1"
                animation="slideUp"
                by="word"
              >
                Developer
              </TextAnimate>
            </div>

            {/* Short Bio */}
            <p className="text-base text-left md:text-center text-muted-foreground max-w-md font-OpenSans font-normal leading-relaxed">
              I write{" "}
              <span className="font-medium italic text-highlightOne dark:text-darkHighlightOne">
                maintainable, clean
              </span>{" "}
              and{" "}
              <span className="font-medium italic text-highlightTwo dark:text-darkHighlightTwo">
                understandable code
              </span>{" "}
              to ensure development is enjoyable and efficient.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-row items-center">
              <ButtonGroup />
            </div>
          </div>
        </div>
        {/* Hero Section for Larger Screens */}
        <div className="hidden lg:block mx-4">
          {/* Availability Badge */}
          <AnimatedGradientGroup />
          {/* Header Section */}
          <div className="flex justify-evenly items-center gap-8">
            <div className="flex items-center">
              {/* Animated Title Part 1 */}
              <TextAnimate
                className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-foreground font-medium"
                as="h1"
                animation="slideUp"
                by="word"
              >
                Frontend
              </TextAnimate>
              {/* Memoji Image */}
              <MemojiGroup />
            </div>
            {/* Buttons */}
            <div>
              <ButtonGroup />
            </div>
          </div>
          {/* Description and Animated Title Part 2 */}
          <div className="flex justify-evenly items-center gap-8">
            <div>
              <p className="text-base text-muted-foreground text-left max-w-sm font-OpenSans font-normal leading-relaxed mt-4">
                I write{" "}
                <span className="font-medium italic text-[#0068d6] dark:text-[#52A8FF]">
                  maintainable, clean
                </span>{" "}
                and{" "}
                <span className="font-medium italic text-[#7820bc] dark:text-[#BF7AF0]">
                  understandable code
                </span>{" "}
                to ensure development is enjoyable and efficient.
              </p>
            </div>
            <div>
              {/* Animated Title Part 2 */}
              <TextAnimate
                className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-foreground font-medium"
                as="h1"
                animation="slideUp"
                by="word"
              >
                Developer
              </TextAnimate>
            </div>
          </div>
        </div>
        <SocialButtons />
      </main>
    </div>
  );
};

export default Hero;
