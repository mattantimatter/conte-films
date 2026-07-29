import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-elevated)",
        },
        text: {
          primary: "var(--text-primary)",
          muted: "var(--text-muted)",
        },
        border: {
          subtle: "var(--border-subtle)",
          medium: "var(--border-medium)",
        },
        accent: {
          bronze: "var(--accent-bronze)",
          "bronze-hover": "var(--accent-bronze-hover)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "Geist",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "Geist Mono",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.15em",
        mega: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
