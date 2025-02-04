"use client";
import { MdSunny } from "react-icons/md";
import { RxMoon } from "react-icons/rx";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="darkModeButton"
      size="darkModeIcon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <MdSunny className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <RxMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
