"use client";

// C 1200 -200, 3390 480, 400 580
// C -2000 520, 0 -250, 800 100

import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BriefcaseBusiness, ChevronRight, Download } from "lucide-react";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import Image from "next/image";
import HandWrittenTitle from "./kokonutui/hand-written-title";

const Hero: React.FC = () => {
  // Button Group Component for Reusability
  const ButtonGroup = () => (
    <>
      <Button
        className="group mr-4 rounded-full text-xs font-OpenSans"
        variant="default"
        aria-label="View My Work"
      >
        {/* Icon for Work Button */}
        <BriefcaseBusiness className="group-hover:-translate-y-1 transition-all" />{" "}
        View My Work
      </Button>
      <Button
        className="group rounded-full text-xs font-OpenSans"
        variant="secondary"
        aria-label="Download Resume"
      >
        {/* Icon for Resume Download Button */}
        <Download className="group-hover:translate-y-1 transition-all" />{" "}
        Download Resume
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
    <div className="w-32 h-32 rounded-full drop-shadow-[-10px_10px_15px_rgba(255,255,25)] dark:drop-shadow-[0_20px_20px_rgba(255,255,255,0.25)]">
      <Image
        src="/memoji2.svg"
        alt="memoji"
        className="rounded-b-full border-b-2 border-white/40 pointer-events-none"
        width={120}
        height={120}
      />
    </div>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main Content Container */}
      <main className="relative max-w-6xl mx-auto h-full mt-24 lg:mt-32">
        {/* Hero Section for Small Screens */}
        <div className="lg:hidden mx-4">
          <div className="flex flex-col items-start space-y-4">
            {/* Availability Badge */}
            <AnimatedGradientGroup />
            {/* Profile Badge */}
            <MemojiGroup />
            {/* Animated Title */}
            <div className="flex gap-2">
              <HandWrittenTitle title="Fullstack" />
              <TextAnimate
                className="text-3xl xs:text-4xl sm:text-5xl text-foreground font-medium"
                as="h1"
                animation="slideRight"
                by="character"
              >
                Engineer
              </TextAnimate>
            </div>

            {/* Short Bio */}
            <p className="text-base text-left text-muted-foreground max-w-md font-OpenSans font-normal leading-relaxed">
              I write{" "}
              <strong className="italic text-[#0068d6] dark:text-[#52A8FF]">
                maintainable, clean
              </strong>{" "}
              and{" "}
              <strong className="italic text-[#7820bc] dark:text-[#BF7AF0]">
                understandable code
              </strong>{" "}
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
          <div className="flex justify-evenly items-center">
            <div className="flex items-center">
              <HandWrittenTitle title="Fullstack" />
              {/* Memoji Image */}
              <MemojiGroup />
            </div>
            {/* Buttons */}
            <div>
              <ButtonGroup />
            </div>
          </div>
          {/* Description and Animated Title Part 2 */}
          <div className="flex justify-evenly items-center">
            <div>
              <p className="text-base text-muted-foreground text-justify max-w-sm font-OpenSans font-normal leading-relaxed mt-4">
                I write{" "}
                <strong className="italic text-[#0068d6] dark:text-[#52A8FF]">
                  maintainable, clean
                </strong>{" "}
                and{" "}
                <strong className="italic text-[#7820bc] dark:text-[#BF7AF0]">
                  understandable code
                </strong>{" "}
                to ensure development is enjoyable and efficient.
              </p>
            </div>
            <div>
              {/* Animated Title Part 2 */}
              <TextAnimate
                className="text-3xl sm:text-4xl md:text-7xl text-foreground font-medium"
                as="h1"
                animation="slideRight"
                by="character"
              >
                Engineer
              </TextAnimate>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
