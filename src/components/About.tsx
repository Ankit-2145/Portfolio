"use client";

import React from "react";
import { GlowingEffectBentoGrid } from "@/components/ui/bentoGrid";

/**
 * About Component
 *
 * This component represents about the developer.
 * This component uses a bento Grid style to display content.
 * The component uses aceternityUI components for animations and styling.
 *
 * @component
 */

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-10 md:mx-auto text-left overflow-hidden md:p-10 mt-16"
    >
      <GlowingEffectBentoGrid />
    </section>
  );
};

export default About;
