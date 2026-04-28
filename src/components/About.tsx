"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import PopIn from "@/components/anim/PopIn";

export default function About() {
  return (
    <section id="about" className="pt-10 pb-0 md:py-20 relative z-10 px-6 md:px-6">
      <div className="max-w-6xl mx-auto">
        <PopIn>
        {/* Stats Row - Updated to match user request */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-16">
             <StatCard number="50+" label="Certifications" />
             <StatCard number="1+" label="Year of Experience" />
             <StatCard number="10+" label="Projects Done" />
        </div>

        {/* Content Layout - Split: Bio Text (Left) & Contact Details (Right) */}
        <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border border-black/5 dark:border-white/10 relative overflow-hidden backdrop-blur-xl bg-white/60 dark:bg-[#0a0a0a]/60">
             
             {/* Header */}
             <div className="mb-8 md:mb-10">
                <span className="inline-block py-1 px-3 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-4">
                    🧐 About Me
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-syne leading-tight break-words">
                    Detailed <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">Overview</span>
                </h2>
             </div>


             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                
                {/* Left Column: Bio Text */}
                <div className="lg:col-span-2 space-y-6 md:space-y-8">
                    <h2 className="text-sm font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4">Biography</h2>
                    <div className="space-y-6 text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed font-medium text-justify hyphens-auto">
                        <p>
                            Being an <span className="text-slate-900 dark:text-white font-bold">Undergrad Student</span> at <span className="text-slate-900 dark:text-white">IPS Academy</span>, I am currently exploring the field of <span className="text-slate-900 dark:text-white">Data Science</span> and <span className="text-slate-900 dark:text-white">Artificial Intelligence</span>.
                        </p> 
                        <p>
                            I have always been fascinated by the idea of how machines can learn and make decisions. This curiosity led me to explore the field of <span className="text-violet-600 dark:text-violet-300">Machine Learning</span> and <span className="text-violet-600 dark:text-violet-300">Deep Learning</span>.
                        </p>
                        <p>
                            I am a quick learner and always ready to learn new technologies. I strongly believe in the power of consistency and hard work.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link 
                            href="/resume" 
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-300 to-violet-300 text-black font-bold text-lg shadow-lg hover:shadow-violet-500/20 hover:-translate-y-1 transition-all"
                        >
                            View CV 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Contact Details Grid */}
                <div className="grid grid-cols-1 gap-8 lg:pl-8 lg:border-l border-black/5 dark:border-white/10">
                    
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">Name</p>
                        <p className="text-xl text-slate-900 dark:text-white font-bold font-syne">Atul Tiwari</p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">Phone</p>
                        <p className="text-base text-slate-900 dark:text-white font-bold tracking-wide">+91 78287 06954</p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">Email</p>
                        <a href="mailto:atultiwari997721@gmail.com" className="text-base text-slate-900 dark:text-white font-bold hover:text-violet-600 dark:hover:text-violet-400 transition-colors break-all">
                            atultiwari997721@gmail.com
                        </a>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">Location</p>
                        <p className="text-base text-slate-900 dark:text-white font-bold">Indore, MP India</p>
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
    <div className="glass-card p-8 rounded-[2rem] text-center hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group border border-black/5 dark:border-white/10">
      <h3 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-2 font-syne group-hover:scale-110 transition-transform duration-300">
        {number}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-sm">
        {label}
      </p>
    </div>
  );
}
