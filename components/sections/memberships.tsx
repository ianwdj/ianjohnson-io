/* eslint-disable @next/next/no-img-element */
import { memberships } from "@/lib/content";
import { Reveal } from "@/components/reveal";

/* One quiet labeled line. Memberships are communities, not roles, so they
   sit outside the work ledger; the mark rides beside the text at meta
   scale, same treatment as the acquirer logos in the ledger. */
export function MembershipsSection() {
  if (memberships.length === 0) return null;
  return (
    <section
      id="memberships"
      className="mx-auto max-w-wide scroll-mt-16 px-6 py-10"
    >
      <Reveal>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
          <span className="meta w-28 shrink-0 pt-[6px]">Memberships</span>
          <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[15.5px] leading-[1.55]">
            {memberships.map((item, i) => (
              <span key={item.label} className="inline-flex items-center gap-2.5">
                {i > 0 && <span>·</span>}
                {item.logo && (
                  <img
                    src={item.logo}
                    alt=""
                    className="h-[15px] w-auto opacity-75"
                  />
                )}
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </span>
            ))}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
