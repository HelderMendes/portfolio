"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Mail, ArrowRight } from "lucide-react"

export function Contact() {
  const { language } = useLanguage()

  const content = {
    title: { en: "Get in Touch", nl: "Neem Contact Op" },
    subtitle: { 
      en: "Ready to start a project? Or just want to say hi? I'm always open to new collaborations.",
      nl: "Klaar om een project te starten? Of wil je gewoon even hoi zeggen? Ik sta altijd open voor nieuwe samenwerkingen."
    },
    cta: { en: "Send Email", nl: "E-mail Versturen" }
  }

  return (
    <section id="contact" className="py-32 px-6 text-center border-t border-border/40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <div className="space-y-4">
          <h2 className="text-5xl font-heading font-bold tracking-tight">
            {language === "en" ? content.title.en : content.title.nl}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {language === "en" ? content.subtitle.en : content.subtitle.nl}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a 
            href="mailto:info@helderdesign.nl" 
            className="flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 group"
          >
            <Mail className="h-5 w-5" />
            {language === "en" ? content.cta.en : content.cta.nl}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex gap-6">
            {[
              { icon: GithubIcon, name: "GitHub", href: "https://github.com/HelderMendes" },
              { icon: LinkedinIcon, name: "LinkedIn", href: "https://www.linkedin.com/in/heldermendes/" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-muted border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                title={social.name}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-12 text-muted-foreground text-sm">
          <p>Based in Amsterdam, available for freelance and full-time opportunities.</p>
        </div>
      </motion.div>
    </section>
  )
}
