"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { EXPERIENCE } from "@/lib/data"
import { useLanguage } from "@/components/language-provider"
import { Badge } from "@/components/ui/badge"

export function ExperienceTimeline() {
  const { language } = useLanguage()

  return (
    <div className="space-y-12">
      {EXPERIENCE.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-12 border-l-2 border-border last:border-none group pb-8"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />

          <div className="flex flex-col md:flex-row gap-6">
            {/* Visual Logo Placeholder */}
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-2xl shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              {exp.company.charAt(0)}
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-heading font-bold tracking-tight text-foreground">
                    {language === "en" ? exp.role.en : exp.role.nl}
                  </h3>
                  <div className="flex items-center gap-3">
                    <p className="text-primary font-semibold text-lg">
                      {exp.company}
                    </p>
                    <span className="text-muted-foreground/40">•</span>
                    <p className="text-muted-foreground font-medium">
                      {exp.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <div className="px-4 py-1.5 rounded-full bg-muted border border-border text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </div>
                  {exp.current && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 uppercase text-[9px] tracking-widest font-black">
                      {language === "en" ? "Present" : "Heden"}
                    </Badge>
                  )}
                </div>
              </div>

              <ul className="space-y-3 list-none">
                {(language === "en" ? exp.description.en : exp.description.nl).map((point: string, i: number) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex gap-3 text-base md:text-lg">
                    <span className="text-primary mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
