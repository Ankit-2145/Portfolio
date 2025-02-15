"use client";

import React from "react";
import { motion } from "motion/react";

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
      className="max-w-6xl mx-10 md:mx-auto text-left overflow-hidden md:p-10 mt-16"
    >
      <motion.div
        drag
        whileHover={{ width: 200 }}
        className="h-20 w-20 bg-fuchsia-600 rounded-md"
      ></motion.div>
    </section>
  );
};

export default About;
