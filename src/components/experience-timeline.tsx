"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { EXPERIENCE } from "@/lib/data"
import { useLanguage } from "@/components/language-provider"
import { Badge } from "@/components/ui/badge"

export function ExperienceTimeline() {
  const { language } = useLanguage()

  return (
    <div className="space-y-16">
      {EXPERIENCE.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative pl-12 md:pl-20 border-l-2 border-primary/20 last:border-none group pb-12"
        >
          {/* Timeline Dot & Line Pulse */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/40 transition-all duration-300" />
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Company Logo Bubble */}
            <div className="shrink-0 w-16 h-16 rounded-3xl bg-secondary border border-border flex items-center justify-center font-heading font-black text-primary text-3xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 hover:rotate-3 overflow-hidden relative">
              {exp.logo ? (
                <Image 
                  src={exp.logo} 
                  alt={exp.company} 
                  fill 
                  className="object-cover"
                />
              ) : (
                exp.company.charAt(0)
              )}
            </div>

            <div className="flex-1 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-3xl font-heading font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {language === "en" ? exp.role.en : exp.role.nl}
                  </h3>
                  <div className="flex items-center gap-3">
                    <p className="text-primary font-bold text-lg uppercase tracking-wider">
                      {exp.company}
                    </p>
                    <span className="text-muted-foreground/30 font-black">•</span>
                    <p className="text-muted-foreground font-medium uppercase text-xs tracking-widest">
                      {exp.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end gap-3">
                  {exp.current ? (
                    <div className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.25em] whitespace-nowrap shadow-[0_0_20px_rgba(var(--primary),0.3)] animate-pulse">
                      {language === "en" ? "Current Focus / Last Work" : "Huidige Focus / Laatste Werk"}
                    </div>
                  ) : (
                    <div className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-[0.25em] text-primary whitespace-nowrap shadow-sm">
                      {exp.period}
                    </div>
                  )}
                  {exp.current && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 uppercase text-[8px] tracking-[0.2em] font-black w-fit px-3 py-1">
                      {exp.period}
                    </Badge>
                  )}
                </div>
              </div>

              <ul className="space-y-4 list-none bg-card/40 backdrop-blur-md p-6 rounded-2xl border border-border/10 shadow-lg">
                {(language === "en" ? exp.description.en : exp.description.nl).map((point: string, i: number) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex gap-4 text-sm md:text-base font-medium">
                    <span className="text-primary mt-1.5 shrink-0 w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_8px_rgba(var(--primary),0.3)]" />
                    <span className="group-hover:text-foreground/90 transition-colors">{point}</span>
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
