"use client"

import { useLanguage } from "@/components/language-provider"
import { SkillsCloud } from "@/components/skills-cloud"

export function Skills() {
  const { language } = useLanguage()

  const sections = {
    skills: { en: "Technical Stack", nl: "Technische Stack" },
    subtitle: { 
      en: "The tools and technologies I use to build robust digital solutions.",
      nl: "De tools en technologieën die ik gebruik om robuuste digitale oplossingen te bouwen."
    }
  }

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-4xl font-heading font-bold tracking-tight">
          {language === "en" ? sections.skills.en : sections.skills.nl}
        </h2>
        <div className="w-20 h-1.5 bg-primary rounded-full mx-auto md:mx-0" />
        <p className="text-muted-foreground">
          {language === "en" ? sections.subtitle.en : sections.subtitle.nl}
        </p>
      </div>
      <SkillsCloud />
    </section>
  )
}
