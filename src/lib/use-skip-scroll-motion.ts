"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Skip scroll-triggered enter animations on touch / reduced-motion devices.
 * Mobile browser chrome resize + IntersectionObserver re-fires often cause
 * opacity flicker while scrolling.
 */
export function useSkipScrollMotion() {
  const shouldReduceMotion = useReducedMotion();
  const [skipTouch, setSkipTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const sync = () => setSkipTouch(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return Boolean(shouldReduceMotion || skipTouch);
}
