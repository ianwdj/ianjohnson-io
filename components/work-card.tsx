import type { LogoId, Project } from "@/lib/content";
import { AlibabaLogo, GlobalELogo, ShopifyLogo } from "@/components/logos";

const LOGOS: Record<
  LogoId,
  { Component: React.ComponentType<{ className?: string }>; className: string }
> = {
  globale: { Component: GlobalELogo, className: "h-[18px] w-auto" },
  shopify: { Component: ShopifyLogo, className: "h-[18px] w-auto" },
  // square glyph needs a touch more height to sit level with the wordmarks
  alibaba: { Component: AlibabaLogo, className: "h-[24px] w-auto" },
};

export function WorkCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-lg border border-hairline bg-cream px-6 py-5 transition-colors duration-300 ease-slow can-hover:hover:border-coral/40 can-hover:hover:bg-cream-deep">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-[22px]">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors duration-300 hover:text-coral-deep"
            >
              {project.name}
              <span aria-hidden className="ml-1 text-[15px] text-putty">
                ↗
              </span>
            </a>
          ) : (
            project.name
          )}
          {project.status === "current" && (
            <>
              <span
                aria-hidden
                className="ml-2 inline-block h-[7px] w-[7px] rounded-full bg-coral align-middle"
              />
              <span className="sr-only">(current)</span>
            </>
          )}
        </h3>
        <span className="meta shrink-0">{project.period}</span>
      </div>
      <p className="mt-1 text-[15px] text-putty">{project.category}</p>
      <p className="mt-3 leading-[1.65]">{project.teaser}</p>
      {project.proof && <p className="meta mt-4">{project.proof}</p>}
      {project.logos && project.logos.length > 0 && (
        <div className="mt-3 flex items-center gap-6 text-putty opacity-80">
          {project.logos.map((id) => {
            const { Component: Logo, className } = LOGOS[id];
            return <Logo key={id} className={className} />;
          })}
        </div>
      )}
    </article>
  );
}
