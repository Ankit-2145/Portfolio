"use client";

import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";

const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center overflow-hidden space-y-4 pt-24 mx-10">
      <BoxReveal boxColor={"#d7e3fc"} duration={0.5}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Crafting Scalable & <br /> Interactive Web Experiences
          <span className="text-[#d7e3fc]">.</span>
        </h1>
      </BoxReveal>

      <BoxReveal boxColor={"#d7e3fc"} duration={0.5}>
        <div className="mt-6 max-w-5xl">
          <p className="text-base">
            Hi, I&apos;m{" "}
            <span className="font-semibold text-transparent text-black bg-clip-text bg-custom-gradient">
              Ankit Sharma
            </span>
            , a passionate Frontend Developer specializing in{" "}
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
              Tailwind CSS
            </span>
            . I build high-performance, dynamic web applications with seamless
            user experiences.
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#d7e3fc"} duration={0.5}>
        <div className="mt-6">
          <Button className="mr-4" variant="default">
            📂 View My Work
          </Button>
          <Button variant="secondary">📜 Download Resume</Button>
        </div>
      </BoxReveal>
    </main>
  );
};

export default Hero;
