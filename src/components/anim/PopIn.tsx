"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PopInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function PopIn({ children, delay = 0, className = "" }: PopInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
