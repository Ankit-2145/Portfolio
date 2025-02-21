import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

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
  const [copied, setCopied] = React.useState(false);
  const email = "ankitsharma2615@gmail.com";

  const currentYear = new Date().getFullYear();

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Reset copied state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-white dark:bg-[#121212] font-OpenSans pt-24 lg:pt-32 overflow-hidden">
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
                className="text-foreground text-base lg:text-sm font-normal transition-colors hover:text-muted-foreground relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-muted-foreground rounded-full transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <div className="border border-secondary-foreground dark:border-border rounded-3xl p-4 text-secondary-foreground dark:text-muted-foreground mt-16">
            <h3 className="text-xl">Let&apos;s Talk</h3>
            <p
              className="inline-flex items-center gap-2 text-sm mt-4 font-FiraCode font-normal text-foreground hover:cursor-pointer hover:underline"
              onClick={handleCopy}
            >
              <Mail />
              {email}{" "}
              {copied && <span className="text-green-500">✔ Copied</span>}
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-6xl lg:text-9xl font-medium leading-relaxed ml-6 lg:ml-0">
            Ankit
          </h1>
          <div className="flex justify-evenly items-center gap-0 lg:gap-16">
            <p className="text-xl text-secondary-foreground dark:text-muted-foreground text-left font-medium leading-relaxed">
              Frontend
              <br /> Developer
            </p>
            <h3 className="text-6xl lg:text-9xl font-medium leading-relaxed">
              Sharma
            </h3>
          </div>
        </div>
      </div>
      <div className="text-sm text-center border-t-2 py-2 text-secondary-foreground whitespace-nowrap mt-40">
        <div>&copy; copyright {currentYear}</div>
      </div>
    </footer>
  );
}
