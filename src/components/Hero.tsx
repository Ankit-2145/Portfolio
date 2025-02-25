"use client";

import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { SocialButtons } from "@/components/ui/socialButtons";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BriefcaseBusiness, ChevronRight, Download } from "lucide-react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

const Hero: React.FC = () => {
  const constraintsRef = useRef(null);
  const springOptions = { bounce: 0.1 };

  // Button Group Component for Reusability
  const ButtonGroup = () => (
    <>
      <Magnetic
        intensity={0.2}
        springOptions={springOptions}
        actionArea="global"
        range={200}
      >
        <Button
          className="group text-xs font-OpenSans relative cursor-pointer px-4 py-2 mr-4 border bg-white rounded-full overflow-hidden text-black text-center"
          variant="outline"
          aria-label="View My Work"
        >
          <Magnetic
            intensity={0.1}
            springOptions={springOptions}
            actionArea="global"
            range={200}
          >
            <span className="inline-flex items-center gap-2 translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300">
              {/* Icon for Work Button */}
              <BriefcaseBusiness /> View My Work
            </span>
          </Magnetic>
          <div className="inline-flex items-center gap-2 text-white bg-black z-10 absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
            {/* Icon for Work Button */}
            <BriefcaseBusiness /> View My Work
          </div>
        </Button>
      </Magnetic>
      <Magnetic>
        <Button
          className="group text-xs font-OpenSans relative cursor-pointer px-4 py-2 border bg-white rounded-full overflow-hidden text-black text-center"
          variant="outline"
          aria-label="Download Resume"
        >
          <span className="inline-flex items-center gap-2 translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300">
            {/* Icon for Resume Download Button */}
            <Download /> Download Resume
          </span>
          <div className="inline-flex items-center gap-2 text-white bg-black z-10 absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
            {/* Icon for Resume Download Button */}
            <Download /> Download Resume
          </div>
        </Button>
      </Magnetic>
    </>
  );

  // Animated Gradient component for Reusability
  const AnimatedGradientGroup = () => (
    <>
      <motion.div
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
      >
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
      </motion.div>
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
      className="w-32 h-32 rounded-full z-20 drop-shadow-[-10px_10px_15px_rgba(255,255,25)] dark:drop-shadow-[0_20px_20px_rgba(255,255,255,0.25)]"
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
      className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-black"
    >
      {/* Main Content Container */}
      <main className=" py-24 lg:py-32">
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
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
                duration: 0.9,
              }}
            >
              {/* Short Bio */}
              <p className="text-base text-left md:text-center text-secondary-foreground dark:text-muted-foreground max-w-md font-OpenSans font-normal leading-relaxed">
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
            </motion.div>
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-row items-center"
            >
              <ButtonGroup />
            </motion.div>
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
                className="text-3xl sm:text-4xl md:text-7xl text-foreground font-medium"
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
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex"
            >
              <ButtonGroup />
            </motion.div>
          </div>
          {/* Description and Animated Title Part 2 */}
          <div className="flex justify-evenly items-center gap-8">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
                duration: 0.9,
              }}
            >
              <p className="text-base text-secondary-foreground dark:text-muted-foreground text-left max-w-sm font-OpenSans font-normal leading-relaxed mt-4">
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
            </motion.div>
            <div>
              {/* Animated Title Part 2 */}
              <TextAnimate
                className="text-3xl sm:text-4xl md:text-7xl text-foreground font-medium"
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
