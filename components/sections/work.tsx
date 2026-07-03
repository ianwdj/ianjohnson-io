import { workEntries, type PencilColor } from "@/lib/content";
import { CareerTimeline } from "@/components/work/career-timeline";
import { RequestAccessDialog } from "@/components/work/request-access-dialog";

const TONE: Record<PencilColor, string> = {
  red: "text-pencil-red",
  blue: "text-pencil-blue",
  green: "text-pencil-green",
  orange: "text-pencil-orange",
};

function Swatch({ color }: { color: PencilColor }) {
  return (
    <span className={`mt-1 block ${TONE[color]}`} aria-hidden="true">
      {/* a small hand-drawn pencil scribble — no rigid frame */}
      <svg className="sketch h-[16px] w-[16px]" viewBox="0 0 20 20">
        <g filter="url(#rough)" data-stroke strokeWidth={1.7}>
          <path d="M4 12 L11 4 M6 15 L15 5 M9 16 L16 9" />
        </g>
      </svg>
    </span>
  );
}

export function Work() {
  return (
    <div className="min-h-[592px]">
      <h2 className="flex items-baseline gap-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-mute">
        <span className="text-accent">01</span>
        <span>Work, sketched out</span>
      </h2>

      <p className="mt-6 max-w-[56ch] font-serif text-[17px] leading-relaxed text-ink-soft">
        Ten years building AI products that drive revenue. Right now:{" "}
        <strong className="font-medium text-ink">Aida</strong>. Before that,
        three companies that were acquired.
      </p>

      <CareerTimeline />

      <div className="mt-2 flex flex-col gap-[18px]">
        {workEntries.map((e) => (
          <article
            key={e.name}
            className="grid grid-cols-[20px_1fr] items-start gap-x-3.5"
          >
            <Swatch color={e.color} />
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-serif text-[18px] font-medium">{e.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-mute">
                  {e.period}
                </span>
                {e.locked && (
                  <span className="font-mono text-[9.5px] tracking-[0.06em] text-ink-mute">
                    [by request]
                  </span>
                )}
              </div>
              <p className="mt-0.5 max-w-[54ch] font-serif text-[16px] leading-relaxed text-ink-soft">
                {e.desc}
              </p>
              {e.related && (
                <p className="mt-1.5">
                  <a
                    href={e.related.href}
                    className="font-mono text-[10.5px] tracking-[0.04em] text-ink-soft underline decoration-dotted decoration-ink-mute/60 underline-offset-[3px] transition-colors duration-150 hover:text-accent hover:decoration-accent"
                  >
                    {e.related.label} ↗
                  </a>
                </p>
              )}
              {e.locked && (
                <p className="mt-1.5">
                  <RequestAccessDialog project={e.name} />
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
