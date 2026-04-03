"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Code2, Layout, Award } from "lucide-react"

export function AboutMe() {
  const { language } = useLanguage()

  const content = {
    title: { en: "The Modern Full-Stack Architect", nl: "De Moderne Full-Stack Architect" },
    subtitle: { 
      en: "Leading with state-of-the-art web design and technical excellence.",
      nl: "Toonaangevend met state-of-the-art webdesign en technische uitmuntendheid."
    },
    story: {
      en: "As the Frontend Migration Lead for **OpenML.org**, I specialize in transforming complex data ecosystems into high-performance, design-led React platforms. My approach combines rigorous Next.js architecture with the visual precision of a 15-year Art Direction heritage.",
      nl: "Als Frontend Migratie Lead voor **OpenML.org** ben ik gespecialiseerd in het transformeren van complexe data-ecosystemen naar hoogwaardige, design-led React-platforms. Mijn aanpak combineert rigoureuze Next.js-architectuur met de visuele precisie van een 15-jarige Art Direction-achtergrond."
    },
    philosophy: {
      en: "I build web applications that aren't just tools; they are seamless user experiences. From Dockerized microservices to pixel-perfect Tailwind v4 interfaces, my goal is to deliver technical solutions that scale without compromising on elite design standards.",
      nl: "Ik bouw webapplicaties die niet alleen tools zijn; het zijn naadloze gebruikerservaringen. Van gedockeriseerde microservices tot pixel-perfecte Tailwind v4-interfaces, mijn doel is om technische oplossingen te leveren die schalen zonder concessies te doen aan elite designstandaarden."
    },
    stats: [
      { label: { en: "Years Experience", nl: "Jaar Ervaring" }, value: "15+", icon: Award },
      { label: { en: "Websites Built", nl: "Websites Gebouwd" }, value: "30+", icon: Layout },
      { label: { en: "Design Projects", nl: "Design Projecten" }, value: "50+", icon: Palette },
      { label: { en: "Modern Tech", nl: "Moderne Tech" }, value: "Next.js", icon: Code2 },
    ]
  }

  return (
    <section id="about" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                {language === "en" ? content.title.en : content.title.nl}
              </h2>
              <p className="text-primary font-medium text-lg italic">
                {language === "en" ? content.subtitle.en : content.subtitle.nl}
              </p>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{language === "en" ? content.story.en : content.story.nl}</p>
              <p>{language === "en" ? content.philosophy.en : content.philosophy.nl}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {content.stats.map((stat, i) => (
                <Card key={i} className="bg-background/50 border-none shadow-sm group hover:bg-primary transition-colors duration-300">
                  <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                    <stat.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    <div>
                      <div className="text-xl font-bold group-hover:text-primary-foreground">{stat.value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-primary-foreground/80">
                        {language === "en" ? stat.label.en : stat.label.nl}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Right: Design Heritage Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-4 h-[500px]"
          >
            <div className="space-y-4 pt-8">
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <Image 
                  src="/publicaties/Pim_magazine.jpg" 
                  alt="Pim Magazine Cover" 
                  fill 
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <Image 
                  src="/publicaties/Macau_cover.jpg" 
                  alt="Macau Magazine Cover" 
                  fill 
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <Image 
                  src="/publicaties/Uva_Mosques_cover.jpg" 
                  alt="Uva Mosques Cover" 
                  fill 
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <Image 
                  src="/publicaties/Portfolio_magazine01.jpg" 
                  alt="Portfolio Magazine" 
                  fill 
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
