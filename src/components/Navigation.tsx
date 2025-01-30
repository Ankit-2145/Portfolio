"use client";

import Link from "next/link";
import * as React from "react";
import { Menu } from "lucide-react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

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
  { name: "About", href: "/services" },
  { name: "Skills", href: "/work" },
  { name: "Projects", href: "/pricing" },
  { name: "Blog", href: "/about" },
  { name: "Contact", href: "/contact" },
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
    <nav className="max-w-4xl mx-auto font-SpaceGrotesk">
      <div className="flex justify-between h-16 items-center px-4 mx-auto">
        {/* Logo / Brand name */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-foreground">Portfolio</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex justify-center items-center space-x-4 flex-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground rounded-full transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right side items: Social icons, Theme toggle, and Mobile menu */}
        <div className="flex items-center">
          {/* GitHub Icon */}
          <Link href="/contact" className="">
            <FaGithub className="w-4 h-4 mr-4" />
          </Link>
          {/* Twitter Icon */}
          <Link href="/contact">
            <FaXTwitter className="w-4 h-4 mr-4" />
          </Link>

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
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            {/* Sheet content for mobile navigation */}
            <SheetContent side="top">
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground"
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
