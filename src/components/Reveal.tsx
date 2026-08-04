"use client";

import React from "react";
import { motion } from "motion/react";
import { useSkipScrollMotion } from "@/lib/use-skip-scroll-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.6,
}: RevealProps) {
  const skipMotion = useSkipScrollMotion();

  if (skipMotion) {
    return <div className={className}>{children}</div>;
  }

  const directions = {
    up: { y: 16 },
    down: { y: -16 },
    left: { x: 16 },
    right: { x: -16 },
    none: {},
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
