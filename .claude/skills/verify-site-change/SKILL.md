---
name: verify-site-change
description: Verify any UI-visible change to ianjohnson.io end-to-end before declaring it done. Use after editing anything under app/, components/, content/, or lib/content.ts.
---

# Verifying site changes

Never report a UI change as complete based on a successful edit alone. A change is
done when it survives all of the following, in order:

## 1. Static gates (cheap, run first)

```bash
npm run check   # lint + typecheck + build — all three must pass
```

If the change touched copy or content, also run the fact sweep from
`.claude/skills/site-copy-rules/SKILL.md`.

## 2. Live verification

1. Start the dev server (`preview_start`, config name `dev`). If pages render
   unstyled after a production build ran, `rm -rf .next` and restart the server.
2. Verify the changed element via DOM, not eyeballs: `preview_inspect` or
   `preview_eval` asserting the exact text/attribute/computed style you changed.
3. `preview_console_logs` with level=error: **zero errors** (warnings explained or fixed).
4. Interactions: if the change added/edited a link or control, click it
   (`preview_click`) and confirm the destination/state change.

## 3. Visual proof

- Screenshot the affected region. Known env quirk: scrolled screenshots can capture
  blank; if so, `preview_resize` to full page height (1280×4500), screenshot at
  scroll 0, then reset with the desktop preset.
- For layout-affecting changes, repeat at mobile (375px): no horizontal scroll,
  hero clamps, cards stack.

## 4. Palette regression (this site's signature constraint)

Any change that introduced colors or images: verify **no blue, no cool gray** —
inspect computed colors of new elements; new imagery must sit under a warm filter
(see `.prose-letter img` / `.portrait-warm` in app/globals.css).

If any step fails: fix, then rerun from step 1. Do not hand back partially
verified work. If the same failure shows up twice, don't just fix it — encode the
prevention here or in CLAUDE.md so future runs inherit it.
