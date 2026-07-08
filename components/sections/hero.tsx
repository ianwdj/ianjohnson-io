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
      {/* the one ambient element beyond grain: still, warm light behind the
          opening, so the ground reads as daylight instead of paper */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-24 -top-16 bottom-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 28% 18%, rgba(232,80,58,0.065), rgba(239,236,230,0) 62%), radial-gradient(ellipse 65% 55% at 85% 95%, rgba(201,138,94,0.055), rgba(239,236,230,0) 55%)",
        }}
      />
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
          className="fade-up mt-4 max-w-[820px] font-serif text-[clamp(48px,8vw,84px)] font-normal leading-[1.04] tracking-[-0.01em]"
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
