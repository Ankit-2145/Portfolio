import { motion } from "framer-motion";
import Image from "next/image";
import { projects, Project } from "@/constants/projectslist";

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  technologies,
  liveLink,
  githubRepo,
  image,
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      {/* Image Container with Proper Aspect Ratio */}
      <div className="relative w-full h-40 rounded-lg overflow-hidden">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>

      <h3 className="text-xl font-semibold text-highlightOne dark:text-darkHighlightOne mt-4">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          Live Demo
        </a>
        <a
          href={githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 font-medium hover:underline"
        >
          GitHub Repo
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
