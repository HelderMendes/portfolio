import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
    metadataBase: new URL('https://helderdesign.nl'),
    title: 'Helder Mendes | Design-Driven Frontend Engineer',
    description:
        'Senior Frontend Engineer & Former Art Director specializing in React, Next.js, and high-fidelity UI/UX. Building the bridge between design and code.',
    keywords: [
        'Frontend Engineer',
        'Full Stack Developer',
        'Art Director',
        'React',
        'Next.js',
        'UI/UX Design',
        'TypeScript',
        'Tailwind CSS',
        'Helder Mendes',
    ],
    authors: [{ name: 'Helder Mendes' }],
    creator: 'Helder Mendes',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://helderdesign.nl',
        title: 'Helder Mendes | Design-Driven Frontend Engineer',
        description:
            'Bridging the gap between high-end design and high-performance code with 15+ years of experience.',
        siteName: 'Helder Mendes Portfolio',
        images: [
            {
                url: '/Helder03.png',
                width: 1200,
                height: 630,
                alt: 'Helder Mendes - Design-Driven Frontend Engineer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Helder Mendes | Design-Driven Frontend Engineer',
        description:
            'Frontend Engineer specializing in React, Next.js, and polished UI/UX.',
        images: ['/Helder03.png'],
        creator: '@heldermendes',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

import { SidebarNav } from "@/components/sidebar-nav";
import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang='en' suppressHydrationWarning>
          <body
              className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
          >
              <ThemeProvider
                  attribute='class'
                  defaultTheme='dark'
                  enableSystem
                  disableTransitionOnChange
              >
                  <LanguageProvider>
                      <TooltipProvider>
                          <div className='relative min-h-screen'>
                              <Navbar />{' '}
                              <main className='relative'>{children}</main>
                          </div>
                      </TooltipProvider>
                  </LanguageProvider>
              </ThemeProvider>
          </body>
      </html>
  );
}
