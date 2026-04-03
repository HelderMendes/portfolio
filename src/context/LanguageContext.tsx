"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "nl";

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.greeting": "Hello, I'm",
    "hero.name": "Helder Mendes",
    "hero.title": "Art Director & Full Stack Developer",
    "hero.subtitle": "15+ years crafting premium digital experiences. From brand identity to scalable web applications.",
    "hero.cta.work": "View My Work",
    "hero.cta.contact": "Get In Touch",
    "about.title": "About Me",
    "about.career": "Career Journey",
    "about.text1": "With over 15 years as a Senior Art Director for global brands like Philips and DaimlerChrysler, I bring a unique blend of visual storytelling and technical precision to every project.",
    "about.text2": "My transition to Full Stack Development wasn't a pivot — it was an evolution. I combine deep UX intuition with modern engineering to build products that are both beautiful and performant.",
    "about.stat1.value": "15+",
    "about.stat1.label": "Years Experience",
    "about.stat2.value": "50+",
    "about.stat2.label": "Projects Delivered",
    "about.stat3.value": "2",
    "about.stat3.label": "Disciplines Mastered",
    "projects.title": "Selected Work",
    "projects.subtitle": "A curated selection of projects spanning brand identity, web applications, and digital experiences.",
    "projects.viewAll": "View All Projects",
    "projects.liveDemo": "Live Demo",
    "projects.viewCode": "View Code",
    "skills.title": "Expertise",
    "skills.design": "Design & Creative",
    "skills.development": "Development",
    "skills.tools": "Tools & Platforms",
    "contact.title": "Let's Work Together",
    "contact.subtitle": "Have a project in mind? I'd love to hear about it.",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent! I'll get back to you soon.",
    "contact.location": "Amsterdam, Netherlands",
    "contact.available": "Available for freelance",
  },
  nl: {
    "nav.home": "Home",
    "nav.about": "Over mij",
    "nav.projects": "Projecten",
    "nav.skills": "Vaardigheden",
    "nav.contact": "Contact",
    "hero.greeting": "Hallo, ik ben",
    "hero.name": "Helder Mendes",
    "hero.title": "Art Director & Full Stack Developer",
    "hero.subtitle": "15+ jaar premium digitale ervaringen creëren. Van merkidentiteit tot schaalbare webapplicaties.",
    "hero.cta.work": "Mijn Werk",
    "hero.cta.contact": "Neem Contact Op",
    "about.title": "Over Mij",
    "about.career": "Carrièrepad",
    "about.text1": "Met meer dan 15 jaar als Senior Art Director voor wereldwijde merken zoals Philips en DaimlerChrysler, breng ik een unieke combinatie van visueel verhalen vertellen en technische precisie in elk project.",
    "about.text2": "Mijn overstap naar Full Stack Development was geen draai — het was een evolutie. Ik combineer diep UX-inzicht met moderne engineering om producten te bouwen die zowel mooi als performant zijn.",
    "about.stat1.value": "15+",
    "about.stat1.label": "Jaar Ervaring",
    "about.stat2.value": "50+",
    "about.stat2.label": "Projecten Afgeleverd",
    "about.stat3.value": "2",
    "about.stat3.label": "Disciplines Beheerst",
    "projects.title": "Geselecteerd Werk",
    "projects.subtitle": "Een gecureerde selectie van projecten op het gebied van merkidentiteit, webapplicaties en digitale ervaringen.",
    "projects.viewAll": "Alle Projecten",
    "projects.liveDemo": "Live Demo",
    "projects.viewCode": "Bekijk Code",
    "skills.title": "Expertise",
    "skills.design": "Design & Creatief",
    "skills.development": "Ontwikkeling",
    "skills.tools": "Tools & Platformen",
    "contact.title": "Laten We Samenwerken",
    "contact.subtitle": "Heb je een project in gedachten? Ik hoor het graag.",
    "contact.name": "Uw Naam",
    "contact.email": "Uw E-mail",
    "contact.message": "Uw Bericht",
    "contact.send": "Stuur Bericht",
    "contact.sending": "Verzenden...",
    "contact.success": "Bericht verzonden! Ik neem spoedig contact op.",
    "contact.location": "Amsterdam, Nederland",
    "contact.available": "Beschikbaar voor freelance",
  },
};

type TranslationKey = keyof typeof translations["en"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
