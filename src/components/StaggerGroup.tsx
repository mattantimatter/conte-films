"use client";

import React from "react";
import { motion } from "motion/react";
import { useSkipScrollMotion } from "@/lib/use-skip-scroll-motion";

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
}

export function StaggerGroup({
  children,
  className = "",
  staggerChildren = 0.08,
}: StaggerGroupProps) {
  const skipMotion = useSkipScrollMotion();

  if (skipMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const skipMotion = useSkipScrollMotion();

  if (skipMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.45,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
