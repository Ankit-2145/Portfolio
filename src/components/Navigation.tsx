"use client";

import Link from "next/link";
import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Define the structure for navigation items
interface NavItem {
  name: string;
  href: string;
}

// Array of navigation items
const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

/**
 * Navigation component
 * Renders a responsive navigation bar with a logo, navigation links, social icons, and a theme toggle.
 * On mobile, it displays a hamburger menu that opens a sheet with navigation links.
 */
const Navigation: React.FC = () => {
  // State to manage the open/closed state of the mobile menu
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <nav className="font-OpenSans bg-[#F5F5F5] dark:bg-[#121212]">
      <div className="max-w-6xl mx-auto flex justify-between h-16 items-center md:pt-2 px-4">
        {/* Logo / Brand name */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-foreground">AS</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex justify-center items-center space-x-10 flex-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground text-sm font-normal transition-colors hover:text-muted-foreground relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-muted-foreground rounded-full transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right side items: Theme toggle, and Mobile menu */}
        <div>
          {/* Theme Toggle Component */}
          <ModeToggle />

          {/* Mobile Menu (Sheet component) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            {/* Hamburger menu button (visible on mobile) */}
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden ml-2"
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            {/* Sheet content for mobile navigation */}
            <SheetContent className="bg-[#F5F5F5] dark:bg-[#121212]" side="top">
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground text-base font-normal transition-colors hover:text-muted-foreground"
                    onClick={() => setIsOpen(false)} // Close sheet when a link is clicked
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
