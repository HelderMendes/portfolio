"use client"

import * as React from "react"
import { Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

// Custom SVGs for Brands
const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export function Footer() {
  const { language } = useLanguage()
  const year = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/HelderMendes", icon: GithubIcon },
    { name: "LinkedIn", href: "https://linkedin.com/in/heldermendes", icon: LinkedinIcon },
    { name: "Email", href: "mailto:info@helderdesign.nl", icon: Mail },
  ]

  return (
    <footer className="w-full border-t border-border py-12 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <p className="font-heading font-bold text-xl tracking-tight">Helder Mendes</p>
          <p className="text-sm text-muted-foreground">
            © {year} Helder Design. {language === "en" ? "All rights reserved." : "Alle rechten voorbehouden."}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-card hover:bg-primary/10 hover:border-primary/50 transition-all text-muted-foreground hover:text-primary"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
