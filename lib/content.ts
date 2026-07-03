// Static site content. Facts are migrated verbatim from the original site;
// nothing here is invented. Items still needing real values from Ian are
// marked `href: "#"` (see the plan's open-items list).

export type SectionId = "hello" | "work" | "words" | "elsewhere";

export const SECTIONS: { id: SectionId; label: string; key: string }[] = [
  { id: "hello", label: "Hello", key: "h" },
  { id: "work", label: "Work", key: "w" },
  { id: "words", label: "Words", key: "o" },
  { id: "elsewhere", label: "Elsewhere", key: "e" },
];

export const cover = {
  volume: "No. 1 — May 2026",
  name: "Ian Johnson",
  location: "San Francisco",
  monogram: "IJ",
};

// Cover bookmarks. `color` selects the pencil tone; `href` pending real URLs.
export const bookmarks: {
  label: string;
  href: string;
  color: "blue" | "orange" | "green" | "red";
}[] = [
  { label: "Letterboxd", href: "#", color: "blue" },
  { label: "Substack", href: "#", color: "orange" },
  { label: "LinkedIn", href: "#", color: "green" },
  { label: "volt.fm", href: "#", color: "red" },
];

// WORK — facts carried over verbatim from the prior site (rephrase-only set).
export type PencilColor = "red" | "blue" | "green" | "orange";

export const workIntro =
  "Ten years building AI products that drive revenue. Right now: Aida. Before that, three companies that were acquired.";

export const workEntries: {
  name: string;
  period: string;
  color: PencilColor;
  desc: string;
  locked: boolean;
  related?: { label: string; href: string };
}[] = [
  {
    name: "Aida",
    period: "2024 — present",
    color: "orange",
    desc: "AI revenue intelligence. Meeting agents that handle the work between calls.",
    locked: true,
    related: { label: "Anatomy of a meeting: pre, during, post", href: "#" },
  },
  {
    name: "Lasso AI",
    period: "2021 — 2023",
    color: "green",
    desc: "Creator-economy matching. Bootstrapped, then acquired by Yard.",
    locked: true,
  },
  {
    name: "Flow",
    period: "2018 — 2021",
    color: "blue",
    desc: "Cross-border checkout. Acquired by Global-e for $500M.",
    locked: true,
  },
  {
    name: "Showtime Analytics",
    period: "2014 — 2018",
    color: "red",
    desc: "Cinema analytics, in a joint venture with Alibaba Pictures. Scaled to 26 countries.",
    locked: true,
  },
];
