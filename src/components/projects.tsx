"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { PROJECTS } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function Projects() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null)
  const [selectedProjectIndex, setSelectedProjectIndex] = React.useState<number | null>(null)

  const categories = React.useMemo(() => {
    const all = PROJECTS.map(p => language === "en" ? p.category.en : p.category.nl)
    return Array.from(new Set(all))
  }, [language])

  const filteredProjects = React.useMemo(() => {
    if (!activeCategory) return PROJECTS
    return PROJECTS.filter(p => (language === "en" ? p.category.en : p.category.nl) === activeCategory)
  }, [activeCategory, language])

  const text = {
    title: { en: "Selected Projects", nl: "Geselecteerde Projecten" },
    subtitle: { 
      en: "A showcase of high-performance web applications and digital identities.",
      nl: "Een overzicht van hoogwaardige webapplicaties en digitale identiteiten."
    },
    all: { en: "All", nl: "Alle" }
  }

  // Helper to open project from filtered list correctly mapping to original PROJECTS index
  const handleOpenProject = (projectId: string) => {
    const index = PROJECTS.findIndex(p => p.id === projectId)
    if (index !== -1) setSelectedProjectIndex(index)
  }

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-4xl font-heading font-bold tracking-tight">
            {language === "en" ? text.title.en : text.title.nl}
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
          <p className="text-muted-foreground">
            {language === "en" ? text.subtitle.en : text.subtitle.nl}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button 
            variant={activeCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(null)}
            className="rounded-full"
          >
            {language === "en" ? text.all.en : text.all.nl}
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>
      
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleOpenProject(project.id)}
              className="cursor-pointer"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Full-Screen Project Gallery Modal */}
      <AnimatePresence>
        {selectedProjectIndex !== null && (
          <ProjectModal 
            isOpen={true}
            initialIndex={selectedProjectIndex}
            onClose={() => setSelectedProjectIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
