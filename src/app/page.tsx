"use client";

import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/projects";
import Feedbacks from "@/components/Feedbacks";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Feedbacks />
      <Contact />
    </>
  );
}
