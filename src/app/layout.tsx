import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

import { Providers } from "@/components/Providers";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Atul Tiwari | AI/ML Engineer & Web Developer Portfolio",
  description: "Portfolio of Atul Tiwari, B.Tech AI & ML student at IPS Academy Indore. Web Developer, AI/ML Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white dark:bg-[#050505] text-slate-900 dark:text-slate-200 selection:bg-violet-500/30 selection:text-violet-900 dark:selection:text-violet-200 overflow-x-hidden transition-colors duration-300`}
      >
        <Providers>
            <Navbar />
            {children}
        </Providers>
      </body>
    </html>
  );
}
