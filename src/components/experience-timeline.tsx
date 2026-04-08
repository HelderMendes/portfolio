"use client"

import * as React from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { EXPERIENCE } from "@/lib/data"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

export function ExperienceTimeline() {
  const { language } = useLanguage()
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={containerRef} className="relative max-w-6xl mx-auto pl-8 md:pl-0">
      {/* Animated Vertical Line (Growing on Scroll) */}
      <div className="absolute left-[9px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border/40 pointer-events-none -translate-x-1/2 hidden md:block" />
      <motion.div 
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute left-[9px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary shadow-[0_0_15px_oklch(from_var(--primary)_l_c_h/0.5)] z-10 -translate-x-1/2 hidden md:block"
      />

      {/* Grid Iteration */}
      <div className="space-y-32">
        {EXPERIENCE.map((exp, index) => (
          <div key={exp.id} className="relative group">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
              
              {/* Left Column: Meta & Tech (Mobile First) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={cn(
                  "w-full md:w-1/2 flex flex-col gap-6 pt-2 items-start",
                  index % 2 === 0 ? "md:order-1 md:text-right md:items-end" : "md:order-2 md:text-left md:items-start"
                )}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-4 md:gap-3 justify-start md:justify-end">
                    <span className="text-sm font-black uppercase tracking-[.3em] text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                       {exp.period}
                    </span>
                  </div>
                  <h4 className="text-3xl font-heading font-black text-foreground uppercase italic tracking-tighter">
                    {exp.company}
                  </h4>
                  <p className="text-sm font-black uppercase tracking-[.3em] text-muted-foreground opacity-40">
                    {exp.location}
                  </p>
                </div>

                {/* Company Logo in Container */}
                <div className="size-20 rounded-[2.5rem] bg-muted/30 border border-border flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-500 overflow-hidden shrink-0">
                  {exp.logo ? (
                    <Image 
                      src={exp.logo} 
                      alt={exp.company} 
                      width={48} 
                      height={48} 
                      className="object-contain filter transition-all grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  ) : (
                    <span className="font-heading font-black text-2xl text-primary">{exp.company.charAt(0)}</span>
                  )}
                </div>

                {/* Technologies List */}
                {exp.technologies && (
                  <div className={cn("flex flex-wrap gap-2 pt-4", index % 2 === 0 ? "md:justify-end" : "md:justify-start")}>
                    {exp.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-muted border border-border/50 text-[10px] font-black uppercase tracking-widest text-muted-foreground/80 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Center Circle Pin (Desktop Only) */}
              <div className="absolute left-[-32px] md:left-1/2 top-1/2 size-8 rounded-full bg-background border-4 border-primary z-20 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_oklch(from_var(--primary)_l_c_h/0.3)] hidden md:block" />

              {/* Right Column: Experience Summary */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={cn(
                  "w-full md:w-1/2 space-y-6 pb-12 md:pb-0 border-l border-border/20 md:border-none pl-8 md:pl-0",
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                )}
              >
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground leading-tight">
                    {language === "en" ? exp.role.en : exp.role.nl}
                  </h3>
                  
                  {exp.current && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full text-[9px] font-black uppercase tracking-widest animate-pulse">
                      Currently Shaping
                    </div>
                  )}
                </div>

                <ul className="space-y-6">
                  {(language === "en" ? exp.description.en : exp.description.nl).map((point: string, i: number) => (
                    <li key={i} className="relative">
                      <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed group-hover:text-foreground transition-colors">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
