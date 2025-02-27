import { motion } from "framer-motion";
import Image from "next/image";
import { projects, Project } from "@/constants/projectslist";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { SquareArrowOutUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  technologies,
  liveLink,
  githubRepo,
  image,
}) => {
  const springOptions = { bounce: 0.1 };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div className="flex flex-col-reverse lg:flex-row lg:even:flex-row-reverse lg:items-center gap-6 first:mt-0 mt-20 lg:mt-44">
      <div className="max-w-sm">
        <h3 className="text-foreground text-xl font-medium">{title}</h3>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mt-8"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              variants={item}
              className="px-4 py-2 text-xs text-foreground font-FiraCode bg-transparent border rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        <p className="text-sm font-normal text-justify text-secondary-foreground dark:text-muted-foreground my-8 leading-normal">
          {description}
        </p>
        <div className="w-fit flex items-center gap-2">
          <Magnetic
            intensity={0.2}
            springOptions={springOptions}
            actionArea="global"
            range={200}
          >
            <Link href={githubRepo} target="_blank" rel="noopener noreferrer">
              <Magnetic
                intensity={0.1}
                springOptions={springOptions}
                actionArea="global"
                range={200}
              >
                <FaGithub className="h-10 w-10 rounded-full p-2" />
              </Magnetic>
            </Link>
          </Magnetic>
          <Magnetic
            intensity={0.2}
            springOptions={springOptions}
            actionArea="global"
            range={200}
          >
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <Magnetic
                intensity={0.1}
                springOptions={springOptions}
                actionArea="global"
                range={200}
              >
                <SquareArrowOutUpRight className="h-10 w-10 p-2 ml-2" />
              </Magnetic>
            </Link>
          </Magnetic>
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
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeIn" }}
      viewport={{ once: true }}
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
