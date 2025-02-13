import React from "react";
import { SkillCard } from "./ui/skillCard";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto min-h-screen text-center overflow-hidden space-y-8"
    >
      <h2 className="text-3xl sm:text-4xl font-normal font-OpenSans">
        Technical Skills
      </h2>
      <SkillCard />
    </section>
  );
};

export default Skills;
