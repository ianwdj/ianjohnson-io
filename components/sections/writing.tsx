import Link from "next/link";
import { essays } from "@/lib/content";
import { Reveal } from "@/components/reveal";

const VISIBLE_COUNT = 3;

function EssayRow({ essay }: { essay: (typeof essays)[number] }) {
  return (
    <Link
      href={`/writing/${essay.slug}`}
      className="group -mx-4 block rounded-lg px-4 py-4 no-underline transition-colors duration-300 ease-slow can-hover:hover:bg-cream-deep"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-[20px] transition-colors duration-300 group-hover:text-coral-deep">
          {essay.title}
        </h3>
        <span className="meta shrink-0">{essay.displayDate}</span>
      </div>
      <p className="mt-1 text-[16px] leading-[1.6] text-putty">
        {essay.summary}
      </p>
    </Link>
  );
}

export function WritingSection() {
  const visible = essays.slice(0, VISIBLE_COUNT);
  const rest = essays.slice(VISIBLE_COUNT);
  return (
    <section
      id="writing"
      className="mx-auto max-w-wide scroll-mt-16 px-6 py-14 sm:py-20"
    >
      <Reveal>
        <p className="meta">Writing</p>
      </Reveal>
      <div className="mt-8 flex flex-col">
        {visible.map((essay) => (
          <Reveal key={essay.slug}>
            <EssayRow essay={essay} />
          </Reveal>
        ))}
        {rest.length > 0 && (
          /* native disclosure: the rest of the list works without JS and
             stays in the DOM for readers and crawlers */
          <details className="essay-more">
            <summary className="link -mx-4 inline-block cursor-pointer px-4 py-4 text-[16px]">
              <span className="when-closed">Read {rest.length} more</span>
              <span className="when-open">Show less</span>
            </summary>
            {rest.map((essay) => (
              <EssayRow key={essay.slug} essay={essay} />
            ))}
          </details>
        )}
      </div>
    </section>
  );
}
