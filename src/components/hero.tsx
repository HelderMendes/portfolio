import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
    const { language } = useLanguage();

    const text = {
        greeting: {
            en: "Hi, I'm Helder Mendes",
            nl: 'Hoi, ik ben Helder Mendes',
        },
        role: {
            en: 'Full Stack Developer × Graphic Designer',
            nl: 'Full Stack Developer × Grafisch Ontwerper',
        },
        tagline: {
            en: 'Combining 15+ years of design heritage with modern development to build performant, visually stunning digital experiences.',
            nl: 'De combinatie van 15+ jaar ontwerpervaring met moderne ontwikkeling om performante, visueel verbluffende digitale ervaringen te creëren.',
        },
        ctaWork: { en: 'View Work', nl: 'Bekijk Werk' },
        ctaCV: { en: 'Get CV', nl: 'Download CV' },
    };

    return (
        <section
            id='home'
            className='relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center overflow-hidden'
        >
            {/* Background Glow */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10' />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='max-w-4xl space-y-6 flex flex-col items-center'
            >
                <motion.div
                    transition={{ delay: 0.2 }}
                    className='relative w-[104px] h-[144px] mb-4 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl'
                >
                    <Image
                        src='/Helder03.png'
                        alt='Helder Mendes'
                        fill
                        className='object-cover'
                        priority
                    />
                </motion.div>

                <h2 className='text-primary font-light tracking-widest uppercase text-xl mb-4'>
                    {language === 'en' ? text.greeting.en : text.greeting.nl}
                </h2>

                <h1 className='text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground leading-[1.1]'>
                    {language === 'en' ? text.role.en : text.role.nl}
                </h1>

                <p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
                    {language === 'en' ? text.tagline.en : text.tagline.nl}
                </p>

                <div className='flex flex-wrap items-center justify-center gap-4 pt-8'>
                    <Button size='lg' className='rounded-full px-8 group'>
                        {language === 'en' ? text.ctaWork.en : text.ctaWork.nl}
                        <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </Button>
                    <Button
                        variant='outline'
                        size='lg'
                        className='rounded-full px-8'
                    >
                        <Download className='mr-2 h-4 w-4' />
                        {language === 'en' ? text.ctaCV.en : text.ctaCV.nl}
                    </Button>
                </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className='absolute bottom-12 left-1/2 -translate-x-1/2'
            >
                <div className='w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2'>
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className='w-1.5 h-1.5 bg-primary rounded-full'
                    />
                </div>
            </motion.div>
        </section>
    );
}
