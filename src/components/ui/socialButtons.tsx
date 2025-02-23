import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface SocialLinks {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLinks[] = [
  { name: "Github", url: "https://github.com/Ankit-2145", icon: <FaGithub /> },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ankit-sharma-03a680218/",
    icon: <FaLinkedin />,
  },
  { name: "Twitter", url: "https://x.com/Ankit__46", icon: <FaXTwitter /> },
];

export const SocialButtons = () => {
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
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-wrap md:justify-center items-center space-x-2 md:space-x-8 gap-2 md:gap-8 mt-24 mx-4 md:mx-auto"
    >
      {socialLinks.map((link) => (
        <motion.div key={link.name} variants={item}>
          <Link href={link.url} target="_blank" rel="noopener noreferrer">
            <Button
              className="relative group rounded-full text-xs font-OpenSans border-gray-300 bg-white dark:bg-[#121212] hover:bg-transparent"
              aria-label={`${link.name} link`}
              variant="outline"
            >
              <span className="relative flex overflow-hidden">
                <div className="inline-flex gap-2 translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[140%] group-hover:skew-y-12">
                  <span>{link.name}</span> <span>{link.icon}</span>
                </div>
                <div className="inline-flex gap-2 absolute translate-y-[130%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  <span>{link.name}</span> <span>{link.icon}</span>
                </div>
              </span>
            </Button>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
