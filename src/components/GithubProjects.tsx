"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Globe } from "lucide-react";

const GITHUB_PROJECTS = [
  {
    name: "Advance Career Academy",
    description: "A full-featured coaching centre website with WhatsApp enquiry integration, faculty highlights, gallery, and mobile-first design.",
    repo: "https://github.com/atultiwari997721/AdvanceCareerAcademy",
    live: "https://advance-career-academy.vercel.app",
    language: "JavaScript",
    color: "from-blue-500 to-cyan-500",
    tags: ["Next.js", "JavaScript", "Vercel"],
  },
  {
    name: "Video Conferencing App",
    description: "A real-time video conferencing application built with modern web technologies for seamless online meetings.",
    repo: "https://github.com/atultiwari997721/video-confrensing_app",
    live: null,
    language: "TypeScript",
    color: "from-violet-500 to-purple-600",
    tags: ["TypeScript", "WebRTC", "Real-time"],
  },
  {
    name: "KittyAI",
    description: "An AI-powered interactive web application featuring smart chatbot capabilities and modern UI/UX design.",
    repo: "https://github.com/atultiwari997721/kittyai",
    live: "https://ai-yqvf.vercel.app",
    language: "HTML",
    color: "from-pink-500 to-rose-500",
    tags: ["AI", "HTML/CSS", "JavaScript"],
  },
  {
    name: "PanVel E-Commerce",
    description: "A complete e-commerce platform with product listings, cart management, and a clean shopping experience.",
    repo: "https://github.com/atultiwari997721/PanVel",
    live: "https://panvel-six.vercel.app",
    language: "JavaScript",
    color: "from-orange-400 to-yellow-500",
    tags: ["E-Commerce", "React", "Vercel"],
  },
  {
    name: "Fakhri Clinic Bhopal",
    description: "Professional medical clinic website for Fakhri Clinic Bhopal with appointment booking and service showcase.",
    repo: "https://github.com/atultiwari997721/FakhriClinic-Bhopal",
    live: "https://fakhriclinic-bhopal.vercel.app",
    language: "HTML",
    color: "from-teal-500 to-emerald-500",
    tags: ["HTML/CSS", "Healthcare", "Responsive"],
  },
  {
    name: "ABECSA Web Services",
    description: "Business services website featuring web development packages, SEO tools, and digital marketing offerings.",
    repo: "https://github.com/atultiwari997721/abecsa",
    live: "https://abecsa.vercel.app",
    language: "JavaScript",
    color: "from-indigo-500 to-blue-600",
    tags: ["Business", "JavaScript", "Next.js"],
  },
  {
    name: "3D Portfolio",
    description: "An interactive 3D portfolio website showcasing projects and skills with immersive Three.js animations.",
    repo: "https://github.com/atultiwari997721/3d_portfolio",
    live: null,
    language: "JavaScript",
    color: "from-fuchsia-500 to-pink-600",
    tags: ["Three.js", "3D", "Portfolio"],
  },
  {
    name: "Sawariya Shopy",
    description: "A local shop e-commerce platform with product management, WhatsApp ordering, and beautiful UI.",
    repo: "https://github.com/atultiwari997721/Sawariya_Shopy",
    live: null,
    language: "JavaScript",
    color: "from-amber-500 to-orange-500",
    tags: ["E-Commerce", "React", "WhatsApp"],
  },
];

const LANG_COLORS: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-400",
  HTML: "bg-orange-400",
  Python: "bg-green-400",
};

export default function GithubProjects() {
  return (
    <section id="github-projects" className="py-10 md:py-20 relative z-10 px-2 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest mb-4">
            <Github size={14} className="text-violet-500 dark:text-violet-400" /> GitHub Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight font-syne">
            My Work on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500 dark:from-violet-300 dark:to-pink-300">
              GitHub
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base md:text-lg font-medium max-w-2xl">
            Real projects I&apos;ve built and shipped — from AI tools to full-stack web apps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {GITHUB_PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group glass-card rounded-[2rem] border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                    <Code2 size={18} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors text-slate-600 dark:text-slate-300"
                        title="Live Demo"
                      >
                        <Globe size={15} />
                      </a>
                    )}
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors text-slate-600 dark:text-slate-300"
                      title="GitHub Repo"
                    >
                      <Github size={15} />
                    </a>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-syne group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-600 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Language */}
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${LANG_COLORS[project.language] || "bg-slate-400"}`} />
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{project.language}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/atultiwari997721"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg hover:bg-slate-700 dark:hover:bg-slate-200 transition-all shadow-xl hover:-translate-y-1"
          >
            <Github size={22} />
            View All on GitHub
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
