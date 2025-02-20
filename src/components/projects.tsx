import React from "react";
import ProjectsSection from "./ui/projectsCard";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-[#121212] font-OpenSans border-t-2 py-24 lg:py-32"
    >
      <div className="max-w-6xl lg:mx-auto flex flex-col md:flex-row justify-center items-center gap-4 mx-4">
        <div>
          <h2 className="text-xl font-medium leading-relaxed">
            📁. . . /Projects . . .
          </h2>
        </div>
      </div>
      <ProjectsSection />
    </section>
  );
};

export default Projects;
