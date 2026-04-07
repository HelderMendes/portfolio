"use client"

import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/about-me";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from '@/components/footer';
import { Clients } from '@/components/clients';

export default function Home() {
  return (
      <main className='min-h-screen bg-background selection:bg-primary/30'>
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Clients />
          <Experience />
          <Contact />
          <Footer />
      </main>
  );
}
