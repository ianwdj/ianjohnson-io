import Image from "next/image";
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

/* Company marks sourced from each company's own site (Lasso via the Wayback
   Machine). Rendered warm-monochrome to sit inside the palette; Flow's
   source file is white-on-transparent, hence the invert variant. */
const COMPANY_LOGOS: Record<
  string,
  { src: string; w: number; h: number; className: string }
> = {
  // logos are the primary mark now (no serif name beside them), so they
  // run larger; heights tuned per wordmark for even optical weight
  aida: { src: "/logos/aida.svg", w: 72, h: 24, className: "logo-warm h-[28px] w-auto" },
  flow: { src: "/logos/flow.png", w: 220, h: 48, className: "logo-warm-invert h-[24px] w-auto" },
  showtime: { src: "/logos/showtime.webp", w: 500, h: 163, className: "logo-warm h-[30px] w-auto" },
  lasso: { src: "/logos/lasso.png", w: 443, h: 175, className: "logo-warm h-[28px] w-auto" },
};

/* Layout G: two-column spread. Name/dates/category left, story right. */
export function WorkCard({ project }: { project: Project }) {
  const company = COMPANY_LOGOS[project.slug];
  return (
    <div className="grid gap-3 border-t border-hairline py-10 sm:grid-cols-[260px_1fr] sm:gap-10">
      <div>
        {/* the wordmark IS the name; the h3 keeps it readable for screen
            readers and search without printing it twice */}
        <h3 className="flex items-center gap-3">
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
              <span
                aria-hidden
                className="text-[16px] text-putty transition-colors duration-300 group-hover/logo:text-coral-deep"
              >
                ↗
              </span>
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
        <p className="meta mt-4">{project.period}</p>
        <p className="mt-1 text-[15px] text-putty">{project.category}</p>
      </div>
      <div>
        <p className="leading-[1.65]">{project.teaser}</p>
        {project.featured?.map((line) => (
          <p key={line} className="mt-3 leading-[1.65] [text-wrap:pretty]">
            {line}
          </p>
        ))}
        {project.proof && <p className="meta mt-4">{project.proof}</p>}
        {project.logos && project.logos.length > 0 && (
          <div className="mt-4 flex items-center gap-6 text-putty opacity-80">
            {project.logos.map((id) => {
              const { Component: Logo, className } = ACQUIRER_LOGOS[id];
              return <Logo key={id} className={className} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
