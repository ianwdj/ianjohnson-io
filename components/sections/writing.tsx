import Link from "next/link";
import { essays, site } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function WritingSection() {
  return (
    <section
      id="writing"
      className="mx-auto max-w-wide scroll-mt-16 px-6 py-24 sm:py-32"
    >
      <Reveal>
        <p className="meta">Writing</p>
      </Reveal>
      <div className="mt-10 flex flex-col">
        {essays.map((essay) => (
          <Reveal key={essay.slug}>
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
