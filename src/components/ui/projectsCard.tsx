import { motion } from "framer-motion";
import Image from "next/image";
import { projects, Project } from "@/constants/projectslist";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { SquareArrowOutUpRight } from "lucide-react";

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  technologies,
  liveLink,
  githubRepo,
  image,
}) => {
  return (
    <motion.div className="flex flex-col-reverse lg:flex-row lg:even:flex-row-reverse lg:items-start gap-6 first:mt-0 mt-20 lg:mt-44">
      <div className="max-w-sm">
        <h3 className="text-foreground text-xl">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-8">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 text-xs text-foreground font-FiraCode bg-transparent border rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-secondary-foreground dark:text-muted-foreground my-16">
          {description}
        </p>
        <div className="w-fit flex items-center gap-2">
          <Link href={githubRepo} target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-10 w-10 rounded-full p-2" />
          </Link>
          <Link href={liveLink} target="_blank" rel="noopener noreferrer">
            <SquareArrowOutUpRight className="h-10 w-10 p-2 ml-2" />
          </Link>
        </div>
      </div>
      <div>
        <Image
          className="rounded-3xl"
          src={image}
          alt={title}
          width={800}
          height={500}
        />
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
      <div className="max-w-6xl mx-4 xl:mx-auto mt-16 lg:mt-24">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
