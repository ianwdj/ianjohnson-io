/* ============================================================
   All site copy lives here. Components render; this file speaks.
   Facts (acquisitions, JV, countries) carried over verbatim from
   the original site — nothing invented.
   ============================================================ */

export const site = {
  name: "Ian Johnson",
  role: "Head of Product at Aida",
  location: "San Francisco",
  url: "https://ianjohnson.io",
  email: "contact@ianjohnson.io",
  // TODO(ian): confirm real profile URLs — placeholders pending
  substackUrl: "https://ianwd.substack.com",
  linkedinUrl: "#",
  letterboxdUrl: "#",
};

export const hero = {
  statement: "AI products are judged by the behavior they change.",
  // rendered with the phrase below set in coral
  accentPhrase: "behavior they change",
  detail:
    "I build products at the intersection of customer truth, workflow design, GTM systems, and measurable adoption.",
};

export type Project = {
  slug: string; // reserves /work/[slug] for future case studies
  name: string;
  category: string;
  period: string;
  teaser: string;
  proof?: string;
  status: "current" | "acquired";
};

export const workIntro =
  "Ten years building AI products that drive revenue. The last three companies were acquired.";

export const projects: Project[] = [
  {
    slug: "aida",
    name: "Aida",
    category: "Agentic revenue workflows",
    period: "2024–now",
    teaser:
      "From account signals to next-best action, with durable usage as the test.",
    status: "current",
  },
  {
    slug: "flow",
    name: "Flow",
    category: "Commerce infrastructure",
    period: "2018–2021",
    teaser:
      "Growth, experimentation, merchant-of-record, and checkout at scale.",
    proof: "Acquired by Global-e for $500M",
    status: "acquired",
  },
  {
    slug: "showtime",
    name: "Showtime",
    category: "Customer data foundations",
    period: "2014–2018",
    teaser:
      "Entity resolution and marketable customer understanding across markets.",
    proof: "Alibaba Pictures JV · 26 countries",
    status: "acquired",
  },
  {
    slug: "lasso",
    name: "Lasso AI",
    category: "Creator-economy matching",
    period: "2021–2023",
    teaser: "Bootstrapped matchmaking between brands and creators.",
    proof: "Acquired by Yard",
    status: "acquired",
  },
];

/* "How I think" — scaffolded from the hero's themes.
   TODO(ian): drafts in your direction — edit until they sound like you. */
export const principles: { title: string; body: string }[] = [
  {
    title: "Customer truth over roadmap theater",
    body: "The most expensive thing a team can build is a convincing answer to the wrong question. I spend my time where the customer's actual workflow disagrees with our assumptions about it.",
  },
  {
    title: "Adoption is the only demo that counts",
    body: "A launch is a hypothesis. Durable usage is the result. I instrument for the behavior change we claimed we'd cause, and I believe the data over the applause.",
  },
  {
    title: "GTM is part of the product",
    body: "How something is sold, onboarded, and expanded shapes what gets built. The best products I've shipped were designed with the revenue motion, not handed to it.",
  },
];

export const now = {
  lines: [
    "Building Aida — agents that turn account signals into revenue actions.",
    "Writing about how AI products earn (and lose) trust inside real workflows.",
    "In San Francisco, mostly.",
  ],
  updated: "July 2026",
};

/* Essays republished from Substack. Bodies live in content/essays/<slug>.mdx */
export type Essay = {
  slug: string;
  title: string;
  date: string; // ISO
  displayDate: string;
  summary: string;
  canonicalUrl?: string; // original Substack post
};

export const essays: Essay[] = [
  // populated during migration from the Substack archive
];
