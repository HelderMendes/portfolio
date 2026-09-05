'use client';

import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Clients() {
    const { language } = useLanguage();

    const sections = {
        skills: { en: 'Clients', nl: 'Klanten' },
        subtitle: {
            en: 'The tools and technologies I use to build robust digital solutions.',
            nl: 'De tools en technologieën die ik gebruik om robuuste digitale oplossingen te bouwen.',
        },
    };

    return (
        <section id="clients" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="space-y-4 mb-16 text-center md:text-left">
                <h2 className="text-4xl font-heading font-bold tracking-tight opacity-20">
                    {language === 'en' ? 'Trusted By' : 'Vertrouwd Door'}
                </h2>
                <div className="w-20 h-1.5 bg-primary/20 rounded-full mx-auto md:mx-0" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full"
            >
                <div className="flex flex-wrap items-center justify-around gap-12 opacity-40 contrast-200 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {[
                        '/logos_huisStyle/stadshuis_logo.jpg',
                        '/logos_huisStyle/DDFestival_logo.jpg',
                        '/logos_huisStyle/cultuurkust_logo.jpg',
                        '/logos_huisStyle/MonkeyMotions_logo.jpg',
                        '/logos_huisStyle/LusoFlavours_logo.jpg',
                        '/logos_huisStyle/Unitrip_logo.jpg'
                    ].map((logo, i) => (
                        <div key={i} className="relative h-12 w-32 filter">
                            <Image
                                src={logo}
                                alt="Client Logo"
                                fill
                                sizes="128px"
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
