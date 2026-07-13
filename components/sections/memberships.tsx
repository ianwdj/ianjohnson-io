import { memberships } from "@/lib/content";
import { Reveal } from "@/components/reveal";

/* One quiet labeled line. Memberships are communities, not roles, so they
   sit outside the work ledger and carry no logos. */
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
          <p className="text-[15.5px] leading-[1.55]">
            {memberships.map((item, i) => (
              <span key={item.label}>
                {i > 0 && " · "}
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
