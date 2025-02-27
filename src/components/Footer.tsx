import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
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
    toast.success("Email Copied!");
  };

  return (
    <footer className="relative bg-white dark:bg-black font-OpenSans pt-24 lg:pt-32 overflow-hidden">
      <div className="max-w-6xl xl:mx-auto mx-4 flex flex-col lg:flex-row-reverse justify-between gap-4">
        <div>
          <h2 className="text-xl font-medium leading-relaxed">
            . . . /Contacts . . .
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
          <div className="border border-secondary-foreground dark:border-border rounded-3xl p-4 text-secondary-foreground dark:text-muted-foreground mt-8">
            <h3 className="block text-base">
              Don&apos;t like filling forms? Reach out at
            </h3>
            <span
              className="inline-flex items-center gap-2 text-sm mt-4 font-FiraCode font-normal text-foreground hover:cursor-pointer hover:underline"
              onClick={handleCopy}
            >
              <Mail className="h-4 w-4" />
              <TextShimmer as="p">{email}</TextShimmer>
            </span>
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
