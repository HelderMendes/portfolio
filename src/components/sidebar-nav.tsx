'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
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
import { Sheet, SheetContent } from '@/components/ui/sheet';
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

interface SidebarNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SidebarNav({ open, onOpenChange }: SidebarNavProps) {
    const { language, setLanguage } = useLanguage();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side='left'
                className='w-[85%] sm:w-[320px] p-0 border-r border-border bg-background'
            >
                <div className='flex flex-col h-full'>
                    <div className='p-8 border-b border-border bg-muted/20'>
                        <div className='flex items-center gap-4'>
                            <div className='h-12 w-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-heading font-black text-2xl shadow-xl shadow-primary/20'>
                                H
                            </div>
                            <div>
                                <h2 className='font-heading font-black text-xl text-foreground uppercase italic tracking-tight'>
                                    Helder Mendes
                                </h2>
                                <p className='text-[10px] uppercase tracking-[.3em] text-primary font-black opacity-60'>
                                    Design Driven
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 overflow-y-auto py-8'>
                        <div className='space-y-2 px-4'>
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => onOpenChange(false)}
                                    className={cn(
                                        'flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all text-muted-foreground hover:bg-primary/10 hover:text-primary active:scale-95',
                                    )}
                                >
                                    <item.icon className='h-5 w-5 opacity-60' />
                                    {language === 'en'
                                        ? item.name.en
                                        : item.name.nl}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className='p-6 border-t border-border mt-auto bg-muted/10 space-y-4'>
                        <div className='grid grid-cols-2 gap-3'>
                            <Button
                                variant='outline'
                                size='lg'
                                className='rounded-2xl gap-3 text-[10px] uppercase font-black tracking-widest border-border/50 h-12'
                                onClick={() =>
                                    setTheme(
                                        theme === 'dark' ? 'light' : 'dark',
                                    )
                                }
                            >
                                {theme === 'dark' ? (
                                    <Sun className='h-4 w-4' />
                                ) : (
                                    <Moon className='h-4 w-4' />
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
                                size='lg'
                                className='rounded-2xl gap-3 text-[10px] uppercase font-black tracking-widest border-border/50 h-12'
                                onClick={() =>
                                    setLanguage(
                                        language === 'en' ? 'nl' : 'en',
                                    )
                                }
                            >
                                <Languages className='h-4 w-4' />
                                {language === 'en' ? 'NL' : 'EN'}
                            </Button>
                        </div>
                        <p className="text-[9px] text-center uppercase tracking-widest font-black text-muted-foreground/30">
                           © 2024 Helder Mendes
                        </p>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
