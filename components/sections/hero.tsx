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
        <h1
          className="fade-up text-[15.5px] leading-[1.6] text-ink [text-wrap:pretty]"
          style={{ animationDelay: "0ms" }}
        >
          <Segments segs={hero.statement} />
        </h1>
        {hero.detail.map((para, i) => (
          <p
            key={i}
            className="fade-up mt-3 text-[15.5px] leading-[1.6] text-ink [text-wrap:pretty]"
            style={{ animationDelay: `${120 + i * 60}ms` }}
          >
            <Segments segs={para} />
          </p>
        ))}
      </div>
    </section>
  );
}
