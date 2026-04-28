"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { Project } from "@/constants/projects";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#0f0f11] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors border border-white/10"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="relative w-full aspect-square md:aspect-[4/3] bg-gradient-to-br from-orange-400/20 to-pink-500/20">
               {/* 
                  Using the specific image for Hotel Management if available, 
                  otherwise falling back to what's defined in project data 
               */}
               <Image 
                 src={project.image} 
                 alt={project.title}
                 fill
                 className="object-cover"
               />
            </div>

            {/* Details Section */}
            <div className="p-6 md:p-8 bg-[#161618]">
                <h3 className="text-2xl font-bold text-white mb-4 font-syne">{project.title}</h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Optional Action Button (if needed in future) */}
                {/* 
                <button className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                    View Project <ExternalLink size={16} />
                </button> 
                */}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
