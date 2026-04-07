"use client"

import { useLanguage } from "@/components/language-provider"
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
      <div className="space-y-4 text-center md:text-left mb-16">
        <h2 className="text-4xl font-heading font-bold tracking-tight">
          {language === "en" ? sections.skills.en : sections.skills.nl}
        </h2>
        <div className="w-20 h-1.5 bg-primary rounded-full mx-auto md:mx-0" />
        <p className="text-muted-foreground">
          {language === "en" ? sections.subtitle.en : sections.subtitle.nl}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* The Designer's Eye */}
        <div className="space-y-8 p-10 rounded-3xl bg-primary/5 border border-primary/10 shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
             <div className="size-24 rounded-full border-4 border-dashed border-primary" />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-heading font-black tracking-tight text-primary uppercase">
              {language === "en" ? "The Designer's Eye" : "Het Oog van de Ontwerper"}
            </h3>
            <p className="text-muted-foreground font-medium text-sm">
              {language === "en" 
                ? "15+ years of Art Direction heritage applied to modern interfaces. Mastery of visual hierarchy, typography, and human-centric UI." 
                : "15+ jaar Art Direction-ervaring toegepast op moderne interfaces. Beheersing van visuele hiërarchie, typografie en human-centric UI."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Figma", "Visual Hierarchy", "Typography", "Design Systems", "Adobe Creative Suite", "Branding"].map((skill) => (
              <span key={skill} className="px-5 py-2.5 rounded-xl bg-background border border-border text-xs font-black uppercase tracking-widest text-foreground shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* The Developer's Toolkit */}
        <div className="space-y-8 p-10 rounded-3xl bg-secondary/5 border border-secondary/10 shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
             <div className="size-24 bg-foreground/20 rotate-45" />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-heading font-black tracking-tight text-foreground uppercase">
              {language === "en" ? "The Developer's Toolkit" : "De Toolkit van de Developer"}
            </h3>
            <p className="text-muted-foreground font-medium text-sm">
              {language === "en" 
                ? "High-scale React architecture, Dockerized microservices, and type-safe systems built for performance and maintainability." 
                : "Grootschalige React-architectuur, gedockeriseerde microservices en type-safe systemen gebouwd voor performance en onderhoudbaarheid."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Next.js 15", "React 19", "TypeScript", "Tailwind v4", "FastAPI", "Docker & K8s", "PostgreSQL"].map((skill) => (
              <span key={skill} className="px-5 py-2.5 rounded-xl bg-background border border-border text-xs font-black uppercase tracking-widest text-foreground shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
