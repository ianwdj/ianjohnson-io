import Image from "next/image";
import { hero, site, type Segment } from "@/lib/content";

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
    <section className="relative mx-auto max-w-wide px-6 pb-24 pt-24 sm:pb-32 sm:pt-32">
      <div className="relative">
        {/* modest avatar, US-tech register: the work leads, the face humanizes */}
        <Image
          src="/portrait.jpg"
          alt={site.name}
          width={112}
          height={112}
          priority
          className="fade-up portrait-duotone rounded-full"
          style={{ animationDelay: "0ms" }}
        />
        <p
          className="fade-up mt-10 font-serif text-[24px] italic text-putty"
          style={{ animationDelay: "60ms" }}
        >
          {hero.greeting}
        </p>
        <h1
          className="fade-up mt-4 max-w-[640px] font-serif text-[clamp(28px,4vw,44px)] font-normal leading-[1.15] tracking-[-0.005em]"
          style={{ animationDelay: "120ms" }}
        >
          <Segments segs={hero.statement} />
        </h1>
        {hero.detail.map((para, i) => (
          <p
            key={i}
            className="fade-up mt-8 max-w-[640px] text-[19px] leading-[1.65] text-ink [text-wrap:pretty]"
            style={{ animationDelay: `${180 + i * 60}ms` }}
          >
            <Segments segs={para} />
          </p>
        ))}
      </div>
    </section>
  );
}
