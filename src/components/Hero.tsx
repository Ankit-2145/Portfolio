"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { DotPattern } from "@/components/magicui/dot-pattern";

/**
 * Hero Component
 *
 * This component represents the hero section of the portfolio website.
 * It displays a headline, a brief introduction, and call-to-action buttons.
 * The component uses custom UI components for animations and styling.
 *
 * @component
 */

const Hero: React.FC = () => {
  return (
    <main className="flex flex-col items-center text-center overflow-hidden min-h-screen space-y-4 pt-32 mx-10">
      {/* Headline Section */}
      <BoxReveal boxColor="#d7e3fc" duration={0.5}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Crafting Scalable & <br /> Interactive Web Experiences
          <span className="text-[#d7e3fc]">.</span>
        </h1>
      </BoxReveal>

      {/* Introduction Section */}
      <BoxReveal boxColor="#d7e3fc" duration={0.5}>
        <div className="mt-6 max-w-3xl">
          <p className="text-base">
            Hi, I&apos;m {/* Name with custom gradient styling */}
            <span className="font-semibold text-transparent text-black bg-clip-text bg-custom-gradient">
              Ankit Sharma{" "}
            </span>
            a Frontend Developer specializing in{" "}
            {/* Skills with custom gradient styling */}
            <span className="font-semibold text-transparent text-black bg-clip-text bg-custom-gradient">
              {" "}
              Next.js
            </span>
            ,
            <span className="font-semibold text-transparent text-black bg-clip-text bg-custom-gradient">
              {" "}
              React
            </span>
            , and
            <span className="font-semibold text-transparent text-black bg-clip-text bg-custom-gradient">
              {" "}
              Tailwind CSS.
            </span>
          </p>
        </div>
      </BoxReveal>

      {/* Call-to-Action Buttons */}
      <BoxReveal boxColor="#d7e3fc" duration={0.5}>
        <div className="mt-6">
          <Button className="mr-4" variant="default">
            📂 View My Work
          </Button>
          <Button variant="secondary">📜 Download Resume</Button>
        </div>
      </BoxReveal>

      {/* Background Animation */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </main>
  );
};

export default Hero;
