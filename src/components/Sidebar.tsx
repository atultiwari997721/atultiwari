"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUpRight, MessageCircle } from "lucide-react";

export default function Sidebar() {
  const whatsappUrl = "https://wa.me/917828706954?text=Hi%20Atul%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20work%20together!";

  return (
    <div className="glass-card rounded-[2.5rem] p-6 shadow-2xl flex flex-col h-auto border border-black/5 dark:border-white/10 w-full bg-white/60 dark:bg-white/5 backdrop-blur-xl">
      
      {/* Header: Logo + Name */}
      <div className="flex flex-col gap-5 mb-6">
         {/* Profile Image with Hover Effect - Slightly smaller */}
        <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 group">
             <Image 
                src="/assets/avatar.png" 
                alt="Atul Tiwari"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
             />
        </div>

        {/* Name - Center Aligned & Balanced Wrapping */}
        <div className="text-center w-full">
             <h1 className="text-xl xl:text-2xl font-extrabold text-slate-900 dark:text-white font-syne leading-tight tracking-tight whitespace-nowrap">
                ATUL <span className="text-slate-500 dark:text-slate-400">TIWARI</span>
             </h1>
        </div>
      </div>


      {/* Specialization */}
      <div className="mb-6">
        <h2 className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">Specialization</h2>
        <p className="text-slate-700 dark:text-slate-300 font-medium text-base leading-snug">
           AI/ML Engineer &<br/>Web Developer
        </p>
      </div>

       {/* Location */}
      <div className="mb-6">
         <h2 className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">Based In</h2>
          <p className="text-slate-700 dark:text-slate-300 font-medium text-base">
             Indore, MP India
          </p>
      </div>

      {/* Social Actions */}
      <div className="mt-auto flex flex-col gap-4">
          <div className="flex gap-4">
             <SocialLink href="https://github.com/atultiwari997721" icon={<Github size={20} />} />
             <SocialLink href="mailto:atultiwari997721@gmail.com" icon={<Mail size={20} />} />
             <SocialLink href={whatsappUrl} icon={<MessageCircle size={20} />} />
          </div>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-[2rem] bg-green-600 hover:bg-green-500 text-white font-bold text-center transition-all flex items-center justify-center gap-2 group shadow-lg shadow-green-500/20"
          >
            Let&apos;s Work Together!
            <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
          </a>
      </div>

    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white dark:hover:text-white hover:bg-black/80 dark:hover:bg-white/10 transition-all bg-black/5 dark:bg-white/5"
    >
      {icon}
    </a>
  );
}
