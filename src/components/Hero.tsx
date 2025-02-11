"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BriefcaseBusiness, Download } from "lucide-react";

const Hero: React.FC = () => {
  const ButtonGroup = () => (
    <>
      <Button
        className="group mr-4 rounded-full text-xs font-OpenSans"
        variant="default"
        aria-label="View My Work"
      >
        <BriefcaseBusiness className="group-hover:-translate-y-1 transition-all" />{" "}
        View My Work
      </Button>
      <Button
        className="group rounded-full text-xs font-OpenSans"
        variant="secondary"
        aria-label="Download Resume"
      >
        <Download className="group-hover:translate-y-1 transition-all" />{" "}
        Download Resume
      </Button>
    </>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Content Container */}
      <main className="relative max-w-5xl mx-auto h-full mt-24 lg:mt-32 px-4 lg:px-0">
        {/* Hero Section for smaller screens */}
        <div className="lg:hidden">
          <div className="flex flex-col items-start space-y-4">
            <div className="text-left">
              <TextAnimate
                className="text-4xl sm:text-5xl text-foreground font-semibold"
                as="h1"
                animation="slideRight"
                by="character"
              >
                Frontend Developer
              </TextAnimate>
            </div>

            <p className="text-base text-left text-muted-foreground max-w-md font-OpenSans font-normal leading-relaxed">
              My goal is to{" "}
              <strong className="italic text-foreground">
                write maintainable, clean
              </strong>{" "}
              and{" "}
              <strong className="italic text-foreground">
                understandable code
              </strong>{" "}
              to ensure development is enjoyable and efficient.
            </p>

            <div className="flex flex-row items-center">
              <ButtonGroup />
            </div>
          </div>
        </div>

        {/* Hero Section for larger screens */}
        <div className="hidden lg:block">
          <div className="flex justify-between items-center mb-4">
            <div>
              <TextAnimate
                className="text-3xl sm:text-4xl md:text-8xl text-foreground font-semibold"
                as="h1"
                animation="slideLeft"
                by="character"
              >
                Frontend
              </TextAnimate>
            </div>
            <div>
              <ButtonGroup />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-base text-muted-foreground text-justify max-w-sm font-OpenSans font-normal leading-relaxed">
                My goal is to{" "}
                <strong className="italic text-foreground">
                  write maintainable, clean
                </strong>{" "}
                and{" "}
                <strong className="italic text-foreground">
                  understandable code
                </strong>{" "}
                to ensure development is enjoyable and efficient.
              </p>
            </div>
            <div>
              <TextAnimate
                className="text-3xl sm:text-4xl md:text-8xl text-foreground font-semibold"
                as="h1"
                animation="slideRight"
                by="character"
              >
                Developer
              </TextAnimate>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
