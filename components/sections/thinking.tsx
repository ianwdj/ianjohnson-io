import { principles } from "@/lib/content";
import { Reveal } from "@/components/reveal";

/* Vertical accordion: titles always visible, bodies expand on click.
   Native <details> so every principle stays in the DOM for readers,
   crawlers, and no-JS visitors (same pattern as the essay list). */
export function ThinkingSection() {
  return (
    <section
      id="thinking"
      className="mx-auto max-w-wide scroll-mt-16 px-6 py-10"
    >
      <Reveal>
        <p className="meta">How I think</p>
      </Reveal>
      <div className="mt-[18px] border-b border-hairline">
        {principles.map((p, i) => (
          <Reveal key={p.title}>
            <details className="disclosure group border-t border-hairline">
              <summary className="flex cursor-pointer items-baseline gap-3 py-3">
                <span className="meta pt-[2px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[17px] transition-colors duration-300 group-hover:text-coral-deep">
                  {p.title}
                </h3>
                <span aria-hidden className="meta ml-auto shrink-0 pt-[2px]">
                  <span className="when-closed">+</span>
                  <span className="when-open">−</span>
                </span>
              </summary>
              <div className="pb-4 pl-8 pr-6">
                <p className="max-w-[680px] text-[15.5px] leading-[1.55]">
                  {p.body}
                </p>
                {p.receipt && (
                  <a
                    href={p.receipt.href}
                    className="link meta mt-2 inline-block normal-case tracking-normal"
                  >
                    {p.receipt.label} →
                  </a>
                )}
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
