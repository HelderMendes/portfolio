'use client';
export const runtime = 'nodejs';

import * as React from 'react';
import Link from 'next/link';
import { Moon, Sun, Languages, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/components/language-provider';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { motion, useScroll, useSpring } from 'framer-motion';

export function Navbar() {
    const { setTheme, theme } = useTheme();
    const { language, setLanguage } = useLanguage();
    const { scrollYProgress } = useScroll();
    const [isOpen, setIsOpen] = React.useState(false);

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const navItems = [
        { name: { en: 'Home', nl: 'Home' }, href: '#home' },
        { name: { en: 'About', nl: 'Over Mij' }, href: '#about' },
        { name: { en: 'Projects', nl: 'Projecten' }, href: '#projects' },
        { name: { en: 'Resume', nl: 'CV' }, href: '#resume' },
        { name: { en: 'Contact', nl: 'Contact' }, href: '#contact' },
    ];

    const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
        <>
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => mobile && setIsOpen(false)}
                    className={cn(
                        'font-medium transition-colors uppercase font-sans',
                        mobile 
                            ? 'text-2xl py-4 border-b border-border/50 text-left w-full hover:text-primary' 
                            : 'hover:text-muted-foreground px-2 py-1 text-primary/70'
                    )}
                >
                    {language === 'en' ? item.name.en : item.name.nl}
                </Link>
            ))}
        </>
    );

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='fixed top-4 left-0 right-0 z-50 flex justify-center px-4'
        >
            <nav className='relative flex items-center gap-2 px-4 py-2 bg-background/60 backdrop-blur-md border border-border rounded-full shadow-lg max-w-fit transition-all hover:border-primary/50 overflow-hidden min-h-[56px]'>
                {/* Scroll Progress Indicator */}
                <motion.div
                    className='absolute bottom-0 left-0 h-[20px] bg-primary'
                    style={{
                        width: '100%',
                        scaleX,
                        transformOrigin: '0%',
                    }}
                />

                {/* Mobile Menu Button - lg:hidden */}
                <div className="lg:hidden flex items-center px-2">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger 
                            render={
                                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" />
                            }
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </SheetTrigger>
                        <SheetContent side="top" className="h-[90vh] flex flex-col pt-20 px-10">
                            <SheetHeader className="sr-only">
                                <SheetTitle>Navigation Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-2">
                                <NavLinks mobile />
                            </nav>
                            
                            <div className="mt-auto py-10 flex flex-col gap-6">
                                <div className="flex items-center justify-between text-sm uppercase tracking-widest text-primary/60 border-t border-border/50 pt-6">
                                    <span>Helder Mendes Portfolio</span>
                                    <span>2026</span>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop Menu - hidden lg:flex */}
                <div className='hidden lg:flex items-center gap-6 px-8'>
                    <NavLinks />
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
