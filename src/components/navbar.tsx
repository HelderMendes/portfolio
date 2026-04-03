"use client"

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/components/language-provider';
import { Button, buttonVariants } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const navItems = [
    { name: { en: 'Home', nl: 'Home' }, href: '#home' },
    { name: { en: 'About', nl: 'Over Mij' }, href: '#about' },
    { name: { en: 'Projects', nl: 'Projecten' }, href: '#projects' },
    { name: { en: 'Resume', nl: 'CV' }, href: '#resume' },
    { name: { en: 'Contact', nl: 'Contact' }, href: '#contact' },
];

export function Navbar() {
    const { setTheme, theme } = useTheme();
    const { language, setLanguage } = useLanguage();
    const [mounted, setMounted] = React.useState(false);
    
    React.useEffect(() => {
        setMounted(true);
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    if (!mounted) return null;

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='fixed top-4 left-0 right-0 z-50 flex justify-center px-4'
        >
            <nav className='relative flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-md border border-border/50 rounded-full shadow-lg max-w-fit transition-all hover:border-primary/50 overflow-hidden min-h-[56px]'>
                {/* Scroll Progress Indicator */}
                <motion.div
                    className='absolute bottom-0 left-0 h-[3px] bg-primary'
                    style={{
                        width: '100%',
                        scaleX,
                        transformOrigin: '0%',
                    }}
                />

                {/* Desktop Menu - visible on md+ */}
                <div className='hidden md:flex items-center gap-1 px-4'>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'font-medium transition-colors uppercase font-sans text-xs tracking-widest px-3 py-2 rounded-full hover:bg-primary/10 hover:text-primary text-foreground'
                            )}
                        >
                            {language === 'en' ? item.name.en : item.name.nl}
                        </Link>
                    ))}
                </div>

                <div className='flex items-center gap-1 border-l border-border pl-2 ml-2'>
                    {/* Language Toggle */}
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className={cn(
                                buttonVariants({
                                    variant: 'ghost',
                                    size: 'icon',
                                }),
                                'h-8 w-8 rounded-full',
                            )}
                        >
                            <Languages className='h-4 w-4' />
                            <span className='sr-only'>Toggle language</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                            <DropdownMenuItem
                                onClick={() => setLanguage('en')}
                                className='cursor-pointer'
                            >
                                English {language === 'en' && '✓'}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setLanguage('nl')}
                                className='cursor-pointer'
                            >
                                Nederlands {language === 'nl' && '✓'}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Theme Toggle */}
                    <Button
                        variant='ghost'
                        size='icon'
                        className='h-8 w-8 rounded-full'
                        onClick={() =>
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                        }
                    >
                        <Sun className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                        <Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                        <span className='sr-only'>Toggle theme</span>
                    </Button>
                </div>
            </nav>
        </motion.header>
    );
}
