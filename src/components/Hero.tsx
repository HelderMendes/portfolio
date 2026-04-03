"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown, GitFork, Link2, Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[oklch(0.8_0.12_300/0.04)] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[oklch(0.6_0.1_220/0.05)] blur-3xl" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.8 0.12 300) 1px, transparent 1px), linear-gradient(90deg, oklch(0.8 0.12 300) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-5xl w-full mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.16_0.025_260)] border border-[oklch(0.8_0.12_300/0.2)] text-[oklch(0.8_0.12_300)] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.8_0.12_300)] animate-pulse" />
            {t("contact.available")}
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-[oklch(0.65_0.02_260)] text-lg mb-3 font-medium tracking-wide">
            {t("hero.greeting")}
          </p>
          <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-outfit)] font-bold tracking-tight leading-none">
            <span className="text-[oklch(0.95_0.01_260)]">Helder</span>
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, oklch(0.8 0.12 300), oklch(0.75 0.1 280), oklch(0.85 0.08 320))",
              }}
            >
              Mendes
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-xl md:text-2xl font-[family-name:var(--font-outfit)] text-[oklch(0.75_0.02_260)] font-light tracking-wide">
            {t("hero.title")}
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-[oklch(0.55_0.02_260)] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[oklch(0.8_0.12_300)] text-[oklch(0.1_0.02_260)] font-semibold text-sm hover:bg-[oklch(0.85_0.12_300)] transition-all duration-200 shadow-[0_0_30px_oklch(0.8_0.12_300/0.3)]"
          >
            {t("hero.cta.work")}
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[oklch(0.25_0.02_260)] text-[oklch(0.75_0.02_260)] font-semibold text-sm hover:border-[oklch(0.8_0.12_300/0.4)] hover:text-[oklch(0.95_0.01_260)] transition-all duration-200"
          >
            {t("hero.cta.contact")}
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-5">
          {[
            { icon: GitFork, href: "https://github.com/HelderMendes", label: "GitHub" },
            { icon: Link2, href: "https://linkedin.com/in/heldermendes", label: "LinkedIn" },
            { icon: Mail, href: "mailto:hello@heldermendes.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[oklch(0.25_0.02_260)] text-[oklch(0.55_0.02_260)] hover:border-[oklch(0.8_0.12_300/0.4)] hover:text-[oklch(0.8_0.12_300)] transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[oklch(0.45_0.02_260)] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[oklch(0.8_0.12_300/0.4)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
