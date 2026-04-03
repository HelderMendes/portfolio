"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const stats = [
  { key: "about.stat1", valueKey: "about.stat1.value", labelKey: "about.stat1.label" },
  { key: "about.stat2", valueKey: "about.stat2.value", labelKey: "about.stat2.label" },
  { key: "about.stat3", valueKey: "about.stat3.value", labelKey: "about.stat3.label" },
] as const;

const timelineItems = [
  {
    year: "2008–2022",
    role: "Senior Art Director",
    company: "Philips, DaimlerChrysler & Global Brands",
    description: "Led creative direction for campaigns across EMEA and Americas for Fortune 500 companies.",
  },
  {
    year: "2019–2021",
    role: "Creative Lead & UX Strategist",
    company: "Various Digital Agencies",
    description: "Bridged the gap between visual design and user experience strategy.",
  },
  {
    year: "2022–Present",
    role: "Full Stack Developer",
    company: "Freelance & Product Studios",
    description: "Building scalable web applications with React, Next.js, TypeScript, and Node.js.",
  },
];

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[oklch(0.8_0.12_300)] text-sm font-semibold tracking-widest uppercase mb-3">
            {t("about.career")}
          </p>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[oklch(0.95_0.01_260)] tracking-tight">
            {t("about.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-[oklch(0.7_0.02_260)] text-lg leading-relaxed">
              {t("about.text1")}
            </p>
            <p className="text-[oklch(0.7_0.02_260)] text-lg leading-relaxed">
              {t("about.text2")}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-[oklch(0.13_0.025_260)] rounded-2xl p-4 border border-[oklch(0.25_0.02_260)] text-center"
                >
                  <div className="text-2xl font-[family-name:var(--font-outfit)] font-bold text-[oklch(0.8_0.12_300)] mb-1">
                    {t(stat.valueKey)}
                  </div>
                  <div className="text-xs text-[oklch(0.55_0.02_260)] font-medium leading-tight">
                    {t(stat.labelKey)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[oklch(0.8_0.12_300/0.4)] via-[oklch(0.8_0.12_300/0.1)] to-transparent" />

            <div className="space-y-8 pl-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full border-2 border-[oklch(0.8_0.12_300)] bg-[oklch(0.1_0.02_260)]" />

                  <div className="bg-[oklch(0.13_0.025_260)] rounded-2xl p-5 border border-[oklch(0.25_0.02_260)] hover:border-[oklch(0.8_0.12_300/0.3)] transition-colors duration-300">
                    <div className="text-xs text-[oklch(0.8_0.12_300)] font-semibold tracking-widest uppercase mb-2">
                      {item.year}
                    </div>
                    <div className="text-[oklch(0.9_0.01_260)] font-semibold mb-1 font-[family-name:var(--font-outfit)]">
                      {item.role}
                    </div>
                    <div className="text-[oklch(0.55_0.02_260)] text-sm mb-2">{item.company}</div>
                    <p className="text-[oklch(0.65_0.02_260)] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
