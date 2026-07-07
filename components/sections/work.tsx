import { projects } from "@/lib/content";
import { WorkCard } from "@/components/work-card";
import { Reveal } from "@/components/reveal";

export function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-wide scroll-mt-16 px-6 py-24 sm:py-32">
      <Reveal>
        <p className="meta">Selected work</p>
      </Reveal>
      <div className="mt-12 flex flex-col border-b border-hairline">
        {projects.map((project) => (
          <Reveal key={project.slug}>
            <WorkCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
