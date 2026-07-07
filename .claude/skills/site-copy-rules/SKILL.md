---
name: site-copy-rules
description: Voice and fact rules for any copy written or edited on ianjohnson.io — hero, cards, principles, essays, metadata, commit-visible strings. Run its checklist before committing copy.
---

# Copy rules for ianjohnson.io

Ian's standing verdict on AI-crafted copy: "I hate your copy style." Voice and
accuracy are one complaint for him. Both checks below are mandatory.

## Voice check

Target register: a person talking (farza.co). Plain sentences, first person,
no rhetorical machinery. Prefer Ian's own rough words over polished alternatives;
when a line gets rejected, ask him for his version instead of generating more
variants in the same register.

Banned constructions (each one he has flagged):
- Colon-as-punchline: "Four products, one throughline: revenue"
- Manufactured parallelism: "small enough to trust, big enough to matter"
- Em-dashes anywhere in site copy (periods or commas instead)
- Coined accent phrases and aphorisms ("roadmap theater", "durable usage as the test")
- Thesis-statement openers ("AI products are judged by...")
- Title inflation: never "Head of Product"; he is "founding product lead" or a builder

Smell test: read the line aloud. If it sounds like a landing page or a LinkedIn
banner, rewrite it as something Ian would say across a table.

## Fact check

Single source of truth: the fact table in CLAUDE.md (companies, roles, outcomes,
"two acquisitions", "since 2014"). Every claim must trace to it or to a source
Ian gave this session.

Mechanical sweep before commit:

```bash
grep -rn -i "ten years\|throughline\|three companies\|head of product" app components lib content && echo "VIOLATIONS FOUND" || echo "clean"
grep -rn -i "acquired" app components lib content   # every hit must match the fact table
grep -rn "—" lib/content.ts components               # em-dash sweep: only RENDERED strings count (code comments are exempt; essays keep their original punctuation)
```

Essay bodies under `content/essays/` are Ian's published writing — do not "fix"
their voice or punctuation; only metadata (titles/summaries in lib/content.ts)
follows these rules.
