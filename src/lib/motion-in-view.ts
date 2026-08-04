"use client";

/**
 * Helpers so whileInView sections stay fully visible on touch devices
 * instead of mounting at opacity 0 and flashing in on scroll.
 */
import type { Transition } from "motion/react";

export function inViewInitial(
  skip: boolean,
  initial: Record<string, number | string>
) {
  return skip ? false : initial;
}

export function inViewAnimate(
  skip: boolean,
  visible: Record<string, number | string>
) {
  return skip ? visible : undefined;
}

export function inViewWhile(
  skip: boolean,
  visible: Record<string, number | string>
) {
  return skip ? undefined : visible;
}

export function inViewTransition(
  skip: boolean,
  transition: Transition
): Transition {
  return skip ? { duration: 0 } : transition;
}
