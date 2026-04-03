import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Helder Mendes — Art Director & Full Stack Developer",
  description:
    "Senior Art Director turned Full Stack Developer. 15+ years crafting premium digital experiences for global brands like Philips and DaimlerChrysler.",
  keywords: ["Art Director", "Full Stack Developer", "Portfolio", "Next.js", "React", "Amsterdam"],
  authors: [{ name: "Helder Mendes" }],
  openGraph: {
    title: "Helder Mendes — Art Director & Full Stack Developer",
    description: "Senior Art Director turned Full Stack Developer. Premium digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
