"use client"

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/about-me";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
