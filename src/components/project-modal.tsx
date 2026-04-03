"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ExternalLink, Globe } from "lucide-react"
import Image from "next/image"
import { PROJECTS } from "@/lib/data"
import { useLanguage } from "@/components/language-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectModalProps {
  initialIndex: number
  onClose: () => void
  isOpen: boolean
}

export function ProjectModal({ initialIndex, onClose, isOpen }: ProjectModalProps) {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex)
  const [direction, setDirection] = React.useState(0)

  const project = PROJECTS[currentIndex]

  // Handle navigation
  const nextProject = React.useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1))
  }, [])

  const prevProject = React.useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1))
  }, [])

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") nextProject()
      if (e.key === "ArrowLeft") prevProject()
    }
    window.addEventListener("keydown", handleKeyDown)
    // Prevent scrolling beneath modal
    document.body.style.overflow = "hidden"
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [onClose, nextProject, prevProject])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 flex items-center justify-center p-0 md:p-6 bg-background/95 backdrop-blur-xl"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.15),transparent_50%)] pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col md:border md:border-border md:rounded-4xl overflow-hidden bg-background shadow-2xl">
        
        {/* Navigation Controls (Floating) */}
        <div className="absolute top-6 right-6 z-50 flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={onClose}
            className="rounded-full bg-background/50 backdrop-blur-md border-border hover:bg-primary hover:text-primary-foreground group"
          >
            <X className="size-5 transition-transform group-hover:rotate-90" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        {/* Top 50%: Immersive Image Area */}
        <div className="relative h-[40vh] md:h-1/2 w-full bg-muted/30 overflow-hidden group/image">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover md:object-contain bg-muted/10 p-0 md:p-12"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-primary/10 text-6xl font-black uppercase">
                  {project.title}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Side Nav Buttons */}
          <div className="absolute inset-y-0 left-4 flex items-center z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full bg-background/20 backdrop-blur-md border-white/10 text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft className="size-6" />
            </Button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full bg-background/20 backdrop-blur-md border-white/10 text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>
        </div>

        {/* Bottom 50%: Content Area */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-background relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px] uppercase font-black px-3 py-1">
                  {language === "en" ? project.category.en : project.category.nl}
                </Badge>
                {project.featured && (
                  <Badge className="bg-primary text-primary-foreground border-none text-[8px] uppercase font-black px-2 py-0.5 animate-pulse">
                    Featured Case
                  </Badge>
                )}
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
                {project.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                  {language === "en" ? project.description.en : project.description.nl}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-2 rounded-xl bg-secondary/50 border border-border text-[10px] uppercase font-black text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">Key Outcomes</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground font-medium">
                    <li className="flex items-center gap-2">
                       <div className="size-1 rounded-full bg-primary" />
                       High-performance metrics
                    </li>
                    <li className="flex items-center gap-2">
                       <div className="size-1 rounded-full bg-primary" />
                       Brand-aligned UI
                    </li>
                    <li className="flex items-center gap-2">
                       <div className="size-1 rounded-full bg-primary" />
                       Strategic architecture
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 h-14 bg-primary text-primary-foreground rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity no-underline"
                    >
                      <Globe className="size-5" />
                      Visit Live Website
                    </a>
                  )}
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 rounded-2xl h-14 border-border/50 text-xs uppercase font-black">
                      Share Project
                    </Button>
                    <Button variant="outline" className="flex-1 rounded-2xl h-14 border-border/50 text-xs uppercase font-black" onClick={onClose}>
                      Back to Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
