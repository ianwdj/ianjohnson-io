import Image from "next/image";
import { hero, site } from "@/lib/content";

/* Splits the statement around the accent phrase so it can be set in coral. */
function AccentedStatement() {
  const { statement, accentPhrase } = hero;
  const i = accentPhrase ? statement.indexOf(accentPhrase) : -1;
  if (i === -1) return <>{statement}</>;
  return (
    <>
      {statement.slice(0, i)}
      <span className="text-coral">{accentPhrase}</span>
      {statement.slice(i + accentPhrase.length)}
    </>
  );
}

export function Hero() {
  return (
    <section className="mx-auto max-w-content px-6 pb-24 pt-24 sm:pb-32 sm:pt-32">
      <Image
        src="/portrait.jpg"
        alt={site.name}
        width={88}
        height={88}
        priority
        className="fade-up portrait-warm rounded-full"
        style={{ animationDelay: "0ms" }}
      />
      <h1
        className="fade-up mt-10 font-serif text-[clamp(44px,7vw,68px)] leading-[1.08] tracking-tight"
        style={{ animationDelay: "60ms" }}
      >
        <AccentedStatement />
      </h1>
      <p
        className="fade-up mt-8 text-[19px] leading-[1.65] text-ink [text-wrap:pretty]"
        style={{ animationDelay: "120ms" }}
      >
        {hero.detail}
      </p>
    </section>
  );
}
