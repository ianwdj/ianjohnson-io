"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { useEffect, useState, type ReactNode } from "react";
import { SECTIONS, type SectionId } from "@/lib/content";
import { cn } from "@/lib/utils";

const FOLIO = ["i", "ii", "iii", "iv"];

const TAB_TONE: Record<SectionId, string> = {
  hello: "data-[state=active]:text-pencil-orange",
  work: "data-[state=active]:text-pencil-red",
  words: "data-[state=active]:text-pencil-blue",
  elsewhere: "data-[state=active]:text-pencil-green",
};

export function Notebook({
  sections,
}: {
  sections: Record<SectionId, ReactNode>;
}) {
  const [active, setActive] = useState<SectionId>("hello");
  const index = SECTIONS.findIndex((s) => s.id === active);

  const go = (i: number) => {
    const clamped = Math.max(0, Math.min(SECTIONS.length - 1, i));
    setActive(SECTIONS[clamped].id);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      // airtight input guard: never hijack keys while typing in a field
      const ae = document.activeElement as HTMLElement | null;
      const isEditable = (el: HTMLElement | null) =>
        !!el &&
        (el.tagName === "INPUT" ||
          el.tagName === "TEXTAREA" ||
          el.isContentEditable);
      if (isEditable(ae) || isEditable(e.target as HTMLElement | null)) return;
      if (e.key === "ArrowRight") return go(index + 1), e.preventDefault();
      if (e.key === "ArrowLeft") return go(index - 1), e.preventDefault();
      const byNum = Number(e.key);
      if (byNum >= 1 && byNum <= SECTIONS.length) {
        setActive(SECTIONS[byNum - 1].id);
        return e.preventDefault();
      }
      const hit = SECTIONS.find((s) => s.key === e.key.toLowerCase());
      if (hit) {
        setActive(hit.id);
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <div className="relative z-10 mx-auto w-full max-w-page px-4 sm:px-0">
      <Tabs.Root
        value={active}
        onValueChange={(v) => setActive(v as SectionId)}
        activationMode="manual"
      >
        {/* the notebook: binder casing (::before) behind the cream sheet */}
        <div className="notebook relative before:absolute before:inset-y-0 before:-bottom-2.5 before:-left-3.5 before:-right-2 before:top-0 before:rounded-[5px] before:bg-[var(--binder)] before:bg-gradient-to-r before:from-[var(--binder-dark)] before:via-[var(--binder)] before:to-[var(--binder-dark)] before:shadow-[0_30px_55px_-30px_var(--desk-shadow)] before:content-['']">
          {/* flush folder tabs */}
          <Tabs.List
            aria-label="Sections"
            className="relative z-30 flex gap-1.5 pl-10"
          >
            {SECTIONS.map((s) => (
              <Tabs.Trigger
                key={s.id}
                value={s.id}
                className={cn(
                  "folder-tab rounded-t-[6px] border border-b-0 border-rule/70 px-4 pb-2 pt-1.5",
                  "font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-mute",
                  // inactive: recessed slightly downward, darker, tucked
                  "translate-y-[3px] bg-[var(--tab-recessed)] shadow-[inset_0_-3px_5px_-3px_rgba(0,0,0,0.28)]",
                  "transition-[transform,background-color,color] duration-150 ease-press",
                  "can-hover:hover:translate-y-[1px]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                  // active: fuses into the sheet — same cream, no tuck shadow, sits forward and overlaps the seam
                  "data-[state=active]:z-10 data-[state=active]:translate-y-[1px] data-[state=active]:bg-paper data-[state=active]:text-ink data-[state=active]:font-medium data-[state=active]:shadow-none data-[state=active]:border-rule",
                  TAB_TONE[s.id],
                )}
              >
                {s.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* cream sheet */}
          <div className="paper paper-stack relative z-20">
            <div className="relative min-h-[760px] px-[clamp(28px,7vw,76px)] pb-[120px] pt-[84px]">
              {SECTIONS.map((s) => (
                <Tabs.Content
                  key={s.id}
                  value={s.id}
                  forceMount
                  tabIndex={-1}
                  className={cn(
                    "absolute inset-x-[clamp(28px,7vw,76px)] top-[84px] transform-gpu outline-none",
                    "transition-[opacity,transform] duration-300 ease-page will-change-[opacity,transform]",
                    "data-[state=inactive]:pointer-events-none data-[state=inactive]:z-0 data-[state=inactive]:translate-y-2 data-[state=inactive]:opacity-0",
                    "data-[state=active]:relative data-[state=active]:inset-x-0 data-[state=active]:top-0 data-[state=active]:z-10 data-[state=active]:translate-y-0 data-[state=active]:opacity-100",
                    "motion-reduce:transition-none motion-reduce:translate-y-0",
                  )}
                >
                  {sections[s.id]}
                </Tabs.Content>
              ))}
            </div>

            {/* folio + prev/next */}
            <div className="pointer-events-none absolute inset-x-[clamp(28px,7vw,76px)] bottom-9 z-30 flex items-baseline justify-between font-mono text-[10.5px] tracking-[0.1em] text-ink-mute">
              <span>
                <span className="text-accent">{FOLIO[index]}</span> / iv
              </span>
              <span className="pointer-events-auto flex gap-1">
                <button
                  onClick={() => go(index - 1)}
                  disabled={index === 0}
                  className="px-2 py-1 transition-colors duration-150 hover:text-ink disabled:opacity-30"
                  aria-label="Previous section"
                >
                  ← prev
                </button>
                <button
                  onClick={() => go(index + 1)}
                  disabled={index === SECTIONS.length - 1}
                  className="px-2 py-1 transition-colors duration-150 hover:text-ink disabled:opacity-30"
                  aria-label="Next section"
                >
                  next →
                </button>
              </span>
            </div>
          </div>
        </div>
      </Tabs.Root>
    </div>
  );
}
