/* Case study: "The Sales Meeting, End to End" — a year of meeting agents at
   Aida. All node content is Ian's, imported VERBATIM from his year-of-agents
   project (github.com/ianwdj/year-of-agents, src/data/content.ts). Do not
   edit his words; the interactive original lives at the live URL below. */

export const meetingStack = {
  slug: "aida",
  title: "The Sales Meeting, End to End",
  liveUrl: "https://year-of-agents.onrender.com/",
  // TODO(ian): intro is drafted connective tissue — make it yours.
  intro:
    "I spent a year building meeting agents at Aida. These are the four problems that were harder than they looked, with what worked, what failed, and what is still open.",
};

export type CaseNode = {
  id: string;
  index: number;
  title: string;
  kicker: string;
  problem: string;
  whyHard: [string, string];
  worked: string[];
  failed: string[];
  lesson: string;
  openQuestion: string;
};

export const meetingNodes: CaseNode[] = [
  {
    id: "prereads",
    index: 1,
    title: "Pre-reads",
    kicker: "feeds the next meeting",
    problem: "A brief that primes you for a meeting from prior context.",
    whyHard: [
      "It’s not summarization — it’s entity resolution. The hard part was the brief being about the right person, deal, and context. A gorgeous brief on the wrong company kills trust.",
      "A pre-read snapshots something that won’t hold still. New meetings stack up; the context graph moves. Static briefs rot in days — freshness is the whole problem.",
    ],
    worked: [
      "Calendar-triggered briefs at 24 hours and 10 minutes before.",
      "Attendee-scoped, not deal-scoped — how people walk into a room.",
      "Account-level synthesis for execs, not stacked deal summaries.",
    ],
    failed: [
      "Dossiers sometimes surfaced the wrong company — the worst failure mode.",
      "Research panels went blank for tenants who never set up config.",
      "Static summaries drifted from live data and started misleading.",
    ],
    lesson:
      "Entity resolution and tenant config are the silent killers — not summary quality. The model output was fine. The metadata around it broke things in the field.",
    openQuestion:
      "Fully automatic pre-reads vs. interactive “ask for what you need.” Never settled.",
  },
  {
    id: "diarization",
    index: 2,
    title: "Diarization",
    kicker: "raw input",
    problem: "Reliable speaker labels and clean transcripts, live.",
    whyHard: [
      "Raw accuracy barely matters. Segmentation stability does — whether who-said-what holds still. A transcript reads fine to a human and is still quietly broken underneath.",
      "Everything downstream trusts that segmentation. When it drifts, nothing errors — it just rots, and you find out three features later.",
    ],
    worked: [
      "Recall identity-based diarization live, plus a Gladia async pass for fidelity.",
      "Custom vocabulary for product and people names — fed in sparingly.",
      "Native Zoom recording when available, instead of fighting it.",
    ],
    failed: [
      "Aggressive custom vocab destroyed fidelity. Same-day revert.",
      "Merging transcript sources silently broke speaker attribution.",
      "A Google Meet diarization bug bit us for weeks. Multi-speaker-in-one-room never got solved.",
    ],
    lesson:
      "One stable transcript beats a richer merged one. The brittle part is what runs on top — not the transcript. Optimize for stability, not pretty text.",
    openQuestion:
      "Fusing identity-based and voice-fingerprint diarization at scale stayed in prototype.",
  },
  {
    id: "notes",
    index: 3,
    title: "Notes & storage",
    kicker: "system of record",
    problem: "Store meeting outputs so they can power everything downstream.",
    whyHard: [
      "Most “quality” complaints weren’t the model. They were wiring and metadata — the note landed in the wrong place, shape, or entity. The output was usually fine.",
      "Where a note lands decides what you can build on it. Week-one schema opens and closes doors. Get it wrong and you migrate everyone’s history.",
    ],
    worked: [
      "Event-scoped notes as work items, auto-archived after three days.",
      "Per-customer template configs that matched how each team works.",
      "Summary-only or full-transcript writeback — the customer’s choice.",
    ],
    failed: [
      "Raw transcripts in one text field: character limits, felt untrustworthy.",
      "Long-running notebooks just accumulated — nobody could find anything.",
      "Flaky auto-send recaps destroyed trust faster than any quality bug.",
    ],
    lesson:
      "Format and destination is unsolved industry-wide. Notebook, per-entity summary, or event-scoped artifact — each unlocks different downstream. No neutral default, so choose early and deliberately.",
    openQuestion: "We never converged on one canonical storage model.",
  },
  {
    id: "actions",
    index: 4,
    title: "Action items",
    kicker: "feeds forward into work",
    problem: "Turn meeting outputs into things people actually execute.",
    whyHard: [
      "Prescribing actions kills trust fast unless accuracy is very high. One confidently wrong to-do and the whole list is dead to them.",
      "There’s no universal action shape — it’s vertical-specific. Sales wants nothing like ops or product. The structure is the whole thing, different per customer.",
    ],
    worked: [
      "Per-field AUTO vs MANUAL, so only low-risk fields auto-execute.",
      "Style-only edits — AI changes tone, never facts.",
      "Confirm/cancel cards for irreversible actions. Biggest unlock: user-curated scaffolds — templates, custom instructions, weekly reports the AI just fills. Adoption jumped when users owned the structure.",
    ],
    failed: [
      "Generic AI action lists got ignored as noise.",
      "Low-value follow-ups cluttered tasks until people tuned out.",
      "Bot-voice recaps that did too much got rejected.",
    ],
    lesson:
      "Let users build the scaffold; let AI fill it. Don’t let AI decide someone else’s workflow — sales isn’t ops isn’t product. Hand structure to whoever owns the work.",
    openQuestion:
      "When to move draft → autopilot — by field, vertical, and accuracy threshold — unsolved.",
  },
];
