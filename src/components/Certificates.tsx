"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award, X } from "lucide-react";

const CERTIFICATES = [
  {
    title: "Data Science Internship",
    image: "/assets/certificates/cert_codsoft_data_science.png", 
    link: "/assets/certificates/cert_codsoft_data_science.png", 
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Prompt Design in Vertex AI",
    image: "/assets/certificates/cert_google_cloud_prompt.png",
    link: "/assets/certificates/cert_google_cloud_prompt.png",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "National Entrepreneurship Challenge",
    image: "/assets/certificates/cert_nec_iitmb.png",
    link: "/assets/certificates/cert_nec_iitmb.png",
    color: "from-blue-600 to-indigo-600",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  // Toggle body class for modal
  useEffect(() => {
    if (selectedCert) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-10 md:py-20 relative z-10 px-2 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-8 md:mb-16 md:text-left text-center"
        >
           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest mb-4">
            <span className="text-violet-500 dark:text-violet-400">✨</span> Achievement
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight font-syne">
            Certifications & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500 dark:from-violet-300 dark:to-pink-300">
              Awards
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Certificate Cards (Images) */}
            {CERTIFICATES.map((cert, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-[2rem] border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group block min-h-[250px] flex items-center justify-center p-2"
                >
                    <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden aspect-[4/3]">
                        <Image 
                            src={cert.image} 
                            alt={cert.title} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                    </div>
                </motion.div>
            ))}

            {/* View All Card (Remains text/button based) */}
            <motion.a
                href="https://drive.google.com/drive/folders/1MdHmjWkJ5QIBuDDiRFGR5BEr43rDYC-c?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-[2rem] border border-white/10 bg-violet-600 text-white hover:bg-violet-700 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group flex flex-col justify-center items-center text-center cursor-pointer min-h-[250px] shadow-2xl"
            >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ExternalLink size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold font-syne leading-tight mb-2 text-white">View All <br/> Certificates</h3>
                <p className="text-sm font-medium text-white/80">Open Google Drive ↗</p>
            </motion.a>
        </div>

      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedCert && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
                onClick={() => setSelectedCert(null)}
            >
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden glass-card p-1 bg-white/5 border border-white/10 flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button 
                        onClick={() => setSelectedCert(null)}
                        className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-red-500 transition-colors border border-white/20 backdrop-blur-md"
                    >
                        <X size={20} />
                    </button>
                    <div className="relative w-full h-[85vh]">
                        <Image 
                            src={selectedCert} 
                            alt="Certificate Preview" 
                            fill 
                            className="object-contain" 
                        />
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
