/* ============================================================
   All site copy lives here. Components render; this file speaks.
   Facts (acquisitions, JV, countries) carried over verbatim from
   the original site — nothing invented.
   ============================================================ */

export const site = {
  name: "Ian Johnson",
  role: "Founding product lead at Aida",
  location: "San Francisco",
  url: "https://ianjohnson.io",
  email: "contact@ianjohnson.io",
  // TODO(ian): confirm real profile URLs — placeholders pending
  substackUrl: "https://ianwdj.substack.com",
  linkedinUrl: "#",
  letterboxdUrl: "#",
};

export const hero = {
  statement:
    "I'm Ian. I build things, mostly AI, always trying to help people do more with less.",
  // rendered with the phrase below set in coral
  accentPhrase: "do more with less",
  detail:
    "Founding product lead at Aida. Since 2014, across revenue workflows, commerce infrastructure, and customer data.",
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
  href?: string; // live product link, rendered as external link on the card
  status: "current" | "past"; // drives only the "current" dot on the card
};

/* FACTS (do not drift): two acquisitions total — Lasso (Ian founded it,
   acquired by Yard) and Flow (Ian was an employee, acquired by Global-e).
   Showtime was never acquired; the Alibaba Pictures JV is a partnership. */
export const workIntro =
  "Four products since 2014. Two of the companies were acquired. One I founded, one I joined early.";

export const projects: Project[] = [
  {
    slug: "aida",
    name: "Aida",
    category: "Deal execution AI",
    period: "2024–now",
    teaser:
      "An AI chief of staff for sales reps. It catches the follow-ups, updates the CRM, and preps the meeting so reps can spend their time selling.",
    href: "https://getaida.com",
    status: "current",
  },
  {
    slug: "flow",
    name: "Flow",
    category: "Commerce infrastructure",
    period: "2018–2021",
    teaser:
      "Growth, experimentation, merchant-of-record, and checkout at scale. The white-label engine behind Shopify Markets.",
    proof: "Acquired by Global-e for $500M · Shopify Markets",
    logos: ["globale", "shopify"],
    status: "past",
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
    status: "past",
  },
  {
    slug: "lasso",
    name: "Lasso AI",
    category: "Creator-economy matching",
    period: "2021–2023",
    teaser: "Bootstrapped matchmaking between brands and creators.",
    proof: "Founded · Acquired by Yard",
    status: "past",
  },
];

/* "How I think" — distilled from Ian's published essays (Lasso post-mortem,
   Pre-Product Sales Sprint), not invented.
   TODO(ian): these are drafts in your direction — edit until they sound like you. */
export const principles: { title: string; body: string }[] = [
  {
    title: "Watch what customers do, not what they say",
    body: "The real problem is usually different from the one people describe. If you can shadow someone in their actual workflow, you'll learn more than any interview will tell you.",
  },
  {
    title: "Ask for money early",
    body: "LOIs and verbal commitments mean nothing. If someone won't put down payment details in some form, the problem probably isn't painful enough to build for.",
  },
  {
    title: "Build with the sales motion, not ahead of it",
    body: "How something gets sold shapes what should get built. The products I've seen work were designed alongside the people selling them, from the start.",
  },
];

export const now = {
  lines: [
    "Building Aida, an AI chief of staff for sales reps.",
    "In San Francisco, mostly.",
  ],
  updated: "July 2026",
};

/* Single source of truth for outbound identity links (footer + JSON-LD).
   TODO(ian): add real LinkedIn and Letterboxd URLs — "#" entries are
   filtered out everywhere until then. */
export const socialLinks = [
  { label: "Substack", href: site.substackUrl },
  { label: "LinkedIn", href: site.linkedinUrl },
  { label: "Letterboxd", href: site.letterboxdUrl },
].filter((l) => l.href !== "#");

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
      "Closing $1,000-per-user sales with only a Notion page and phone calls. A five-day sprint for validating demand before building anything.",
    canonicalUrl: "https://ianwdj.substack.com/p/the-pre-product-sales-sprint",
  },
  {
    slug: "shortlisting-startup-ideas",
    title: "A Concise Guide to Shortlisting Startup Ideas",
    date: "2023-12-05",
    displayDate: "Dec 2023",
    summary:
      "A weighted scorecard for deciding what to build next, with a brutally honest worked example scoring my own AI-product idea.",
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
      "A candid post-mortem of building and selling Lasso. Why LOIs mean nothing, and why a 10% better product dies in a platform-controlled market.",
    canonicalUrl: "https://ianwdj.substack.com/p/lasso",
  },
];
