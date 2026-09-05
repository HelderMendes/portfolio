'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/language-provider';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const text = {
    greeting: {
        en: "Hi, I'm Helder Mendes — Frontend Developer",
        nl: 'Hallo, ik ben Helder Mendes — Frontend Developer',
    },
    role: {
        en: 'Web Applications',
        nl: 'Web Applicaties',
    },
    tagline: {
        en: 'Frontend design & high-performance code',
        nl: 'Frontend design & high-performance code',
    },
    description: {
        en: 'Senior Frontend Engineer with full-stack reach and a 15+ year design heritage. I specialize in React, Next.js, and orchestrating the visual hierarchy of complex data ecosystems.',
        nl: 'Senior Frontend Developer met full-stack ervaring en een 15+ jaar design heritage. Ik specialiseer me in React, Next.js, en het orkestreren van de visuele hiërarchie van complexe data-ecosystemen.',
    },
    ctaWork: { en: 'View Work', nl: 'Bekijk werk' },
    ctaCV: { en: 'Get CV', nl: 'Download CV' },
};
const textExtra = {
    greeting: {
        en: 'The Design-Driven Frontend Engineer',
        nl: 'De Design-Driven Frontend Engineer',
    },
    role: { en: 'I build the bridge between', nl: 'Ik bouw de brug tussen' },
    tagline: {
        en: 'high-end design & high-performance code.',
        nl: 'high-end design & high-performance code.',
    },
    description: {
        en: 'Frontend Engineer & Former Art Director specializing in React, Next.js, and the visual hierarchy of complex data ecosystems.',
        nl: 'Frontend Engineer & Voormalig Art Director gespecialiseerd in React, Next.js en de visuele hiërarchie van complexe data-ecosystemen.',
    },
    ctaWork: { en: 'View Work', nl: 'Bekijk Werk' },
    ctaCV: { en: 'Get CV', nl: 'Download CV' },
};

export function Hero() {
    const { language } = useLanguage();

    return (
        <section
            id='home'
            className='relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 overflow-hidden'
        >
            {/* Background Glow */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse' />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className='max-w-4xl space-y-7 flex flex-col items-center text-center'
            >
                <motion.div
                    transition={{ delay: 0.2 }}
                    className='relative w-[104px] h-[144px] mb-4 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl transition-transform hover:scale-105'
                >
                    <Image
                        src='/Helder03.png'
                        alt='Helder Mendes'
                        fill
                        sizes='104px'
                        className='object-cover'
                        priority
                    />
                </motion.div>

                <div className='space-y-4'>
                    <h2 className='text-primary/80 font-light tracking-widest uppercase text-sm md:text-base mb-6'>
                        {language === 'en'
                            ? text.greeting.en
                            : text.greeting.nl}
                    </h2>

                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-12'>
                        {language === 'en' ? text.role.en : text.role.nl}
                        <span className='block text-primary/60'>
                            {language === 'en'
                                ? text.tagline.en
                                : text.tagline.nl}
                        </span>
                    </h1>
                </div>

                <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-loose font-medium bg-card/30 backdrop-blur-sm p-7 rounded-2xl border border-border/10 shadow-xl dark:bg-transparent dark:border-border/80'>
                    {language === 'en'
                        ? text.description.en
                        : text.description.nl}
                </p>

                <div className='flex flex-wrap items-center justify-center gap-4 pt-8'>
                    <Link
                        href='#projects'
                        className={cn(
                            buttonVariants({ size: 'lg' }),
                            'rounded-2xl px-8 font-bold group h-14 text-base bg-primary text-primary-foreground hover:opacity-90 transition-all',
                        )}
                    >
                        {language === 'en' ? text.ctaWork.en : text.ctaWork.nl}
                        <ArrowRight className='ml-2 size-5 transition-transform group-hover:translate-x-1' />
                    </Link>
                    <Link
                        href='/CV_HelderMendes_2024.pdf'
                        target='_blank'
                        className={cn(
                            buttonVariants({ variant: 'outline', size: 'lg' }),
                            'rounded-2xl px-8 font-bold h-14 text-base border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all',
                        )}
                    >
                        <Download className='mr-2 size-5 text-primary' />
                        {language === 'en' ? text.ctaCV.en : text.ctaCV.nl}
                    </Link>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className='absolute bottom-10 left-1/2 -translate-x-1/2'
            >
                <div className='w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2 backdrop-blur-sm'>
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className='w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.5)]'
                    />
                </div>
            </motion.div>
        </section>
    );
}
