"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Project } from "@/lib/data"
import { useLanguage } from "@/components/language-provider"

export function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage()

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
        <CardHeader className="p-0">
          <div className="aspect-video bg-muted relative group overflow-hidden">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-linear-to-br from-primary/10 to-primary/5">
                <span className="font-heading font-bold opacity-20 text-4xl tracking-tighter">
                  {project.title.split(' ')[0]}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </CardHeader>
        <CardHeader className="p-6">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary/70">
              {language === "en" ? project.category.en : project.category.nl}
            </span>
            {project.featured && (
              <Badge variant="secondary" className="text-[10px] uppercase">
                Featured
              </Badge>
            )}
          </div>
          <CardTitle className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-6 space-y-4">
          <div className="space-y-2">
            <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
            <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
              {language === "en" ? project.description.en : project.description.nl}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider font-bold bg-secondary/50">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-between gap-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "rounded-full flex-1")}
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              Code
            </a>
          )}
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm" }), "rounded-full flex-1")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
