import Image from "next/image";
import { hero, site } from "@/lib/content";

/* Editorial split: the greeting ("I'm Ian.") sits small and italic above,
   the statement runs huge below. Split on the first sentence boundary so
   the copy still lives as one string in lib/content.ts (and metadata uses
   the full statement). */
function splitStatement() {
  const s = hero.statement;
  const i = s.indexOf(". ");
  if (i === -1) return { greeting: null, rest: s };
  return { greeting: s.slice(0, i + 1), rest: s.slice(i + 2) };
}

/* Wraps the accent phrase (if configured) in coral. */
function Accented({ text }: { text: string }) {
  const { accentPhrase } = hero;
  const i = accentPhrase ? text.indexOf(accentPhrase) : -1;
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="text-coral">{accentPhrase}</span>
      {text.slice(i + accentPhrase.length)}
    </>
  );
}

export function Hero() {
  const { greeting, rest } = splitStatement();
  return (
    <section className="mx-auto max-w-wide px-6 pb-24 pt-24 sm:pb-32 sm:pt-32">
      <Image
        src="/portrait.jpg"
        alt={site.name}
        width={160}
        height={160}
        priority
        className="fade-up portrait-warm rounded-full"
        style={{ animationDelay: "0ms" }}
      />
      {greeting && (
        <p
          className="fade-up mt-12 font-serif text-[24px] italic text-putty"
          style={{ animationDelay: "60ms" }}
        >
          {greeting}
        </p>
      )}
      <h1
        className="fade-up mt-4 font-serif text-[clamp(48px,8vw,84px)] font-normal leading-[1.04] tracking-[-0.01em]"
        style={{ animationDelay: "120ms" }}
      >
        <Accented text={greeting ? rest : hero.statement} />
      </h1>
      <p
        className="fade-up mt-8 text-[19px] leading-[1.65] text-ink [text-wrap:pretty]"
        style={{ animationDelay: "180ms" }}
      >
        {hero.detail}
      </p>
    </section>
  );
}
