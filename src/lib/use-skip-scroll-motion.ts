"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

type MotionUiMode = "pending" | "skip" | "allow";

/**
 * Skip scroll-triggered enter animations on touch / reduced-motion devices.
 *
 * Important: start in "pending" and treat that as skip. If we default to
 * "allow", mobile first paints opacity-0 motion nodes, then remounts as
 * static — that flash is the scroll flicker users see.
 */
export function useSkipScrollMotion() {
  const shouldReduceMotion = useReducedMotion();
  const [mode, setMode] = useState<MotionUiMode>("pending");

  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const sync = () => setMode(mq.matches ? "skip" : "allow");
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return shouldReduceMotion || mode !== "allow";
}
