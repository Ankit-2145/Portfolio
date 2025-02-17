import React from "react";
import Image from "next/image";
import ProjectsSection from "./ui/projectsCard";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-4 md:mx-auto text-center mt-24 lg:mt-32"
    >
      <div className="flex justify-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-medium font-OpenSans">
            Featured Projects{" "}
          </h2>
        </div>
        <div>
          <Image
            src="/memoji_laptop.svg"
            alt="skills memoji with laptop"
            width={36}
            height={36}
            className="w-[30px] h-[30px] md:w-9 md:h-9 ml-2"
          />
        </div>
      </div>
      <div className="my-8">
        <ProjectsSection />
      </div>
    </section>
  );
};

export default Projects;
