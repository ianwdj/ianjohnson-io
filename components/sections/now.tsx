import { now } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function NowSection() {
  return (
    <section id="now" className="mx-auto max-w-wide scroll-mt-16 px-6 py-24 sm:py-32">
      <Reveal>
        <p className="meta">Now</p>
        <ul className="mt-8 flex flex-col gap-3">
          {now.lines.map((line) => (
            <li key={line} className="leading-[1.65]">
              {line}
            </li>
          ))}
        </ul>
        <p className="meta mt-8">Updated {now.updated}</p>
      </Reveal>
    </section>
  );
}
