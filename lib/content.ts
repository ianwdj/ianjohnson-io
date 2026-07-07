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
  letterboxdUrl: "https://letterboxd.com/ianwdj/",
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
    "Founding product lead at Aida, an agentic-native revenue system. Building products since 2014, in revenue tools, commerce, and customer data.",
};

export type LogoId = "globale" | "shopify" | "alibaba";

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
  "Four companies since 2014. Two were acquired. One of those I founded.";

export const projects: Project[] = [
  {
    slug: "aida",
    name: "Aida",
    category: "Agentic-native revenue system",
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
    slug: "lasso",
    name: "Lasso AI",
    category: "Creator-economy matching",
    period: "2021–2023",
    // Metrics are Ian's own published claims from the previous ianjohnson.io.
    teaser:
      "Bootstrapped matchmaking between brands and creators. The engine matched 1M+ creator profiles a week at 97% accuracy.",
    proof: "Founded · Acquired by Yard",
    status: "past",
  },
  {
    slug: "flow",
    name: "Flow",
    category: "Commerce infrastructure",
    period: "2018–2021",
    // Metrics are Ian's own published claims from the previous ianjohnson.io.
    // TODO(ian): confirm the Shopify Markets phrasing — "ran white-label
    // behind" is the defensible version; say the word if it undersells it.
    teaser:
      "I ran growth, experimentation, merchant-of-record, and checkout on $250M a week of cross-border volume. Flow ran white-label behind Shopify Markets.",
    proof: "Principal PM · Acquired by Global-e for $500M",
    logos: ["globale", "shopify"],
    status: "past",
  },
  {
    slug: "showtime",
    name: "Showtime Analytics",
    category: "Customer data foundations",
    period: "2014–2018",
    // Metrics are Ian's own published claims from the previous ianjohnson.io.
    teaser:
      "We helped cinemas understand who their customers were, growing from 2 cinemas to 80+ chains in 26 countries and taking customer identification from 3% to 78%.",
    logos: ["alibaba"],
    proof: "VP of Product · Alibaba Pictures JV",
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
    title: "Ask why now",
    body: "Customer inertia kills most new products. An inflection point, new technology or a rule change, is what makes a 10x solution possible where it wasn't before. If an idea has no answer to why now, it can wait.",
    receipt: {
      label: "From the idea shortlisting scorecard",
      href: "/writing/shortlisting-startup-ideas",
    },
  },
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
    "Building Aida, an agentic-native revenue system.",
    "In San Francisco, mostly.",
  ],
  updated: "July 2026",
};

/* "Things I have built for fun" — from Ian's previous ianjohnson.io personal
   section, links included. FACT (Ian, July 2026): he built THIQUE himself —
   not co-founded, whatever the old site said. Place links are his curated
   Google Maps lists. */
export const elsewhereTitle = "Things I have built for fun";
export type ElsewhereItem = { label: string; href?: string };
export type ElsewhereGroup = { label: string; items: ElsewhereItem[] };
export const elsewhere: ElsewhereGroup[] = [
  {
    label: "Products",
    items: [
      { label: "Artifax (AI ghostwriter)" },
      { label: "Syncd (AI cross-interview analysis)" },
      { label: "Wildfire (creator analytics)" },
      { label: "BiG Deal (dynamic couponing)" },
      { label: "Venice", href: "https://www.producthunt.com/products/venice" },
    ],
  },
  {
    label: "Food & drink",
    items: [
      { label: "THIQUE, a grilled cheese and natural wine bar I built myself" },
      { label: "One.Six1, specialty coffee" },
    ],
  },
  {
    label: "Film",
    items: [
      {
        label: "Huge movie buff. The diary lives on Letterboxd",
        href: site.letterboxdUrl,
      },
    ],
  },
  {
    label: "Places",
    items: [
      { label: "Dublin", href: "https://maps.app.goo.gl/iWgg9vpNfeueoE1R9" },
      { label: "San Francisco", href: "https://maps.app.goo.gl/6GQgTL1uerbon745A" },
      { label: "Japan", href: "https://maps.app.goo.gl/Ft2Rcv5bkbEVHwjAA" },
      { label: "Paris", href: "https://maps.app.goo.gl/x7VtAgC2pZtAXNB48" },
      { label: "Barcelona", href: "https://maps.app.goo.gl/aUoEHGLRmxrs74Vk7" },
      { label: "Lisbon", href: "https://maps.app.goo.gl/Pthrg8iTzP26rKjV7" },
      { label: "New York", href: "https://maps.app.goo.gl/FMBWa9Cb8jr6GuJj7" },
      { label: "Florence", href: "https://maps.app.goo.gl/PPKrBXhV1VGidKPU6" },
      { label: "Madrid", href: "https://maps.app.goo.gl/yBWGaPpSfUH47pny7" },
    ],
  },
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
  {
    slug: "creator-economy-100b-opportunity",
    title: "Unleashing the Potential of Creators",
    date: "2023-01-02",
    displayDate: "Jan 2023",
    summary:
      "Why new platforms, generative AI, and fractional work make this the best time to build for creators. Based on research with 150+ of them.",
    canonicalUrl:
      "https://ianwdj.substack.com/p/unleashing-the-potential-of-creators",
  },
  {
    slug: "product-frameworks-for-ideation",
    title: "Product Frameworks for Ideation",
    date: "2022-06-22",
    displayDate: "Jun 2022",
    summary:
      "The PM frameworks I use to vet new ideas. Viability quadrants, problem briefs, job stories, and hill charts.",
    canonicalUrl:
      "https://ianwdj.substack.com/p/product-frameworks-for-ideation",
  },
  {
    slug: "pivot-ai-user-interview-parsing",
    title: "Pivot #1: AI User Interview Parsing",
    date: "2022-04-26",
    displayDate: "Apr 2022",
    summary:
      "A postmortem of the Syncd pivot into AI interview analysis. Ten pilots, metrics that looked good, and why I killed it anyway.",
    canonicalUrl:
      "https://ianwdj.substack.com/p/pivot-2-ai-user-interview-parsing",
  },
  {
    slug: "customer-research-first-10-users",
    title: "Using Customer Research to Find Your First 10 Users",
    date: "2022-03-28",
    displayDate: "Mar 2022",
    summary:
      "Defining a research question, screening participants, and finding interviewees in communities, so those conversations become your first users.",
    canonicalUrl:
      "https://ianwdj.substack.com/p/using-customer-research-to-find-your",
  },
];
