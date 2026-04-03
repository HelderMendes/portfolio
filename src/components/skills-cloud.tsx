"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SKILL_CATEGORIES } from "@/lib/data"
import { useLanguage } from "@/components/language-provider"
import { Badge } from "@/components/ui/badge"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
}

export function SkillsCloud() {
  const { language } = useLanguage()

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
    >
      {SKILL_CATEGORIES.map((category, idx) => (
        <motion.div key={idx} variants={item} className="space-y-4">
          <h3 className="text-lg font-heading font-bold text-primary/80 uppercase tracking-wider text-[10px]">
            {language === "en" ? category.category.en : category.category.nl}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, sIdx) => (
              <Badge 
                key={sIdx} 
                variant="outline" 
                className="bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
