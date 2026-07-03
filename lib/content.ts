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
  substackUrl: "https://ianwdj.substack.com",
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

export type LogoId = "globale" | "shopify" | "alibaba";

export type Project = {
  slug: string; // reserves /work/[slug] for future case studies
  name: string;
  category: string;
  period: string;
  teaser: string;
  proof?: string;
  logos?: LogoId[]; // acquirer/partner marks rendered under the proof line
  status: "current" | "acquired";
};

export const workIntro =
  "Ten years building AI products that drive revenue. The last two companies were acquired.";

export const projects: Project[] = [
  {
    slug: "aida",
    name: "Aida",
    category: "Agentic revenue system of action",
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
      "Growth, experimentation, merchant-of-record, and checkout at scale — the white-label engine behind Shopify Markets.",
    proof: "Acquired by Global-e for $500M · Shopify Markets",
    logos: ["globale", "shopify"],
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
    logos: ["alibaba"],
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
  {
    slug: "pre-product-sales-sprint",
    title: "The Pre-Product Sales Sprint",
    date: "2024-04-10",
    displayDate: "Apr 2024",
    summary:
      "Closing $1,000-per-user sales with only a Notion page and phone calls — a five-day sprint for validating demand before building anything.",
    canonicalUrl: "https://ianwdj.substack.com/p/the-pre-product-sales-sprint",
  },
  {
    slug: "shortlisting-startup-ideas",
    title: "A Concise Guide to Shortlisting Startup Ideas",
    date: "2023-12-05",
    displayDate: "Dec 2023",
    summary:
      "A weighted scorecard for deciding what to build next — with a brutally honest worked example scoring my own AI-product idea.",
    canonicalUrl:
      "https://ianwdj.substack.com/p/a-concise-guide-to-shortlisting-startup",
  },
  {
    slug: "pain-points-100-launches",
    title: "Pain Points from 100 Product Launches",
    date: "2023-07-19",
    displayDate: "Jul 2023",
    summary:
      "Surveying builders across 100 Product Hunt launches to test whether selling shovels in the LLM gold rush is a real market.",
    canonicalUrl:
      "https://ianwdj.substack.com/p/pain-points-experienced-from-100",
  },
  {
    slug: "lasso",
    title: "Lasso: The Problem We Solved For",
    date: "2023-06-14",
    displayDate: "Jun 2023",
    summary:
      "A candid post-mortem of building and selling Lasso — why LOIs mean nothing, and why a 10% better product dies in a platform-controlled market.",
    canonicalUrl: "https://ianwdj.substack.com/p/lasso",
  },
];
