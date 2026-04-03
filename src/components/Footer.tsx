"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-[oklch(0.18_0.02_260)] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[oklch(0.95_0.01_260)] font-[family-name:var(--font-outfit)] font-semibold">HM</span>
          <span className="text-[oklch(0.8_0.12_300)] font-bold">.</span>
          <span className="text-[oklch(0.45_0.02_260)] text-sm ml-2">© {new Date().getFullYear()} Helder Mendes</span>
        </div>
        <p className="text-[oklch(0.45_0.02_260)] text-sm">
          {language === "en" ? "Built with" : "Gebouwd met"}{" "}
          <span className="text-[oklch(0.8_0.12_300)]">Next.js</span>,{" "}
          <span className="text-[oklch(0.8_0.12_300)]">Tailwind</span> &{" "}
          <span className="text-[oklch(0.8_0.12_300)]">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
