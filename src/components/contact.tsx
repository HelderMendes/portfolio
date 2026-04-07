"use client"

import * as React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useLanguage } from "@/components/language-provider"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Mail, ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { sendEmail } from "@/app/actions"
import { cn } from "@/lib/utils"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const { language } = useLanguage()
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    setErrorMessage(null)

    try {
      const result = await sendEmail(data)
      if (result.success) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
        setErrorMessage(result.error || "Failed to send message.")
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage("An unexpected error occurred.")
    }
  }

  const content = {
    title: { en: "Get in Touch", nl: "Neem Contact Op" },
    subtitle: { 
      en: "Ready to start a project? Or just want to say hi? I'm always open to new collaborations.",
      nl: "Klaar om een project te starten? Of wil je gewoon even hoi zeggen? Ik sta altijd open voor nieuwe samenwerkingen."
    },
    cta: { en: "Send Message", nl: "Stuur Bericht" },
    loading: { en: "Sending...", nl: "Verzenden..." },
    success: { en: "Message Sent!", nl: "Bericht Verzonden!" },
    error: { en: "Try Again", nl: "Probeer Opnieuw" },
  }

  const labels = {
    name: { en: "Your Name", nl: "Je Naam" },
    email: { en: "Email Address", nl: "E-mailadres" },
    subject: { en: "Subject", nl: "Onderwerp" },
    message: { en: "Message", nl: "Bericht" },
  }

  return (
    <section id="contact" className="py-32 px-6 border-t border-border/40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Info & Narrative */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight text-foreground uppercase italic">
              {language === "en" ? content.title.en : content.title.nl}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              {language === "en" ? content.subtitle.en : content.subtitle.nl}
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-border/50">
             <div className="flex items-center gap-4 group">
               <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
                  <Mail className="size-5" />
               </div>
               <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Email me directly</p>
                  <a href="mailto:info@helderdesign.nl" className="text-lg font-bold hover:text-primary transition-colors">info@helderdesign.nl</a>
               </div>
             </div>

             <div className="flex gap-4">
                {[
                  { icon: GithubIcon, href: "https://github.com/HelderMendes" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/heldermendes/" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-12 rounded-2xl bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
             </div>
          </div>

          <div className="pt-8 text-xs font-black uppercase tracking-[.3em] text-primary/30">
            Based in Amsterdam • Available Worldwide
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <input
                  {...register("name")}
                  placeholder={language === 'en' ? labels.name.en : labels.name.nl}
                  className={cn(
                    "w-full h-14 px-6 rounded-2xl bg-card border border-border/60 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium",
                    errors.name && "border-destructive/50 focus:ring-destructive"
                  )}
                />
                {errors.name && <p className="text-[10px] text-destructive font-black uppercase tracking-widest ml-4">{errors.name.message}</p>}
              </div>

              <div className="space-y-1.5">
                <input
                  {...register("email")}
                  type="email"
                  placeholder={language === 'en' ? labels.email.en : labels.email.nl}
                  className={cn(
                    "w-full h-14 px-6 rounded-2xl bg-card border border-border/60 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium",
                    errors.email && "border-destructive/50 focus:ring-destructive"
                  )}
                />
                {errors.email && <p className="text-[10px] text-destructive font-black uppercase tracking-widest ml-4">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-1.5">
              <input
                {...register("subject")}
                placeholder={language === 'en' ? labels.subject.en : labels.subject.nl}
                className={cn(
                  "w-full h-14 px-6 rounded-2xl bg-card border border-border/60 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium",
                  errors.subject && "border-destructive/50 focus:ring-destructive"
                )}
              />
              {errors.subject && <p className="text-[10px] text-destructive font-black uppercase tracking-widest ml-4">{errors.subject.message}</p>}
            </div>

            <div className="space-y-1.5">
              <textarea
                {...register("message")}
                placeholder={language === 'en' ? labels.message.en : labels.message.nl}
                rows={5}
                className={cn(
                  "w-full p-6 rounded-2xl bg-card border border-border/60 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium resize-none",
                  errors.message && "border-destructive/50 focus:ring-destructive"
                )}
              />
              {errors.message && <p className="text-[10px] text-destructive font-black uppercase tracking-widest ml-4">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={cn(
                "w-full h-16 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all",
                status === 'idle' && "bg-primary text-primary-foreground hover:opacity-90 shadow-lg",
                status === 'loading' && "bg-muted text-muted-foreground",
                status === 'success' && "bg-green-500 text-white",
                status === 'error' && "bg-destructive text-destructive-foreground"
              )}
            >
              {status === 'idle' && (
                <>
                   {language === "en" ? content.cta.en : content.cta.nl}
                   <ArrowRight className="size-5" />
                </>
              )}
              {status === 'loading' && (
                <>
                   <Loader2 className="size-5 animate-spin" />
                   {language === "en" ? content.loading.en : content.loading.nl}
                </>
              )}
              {status === 'success' && (
                <>
                   <CheckCircle2 className="size-5" />
                   {language === "en" ? content.success.en : content.success.nl}
                </>
              )}
              {status === 'error' && (
                <>
                   <AlertCircle className="size-5" />
                   {language === "en" ? content.error.en : content.error.nl}
                </>
              )}
            </button>

            <AnimatePresence>
               {status === 'error' && errorMessage && (
                 <motion.p
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0 }}
                   className="text-center text-xs font-bold text-destructive"
                 >
                   {errorMessage}
                 </motion.p>
               )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
