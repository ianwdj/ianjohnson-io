import { hero, type Segment } from "@/lib/content";

/* Renders copy segments, turning href-carrying segments into quiet links. */
function Segments({ segs }: { segs: Segment[] }) {
  return (
    <>
      {segs.map((s, i) =>
        s.href ? (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {s.text}
          </a>
        ) : (
          <span key={i}>{s.text}</span>
        )
      )}
    </>
  );
}

export function Hero() {
  return (
    <section className="relative mx-auto max-w-wide px-6 pb-7 pt-10">
      <div className="relative">
        {/* the visible identity line moved into the header; keep the page's
            h1 for readers and crawlers without repeating it visually */}
        <h1 className="sr-only">
          {hero.statement.map((s) => s.text).join("")}
        </h1>
        <p
          className="fade-up font-serif text-[18px] italic text-putty"
          style={{ animationDelay: "0ms" }}
        >
          {hero.greeting}
        </p>
        {hero.detail.map((para, i) => (
          <p
            key={i}
            className="fade-up mt-3 text-[16.5px] leading-[1.58] text-ink [text-wrap:pretty]"
            style={{ animationDelay: `${120 + i * 60}ms` }}
          >
            <Segments segs={para} />
          </p>
        ))}
      </div>
    </section>
  );
}
