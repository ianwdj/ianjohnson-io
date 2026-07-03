import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // the only colors on the site — warm daylight, no blue, no cool gray
      colors: {
        cream: "var(--cream)",
        "cream-deep": "var(--cream-deep)",
        ink: "var(--ink)",
        "ink-strong": "var(--ink-strong)",
        putty: "var(--putty)",
        coral: "var(--coral)",
        "coral-deep": "var(--coral-deep)",
        hairline: "var(--hairline)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        slow: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        content: "672px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [
    // gate hover affordances to real pointers
    plugin(({ addVariant }) => {
      addVariant("can-hover", "@media (any-hover: hover) and (any-pointer: fine)");
    }),
  ],
};

export default config;
