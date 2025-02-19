import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

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
  {
    name: "Instagram",
    url: "https://www.instagram.com/ankit.sharma._._/",
    icon: <FaInstagram />,
  },
];

export const SocialButtons = () => {
  return (
    <div className="flex flex-wrap md:justify-center items-center space-x-2 md:space-x-8 gap-2 md:gap-8 mt-24 mx-4 md:mx-auto">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="relative group rounded-full text-xs font-OpenSans border-gray-300 bg-[#F5F5F5] dark:bg-[#121212]"
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
      ))}
    </div>
  );
};
