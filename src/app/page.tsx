"use client";

import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </>
  );
}
