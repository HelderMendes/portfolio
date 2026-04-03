'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import {
    Menu,
    Home,
    User,
    Briefcase,
    FileText,
    Mail,
    Sun,
    Moon,
    Languages,
} from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navigation = [
    { name: { en: 'Home', nl: 'Home' }, href: '#home', icon: Home },
    { name: { en: 'About', nl: 'Over Mij' }, href: '#about', icon: User },
    {
        name: { en: 'Projects', nl: 'Projecten' },
        href: '#projects',
        icon: Briefcase,
    },
    { name: { en: 'Resume', nl: 'CV' }, href: '#resume', icon: FileText },
    { name: { en: 'Contact', nl: 'Contact' }, href: '#contact', icon: Mail },
];

export function SidebarNav() {
    const { language, setLanguage } = useLanguage();
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className='md:hidden'>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger
                    render={
                        <Button
                            variant='ghost'
                            size='icon'
                            className='fixed top-4 left-4 z-50 h-10 w-10 rounded-full bg-background/60 backdrop-blur-md border border-border shadow-lg'
                        >
                            <Menu className='h-5 w-5' />
                            <span className='sr-only'>Toggle Menu</span>
                        </Button>
                    }
                />
                <SheetContent
                    side='left'
                    className='w-[85%] sm:w-[300px] p-0 border-r border-border bg-background'
                >
                    <div className='flex flex-col h-full'>
                        <div className='p-6 border-b border-border bg-muted/30'>
                            <div className='flex items-center gap-3'>
                                <div className='h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-heading font-black text-xl'>
                                    H
                                </div>
                                <div>
                                    <h2 className='font-heading font-bold text-foreground'>
                                        Helder Mendes
                                    </h2>
                                    <p className='text-[10px] uppercase tracking-widest text-primary font-bold'>
                                        Portfolio
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex-1 overflow-y-auto py-4'>
                            <div className='space-y-1 px-3'>
                                {navigation.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            'flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all text-muted-foreground hover:bg-primary/10 hover:text-primary',
                                        )}
                                    >
                                        <item.icon className='h-5 w-5' />
                                        {language === 'en'
                                            ? item.name.en
                                            : item.name.nl}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className='p-4 border-t border-border mt-auto bg-muted/10'>
                            <div className='grid grid-cols-2 gap-2'>
                                <Button
                                    variant='outline'
                                    size='sm'
                                    className='flex-1 rounded-lg gap-2 text-[10px] uppercase font-bold'
                                    onClick={() =>
                                        setTheme(
                                            theme === 'dark' ? 'light' : 'dark',
                                        )
                                    }
                                >
                                    {theme === 'dark' ? (
                                        <Sun className='h-3 w-3' />
                                    ) : (
                                        <Moon className='h-3 w-3' />
                                    )}
                                    {theme === 'dark'
                                        ? language === 'en'
                                            ? 'Light'
                                            : 'Licht'
                                        : language === 'en'
                                          ? 'Dark'
                                          : 'Donker'}
                                </Button>

                                <Button
                                    variant='outline'
                                    size='sm'
                                    className='flex-1 rounded-lg gap-2 text-[10px] uppercase font-bold'
                                    onClick={() =>
                                        setLanguage(
                                            language === 'en' ? 'nl' : 'en',
                                        )
                                    }
                                >
                                    <Languages className='h-3 w-3' />
                                    {language === 'en' ? 'NL' : 'EN'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
