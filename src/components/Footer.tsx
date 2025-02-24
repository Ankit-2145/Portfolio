import React from "react";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialButtons } from "@/components/ui/socialButtons";
import { TextShimmer } from "./ui/text-shimmer";
import { toast } from "sonner";

interface FooterItem {
  name: string;
  href: string;
}

// Array of navigation items
const FooterItems: FooterItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function Footer() {
  const email = "ankitsharma2615@gmail.com";

  const currentYear = new Date().getFullYear();

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast("📋 Copied!");
  };

  return (
    <footer className="relative bg-white dark:bg-black font-OpenSans pt-24 lg:pt-32 overflow-hidden z-20">
      <div className="max-w-6xl xl:mx-auto mx-4 flex flex-col lg:flex-row-reverse justify-between gap-4">
        <div>
          <h2 className="text-xl font-medium leading-relaxed">
            📁. . . /Contacts . . .
          </h2>
          <div className="flex justify-start items-start space-x-5 lg:space-x-10 flex-1 mt-8">
            {FooterItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground text-base lg:text-sm font-normal transition-colors relative group"
              >
                <span className="relative flex overflow-hidden">
                  <div className="inline-flex gap-2 translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[140%] group-hover:skew-y-12">
                    <span>{item.name}</span>
                  </div>
                  <div className="inline-flex gap-2 absolute translate-y-[130%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    <span>{item.name}</span>
                  </div>
                </span>
              </Link>
            ))}
          </div>
          <Button
            className="group text-xs font-OpenSans relative cursor-pointer px-4 py-2 border bg-black rounded-full overflow-hidden text-white text-center mt-8"
            variant="outline"
            aria-label="Download Resume"
          >
            <span className="inline-flex items-center gap-2 translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300">
              {/* Icon for Resume Download Button */}
              <Download /> Download Resume
            </span>
            <div className="inline-flex items-center gap-2 text-black bg-white z-10 absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
              {/* Icon for Resume Download Button */}
              <Download /> Download Resume
            </div>
          </Button>
          <div className="border border-secondary-foreground dark:border-border rounded-3xl p-4 text-secondary-foreground dark:text-muted-foreground mt-8">
            <TextShimmer as="h3" className="block text-base">
              Let&apos;s Connect
            </TextShimmer>

            <p
              className="inline-flex items-center gap-2 text-sm mt-4 font-FiraCode font-normal text-foreground hover:cursor-pointer hover:underline"
              onClick={handleCopy}
            >
              <Mail className="h-4 w-4" />
              {email}
            </p>
          </div>
        </div>
        <div className="font-FiraCode">
          <div className="flex flex-col">
            <h1 className="text-6xl lg:text-9xl font-medium leading-tight">
              Ankit
            </h1>
            <div className="flex justify-between items-start">
              <p className="text-xl text-secondary-foreground dark:text-muted-foreground font-normal leading-relaxed mt-2">
                Frontend
                <br /> Developer
              </p>
              <h1 className="text-6xl lg:text-9xl font-medium leading-tight">
                Sharma
              </h1>
            </div>
          </div>
        </div>
      </div>
      <SocialButtons />
      <div className="text-sm text-center py-2 text-secondary-foreground whitespace-nowrap mt-20">
        <div>&copy; {currentYear} Ankit Sharma. All rights reserved.</div>
      </div>
    </footer>
  );
}
