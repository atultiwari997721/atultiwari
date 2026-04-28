"use client";

import { motion } from "framer-motion";

import PopIn from "@/components/anim/PopIn";

const education = [
    {
        id: 1,
        date: "2024 - 2028 (Pursuing)",
        title: "B.Tech in Artificial Intelligence & Machine Learning",
        institution: "IPS Academy, Indore",
        description: "Currently pursuing B.Tech in AI & ML, exploring the frontiers of machine intelligence, deep learning, and modern web development.",
        color: "bg-violet-500",
    },
    {
        id: 2,
        date: "2024",
        title: "Class 12th (PCM)",
        institution: "Sarla Higher Secondary School, Maihar",
        description: "Completed Higher Secondary Education in Physics, Chemistry & Mathematics. Scored 83%.",
        color: "bg-blue-500",
    },
     {
        id: 3,
        date: "2022",
        title: "Class 10th",
        institution: "Sarla Higher Secondary School, Maihar",
        description: "Completed High School Education. Scored 87%.",
        color: "bg-pink-500",
    },
];

const workExperience = [
  {
    id: 1,
    role: "Baja Team Leader",
    company: "IPS Academy, Indore",
    date: "Present",
    description:
      "Leading the Baja SAE team — managing engineering design, team coordination, and competition preparation for the all-terrain vehicle project.",
    color: "bg-blue-500",
  },
  {
    id: 2,
    role: "Class Representative",
    company: "IPS Academy, Indore",
    date: "2022 - Present",
    description:
      "Serving as the bridge between students and faculty, coordinating academic activities and resolving student grievances effectively.",
    color: "bg-purple-500",
  },
  {
    id: 3,
    role: "Software Club Head Member",
    company: "IPS Academy, Indore",
    date: "2023 - Present",
    description:
      "Leading the Software Club, organizing hackathons, coding workshops, and fostering a culture of innovation and technical excellence on campus.",
    color: "bg-pink-500",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-20 relative z-10 px-6 md:px-6">
      <div className="max-w-6xl mx-auto">
        <PopIn>
        {/* Header Section */}
        <div className="mb-12 md:mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-4">
            ✨ Resume
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white font-syne leading-tight mb-8">
            Education and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 dark:from-pink-300 dark:to-violet-300">
              leadership roles
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-3xl font-medium border-l-4 border-violet-500 pl-6 italic">
            "Education is the most powerful weapon which you can use to change the world." — Nelson Mandela
          </p>
        </div>

        {/* Stacked Layout */}
        <div className="flex flex-col gap-20">
            
            {/* Education Section - Horizontal Rows */}
            <div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10 border-b border-slate-200 dark:border-white/10 pb-6 flex items-center gap-4">
                    My education
                </h3>
                
                <div className="flex flex-col">
                     {education.map((item, index) => (
                        <div key={item.id} className="group py-8 border-b border-slate-200 dark:border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                            {/* Date Column */}
                            <div className="md:col-span-3">
                                <span className="text-lg font-medium text-slate-500 dark:text-slate-400 font-syne">{item.date}</span>
                            </div>
                            
                            {/* Main Info Column */}
                            <div className="md:col-span-5">
                                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors font-syne">
                                    {item.title}
                                </h4>
                                <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">{item.institution}</p>
                            </div>

                            {/* Description Column */}
                            <div className="md:col-span-4">
                                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                     ))}
                </div>
            </div>

            {/* Work Experience Section - Vertical List (Full Width) */}
            <div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
                    Leadership Roles
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                     {workExperience.map((item, index) => (
                        <div key={item.id} className="relative pl-8 md:pl-12 group">
                             <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-white/10 group-hover:bg-pink-500 transition-colors"></div>
                             <span className={`absolute -left-[4px] top-2 w-2.5 h-2.5 rounded-full ${item.color} ring-4 ring-white dark:ring-[#0a0a0d]`}></span>
                             
                             <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/10 hover:border-pink-500/30 transition-all hover:-translate-y-1">
                                <span className="inline-block px-3 py-1 rounded-full bg-white dark:bg-black/20 text-xs font-bold text-slate-500 mb-4">{item.date}</span>
                                <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors font-syne">{item.role}</h4>
                                <p className="text-slate-700 dark:text-slate-300 font-semibold text-sm mb-4">{item.company}</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
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
