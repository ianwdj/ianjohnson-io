import { principles } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function ThinkingSection() {
  return (
    <section
      id="thinking"
      className="mx-auto max-w-content scroll-mt-16 px-6 py-24 sm:py-32"
    >
      <Reveal>
        <p className="meta">How I think</p>
      </Reveal>
      <ol className="mt-10 flex flex-col gap-10">
        {principles.map((p, i) => (
          <Reveal key={p.title}>
            <li className="flex gap-5">
              <span className="meta pt-[6px]">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-serif text-[20px]">{p.title}</h3>
                <p className="mt-2 leading-[1.65]">{p.body}</p>
                {p.receipt && (
                  <a href={p.receipt.href} className="link meta mt-3 inline-block normal-case tracking-normal">
                    {p.receipt.label} →
                  </a>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
