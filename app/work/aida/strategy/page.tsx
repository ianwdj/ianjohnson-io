import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { aidaStrategy, aidaPortfolio, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: aidaStrategy.title,
  description: aidaStrategy.introduction,
  alternates: { canonical: "/work/aida/strategy" },
};

export default function AidaStrategy() {
  const aida = projects.find((project) => project.slug === "aida")!;
  return <div className="relative z-10">
    <SiteHeader />
    <main className="mx-auto max-w-wide px-6 pb-24 pt-10">
      <Link href="/#work" className="link text-[14px]">Back to work</Link>
      <p className="meta mt-8">Aida / Product strategy</p>
      <h1 className="mt-4 text-[clamp(28px,4vw,36px)] leading-[1.18] tracking-tight">{aidaStrategy.title}</h1>
      <p className="mt-6 text-[18px] leading-[1.7]">{aidaStrategy.introduction}</p>
      <p className="mt-4 text-[16px] leading-[1.65] text-[#655F55]">{aidaPortfolio.ownership}</p>
      <section className="mt-10">
        <h2 className="text-[23px]">Where we invested</h2>
        {aidaStrategy.investment.map(p => <p key={p} className="mt-4 text-[18px] leading-[1.7]">{p}</p>)}
        <p className="mt-4 text-[18px] leading-[1.7]">{aida.featured?.[0]}</p>
      </section>
      <figure className="my-8 flex items-center gap-5 border-y border-hairline py-6">
        <Image src="/work/aida/thumbnails/strategy.svg" alt="Connected context supports the rep, the team, and execution" width={336} height={228} className="w-[112px] rounded sm:w-[168px]" />
        <figcaption className="text-[15px] leading-[1.6] text-[#655F55]">{aidaStrategy.note}</figcaption>
      </figure>
      {aidaStrategy.chapters.map(chapter => <section key={chapter.title} className="my-8">
        <h2 className="text-[23px]">{chapter.title}</h2>
        <p className="mt-3 text-[18px] leading-[1.7]">{chapter.job}</p>
        <p className="mt-3 text-[16px] leading-[1.65] text-[#655F55]">{chapter.capabilities}</p>
      </section>)}
      <Link href="/#work" className="link mt-8 inline-block">Back to work</Link>
    </main>
    <SiteFooter />
  </div>;
}
