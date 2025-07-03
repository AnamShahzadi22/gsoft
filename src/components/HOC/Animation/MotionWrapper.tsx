"use client";

import { motion, Variants, TargetAndTransition, VariantLabels } from "framer-motion";
import { ReactNode } from "react";

type AnimateOnViewProps = {
  children: ReactNode;
  variants?: Variants;
  duration?: number;
  delay?: number;
  once?: boolean;
   whileHover?: TargetAndTransition | VariantLabels;
    className?: string; 
};

export default function AnimateOnView({
  children,
  variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  duration = 0.6,
  delay = 0,
  once = true,
   whileHover,
    className = ""
}: AnimateOnViewProps) {
  return (
    <motion.div
     className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{ duration, delay }}
      variants={variants}
      whileHover={whileHover} 
    >
      {children}
    </motion.div>
  );
}
