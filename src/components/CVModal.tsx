"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  // Close when any anchor/nav link inside the page is clicked
  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener("keydown", handleKeyDown);

    // Listen for any hash-link clicks (nav / Home etc.) and close modal
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.href && anchor.href.includes("#")) {
        onClose();
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [isOpen, handleKeyDown, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          onClick={onClose} // click outside closes
        >
          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl h-[90vh] rounded-[2rem] overflow-hidden border border-white/10 bg-[#111] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
          {/* Top Bar */}
            <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-white/10 bg-[#0a0a0a] gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-pink-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-xs font-bold text-slate-400 font-syne tracking-wide truncate">
                  Atul_Tiwari_Resume.pdf
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {/* Download - icon only on mobile, text on desktop */}
                <a
                  href="/Atul_Tiwari_Resume.pdf"
                  download="Atul_Tiwari_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-all hover:-translate-y-0.5"
                  onClick={(e) => e.stopPropagation()}
                  title="Download"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download</span>
                </a>
                {/* Open Tab - icon only on mobile */}
                <a
                  href="/Atul_Tiwari_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all hover:-translate-y-0.5"
                  onClick={(e) => e.stopPropagation()}
                  title="Open in new tab"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">Open Tab</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500/80 flex items-center justify-center text-slate-400 hover:text-white transition-all shrink-0"
                  aria-label="Close CV"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* PDF Iframe */}
            <div className="flex-1 w-full overflow-hidden">
              <iframe
                src="/Atul_Tiwari_Resume.pdf"
                className="w-full h-full border-0"
                title="Atul Tiwari Resume"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
