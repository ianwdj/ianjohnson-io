import { hero, site } from "@/lib/content";

/* Splits the statement around the accent phrase so it can be set in coral. */
function AccentedStatement() {
  const { statement, accentPhrase } = hero;
  const i = statement.indexOf(accentPhrase);
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
      <p
        className="fade-up meta"
        style={{ animationDelay: "0ms" }}
      >
        {site.location}
      </p>
      <h1
        className="fade-up mt-6 font-serif text-[clamp(44px,7vw,68px)] leading-[1.08] tracking-tight"
        style={{ animationDelay: "80ms" }}
      >
        <AccentedStatement />
      </h1>
      <p
        className="fade-up mt-8 text-[19px] leading-[1.65] text-ink"
        style={{ animationDelay: "160ms" }}
      >
        {hero.detail}
      </p>
      <p
        className="fade-up mt-4 font-serif text-[17px] italic text-putty"
        style={{ animationDelay: "240ms" }}
      >
        {site.name} · {site.role}
      </p>
    </section>
  );
}
