"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/constants/projects";

interface ProjectsProps {
    onProjectClick?: (project: Project) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  return (
    <section id="projects" className="py-4 md:py-10 relative z-10 px-2 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest mb-4">
            <span className="text-violet-500 dark:text-violet-400">✨</span> Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight font-syne">
            Check out my featured <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 dark:from-pink-300 dark:to-violet-300">
              projects
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1 
              }}
              onClick={() => onProjectClick?.(project)}
              className={`group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-square cursor-pointer bg-gradient-to-br ${project.accent} p-[1px]`}
            >
              <div className="absolute inset-[1px] rounded-[2rem] md:rounded-[2.5rem] bg-[#0f0f11]">
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />

              {/* Overlay Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 <div className="flex justify-between items-end">
                    <div>
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-white mb-2 border border-white/10">
                            {project.category}
                        </span>
                        <h3 className="text-xl md:text-3xl font-bold text-white leading-tight font-syne">
                            {project.title}
                        </h3>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                        <ArrowUpRight size={20} />
                    </div>
                 </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
