# ianjohnson.io

Personal site for Ian Johnson. The bar for every change: **someone at Anthropic/OpenAI
finishes this page wanting to work with Ian.** Precision and plainness ARE the pitch.

## Non-negotiable rules

### Facts (never drift from this table)

| Company | Years | Ian's role | Outcome |
|---|---|---|---|
| Aida (getaida.com) | 2024–now | Founding product lead | Current. Ian's framing: "an agentic-native revenue system" — use this on his site, NOT getaida.com's "AI chief of staff" marketing line (Ian rejected it, July 2026) |
| Lasso AI | 2021–2023 | **Founder** | Acquired by Yard |
| Flow | 2018–2021 | **Principal PM** (employee, not founder) | Acquired by Global-e for $500M; white-label engine behind Shopify Markets |
| Showtime Analytics | 2014–2018 | **VP of Product** | **Never acquired.** Alibaba Pictures JV, 26 countries |

- Exactly TWO acquisitions (Lasso: founder; Flow: employee). Never say three. Never call Showtime an acquisition.
- On Deck founder fellow: AFTER Lasso, and it's a membership, not a job (Ian, July 2026). Never present it as a role or tie it to building Lasso.
- The four cards are four COMPANIES, not "four products" — Ian shipped many products within each. Count companies, never products (flagged by Ian July 2026).
- Career span: "Since 2014" — never "ten years" (goes stale, and it's twelve+).
- No claim ships without a source: Ian's word, his public bios, or this table.
- Identity links: Substack ianwdj.substack.com · LinkedIn linkedin.com/in/ianwdjohnson · email contact@ianjohnson.io.

### Voice (Ian rejects "crafted" copy — he will notice)

Write like a person talking, farza.co register. His words beat better words.
Banned (he has flagged each of these specifically):
- Colon-as-punchline ("Four products, one throughline: revenue")
- Manufactured parallelism ("small enough to X, big enough to Y")
- Em-dashes in site copy (use periods or commas)
- Coined accent phrases, aphorisms, thesis-statement openers
- Overclaiming anything. For Ian, voice and accuracy are one complaint: "sounds like AI and it's also factually incorrect"
- Never "Head of Product" — he's "founding product lead" / a builder

### Design system (approved, do not re-litigate)

"Her" (2013) warmth, porcelain variant (Ian switched July 2026 — the original cream
#FAF5EE read too close to Claude/Anthropic): porcelain #EFECE6 bg, cream-deep #E6E2D9,
ink #33302B, ink-strong #242118, putty #8B857A, coral #E8503A accent, hairline #DCD6CB.
**No blue anywhere, no cool gray, no pure white/black.** Newsreader
serif (opsz) + JetBrains Mono for metadata labels. 672px column. Motion: 300–500ms,
`cubic-bezier(0.22,1,0.36,1)`, fires once, must never be able to hide content
(see components/reveal.tsx — progressive enhancement pattern, keep it that way).

## Architecture

- Next.js 14 App Router, static output. All copy lives in `lib/content.ts` — components render, that file speaks.
- Essays: `content/essays/*.mdx`, metadata in `lib/content.ts`, routes at `/writing/[slug]`, canonical → Substack.
- `/work/[slug]` is reserved for future case studies (not built).
- `npm run check` = lint + typecheck + build. Must pass before any commit.

## Verification

Any UI-visible change: follow `.claude/skills/verify-site-change/SKILL.md` before reporting done.
Any copy change: follow `.claude/skills/site-copy-rules/SKILL.md`.
Known env quirks: if the dev server serves unstyled HTML after builds, `rm -rf .next` and restart.
If preview screenshots come back blank when scrolled, resize viewport to full page height
(e.g. 1280×4500) and capture at scroll 0 instead.
