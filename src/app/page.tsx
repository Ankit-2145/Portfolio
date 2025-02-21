"use client";

import { ReactLenis } from "lenis/react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/projects";
import Feedbacks from "@/components/Feedbacks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Adjust this value to control the smoothness (0.1 is a good starting point)
        duration: 1.2, // Adjust the duration of the scroll animation
        smoothWheel: true, // Enable smooth scrolling for mouse wheel
      }}
    >
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Feedbacks />
      <Contact />
      <Footer />
    </ReactLenis>
  );
}
