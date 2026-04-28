"use client";

import { motion } from "framer-motion";
import PopIn from "@/components/anim/PopIn";
import CVModal from "@/components/CVModal";

interface AboutProps {
  cvOpen: boolean;
  setCvOpen: (open: boolean) => void;
}

export default function About({ cvOpen, setCvOpen }: AboutProps) {
  return (
    <section id="about" className="pt-4 pb-0 md:py-20 relative z-10 px-3 md:px-6">
      <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
      <div className="max-w-6xl mx-auto">
        <PopIn>
        {/* Stats Row - Updated to match user request */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-16">
             <StatCard number="50+" label="Certifications" />
             <StatCard number="1+" label="Experience" />
             <StatCard number="10+" label="Projects" />
        </div>

        {/* Content Layout - Split: Bio Text (Left) & Contact Details (Right) */}
        <div className="glass-card rounded-[1.5rem] md:rounded-[3rem] p-4 md:p-12 border border-black/5 dark:border-white/10 relative overflow-hidden backdrop-blur-xl bg-white/60 dark:bg-[#0a0a0a]/60">
             
             {/* Header */}
             <div className="mb-4 md:mb-10">
                <span className="inline-block py-0.5 px-2 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2 md:mb-4">
                    🧐 About Me
                </span>
                <h2 className="text-xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-syne leading-tight break-words">
                    Detailed <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">Overview</span>
                </h2>
             </div>


             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-12">
                
                {/* Left Column: Bio Text */}
                <div className="lg:col-span-2 space-y-3 md:space-y-8">
                    <h2 className="text-[10px] md:text-sm font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">Biography</h2>
                    <div className="space-y-2 md:space-y-6 text-slate-700 dark:text-slate-300 text-xs md:text-lg leading-relaxed font-medium text-justify hyphens-auto">
                        <p>
                            Being an <span className="text-slate-900 dark:text-white font-bold">Undergrad Student</span> at <span className="text-slate-900 dark:text-white">IPS Academy</span>, I am currently exploring the field of <span className="text-slate-900 dark:text-white">Data Science</span> and <span className="text-slate-900 dark:text-white">Artificial Intelligence</span>.
                        </p>
                        <p className="hidden md:block">
                            I have always been fascinated by the idea of how machines can learn and make decisions. This curiosity led me to explore the field of <span className="text-violet-600 dark:text-violet-300">Machine Learning</span> and <span className="text-violet-600 dark:text-violet-300">Deep Learning</span>.
                        </p>
                        <p className="hidden md:block">
                            I am a quick learner and always ready to learn new technologies. I strongly believe in the power of consistency and hard work.
                        </p>
                    </div>

                    <div className="pt-1 md:pt-4">
                        <button
                            onClick={() => setCvOpen(true)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-pink-300 to-violet-300 text-black font-bold text-xs md:text-lg shadow-lg hover:shadow-violet-500/20 hover:-translate-y-1 transition-all"
                        >
                            View CV
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                        </button>
                    </div>
                </div>

                {/* Right Column: Contact Details Grid - 2 cols on mobile */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-8 lg:pl-8 lg:border-l border-black/5 dark:border-white/10">
                    
                    <div>
                        <p className="text-[9px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mb-0.5 md:mb-2">Name</p>
                        <p className="text-sm md:text-xl text-slate-900 dark:text-white font-bold font-syne">Atul Tiwari</p>
                    </div>

                    <div>
                        <p className="text-[9px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mb-0.5 md:mb-2">Phone</p>
                        <p className="text-xs md:text-base text-slate-900 dark:text-white font-bold tracking-wide">+91 78287 06954</p>
                    </div>

                    <div>
                        <p className="text-[9px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mb-0.5 md:mb-2">Email</p>
                        <a href="mailto:atultiwari997721@gmail.com" className="text-[10px] md:text-base text-slate-900 dark:text-white font-bold hover:text-violet-600 dark:hover:text-violet-400 transition-colors break-all">
                            atultiwari997721@gmail.com
                        </a>
                    </div>

                    <div>
                        <p className="text-[9px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mb-0.5 md:mb-2">Location</p>
                        <p className="text-xs md:text-base text-slate-900 dark:text-white font-bold">Indore, MP India</p>
                    </div>

                </div>

             </div>
        </div>
        </PopIn>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string, label: string }) {
  return (
    <div className="glass-card p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-center hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group border border-black/5 dark:border-white/10">
      <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-1 md:mb-2 font-syne group-hover:scale-110 transition-transform duration-300">
        {number}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px] md:text-sm leading-tight">
        {label}
      </p>
    </div>
  );
}
