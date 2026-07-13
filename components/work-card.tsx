import Image from "next/image";
import Link from "next/link";
import type { LogoId, Project } from "@/lib/content";
import { AlibabaLogo, GlobalELogo, ShopifyLogo } from "@/components/logos";

const ACQUIRER_LOGOS: Record<
  LogoId,
  { Component: React.ComponentType<{ className?: string }>; className: string }
> = {
  globale: { Component: GlobalELogo, className: "h-[18px] w-auto" },
  // Shopify's viewBox includes the bag glyph, so its wordmark x-height runs
  // ~30% short of Global-e's at equal heights; 21px restores optical parity
  shopify: { Component: ShopifyLogo, className: "h-[21px] w-auto" },
  // square glyph needs more height to sit level with the wordmarks
  alibaba: { Component: AlibabaLogo, className: "h-[24px] w-auto" },
};

/* collapsed-row scale: same optical ratios, small enough to sit inline
   beside the outcome meta without crowding the dates */
const SUMMARY_ACQUIRER_SIZE: Record<LogoId, string> = {
  globale: "h-[13px] w-auto",
  shopify: "h-[15px] w-auto",
  alibaba: "h-[16px] w-auto",
};

/* Company marks sourced from each company's own site (Lasso via the Wayback
   Machine). Shown in their original brand colors (Ian, July 2026) — no
   warm-mono filter. Flow is the 2021 lockup (woven mark + flow wordmark)
   in its official black on-light variant, from the late flow.io site. */
const COMPANY_LOGOS: Record<
  string,
  { src: string; w: number; h: number; className: string }
> = {
  // heights tuned per file so the four wordmarks share one optical cap
  // height (~18px) despite different internal padding in the source art
  aida: { src: "/logos/aida.svg", w: 72, h: 24, className: "h-[20px] w-auto" },
  flow: { src: "/logos/flow-2021.svg", w: 292, h: 70, className: "h-[21px] w-auto" },
  showtime: { src: "/logos/showtime.webp", w: 500, h: 163, className: "h-[33px] w-auto" },
  lasso: { src: "/logos/lasso.png", w: 443, h: 175, className: "h-[24px] w-auto" },
};

/* Ledger row that expands: logo, outcome, and dates always visible;
   the story, image, and case-study link unfold on click. Native
   <details>, so everything stays in the DOM (same pattern as the
   essay list and How I think). */
export function WorkCard({ project }: { project: Project }) {
  const company = COMPANY_LOGOS[project.slug];
  const outcome = project.proof ?? project.role;
  return (
    <details className="disclosure group border-t border-hairline">
      <summary className="flex cursor-pointer flex-wrap items-center gap-x-4 gap-y-1.5 py-4">
        {/* the wordmark IS the name; the h3 keeps it readable for screen
            readers and search without printing it twice */}
        <h3 className="flex w-[128px] items-center gap-2.5">
          <span className="sr-only">{project.name}</span>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/logo inline-flex items-center gap-2"
            >
              {company && (
                <Image
                  src={company.src}
                  alt={`${project.name} logo`}
                  width={company.w}
                  height={company.h}
                  loading="eager"
                  className={company.className}
                />
              )}
              {/* inline SVG, not the ↗ character: mobile platforms render
                  U+2197 as the boxy emoji variant */}
              <svg
                aria-hidden
                viewBox="0 0 12 12"
                className="h-[11px] w-[11px] text-putty transition-colors duration-300 group-hover/logo:text-coral-deep"
              >
                <path
                  d="M3 9 9 3M4.5 3H9v4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : (
            company && (
              <Image
                src={company.src}
                alt={`${project.name} logo`}
                width={company.w}
                height={company.h}
                loading="eager"
                className={company.className}
              />
            )
          )}
          {project.status === "current" && (
            <>
              <span
                aria-hidden
                className="inline-block h-[7px] w-[7px] rounded-full bg-coral"
              />
              <span className="sr-only">(current)</span>
            </>
          )}
        </h3>
        {outcome && <p className="meta">{outcome}</p>}
        {/* acquirer/partner marks ride the collapsed row so the outcome
            reads without a click; sized down from the expanded scale */}
        {project.logos && project.logos.length > 0 && (
          <span className="flex items-center gap-3.5 text-putty opacity-75">
            {project.logos.map((id) => {
              const { Component: Logo } = ACQUIRER_LOGOS[id];
              return <Logo key={id} className={SUMMARY_ACQUIRER_SIZE[id]} />;
            })}
          </span>
        )}
        <span className="ml-auto flex shrink-0 items-center gap-3">
          <span className="meta">{project.period}</span>
          <span aria-hidden className="meta">
            <span className="when-closed">+</span>
            <span className="when-open">−</span>
          </span>
        </span>
      </summary>
      <div className="pb-5">
        <p className="text-[15px] text-putty">{project.category}</p>
        <p className="mt-2 text-[16.5px] leading-[1.55]">{project.teaser}</p>
        {project.featured?.map((line) => (
          <p key={line} className="mt-2.5 text-[16.5px] leading-[1.55] [text-wrap:pretty]">
            {line}
          </p>
        ))}
        {project.image && (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="eager"
            className="mt-3.5 w-full rounded-lg border border-hairline"
          />
        )}
        {project.caseStudy && (
          <Link href={project.caseStudy.href} className="link mt-3 inline-block text-[16.5px]">
            {project.caseStudy.label} →
          </Link>
        )}
      </div>
    </details>
  );
}
