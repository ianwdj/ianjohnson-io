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
      // any border utility without a color class falls back to hairline,
      // never Tailwind's cool-gray preflight default
      borderColor: {
        DEFAULT: "var(--hairline)",
      },
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
        content: "672px", // reading measure: essay bodies
        // page column: 720 outer − 48 padding = 672 content, the same
        // centered measure as the ambrosino.io reference
        wide: "720px",
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
