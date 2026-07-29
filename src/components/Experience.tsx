"use client";

import { motion } from "framer-motion";

import PopIn from "@/components/anim/PopIn";

const education = [
    {
        id: 1,
        date: "Expected 07/2028",
        title: "B.Tech in Artificial Intelligence & Machine Learning",
        institution: "IES IPS Academy | Indore, Madhya Pradesh",
        description: "Pursuing B.Tech in AI & ML. Exploring the frontiers of machine intelligence, deep learning, and modern web development.",
        color: "bg-violet-500",
    },
];

const workExperience = [
  {
    id: 1,
    role: "Artificial Intelligence Intern",
    company: "ABECSA Software Solutions | Indore, IN",
    date: "03/2026 - Current",
    description:
      "Developed NLP algorithms to analyze datasets. Engineered machine learning models for advanced data analysis (15% improvement in predictive accuracy). Visualized data using Tableau.",
    color: "bg-blue-500",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "ABECSA Software Solutions | Indore, IN",
    date: "05/2025 - Current",
    description:
      "Architected scalable web applications with MERN stack (25% faster load times). Engineered 10+ RESTful APIs. Collaborated in Agile sprints.",
    color: "bg-purple-500",
  },
  {
    id: 3,
    role: "Application Developer",
    company: "PanVel & MS Cafe",
    date: "01/2025 - 05/2025",
    description:
      "Built 3D interactive ordering web interface using Three.js (40% engagement boost). Architected core routing logic for ride-sharing mapping.",
    color: "bg-pink-500",
  },
  {
    id: 4,
    role: "Full Stack Developer",
    company: "S-mart",
    date: "10/2024 - 01/2025",
    description:
      "Automated repetitive workflows increasing team efficiency by 35%. Developed responsive front-end applications prioritizing mobile-first design.",
    color: "bg-green-500",
  },
  {
    id: 5,
    role: "Independent Technical Consultant",
    company: "Freelance | Indore, IN",
    date: "06/2024 - Current",
    description:
      "Delivered 20+ custom web applications and management systems for educational institutes. Digitized administrative workflows (40% faster data processing).",
    color: "bg-orange-500",
  },
  {
    id: 6,
    role: "Leadership & Involvement",
    company: "IES IPS Academy",
    date: "Present",
    description:
      "SAE BAJA Member, Head Boy (Student Body Representative).",
    color: "bg-red-500",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-6 md:py-20 relative z-10 px-3 md:px-6">
      <div className="max-w-6xl mx-auto">
        <PopIn>
        {/* Header Section */}
        <div className="mb-6 md:mb-20">
          <span className="inline-block py-0.5 px-2 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2 md:mb-4">
            ✨ Resume
          </span>
          <h2 className="text-2xl md:text-6xl font-extrabold text-slate-900 dark:text-white font-syne leading-tight mb-3 md:mb-8">
            Education and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 dark:from-pink-300 dark:to-violet-300">
              leadership roles
            </span>
          </h2>
          <p className="hidden md:block text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-3xl font-medium border-l-4 border-violet-500 pl-6 italic">
            "Education is the most powerful weapon which you can use to change the world." — Nelson Mandela
          </p>
        </div>

        {/* Stacked Layout */}
        <div className="flex flex-col gap-20">
            
            {/* Education Section - Horizontal Rows */}
            <div>
                <h3 className="text-lg md:text-4xl font-bold text-slate-900 dark:text-white mb-4 md:mb-10 border-b border-slate-200 dark:border-white/10 pb-3 md:pb-6 flex items-center gap-4">
                    My education
                </h3>
                
                <div className="flex flex-col">
                     {education.map((item, index) => (
                        <div key={item.id} className="group py-4 md:py-8 border-b border-slate-200 dark:border-white/10 grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-6 items-start">
                            {/* Date Column */}
                            <div className="md:col-span-3">
                                <span className="text-xs md:text-lg font-medium text-slate-500 dark:text-slate-400 font-syne">{item.date}</span>
                            </div>
                            
                            {/* Main Info Column */}
                            <div className="md:col-span-5">
                                <h4 className="text-sm md:text-2xl font-bold text-slate-900 dark:text-white mb-1 md:mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors font-syne">
                                    {item.title}
                                </h4>
                                <p className="text-slate-700 dark:text-slate-300 font-medium text-xs md:text-base mb-1">{item.institution}</p>
                            </div>

                            {/* Description Column */}
                            <div className="md:col-span-4">
                                <p className="hidden md:block text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                     ))}
                </div>
            </div>

            {/* Work Experience Section - Vertical List (Full Width) */}
            <div>
                <h3 className="text-lg md:text-4xl font-bold text-slate-900 dark:text-white mb-4 md:mb-10 border-b border-slate-200 dark:border-white/10 pb-3 md:pb-6">
                    Work Experience
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                     {workExperience.map((item, index) => (
                        <div key={item.id} className="relative pl-5 md:pl-12 group">
                             <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-white/10 group-hover:bg-pink-500 transition-colors"></div>
                             <span className={`absolute -left-[4px] top-2 w-2 h-2 rounded-full ${item.color} ring-2 ring-white dark:ring-[#0a0a0d]`}></span>
                             
                             <div className="bg-slate-50 dark:bg-white/5 p-3 md:p-6 rounded-xl md:rounded-2xl border border-slate-100 dark:border-white/10 hover:border-pink-500/30 transition-all hover:-translate-y-1">
                                <span className="inline-block px-2 py-0.5 rounded-full bg-white dark:bg-black/20 text-[10px] md:text-xs font-bold text-slate-500 mb-2 md:mb-4">{item.date}</span>
                                <h4 className="text-sm md:text-2xl font-bold text-slate-900 dark:text-white mb-1 md:mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors font-syne">{item.role}</h4>
                                <p className="text-slate-700 dark:text-slate-300 font-semibold text-xs md:text-sm mb-1 md:mb-4">{item.company}</p>
                                <p className="hidden md:block text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                             </div>
                        </div>
                     ))}
                </div>
            </div>

        </div>
        </PopIn>
      </div>
    </section>
  );
}
