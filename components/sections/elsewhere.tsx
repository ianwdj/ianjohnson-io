import { elsewhere } from "@/lib/content";
import { Reveal } from "@/components/reveal";

/* What Ian's into outside work. Renders nothing until lib/content.ts
   `elsewhere` is populated with his real answers — no invented tastes. */
export function ElsewhereSection() {
  if (elsewhere.length === 0) return null;
  return (
    <section
      id="elsewhere"
      className="mx-auto max-w-content scroll-mt-16 px-6 py-24 sm:py-32"
    >
      <Reveal>
        <p className="meta">Elsewhere</p>
      </Reveal>
      <div className="mt-10 flex flex-col gap-8">
        {elsewhere.map((group) => (
          <Reveal key={group.label}>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
              <span className="meta w-28 shrink-0 pt-[6px]">{group.label}</span>
              <p className="leading-[1.65]">{group.items.join(" · ")}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
