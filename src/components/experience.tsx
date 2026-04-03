"use client"

import { useLanguage } from "@/components/language-provider"
import { ExperienceTimeline } from "@/components/experience-timeline"

export function Experience() {
  const { language } = useLanguage()

  const sections = {
    experience: { en: "Experience", nl: "Werkervaring" },
    subtitle: { 
      en: "A journey from editorial design to modern engineering.",
      nl: "Een reis van redactioneel ontwerp naar moderne engineering."
    }
  }

  return (
    <section id="resume" className="py-24 px-6 max-w-6xl mx-auto bg-muted/10">
      <div className="space-y-4 mb-12 text-center md:text-left">
        <h2 className="text-4xl font-heading font-bold tracking-tight">
          {language === "en" ? sections.experience.en : sections.experience.nl}
        </h2>
        <div className="w-20 h-1.5 bg-primary rounded-full mx-auto md:mx-0" />
        <p className="text-muted-foreground">
          {language === "en" ? sections.subtitle.en : sections.subtitle.nl}
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <ExperienceTimeline />
      </div>
    </section>
  )
}
