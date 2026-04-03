"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Code2, Layout, Award } from "lucide-react"

export function AboutMe() {
  const { language } = useLanguage()

  const content = {
    title: { en: "The Designer-Developer Hybrid", nl: "De Designer-Developer Hybride" },
    subtitle: { 
      en: "Bridging the gap between aesthetic excellence and technical precision.",
      nl: "De kloof overbruggen tussen esthetische uitmuntendheid en technische precisie."
    },
    story: {
      en: "With over 15 years in the creative industry, my journey began in the high-stakes world of high-end editorial design and Art Direction for global leaders such as **Philips**, **DaimlerChrysler**, and **Mercedes-Benz**. This foundation in visual hierarchy, typography, and complex grid systems now fuels my modern approach to Full Stack development.",
      nl: "Met meer dan 15 jaar ervaring in de creatieve industrie begon mijn reis in de veeleisende wereld van hoogwaardig redactioneel ontwerp en Art Direction voor wereldwijde marktleiders als **Philips**, **DaimlerChrysler** en **Mercedes-Benz**. Dit fundament in visuele hiërarchie, typografie en complexe grid-systemen vormt nu de brandstof voor mijn moderne aanpak van Full Stack ontwikkeling."
    },
    philosophy: {
      en: "I don't just write code; I craft digital experiences. I believe that a performant backend is only as good as the interface that delivers it. My goal is to build tools that are as beautiful as they are functional.",
      nl: "Ik schrijf niet alleen code; ik creëer digitale ervaringen. Ik geloof dat een performante backend pas echt tot zijn recht komt door de interface die het presenteert. Mijn doel is om tools te bouwen die even mooi als functioneel zijn."
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

          {/* Right: Abstract Visual or Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-linear-to-br from-primary/20 via-background to-primary/10 border border-primary/20 flex items-center justify-center p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent)]" />
              <div className="z-10 text-center space-y-4">
                <div className="text-5xl font-heading font-black text-primary/10 tracking-tighter uppercase select-none leading-none">
                  Design<br/>Driven<br/>Development
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-primary/30 rounded-tr-3xl" />
              <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-primary/30 rounded-bl-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
