"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className={`fixed bottom-4 md:bottom-auto md:top-6 inset-x-0 z-50 flex justify-center px-2 pointer-events-none transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}>
      <div className="pointer-events-auto rounded-full px-3 py-2.5 md:px-6 md:py-3 shadow-xl shadow-violet-500/5 flex items-center justify-between gap-2 md:gap-6 w-full max-w-[95vw] md:w-auto md:max-w-max bg-white/80 dark:bg-[#121212]/80 border border-black/5 dark:border-white/10 backdrop-blur-2xl transition-all duration-300">
        <div className="flex flex-1 md:flex-none items-center justify-evenly md:justify-center gap-1 md:gap-6">
            {["Home", "About", "Experience", "Contact"].map((link) => (
            <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[11px] xs:text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors uppercase tracking-tight"
            >
                {link}
            </Link>
            ))}
            <Link
                href="#github-projects"
                className="text-[11px] xs:text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors uppercase tracking-tight"
            >
                Projects
            </Link>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4 pl-2 border-l border-black/5 dark:border-white/10">
             <a
            href="#contact"
            className="hidden xs:block bg-violet-600 text-white px-3 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] xs:text-xs md:text-sm font-bold shadow-lg shadow-violet-600/20 hover:bg-violet-700 transition-all whitespace-nowrap"
            >
            Let's Talk
            </a>
            <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
