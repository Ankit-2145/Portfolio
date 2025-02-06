import React from "react";
import { SkillCard } from "./ui/skillCard";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-10 md:mx-auto text-center overflow-hidden space-y-4"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
        Tech Stack
      </h2>
      <SkillCard />
    </section>
  );
};

export default Skills;
