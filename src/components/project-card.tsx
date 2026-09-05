"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Project } from "@/lib/data"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { GithubIcon } from "@/components/icons"

export function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="group h-full flex flex-col bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] transition-all overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden">
            {project.images && project.images[0] ? (
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-primary/5 flex items-center justify-center p-8">
                <span className="text-3xl font-heading font-black text-primary/10 tracking-tighter uppercase select-none">
                  {project.title}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {project.featured && project.id !== "heritage" && (
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-lg font-black text-[9px] uppercase tracking-widest shadow-xl backdrop-blur-sm border border-primary/20 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  Premier Web Case
                </div>
              </div>
            )}
            
            {project.featured && project.id === "heritage" && (
              <div className="absolute top-4 right-4 z-10">
                <Badge variant="secondary" className="bg-background/80 text-foreground border border-border font-black text-[10px] uppercase tracking-widest shadow-xl">
                  Strategic Foundation
                </Badge>
              </div>
            )}
            
            {project.featured && project.id !== "heritage" && (
              <div className="absolute top-4 right-4 z-10">
                <Badge variant="secondary" className="bg-primary text-primary-foreground border-none font-black text-[10px] uppercase tracking-widest shadow-xl">
                  Featured
                </Badge>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="p-6 pt-5 flex-1 flex flex-col gap-4">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              {language === "en" ? project.category.en : project.category.nl}
            </span>
            <CardTitle className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
          </div>
          
          <p className="text-sm md:text-base text-muted-foreground line-clamp-3 leading-relaxed font-medium">
            {language === "en" ? project.description.en : project.description.nl}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px] uppercase font-black bg-secondary/50 text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={cn(
                buttonVariants({ size: "sm" }),
                "flex-1 rounded-full font-bold text-[11px] uppercase tracking-wider h-10 group/btn"
              )}
            >
              <ExternalLink className="h-3.5 w-3.5 mr-2 transition-transform group-hover/btn:translate-x-0.5" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "w-10 h-10 p-0 rounded-full flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-colors"
              )}
            >
              <GithubIcon className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
