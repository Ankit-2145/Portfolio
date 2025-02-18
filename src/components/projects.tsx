import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import ProjectsSection from "./ui/projectsCard";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-4 md:mx-auto text-center mt-24 lg:mt-32"
    >
      <div className="flex justify-center gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-medium font-OpenSans">
            Featured Projects{" "}
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0, y: -10 }}
          whileInView={{ opacity: 1, scale: 1.2, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
            scale: {
              type: "spring",
              bounce: 0.5,
              ease: "easeOut",
            },
          }}
        >
          <Image
            src="/memoji_laptop.svg"
            alt="About me memoji"
            width={36}
            height={36}
            className="w-[30px] h-[30px] md:w-9 md:h-9"
          />
        </motion.div>
      </div>
      <div className="my-8">
        <ProjectsSection />
      </div>
    </section>
  );
};

export default Projects;
