import React from "react";
import ProjectsSection from "@/components/ui/projectsCard";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-black font-OpenSans py-24 lg:py-32"
    >
      <div className="max-w-6xl lg:mx-auto flex flex-col md:flex-row justify-center items-center gap-4 mx-4">
        <div>
          <h2 className="text-xl font-medium leading-relaxed">
            📁. . . /Featured Projects . . .
          </h2>
        </div>
      </div>
      <ProjectsSection />
    </section>
  );
};

export default Projects;
