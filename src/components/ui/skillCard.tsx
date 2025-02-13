"use client";

import React from "react";
import { techStacks } from "@/constants";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// Color mapping for Tailwind classes to RGB values
const colorToRGB: { [key: string]: number[] } = {
  "bg-orange-600": [234, 88, 12],
  "bg-blue-500": [59, 130, 246],
  "bg-yellow-400": [250, 204, 21],
  "bg-blue-700": [29, 78, 216],
  "bg-cyan-400": [34, 211, 238],
  "bg-white": [255, 255, 255],
  "bg-cyan-500": [6, 182, 212],
  "bg-green-600": [22, 163, 74],
  "bg-gray-800": [31, 41, 55],
  "bg-pink-500": [236, 72, 153],
  "bg-yellow-500": [234, 179, 8],
  "bg-gray-900": [17, 24, 39],
  "bg-purple-600": [147, 51, 234],
  "bg-purple-500": [168, 85, 247],
  "bg-green-500": [34, 197, 94],
  "bg-indigo-500": [99, 102, 241],
  "bg-indigo-600": [79, 70, 229],
  "bg-red-600": [220, 38, 38],
  "bg-cyan-600": [8, 145, 178],
};

export function SkillCard() {
  return (
    <div>
      {Object.entries(techStacks).map(([category, technologies]) => (
        <div key={category}>
          <div className="flex flex-auto flex-wrap justify-center items-center">
            {(
              technologies as {
                id: number;
                label: string;
                image: string;
                color: string;
              }[]
            ).map((tech) => (
              <Card
                key={tech.id}
                title={tech.label}
                icon={tech.image}
                color={tech.color}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const Card = ({
  title,
  icon,
  color,
}: {
  title: string;
  icon: string;
  color: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  // Get RGB values from the color mapping, default to purple if not found
  const rgbColor = colorToRGB[color];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] dark:border-white/[0.2] overflow-hidden 
      group/canvas-card flex items-center justify-center w-32 h-32 relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeIn",
            }}
            className="absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              colors={[rgbColor]}
              containerClassName="bg-black"
            />
            {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center p-2">
        <Image
          src={icon || "/placeholder.svg"}
          alt={title}
          width={36}
          height={36}
          className="transition duration-200 group-hover/canvas-card:-translate-y-2"
        />

        <small className="text-center text-white mt-2 text-sm font-medium opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-200">
          {title}
        </small>
      </div>
    </div>
  );
};

export default SkillCard;
