import { elsewhere, elsewhereTitle } from "@/lib/content";
import { Reveal } from "@/components/reveal";

/* Personal section: side products, food ventures, film, places.
   Content and links come from lib/content.ts — his real stuff only. */
export function ElsewhereSection() {
  if (elsewhere.length === 0) return null;
  return (
    <section
      id="elsewhere"
      className="mx-auto max-w-wide scroll-mt-16 px-6 py-14 sm:py-20"
    >
      <Reveal>
        <p className="meta">{elsewhereTitle}</p>
      </Reveal>
      <div className="mt-8 flex flex-col gap-8">
        {elsewhere.map((group) => (
          <Reveal key={group.label}>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
              <span className="meta w-28 shrink-0 pt-[6px]">{group.label}</span>
              <p className="leading-[1.65]">
                {group.items.map((item, i) => (
                  <span key={item.label}>
                    {i > 0 && " · "}
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        {item.label}
                      </a>
                    ) : (
                      item.label
                    )}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
