"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, GitFork, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Brand Identity System",
    category: "Art Direction · Branding",
    description: "Complete visual identity for a European FinTech startup, including logomark, color system, and digital touchpoints.",
    tags: ["Figma", "After Effects", "Brand Strategy"],
    featured: true,
    color: "oklch(0.8 0.12 300)",
    size: "large",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Next.js E-Commerce Platform",
    category: "Full Stack Development",
    description: "Scalable e-commerce solution with real-time inventory, Stripe integration, and headless CMS.",
    tags: ["Next.js", "TypeScript", "Stripe", "Sanity"],
    featured: true,
    color: "oklch(0.7 0.1 220)",
    size: "medium",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "DaimlerChrysler Campaign",
    category: "Art Direction · Digital",
    description: "Multi-channel digital campaign for EMEA launch of new vehicle model.",
    tags: ["Campaign", "Motion", "Art Direction"],
    featured: false,
    color: "oklch(0.75 0.09 160)",
    size: "small",
    github: null,
    demo: "#",
  },
  {
    id: 4,
    title: "SaaS Dashboard UI",
    category: "UI/UX · Development",
    description: "Analytics dashboard with real-time data visualization, dark mode, and responsive design.",
    tags: ["React", "D3.js", "Tailwind"],
    featured: false,
    color: "oklch(0.78 0.11 40)",
    size: "small",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Philips Product Campaign",
    category: "Art Direction · Photography",
    description: "Global product photography and digital assets for Philips healthcare division.",
    tags: ["Photography", "Retouching", "Campaign"],
    featured: false,
    color: "oklch(0.72 0.09 260)",
    size: "medium",
    github: null,
    demo: "#",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative bg-[oklch(0.13_0.025_260)] rounded-3xl border border-[oklch(0.25_0.02_260)] overflow-hidden hover:border-[oklch(0.25_0.02_260/0.6)] transition-all duration-500 hover:shadow-[0_0_40px_oklch(0.8_0.12_300/0.08)] ${
        project.size === "large" ? "md:col-span-2 md:row-span-2" :
        project.size === "medium" ? "md:col-span-1 md:row-span-2" : ""
      }`}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />

      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"
        style={{ background: project.color }}
      />

      <div className="relative p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: project.color }}>
              {project.category}
            </p>
            <h3 className="text-lg font-[family-name:var(--font-outfit)] font-semibold text-[oklch(0.92_0.01_260)] leading-tight">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight
            size={18}
            className="text-[oklch(0.35_0.02_260)] group-hover:text-[oklch(0.8_0.12_300)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 ml-2"
          />
        </div>

        <p className="text-[oklch(0.6_0.02_260)] text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-[oklch(0.16_0.025_260)] border border-[oklch(0.22_0.02_260)] rounded-full text-xs text-[oklch(0.55_0.02_260)] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-[oklch(0.18_0.02_260)]">
          {project.github && (
            <a
              href={project.github}
              className="flex items-center gap-1.5 text-xs text-[oklch(0.55_0.02_260)] hover:text-[oklch(0.8_0.12_300)] transition-colors"
            >
              <GitFork size={14} />
              {t("projects.viewCode")}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className="flex items-center gap-1.5 text-xs text-[oklch(0.55_0.02_260)] hover:text-[oklch(0.8_0.12_300)] transition-colors"
            >
              <ExternalLink size={14} />
              {t("projects.liveDemo")}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-24 px-6 bg-[oklch(0.115_0.022_260)]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between mb-12 gap-6"
        >
          <div>
            <p className="text-[oklch(0.8_0.12_300)] text-sm font-semibold tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[oklch(0.95_0.01_260)] tracking-tight">
              {t("projects.title")}
            </h2>
            <p className="text-[oklch(0.6_0.02_260)] mt-3 max-w-xl leading-relaxed">
              {t("projects.subtitle")}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[240px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
