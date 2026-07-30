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
          from: "var(--accent-from)",
          via: "var(--accent-via)",
          to: "var(--accent-to)",
          fg: "var(--accent-fg)",
        },
      },
      backgroundImage: {
        // Stops are spelled out rather than pulled from one shared custom
        // property so the ramp resolves against whichever --accent-* values are
        // nearest the element. See the note in globals.css.
        "accent-gradient":
          "linear-gradient(var(--accent-angle), var(--accent-via) 0%, var(--accent-from) 45%, var(--accent-to) 100%)",
      },
      boxShadow: {
        accent: "0 10px 30px -12px var(--accent-glow)",
        "accent-lg": "0 22px 50px -18px var(--accent-glow)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        // Kept as an alias so existing `font-serif` usages resolve to the
        // display face instead of falling back to a browser serif.
        serif: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
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
