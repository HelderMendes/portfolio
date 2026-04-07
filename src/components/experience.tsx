"use client"

import { useLanguage } from "@/components/language-provider"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { motion } from 'framer-motion';

export function Experience() {
  const { language } = useLanguage()

  const sections = {
    experience: { en: "Experience", nl: "Werkervaring" },
    subtitle: { 
      en: "A journey from editorial design to modern engineering.",
      nl: "Een reis van redactioneel ontwerp naar moderne engineering."
    }
  }

  return (
      <section id='resume' className='py-32 px-6 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-end'>
              <div className='space-y-6'>
                  <div className='w-20 h-1.5 bg-primary rounded-full' />
                  <h2 className='text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase italic text-foreground'>
                      {language === 'en'
                          ? sections.experience.en
                          : sections.experience.nl}
                  </h2>
              </div>
              <div className='max-w-xl'>
                  <p className='text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium border-l-2 border-primary/20 pl-8'>
                      {language === 'en'
                          ? 'A 30-year evolution from high-end Art Direction for global market leaders to architecting modern, high-performance web ecosystems.'
                          : 'Een 30-jarige evolutie van high-end Art Direction voor wereldwijde marktleiders naar de architectuur van moderne, hoogwaardige web-ecosystemen.'}
                  </p>
              </div>
          </div>
          <div className='w-full'>
              <ExperienceTimeline />
          </div>

          {/* Language Proficiency (Critical for NL Market) */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='mt-20 pt-12 border-t border-border/50'
          >
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  <div className='space-y-2'>
                      <h4 className='text-xs font-black uppercase tracking-widest text-primary'>
                          Nederlands
                      </h4>
                      <p className='text-lg font-bold text-foreground'>
                          NT2 Level
                      </p>
                      <p className='text-[10px] uppercase font-black text-muted-foreground'>
                          Workplace Fluent
                      </p>
                  </div>
                  <div className='space-y-2'>
                      <h4 className='text-xs font-black uppercase tracking-widest text-primary'>
                          English
                      </h4>
                      <p className='text-lg font-bold text-foreground'>
                          Mastery
                      </p>
                      <p className='text-[10px] uppercase font-black text-muted-foreground'>
                          Professional Proficiency
                      </p>
                  </div>
                  <div className='space-y-2'>
                      <h4 className='text-xs font-black uppercase tracking-widest text-primary'>
                          Português
                      </h4>
                      <p className='text-lg font-bold text-foreground'>
                          Native
                      </p>
                      <p className='text-[10px] uppercase font-black text-muted-foreground'>
                          Mother Tongue
                      </p>
                  </div>
              </div>
          </motion.div>
      </section>
  );
}
