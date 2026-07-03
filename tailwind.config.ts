import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-edge": "var(--paper-edge)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-mute": "var(--ink-mute)",
        rule: "var(--rule)",
        accent: "var(--accent)",
        desk: "var(--desk)",
        pencil: {
          graphite: "var(--pencil-graphite)",
          red: "var(--pencil-red)",
          blue: "var(--pencil-blue)",
          green: "var(--pencil-green)",
          orange: "var(--pencil-orange)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        hand: ["var(--font-hand)", "cursive"],
      },
      transitionTimingFunction: {
        // verified from alanagoyal.com globals.css
        page: "cubic-bezier(0.17, 0.67, 0.29, 1)",
        press: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
      maxWidth: {
        page: "680px",
      },
      keyframes: {
        "lift-in": {
          "0%": { opacity: "0", transform: "translateY(8px) scale(0.992)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "lift-out": {
          "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(-6px) scale(0.996)" },
        },
      },
      animation: {
        "lift-in": "lift-in 0.3s cubic-bezier(0.17,0.67,0.29,1) both",
        "lift-out": "lift-out 0.22s cubic-bezier(0.4,0,0.2,1) both",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // gate hover affordances to real pointers (stolen from Alana's config)
    plugin(({ addVariant }) => {
      addVariant("can-hover", "@media (any-hover: hover) and (any-pointer: fine)");
    }),
  ],
};

export default config;
