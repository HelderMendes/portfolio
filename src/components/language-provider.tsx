"use client"

import * as React from "react"

export type Language = "en" | "nl"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (content: { en: string | string[]; nl: string | string[] }) => string | string[]
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<Language>("en")

  const t = (content: { en: string | string[]; nl: string | string[] }) => {
    return content[language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
