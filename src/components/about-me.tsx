"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Code2, Layout, Award } from "lucide-react"

export function AboutMe() {
  const { language } = useLanguage();

  const AccentTxt = ({ children }: { children: React.ReactNode }) => (
      <strong className='font-semibold text-primary'>{children}</strong>
  );


  const content = {
      title: { en: 'The Visual Developer', nl: 'De Visuele Developer' },
      subtitle: {
          en: 'Where 15+ years of design heritage meet modern frontend excellence',
          nl: 'Waar 15+ jaar ontwerpervaring samenkomt met moderne frontend excellentie',
      },
      story: {
          en: (
              <>
                  I specialize in building the bridge between high-end design
                  and high-performance code. My journey as a former Art Director
                  for global leaders like <AccentTxt>Philips</AccentTxt> and{' '}
                  <AccentTxt>Mercedes</AccentTxt> gives me a unique lens: I
                  don't just build interfaces — I architect visual ecosystems
                  that scale.
              </>
          ),
          nl: (
              <>
                  Ik ben gespecialiseerd in het bouwen van de brug tussen
                  hoogwaardig design en hoogwaardige code. Mijn reis als
                  voormalig Art Director voor wereldwijde marktleiders als{' '}
                  <AccentTxt>Philips</AccentTxt> en{' '}
                  <AccentTxt>Mercedes</AccentTxt> geeft me een unieke lens: ik
                  bouw niet alleen interfaces; ik ontwerp visuele ecosystemen
                  die schalen.
              </>
          ),
      },
      philosophy: {
          en: (
              <>
                  Leading the <AccentTxt>openML.org migrations</AccentTxt>{' '}
                  platform proved my ability to transform complex scientific
                  data into accessible, elite-level UI. Whether it's Dockerized
                  microservices or pixel-perfect React components, my goal is
                  technical excellence that honors design integrity.
              </>
          ),
          nl: (
              <>
                  Het leiden van het <AccentTxt>openML.org migratie</AccentTxt>{' '}
                  platform bewees mijn vermogen om complexe wetenschappelijke
                  gegevens te transformeren naar toegankelijke UI op topniveau.
                  Of het nu gaat om gedockeriseerde microservices of
                  pixel-perfecte React-componenten, mijn doel is technische
                  uitmuntendheid met behoud van design-integriteit.
              </>
          ),
      },

      stats: [
          {
              label: { en: 'Years Experience', nl: 'Jaar Ervaring' },
              value: '15+',
              icon: Award,
          },
          {
              label: { en: 'Websites Built', nl: 'Websites Gebouwd' },
              value: '30+',
              icon: Layout,
          },
          {
              label: { en: 'Design Projects', nl: 'Design Projecten' },
              value: '50+',
              icon: Palette,
          },
          {
              label: { en: 'Modern Tech', nl: 'Moderne Tech' },
              value: 'Next.js',
              icon: Code2,
          },
      ],
  };

  return (
      <section
          id='about'
          className='py-24 px-4 bg-muted/30 relative overflow-hidden'
      >
          <div className='max-w-6xl mx-auto'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                  {/* Left: Text Content */}
                  <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className='space-y-6'
                  >
                      <div className='space-y-2'>
                          <h2 className='text-3xl md:text-4xl font-heading font-bold tracking-tight'>
                              {language === 'en'
                                  ? content.title.en
                                  : content.title.nl}
                          </h2>
                          <p className='text-primary font-medium text-lg italic'>
                              {language === 'en'
                                  ? content.subtitle.en
                                  : content.subtitle.nl}
                          </p>
                      </div>

                      <div className='space-y-4 text-muted-foreground leading-relaxed'>
                          <p>
                              {language === 'en'
                                  ? content.story.en
                                  : content.story.nl}
                          </p>
                          <p>
                              {language === 'en'
                                  ? content.philosophy.en
                                  : content.philosophy.nl}
                          </p>
                      </div>

                      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-4'>
                          {content.stats.map((stat, i) => (
                              <Card
                                  key={i}
                                  className='bg-background/50 border-none shadow-sm group hover:bg-primary transition-colors duration-300'
                              >
                                  <CardContent className='p-4 flex flex-col items-center text-center space-y-2'>
                                      <stat.icon className='h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors' />
                                      <div>
                                          <div className='text-xl font-bold group-hover:text-primary-foreground'>
                                              {stat.value}
                                          </div>
                                          <div className='text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-primary-foreground/80'>
                                              {language === 'en'
                                                  ? stat.label.en
                                                  : stat.label.nl}
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
                      className='grid grid-cols-2 gap-4'
                  >
                      <div className='space-y-4 pt-8'>
                          <motion.div
                              whileHover={{ y: -10 }}
                              className='relative aspect-3/4 rounded-md overflow-hidden shadow-lg border border-white/10'
                          >
                              <Image
                                  src='/project_websites/faect_lookout.png'
                                  alt='Faect Lookout'
                                  fill
                                  className='object-contain'
                              />
                          </motion.div>
                          <motion.div
                              whileHover={{ y: -10 }}
                              className='relative aspect-3/4 rounded-md overflow-hidden shadow-lg border border-white/10'
                          >
                              <Image
                                  src='/webDesign/emlinked_webdesign.png'
                                  alt='Emlinked Web Design'
                                  fill
                                  className='object-cover'
                              />
                          </motion.div>
                      </div>
                      <div className='space-y-4'>
                          <motion.div
                              whileHover={{ y: -10 }}
                              className='relative aspect-3/4 rounded-md overflow-hidden shadow-lg border border-white/10'
                          >
                              <Image
                                  src='/project_websites/openMLorg.png'
                                  alt='OpenML.org Migration'
                                  fill
                                  className='object-cover'
                              />
                          </motion.div>
                          <motion.div
                              whileHover={{ y: -10 }}
                              className='relative aspect-3/4 rounded-md overflow-hidden shadow-lg border border-white/10'
                          >
                              <Image
                                  src='/project_websites/luxe_and_tharros.png'
                                  alt='Luxe & Tharros'
                                  fill
                                  className='object-cover'
                              />
                          </motion.div>
                      </div>
                  </motion.div>
              </div>
          </div>
      </section>
  );
}
