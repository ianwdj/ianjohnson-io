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
  goodreadsUrl:
    "https://www.goodreads.com/review/list/101137073-ian?shelf=read",
};

/* Hero copy is Ian's, verbatim (July 2026). Segments with an href render as
   inline links. */
export type Segment = { text: string; href?: string };

export const hero = {
  greeting: "Hi, I'm Ian.",
  statement: [
    { text: "I'm currently building " },
    { text: "Aida", href: "https://getaida.com" },
    { text: "." },
  ] as Segment[],
  detail: [
    [
      {
        text: "My personal mission is to build tools that help millions to move faster toward theirs. I love taking ambiguous, zero-to-one problems and turning them into scalable products people can't live without.",
      },
    ],
    [
      {
        text: "I do the same thing offline, too. I love building real-world environments and experiences, from ",
      },
      {
        text: "launching a natural wine and grilled cheese pop-up bar in Portugal",
        href: "https://ianwdj.substack.com/p/launching-a-grilled-cheese-wine-bar",
      },
      { text: ", to curating music for art exhibitions and building " },
      {
        text: "micro journaling tools",
        href: "https://www.producthunt.com/products/venice",
      },
      { text: " for better relationships." },
    ],
  ] as Segment[][],
};

/* Plain-text flattening for metadata (title/description/OG card). */
const flat = (segs: Segment[]) => segs.map((s) => s.text).join("");
export const heroText = {
  statement: `${hero.greeting} ${flat(hero.statement)}`,
  detail: hero.detail.map(flat).join(" "),
  short: `${hero.greeting} ${flat(hero.statement)} ${flat(hero.detail[0])}`,
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
  image?: { src: string; width: number; height: number; alt: string }; // product evidence
  caseStudy?: { label: string; href: string }; // on-site case study link
  status: "current" | "past"; // drives only the "current" dot on the card
};

/* FACTS (do not drift): two acquisitions total — Lasso (Ian founded it,
   acquired by Yard) and Flow (Ian was an employee, acquired by Global-e).
   Showtime was never acquired; the Alibaba Pictures JV is a partnership. */
export const projects: Project[] = [
  {
    slug: "aida",
    name: "Aida",
    category: "Agentic-native revenue system",
    period: "2024–now",
    teaser:
      "Aida improves deal velocity and drives more revenue per headcount. It turns each rep's deal history, calls, emails, and CRM activity into a system of action.",
    /* Depth lines drafted from getaida.com and Ian's own earlier copy
       ("durable usage as the test" framing is his).
       TODO(ian): make these yours, and add a traction fact when shareable. */
    featured: [
      "It also flags at-risk deals, prioritizes accounts, and tracks signals like MEDDPIC and rep behavior, so best practices hold through the whole quarter, not just the week before a review.",
      "I set the roadmap and ship the product.",
    ],
    // TODO(ian): add one traction fact here when shareable (design partners,
    // reps using it, team size) — e.g. "Founding product lead · N design partners"
    proof: "Founding product lead",
    href: "https://getaida.com",
    // from Ian's Aida Figma (Chat UI file, deal view with drafted follow-up)
    image: {
      src: "/work/aida.png",
      width: 1200,
      height: 723,
      alt: "Aida deal view: AI-written deal overview, deal fields, and a drafted follow-up email",
    },
    caseStudy: {
      label: "Case study. The sales meeting, end to end",
      href: "/work/aida",
    },
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
    caseStudy: {
      label: "Case study. Lasso, the problem we solved for",
      href: "/writing/lasso",
    },
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
      "I ran growth, experimentation, merchant-of-record, and checkout on $250M a week of cross-border volume. Flow was chosen as Shopify Markets' exclusive white-label partner.",
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
      "We helped movie theatres and studios understand who their customers were, growing from 2 cinemas to 80+ chains in 26 countries and taking customer identification from 3% to 78%.",
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
    // "I built myself" dropped from THIQUE's label — redundant under a
    // section titled "Things I have built for fun." Fact preserved above.
    label: "Food & drink",
    items: [
      { label: "THIQUE, a grilled cheese and natural wine bar" },
      { label: "One.Six1, specialty coffee" },
      { label: "Soundcellar, a wine and podcast club with 200+ members" },
    ],
  },
  {
    label: "Film",
    items: [
      {
        label: "Huge movie buff. Logged on Letterboxd",
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

/* Library — covers from Ian's Goodreads "read" shelf, self-hosted under
   public/library/ (no external Goodreads script or CDN dependency).
   To refresh: re-run the download and update this list. */
export const libraryTitle = "Reading";
export type Book = { title: string; cover: string; href: string };
export const library: Book[] = [
  { title: "Atomic Habits", cover: "atomic-habits", href: "https://www.goodreads.com/book/show/40121378-atomic-habits" },
  { title: "Shoe Dog", cover: "shoe-dog", href: "https://www.goodreads.com/book/show/48500580-shoe-dog" },
  { title: "The Hard Thing About Hard Things", cover: "hard-thing", href: "https://www.goodreads.com/book/show/18176747-the-hard-thing-about-hard-things" },
  { title: "Never Split the Difference", cover: "never-split-the-difference", href: "https://www.goodreads.com/book/show/26156469-never-split-the-difference" },
  { title: "Educated", cover: "educated", href: "https://www.goodreads.com/book/show/35133922-educated" },
  { title: "The Design of Everyday Things", cover: "design-of-everyday-things", href: "https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things" },
  { title: "Man's Search for Meaning", cover: "mans-search-for-meaning", href: "https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning" },
  { title: "When Breath Becomes Air", cover: "when-breath-becomes-air", href: "https://www.goodreads.com/book/show/25899336-when-breath-becomes-air" },
  { title: "The Ride of a Lifetime", cover: "ride-of-a-lifetime", href: "https://www.goodreads.com/book/show/44525305-the-ride-of-a-lifetime" },
  { title: "Super Pumped", cover: "super-pumped", href: "https://www.goodreads.com/book/show/44573628-super-pumped" },
  { title: "Red Notice", cover: "red-notice", href: "https://www.goodreads.com/book/show/22609522-red-notice" },
  { title: "Billion Dollar Whale", cover: "billion-dollar-whale", href: "https://www.goodreads.com/book/show/38743564-billion-dollar-whale" },
  { title: "The Body", cover: "the-body", href: "https://www.goodreads.com/book/show/43599513-the-body" },
  { title: "Invisible Women", cover: "invisible-women", href: "https://www.goodreads.com/book/show/41104077-invisible-women" },
  { title: "Rework", cover: "rework", href: "https://www.goodreads.com/book/show/6732019-rework" },
  { title: "Hooked", cover: "hooked", href: "https://www.goodreads.com/book/show/22668729-hooked" },
  { title: "Indistractable", cover: "indistractable", href: "https://www.goodreads.com/book/show/44595007-indistractable" },
  { title: "Weapons of Math Destruction", cover: "weapons-of-math-destruction", href: "https://www.goodreads.com/book/show/28186015-weapons-of-math-destruction" },
  { title: "Good Services", cover: "good-services", href: "https://www.goodreads.com/book/show/51209181-good-services" },
  { title: "Brief Answers to the Big Questions", cover: "brief-answers", href: "https://www.goodreads.com/book/show/40277241-brief-answers-to-the-big-questions" },
  { title: "Hire Women", cover: "hire-women", href: "https://www.goodreads.com/book/show/41078128-hire-women" },
  { title: "How to Change Your Mind", cover: "how-to-change-your-mind", href: "https://www.goodreads.com/book/show/36613747-how-to-change-your-mind" },
  { title: "Lost Connections", cover: "lost-connections", href: "https://www.goodreads.com/book/show/34921573-lost-connections" },
  { title: "The School of Life", cover: "school-of-life", href: "https://www.goodreads.com/book/show/43264830-the-school-of-life" },
  { title: "The Course of Love", cover: "course-of-love", href: "https://www.goodreads.com/book/show/27845690-the-course-of-love" },
  { title: "Attached", cover: "attached", href: "https://www.goodreads.com/book/show/9547888-attached" },
  { title: "The Happiness Project", cover: "happiness-project", href: "https://www.goodreads.com/book/show/6398634-the-happiness-project" },
  { title: "The Tipping Point", cover: "tipping-point", href: "https://www.goodreads.com/book/show/2612.The_Tipping_Point" },
  { title: "The Republic", cover: "the-republic", href: "https://www.goodreads.com/book/show/30289.The_Republic" },
  { title: "On the Suffering of the World", cover: "suffering-of-the-world", href: "https://www.goodreads.com/book/show/55574772-on-the-suffering-of-the-world" },
  { title: "Kitchen Confidential", cover: "kitchen-confidential", href: "https://www.goodreads.com/book/show/33313.Kitchen_Confidential" },
  { title: "What I Know About Running Coffee Shops", cover: "running-coffee-shops", href: "https://www.goodreads.com/book/show/40582817-what-i-know-about-running-coffee-shops" },
  { title: "Build", cover: "build", href: "https://www.goodreads.com/book/show/59696349-build" },
  { title: "Monetizing Innovation", cover: "monetizing-innovation", href: "https://www.goodreads.com/book/show/30121516-monetizing-innovation" },
  { title: "$100M Offers", cover: "100m-offers", href: "https://www.goodreads.com/book/show/58612786-100m-offers" },
  { title: "The Zero Transaction Cost Entrepreneur", cover: "zero-transaction-cost", href: "https://www.goodreads.com/book/show/143372011-the-zero-transaction-cost-entrepreneur" },
  { title: "The Algebra of Wealth", cover: "algebra-of-wealth", href: "https://www.goodreads.com/book/show/150246211-the-algebra-of-wealth" },
  { title: "Rich Dad Poor Dad", cover: "rich-dad-poor-dad", href: "https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad" },
  { title: "The Secret", cover: "the-secret", href: "https://www.goodreads.com/book/show/52529.The_Secret" },
  { title: "Long Island Compromise", cover: "long-island-compromise", href: "https://www.goodreads.com/book/show/55777544-long-island-compromise" },
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
    slug: "last-mile-sales-coaching",
    title: "The Last Mile of Sales Coaching",
    date: "2026-06-01",
    displayDate: "Jun 2026",
    summary:
      "Coaching has always been an event that arrives too late. With AI it becomes an environment that shows up in the moment.",
    // TODO(ian): paste the LinkedIn article URL for the canonical link
  },
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
