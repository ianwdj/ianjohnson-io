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
  substackUrl: "https://ianwdj.substack.com",
  linkedinUrl: "https://www.linkedin.com/in/ianwdjohnson",
  // TODO(ian): confirm Letterboxd URL — placeholder pending
  letterboxdUrl: "#",
};

export const hero = {
  statement:
    "I'm Ian. I build things, mostly AI, always trying to help people do more with less.",
  /* Audit note: the coral accent made "do more with less" read as a tagline,
     so no phrase is accented now. Set this to a substring of statement to
     re-enable. TODO(ian): if you want a different opening line, say it and
     it goes in verbatim. */
  accentPhrase: "",
  detail:
    "Founding product lead at Aida, an AI chief of staff for sales reps. Building products since 2014, in revenue tools, commerce, and customer data.",
};

export type LogoId = "globale" | "shopify";

export type Project = {
  slug: string; // reserves /work/[slug] for future case studies
  name: string;
  category: string;
  period: string;
  teaser: string;
  featured?: string[]; // extra depth lines; also gives the card the raised treatment
  proof?: string;
  logos?: LogoId[]; // acquirer/partner marks rendered under the proof line
  href?: string; // live product link, rendered as external link on the card
  status: "current" | "past"; // drives only the "current" dot on the card
};

/* FACTS (do not drift): two acquisitions total — Lasso (Ian founded it,
   acquired by Yard) and Flow (Ian was an employee, acquired by Global-e).
   Showtime was never acquired; the Alibaba Pictures JV is a partnership. */
export const workIntro =
  "Four products since 2014. Two of the companies were acquired. One of those I founded.";

export const projects: Project[] = [
  {
    slug: "aida",
    name: "Aida",
    category: "AI chief of staff for sales reps",
    period: "2024–now",
    teaser:
      "Catches the follow-ups, updates the CRM, and preps the meeting so reps can spend their time selling.",
    /* Depth lines drafted from getaida.com and Ian's own earlier copy
       ("durable usage as the test" framing is his).
       TODO(ian): make these yours, and add a traction fact when shareable. */
    featured: [
      "It watches calls, Slack, email, and the CRM for the commitments a deal depends on, then does the follow-through that usually slips.",
      "As founding product lead I decide what gets built, and I'm judged by whether reps keep using it.",
    ],
    // TODO(ian): add one traction fact here when shareable (design partners,
    // reps using it, team size) — e.g. "Founding product lead · N design partners"
    proof: "Founding product lead",
    href: "https://getaida.com",
    status: "current",
  },
  {
    slug: "flow",
    name: "Flow",
    category: "Commerce infrastructure",
    period: "2018–2021",
    // TODO(ian): confirm the Shopify Markets phrasing — "ran white-label
    // behind" is the defensible version; say the word if it undersells it.
    teaser:
      "I ran growth, experimentation, merchant-of-record, and checkout. Flow ran white-label behind Shopify Markets.",
    proof: "Principal PM · Acquired by Global-e for $500M",
    logos: ["globale", "shopify"],
    status: "past",
  },
  {
    slug: "showtime",
    name: "Showtime",
    category: "Customer data foundations",
    period: "2014–2018",
    teaser:
      "We helped cinemas in 26 countries understand who their customers were so they could market to them.",
    proof: "VP of Product · Alibaba Pictures JV",
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
   Pre-Product Sales Sprint), not invented. Each principle carries a receipt:
   the essay where it was learned, so the claim and the evidence touch.
   TODO(ian): titles 1 and 3 are still drafted, not yours — say them your way
   and they go in verbatim. */
export type Principle = {
  title: string;
  body: string;
  receipt?: { label: string; href: string };
};

export const principles: Principle[] = [
  {
    title: "Watch what customers do, not what they say",
    body: "The real problem is usually different from the one people describe. If you can shadow someone in their actual workflow, you'll learn more than any interview will tell you.",
    receipt: { label: "Learned at Lasso", href: "/writing/lasso" },
  },
  {
    title: "Ask for money early",
    body: "LOIs and verbal commitments mean nothing. If someone won't put down payment details in some form, the problem probably isn't painful enough to build for.",
    receipt: { label: "Learned at Lasso, the hard way", href: "/writing/lasso" },
  },
  {
    title: "Build with the sales motion, not ahead of it",
    body: "How something gets sold shapes what should get built. The products I've seen work were designed alongside the people selling them, from the start.",
    receipt: {
      label: "How Artifax closed $1,000 sales with a Notion page",
      href: "/writing/pre-product-sales-sprint",
    },
  },
];

export const now = {
  lines: [
    "Building Aida, an AI chief of staff for sales reps.",
    "In San Francisco, mostly.",
  ],
  updated: "July 2026",
};

/* "Elsewhere" — what he's into outside work (goal: visitors get a sense of
   what excites and interests him). Both lines below trace to the bookmarks
   on Ian's previous site (Letterboxd, volt.fm) — nothing invented.
   TODO(ian): replace with real favorites and links — Letterboxd username,
   a few films/albums/cities you'd actually name. */
export type ElsewhereGroup = { label: string; items: string[] };
export const elsewhere: ElsewhereGroup[] = [
  { label: "Film", items: ["I keep a film diary on Letterboxd."] },
  { label: "Music", items: ["What's on repeat lives on volt.fm."] },
];

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
      "A weighted scorecard for deciding what to build next, with a worked example where I score my own idea and it comes up short.",
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
      "A post-mortem of building and selling Lasso. Why LOIs mean nothing, and what platform dependence did to us.",
    canonicalUrl: "https://ianwdj.substack.com/p/lasso",
  },
];
