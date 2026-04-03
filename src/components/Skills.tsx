"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const skillGroups = [
  {
    category: "skills.design",
    emoji: "🎨",
    color: "oklch(0.8 0.12 300)",
    skills: [
      { name: "Art Direction", level: 98 },
      { name: "Brand Identity", level: 95 },
      { name: "UI/UX Design", level: 90 },
      { name: "Figma / Adobe CC", level: 95 },
      { name: "Motion Design", level: 82 },
    ],
  },
  {
    category: "skills.development",
    emoji: "💻",
    color: "oklch(0.7 0.1 220)",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Node.js / Express", level: 82 },
      { name: "PostgreSQL / Prisma", level: 78 },
      { name: "Tailwind CSS", level: 94 },
    ],
  },
  {
    category: "skills.tools",
    emoji: "🛠",
    color: "oklch(0.75 0.09 160)",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Vercel / AWS", level: 82 },
      { name: "Framer Motion", level: 85 },
      { name: "Docker", level: 72 },
      { name: "Agile / Scrum", level: 88 },
    ],
  },
] as const;

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-[oklch(0.75_0.02_260)] font-medium">{name}</span>
        <span className="text-[oklch(0.5_0.02_260)] text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-[oklch(0.2_0.02_260)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" as const }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[oklch(0.8_0.12_300)] text-sm font-semibold tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[oklch(0.95_0.01_260)] tracking-tight">
            {t("skills.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="bg-[oklch(0.13_0.025_260)] rounded-3xl p-6 border border-[oklch(0.25_0.02_260)] hover:border-[oklch(0.3_0.02_260)] transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${group.color}20` }}
                >
                  {group.emoji}
                </div>
                <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-[oklch(0.88_0.01_260)]">
                  {t(group.category)}
                </h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
