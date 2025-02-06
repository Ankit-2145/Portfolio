"use client";

import { useTheme } from "next-themes";
import { techStacks } from "@/constants";
import { MagicCard } from "@/components/magicui/magic-card";
import Image from "next/image";

export function SkillCard() {
  const { theme } = useTheme();

  return (
    <div className="flex w-full flex-col gap-6">
      {Object.entries(techStacks).map(([category, technologies]) => (
        <div key={category}>
          {/* Render Category Name */}
          <h2 className="text-2xl font-semibold capitalize mb-4">
            {category.replace(/([A-Z])/g, " $1")}
          </h2>

          {/* Render Tech Stack Cards */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {(
              technologies as { id: number; label: string; image: string }[]
            ).map((tech) => (
              <MagicCard
                key={tech.id}
                className="cursor-pointer flex flex-col items-center justify-center whitespace-nowrap text-base w-full p-4 shadow-xl rounded-lg"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
                <Image
                  src={tech.image}
                  alt={tech.label}
                  height={40}
                  width={40}
                  className="transition-transform duration-300 hover:scale-110 mx-auto"
                />
                <span className="font-medium text-sm text-center mt-2">
                  {tech.label}
                </span>
              </MagicCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
