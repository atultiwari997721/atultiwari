"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, X, FileCheck } from "lucide-react";

const CERTIFICATES = [
  {
    title: "Google Flutter & Dart",
    issuer: "The Digital Adda",
    image: "/assets/certificates/cert_codsoft_data_science.png",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    image: "/assets/certificates/cert_google_cloud_prompt.png",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "AI Professional Certification",
    issuer: "Itronix Solutions",
    image: "/assets/certificates/cert_itronix_ai.png",
    color: "from-teal-500 to-green-500",
  },
  {
    title: "Python for Machine Learning",
    issuer: "IIT Bombay · EduPyramids",
    image: "/assets/certificates/cert_iitb_python_ml.png",
    color: "from-orange-500 to-yellow-500",
  },
];

function CertImage({ src, alt, color, onClick }: { src: string; alt: string; color: string; onClick: () => void }) {
  const [broken, setBroken] = useState(false);
  return (
    <div className="relative w-full h-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer" onClick={onClick}>
      {!broken ? (
        <img
          src={src}
          alt={alt}
          onError={() => setBroken(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${color} flex flex-col items-center justify-center p-4 text-white`}>
          <FileCheck size={28} className="mb-2 opacity-80" />
          <p className="text-xs font-bold text-center leading-tight">{alt}</p>
          <p className="text-[10px] opacity-70 mt-1">Copy image to show</p>
        </div>
      )}
    </div>
  );
}

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
           <span className="inline-flex items-center gap-1.5 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest mb-2 md:mb-4">
            <span className="text-violet-500 dark:text-violet-400">✨</span> Achievement
          </span>
          <h2 className="text-2xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight font-syne">
            Certifications & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500 dark:from-violet-300 dark:to-pink-300">
              Awards
            </span>
          </h2>
        </motion.div>

        {/* Desktop: 4-col grid including View All card */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {CERTIFICATES.map((cert, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-[2rem] border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group cursor-pointer min-h-[250px] flex items-center justify-center p-2"
                >
                    <CertImage
                        src={cert.image}
                        alt={cert.title}
                        color={cert.color}
                        onClick={() => setSelectedCert(cert.image)}
                    />
                </motion.div>
            ))}
            <motion.a
                href="https://drive.google.com/drive/folders/1MdHmjWkJ5QIBuDDiRFGR5BEr43rDYC-c?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.4 }}
                className="p-6 rounded-[2rem] border border-white/10 bg-violet-600 text-white hover:bg-violet-700 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group flex flex-col justify-center items-center text-center cursor-pointer min-h-[250px] shadow-2xl"
            >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ExternalLink size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold font-syne leading-tight mb-2 text-white">View All <br/> Certificates</h3>
                <p className="text-sm font-medium text-white/80">Open Google Drive ↗</p>
            </motion.a>
        </div>

        {/* Mobile: 2-col grid */}
        <div className="grid md:hidden grid-cols-2 gap-3 mb-4">
            {CERTIFICATES.map((cert, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-[1.2rem] border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group"
                >
                    <CertImage
                        src={cert.image}
                        alt={cert.title}
                        color={cert.color}
                        onClick={() => setSelectedCert(cert.image)}
                    />
                </motion.div>
            ))}
        </div>

        {/* Mobile: horizontal slide strip for View All */}
        <div className="flex md:hidden overflow-x-auto gap-2 pb-2 no-scrollbar pr-4 mb-6">
            <a href="https://drive.google.com/drive/folders/1MdHmjWkJ5QIBuDDiRFGR5BEr43rDYC-c?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="flex-none flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-violet-600 text-white font-bold text-xs whitespace-nowrap shadow-lg">
              <ExternalLink size={13} /> View All Certificates
            </a>
            <a href="https://drive.google.com/drive/folders/1MdHmjWkJ5QIBuDDiRFGR5BEr43rDYC-c?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="flex-none flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs whitespace-nowrap shadow-lg">
              <Award size={13} /> Google Drive ↗
            </a>
            <span className="flex-none flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white font-bold text-xs whitespace-nowrap">
              50+ Certificates
            </span>
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
                    <div className="relative w-full h-[85vh] flex items-center justify-center">
                        <img
                            src={selectedCert}
                            alt="Certificate Preview"
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
