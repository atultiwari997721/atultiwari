"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Python Development",
    tags: ["Data Science", "Machine Learning", "Automation", "Flask/Django"],
    description:
      "Create scalable and efficient software solutions, automations, and data-driven models while continuously improving my skills.",
    image: "/assets/thumb_algorithm.png", 
    color: "from-green-500/20 to-emerald-500/5",
    border: "group-hover:border-green-500/50"
  },
  {
    title: "Frontend Development",
    tags: ["HTML", "CSS", "JS", "React.js", "Next.js"],
    description:
      "I build dynamic and responsive user interfaces, delivering exceptional user experiences and innovative web solutions.",
    image: "/assets/thumb_web_ui.png",
    color: "from-blue-500/20 to-violet-500/5",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "ML Based Development",
    tags: ["Training Data", "ML Algorithms"],
    description:
      "I develop innovative solutions, optimize model performance, and drive impactful data-driven insights.",
    image: "/assets/service_ml_hand_v2.png",
    color: "from-pink-500/20 to-rose-500/5",
    border: "group-hover:border-pink-500/50"
  },
  {
    title: "Prompt Engineering",
    tags: ["Logo Design", "Style Guides"],
    description:
      "Design and optimize prompts to enhance AI model performance and deliver precise, actionable results.",
    image: "/assets/service_robot_face_v2.png",
    color: "from-cyan-500/20 to-sky-500/5",
    border: "group-hover:border-cyan-500/50"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-4">
                🛠️ Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-syne leading-tight">
                What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500 dark:from-violet-400 dark:to-pink-400">Do</span>
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: index * 0.1 
              }}
              className={`group glass-card rounded-[2.5rem] p-8 md:p-10 border border-black/5 dark:border-white/10 hover:bg-white/40 dark:hover:bg-white/5 transition-all relative overflow-hidden h-full flex flex-col justify-between ${service.border}`}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} blur-[100px] rounded-full pointer-events-none -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

              <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-syne">
                    {service.title}
                  </h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:bg-white/80 dark:group-hover:bg-white/10 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium mb-8 text-left md:text-justify hyphens-auto">
                    {service.description}
                  </p>
              </div>

              {/* Bottom Image / Illustration area */}
              <div className="relative w-full aspect-[4/3] mt-4 rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 bg-black/5 dark:bg-black/20"> 
                  <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                   {/* Overlay for depth */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
