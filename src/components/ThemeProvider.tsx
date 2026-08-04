"use client";

import * as React from "react";
import { MotionConfig } from "motion/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useSkipScrollMotion } from "@/lib/use-skip-scroll-motion";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

function MotionGate({ children }: { children: React.ReactNode }) {
  const skipScrollMotion = useSkipScrollMotion();

  React.useEffect(() => {
    document.documentElement.dataset.scrollMotion = skipScrollMotion
      ? "off"
      : "on";
    document.documentElement.classList.toggle("touch-ui", skipScrollMotion);
  }, [skipScrollMotion]);

  return (
    <MotionConfig reducedMotion={skipScrollMotion ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <MotionGate>{children}</MotionGate>
    </NextThemesProvider>
  );
}
