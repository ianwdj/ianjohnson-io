import Image from "next/image";
import { aidaPortfolio } from "@/lib/content";

export function AidaIndex() {
  return (
    <div className="pb-3">
      <p className="mt-1 text-[16px] leading-[1.6]">{aidaPortfolio.intro}</p>
      <p className="mb-6 mt-2 text-[15px] leading-[1.55] text-[#655F55]">{aidaPortfolio.ownership}</p>
      <nav aria-label="Explore my work at Aida">
        {aidaPortfolio.entries.map((entry) => (
          <a key={entry.href} href={entry.href} className="grid grid-cols-[88px_minmax(0,1fr)_12px] items-center gap-3 border-t border-hairline py-[18px] no-underline transition-colors duration-300 hover:bg-cream-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink sm:grid-cols-[112px_minmax(0,1fr)_16px] sm:gap-[18px]">
            <Image src={entry.image} alt={entry.alt} width={336} height={228} className="h-[64px] w-[88px] rounded border border-hairline object-cover sm:h-[76px] sm:w-[112px]" />
            <span>
              <span className="block text-[16px] font-medium leading-[1.4] tracking-[-.015em] sm:text-[17px]">{entry.title}</span>
              <span className="mt-1 block text-[15px] leading-[1.55] text-[#655F55]">{entry.description}</span>
            </span>
            <span aria-hidden="true">→</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
