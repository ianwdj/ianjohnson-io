import type { Project } from "@/lib/content";

export function WorkCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-lg border border-hairline bg-cream px-6 py-5 transition-colors duration-300 ease-slow can-hover:hover:border-coral/40 can-hover:hover:bg-cream-deep">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-[22px]">
          {project.name}
          {project.status === "current" && (
            <span
              className="ml-2 inline-block h-[7px] w-[7px] rounded-full bg-coral align-middle"
              title="Current"
            />
          )}
        </h3>
        <span className="meta shrink-0">{project.period}</span>
      </div>
      <p className="mt-1 text-[15px] text-putty">{project.category}</p>
      <p className="mt-3 leading-[1.65]">{project.teaser}</p>
      {project.proof && <p className="meta mt-4">{project.proof}</p>}
    </article>
  );
}
