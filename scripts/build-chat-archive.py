#!/usr/bin/env python3
"""Build lib/substack-archive.json for the Ask-about-Ian chat.

Fetches every post from Ian's Substack, strips Substack boilerplate, and
attaches per-post metadata (lens, topics, one-line TLDR, group + order)
so the chat's system prompt can lead with PM craft and treat the FiP
diary as supporting evidence. Rerun whenever Ian publishes:

    python3 scripts/build-chat-archive.py
"""
import json, re, html, time, subprocess, os

BASE = "https://ianwdj.substack.com/p/"
CAP = 25000  # posts are 4-12k chars; this cap only guards against runaways

# slug -> (group, order, lens, topics, tldr)
# Group A: PM craft and case studies (leads the context window).
# Group B: the Founding in Public diary (evidence, not the default lens).
META = {
  "using-customer-research-to-find-your": ("A", 1, "pm-craft",
    ["customer-research", "research-questions", "screeners", "recruiting-interviewees", "cold-outreach", "first-users"],
    "The research-first playbook that turns interviewees into first users at an 80 percent plus conversion rate, including cold outreach."),
  "product-frameworks-for-ideation": ("A", 2, "pm-craft",
    ["ideation", "viability-quadrant", "problem-briefs", "job-stories", "hill-charts", "cagan", "biddle"],
    "The PM frameworks Ian uses to vet new ideas, with his recommended reading naming Marty Cagan's SVPG and Gibson Biddle."),
  "a-concise-guide-to-shortlisting-startup": ("A", 3, "pm-craft",
    ["idea-scorecard", "why-now", "market-size", "unfair-advantage", "market-pull", "moats"],
    "His weighted idea scorecard, with a worked example where he scores his own ghostwriter idea and shelves it."),
  "the-pre-product-sales-sprint": ("A", 4, "pm-craft",
    ["willingness-to-pay", "pre-product-sales", "five-day-sprint", "artifax", "pricing"],
    "Closing $1,000 per user Artifax sales with a Notion page and phone calls, and the five-day sprint for validating demand before building anything."),
  "pain-points-experienced-from-100": ("A", 5, "pm-craft",
    ["surveys", "product-hunt", "market-validation", "llm-tools"],
    "Surveying builders across 100 Product Hunt launches to test whether selling shovels in the LLM gold rush is a real market."),
  "failed-project-1-aligning-product": ("A", 6, "pm-craft",
    ["opportunity-scores", "kill-decisions", "shared-understanding", "interviews"],
    "The opportunity-score math that killed his first idea, and the $115,000 shared-understanding mistake that shaped his PM practice."),
  "pivot-2-ai-user-interview-parsing": ("A", 7, "pm-craft",
    ["pivots", "stage-gates", "pilots", "kill-decisions", "syncd"],
    "Ten Syncd pilots, metrics that looked fine, and why he killed the product anyway."),
  "pivot-3-customer-success-and-customer": ("A", 8, "pm-craft",
    ["qual-then-quant", "interviews", "surveys", "kill-decisions"],
    "14 interviews plus a 41-response survey, the qual-then-quant method applied and the idea killed on the evidence."),
  "lasso": ("A", 9, "pm-craft",
    ["post-mortem", "willingness-to-pay", "lois", "platform-dependence", "cupcake-not-wedding-cake"],
    "The Lasso post-mortem. LOIs mean nothing, platform dependence can kill you, build the cupcake closest to the money in the workflow."),
  "launching-a-grilled-cheese-wine-bar": ("A", 10, "pm-craft",
    ["thique", "willingness-to-pay", "pricing-research", "scrappy-validation"],
    "THIQUE as a product case study. Taste-testing and willingness-to-pay research before opening, a $300 break-even target, $1,212 on the night with 80 plus guests."),
  "unleashing-the-potential-of-creators": ("A", 11, "pm-craft",
    ["market-analysis", "creator-economy", "why-now", "research"],
    "A why-now market analysis of the creator economy built on research with 150 plus creators."),
  "5-minute-read-on-sales-strategies": ("A", 12, "pm-craft",
    ["sales-strategies", "hormozi-value-equation", "ai-tools"],
    "Sales strategies and the Hormozi value equation takeaways he applies to product and sales work."),
  "what-i-think-this-newsletter-will": ("B", 1, "founder-journal",
    ["intro", "bio", "go-kill-criteria"],
    "The intro post. His background in his own words, and the go or kill criteria he applies to every idea he explores."),
  "fip-2-customer-success-handling-criticism": ("B", 2, "founder-journal",
    ["build-in-public", "handling-criticism", "creator-economy"],
    "Diary entry. Early idea exploration and handling public criticism."),
  "fip-3-free-creator-report-wildfire": ("B", 3, "founder-journal",
    ["wildfire-launch", "creator-report"],
    "Diary entry. The Wildfire launch and the free creator report."),
  "fip-4-crowdsourcing-problems-wildfire": ("B", 4, "founder-journal",
    ["crowdsourcing-problems", "proof-of-concepts"],
    "Diary entry. Crowdsourcing problems and running proof of concepts."),
  "fip-4-fuddles-first-made-and-twitter": ("B", 5, "founder-journal",
    ["first-revenue", "twitter-segments"],
    "Diary entry. First dollars made."),
  "fip-6-creator-opportunity-tree-audience": ("B", 6, "founder-journal",
    ["opportunity-tree", "focus-decisions", "creator-partnerships"],
    "Diary entry. The creator opportunity tree and the decision to focus on creator partnerships."),
  "fip-7-lasso-v1-launch-plan-writing": ("B", 7, "founder-journal",
    ["launch-plan", "a16z", "sequoia-arc"],
    "Diary entry. The Lasso v1 launch plan."),
  "fip-8-pilot-progress-v1-live-sharing": ("B", 8, "founder-journal",
    ["hands-on-pilots", "v1-live", "nothing-self-serve"],
    "Diary entry. Hands-on pilots, taking over the user's process, and why nothing needs to be self-serve at the start."),
  "fip9-83-cold-email-cvr-yc-application": ("B", 9, "founder-journal",
    ["cold-email", "show-dont-tell", "bullets-before-cannonballs", "yc-application"],
    "Diary entry. The 8.3 percent cold email conversion from showing a mock media kit instead of describing one, and firing bullets before cannonballs."),
  "fip10-guest-interviews-coming-release": ("B", 10, "founder-journal",
    ["take-it-away-test", "creator-search-tool"],
    "Diary entry. Testing value by taking the product away; the media kit migration email that got zero responses."),
  "fip11-finding-the-hair-on-fire-problem": ("B", 11, "founder-journal",
    ["hair-on-fire-signals", "problem-selection", "burnout"],
    "Diary entry. The hair-on-fire signals he trusts, and choosing which problem for whom in a nascent market."),
  "on-decks-new-chapter-9-game-changing": ("B", 12, "founder-journal",
    ["on-deck", "odf19", "community"],
    "Lessons from the On Deck in-person experience. On Deck is a membership community Ian joined after Lasso (ODF19 batch), never a job, and never an exit."),
}

# boilerplate lines/blocks stripped per post (subscribe CTAs, footers,
# scrape artifacts). Numbers, takeaways, and body text are never touched.
TRIM_PATTERNS = [
    r"Thanks for reading[^\n]*?Subscribe[^\n]*\n?",
    r"^\s*Subscribe now\s*$",
    r"^\s*Subscribe\s*$",
    r"^\s*Share this post\s*$",
    r"^\s*Share Founding in Public\s*$",
    r"^\s*Share\s*$",
    r"^\s*Leave a comment\s*$",
    r"Founding in Public is a reader-supported[^\n]*\n?",
    r"Sharing the highs, lows[^\n]*\n?",
    r"^\s*Loading\.\.\.\s*$",
    r"This site requires JavaScript[^\n]*\n?",
    r"© 20\d\d Ian Johnson[^\n]*\n?",
]

# footer blocks: cut everything from these markers ONWARD, but only when
# they appear in the back half of the post (the Lasso post-mortem embeds
# an audio player whose "Discussion" block sits near the top; a greedy
# tail-cut there deleted the whole essay)
TAIL_MARKERS = ["Discussion about this episode", "Comments Restacks"]


def clean(raw_html: str) -> str:
    s = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", raw_html, flags=re.S)
    s = re.sub(r"<br[^>]*>|</p>|</h\d>|</li>|</blockquote>", "\n", s)
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r"\n\s+", "\n", s)
    for pat in TRIM_PATTERNS:
        s = re.sub(pat, "", s, flags=re.M)
    for marker in TAIL_MARKERS:
        i = s.find(marker)
        if i > len(s) * 0.5:
            s = s[:i]
    return re.sub(r"\n{3,}", "\n\n", s).strip()


def fetch(url: str) -> str:
    return subprocess.run(
        ["curl", "-sL", "--max-time", "30", "-H", "User-Agent: Mozilla/5.0", url],
        capture_output=True, text=True,
    ).stdout


def main() -> None:
    out = []
    for slug, (group, order, lens, topics, tldr) in META.items():
        raw = fetch(BASE + slug)
        title = re.search(r'property="og:title" content="([^"]*)"', raw)
        date = re.search(r'"datePublished":"(\d{4}-\d{2}-\d{2})', raw)
        m = re.search(r'<div[^>]*class="body markup"[^>]*>(.*?)<div[^>]*class="post-footer', raw, flags=re.S)
        if not m:
            m = re.search(r'<div[^>]*class="body markup"[^>]*>(.*)', raw, flags=re.S)
        body = clean(m.group(1))[:CAP] if m else ""
        out.append({
            "title": html.unescape(title.group(1)).strip() if title else slug,
            "date": date.group(1) if date else "",
            "url": BASE + slug,
            "group": group,
            "order": order,
            "lens": lens,
            "topics": topics,
            "summary": tldr,
            "text": body,
        })
        print(f"{group}{order:>2}  {len(body):>6} chars  {out[-1]['title'][:58]}")
        time.sleep(0.4)

    out.sort(key=lambda p: (p["group"], p["order"]))
    path = os.path.join(os.path.dirname(__file__), "..", "lib", "substack-archive.json")
    json.dump(out, open(path, "w"), indent=1, ensure_ascii=False)
    total = sum(len(p["text"]) for p in out)
    print(f"\nwrote {len(out)} posts, {total} chars (~{total // 4} tokens) -> lib/substack-archive.json")


if __name__ == "__main__":
    main()
