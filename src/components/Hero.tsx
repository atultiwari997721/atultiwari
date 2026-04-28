
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Scene from "./canvas/Scene";
import ParticleWave from "./canvas/ParticleWave";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  const whatsappUrl = "https://wa.me/917828706954?text=Hi%20Atul%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20work%20together!";

  return (
    <section id="home" className="relative w-full py-6 pt-8 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-20 opacity-5 mix-blend-multiply dark:mix-blend-normal">
         {/* <Scene>
            <ParticleWave />
         </Scene> */}
      </div>

      <div className="max-w-[1400px] w-full grid grid-cols-1 gap-8 relative z-10">


        {/* Main Hero Content */}
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-4 relative w-full">
            
            {/* Mobile-only avatar */}
            <div className="lg:hidden mb-4 flex justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-violet-500/30 shadow-xl shadow-violet-500/20 ring-4 ring-white/10">
                <img
                  src="/assets/avatar.png"
                  alt="Atul Tiwari"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Top Badge */}
             <div className="mb-3 md:mb-8 animate-fade-in-up">
                <span className="inline-flex items-center gap-2 px-6 py-2 bg-white/60 dark:bg-white/5 rounded-full text-slate-600 dark:text-slate-300 font-bold text-xs uppercase tracking-widest shadow-sm border border-black/5 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-colors cursor-default backdrop-blur-md">
                    <span className="text-yellow-500 text-lg">✨</span> Let&apos;s Meet!
                </span>
            </div>

            {/* Main Headline */}
            <div className="w-full mb-4 md:mb-12 relative z-10 text-center lg:text-left break-words overflow-visible">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tighter font-syne uppercase break-words hyphens-auto max-w-[100%]">
                    I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-500 to-indigo-500 dark:from-violet-300 dark:via-pink-300 dark:to-white pb-2">Atul Tiwari</span> <br />
                    <span className="block mt-2 lg:mt-2">
                        An <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-300 dark:to-white">AI/ML Engineer</span>
                    </span>
                    <span className="block mt-1 text-slate-500 dark:text-slate-400">
                        &amp; Web Developer
                    </span>
                </h1>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-6 items-center justify-center lg:justify-start mb-4 md:mb-8 relative z-10 w-full sm:w-auto">
                <div className="flex flex-wrap gap-2 md:gap-4 justify-center lg:justify-start">
                    <a href="#github-projects" className="group px-5 py-2.5 md:px-8 md:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm md:text-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-xl shadow-slate-900/10 dark:shadow-white/5 hover:-translate-y-1 flex items-center gap-2">
                        My Works <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <a href="/Atul_Tiwari_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 md:px-8 md:py-4 bg-transparent text-slate-900 dark:text-white rounded-full font-bold text-sm md:text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all shadow-md border border-black/10 dark:border-white/20 hover:-translate-y-1 flex items-center gap-2">
                        View CV <span className="text-base md:text-xl">↗</span>
                    </a>
                </div>
            </div>
            
            {/* Scroll Indicator - Bottom Right */}
            <div className="absolute right-0 bottom-10 hidden lg:flex items-center justify-center">
                 <div className="relative w-32 h-32 flex items-center justify-center">
                    {/* Rotating Text - Rotates only on scroll */}
                    <motion.div 
                        className="absolute inset-0"
                        style={{ rotate }}
                    >
                        <svg viewBox="0 0 100 100" width="128" height="128">
                            <defs>
                                <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text fontSize="11" fontWeight="bold" className="fill-slate-900 dark:fill-white" letterSpacing="2">
                                <textPath xlinkHref="#circle">
                                    SCROLL FOR MORE • SCROLL FOR MORE •
                                </textPath>
                            </text>
                        </svg>
                    </motion.div>
                    {/* Arrow Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-900 dark:text-white">
                        <span className="text-2xl animate-bounce">↓</span>
                    </div>
                 </div>
            </div>

        </div>

      </div>
    </section>
  );
}

function SocialBtn({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <a href={href} target="_blank" className="p-3 bg-white/5 rounded-2xl shadow-sm hover:shadow-violet-500/20 hover:scale-110 hover:text-violet-400 transition-all border border-white/10 text-slate-400">
            {icon}
        </a>
    )
}

function Stat({ number, label }: { number: string, label: string }) {
    return (
        <div>
            <span className="block text-3xl font-bold text-white font-syne">{number}</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</span>
        </div>
    )
}
