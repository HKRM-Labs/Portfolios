"use client";

import { motion } from "framer-motion";

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionTransition({
  children,
  className = "",
  delay = 0,
}: SectionTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
