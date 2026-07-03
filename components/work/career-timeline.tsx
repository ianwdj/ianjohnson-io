// Hand-drawn career timeline. Single-color groups drive stroke via currentColor
// (theme-safe); thin edges, baseline and arrow carry data-trace + pathLength so
// they draw themselves (staggered) when the Work panel becomes active.
const ROLES = [
  {
    color: "var(--pencil-red)",
    edge: "M 22 104 Q 116 106 210 104",
    a: [22, 104],
    b: [210, 104],
    title: ["Showtime Analytics", 116, 90],
    label: ["VP PRODUCT", 116, 76],
    delay: 0.05,
  },
  {
    color: "var(--pencil-blue)",
    edge: "M 212 64 Q 286 62 354 64",
    a: [212, 64],
    b: [354, 64],
    title: ["Flow", 283, 50],
    label: ["PRINCIPAL PM", 283, 36],
    delay: 0.2,
  },
  {
    color: "var(--pencil-green)",
    edge: "M 356 124 Q 391 122 426 124",
    a: [356, 124],
    b: [426, 124],
    title: ["Lasso AI", 391, 142],
    label: ["FOUNDER", 391, 156],
    delay: 0.35,
  },
] as const;

export function CareerTimeline() {
  return (
    <div className="my-[18px]">
      <svg
        className="sketch block h-auto w-full"
        viewBox="0 0 620 220"
        aria-label="Career timeline, 2014 to present"
      >
        <g filter="url(#rough)">
          {/* baseline */}
          <path
            data-stroke
            data-trace
            pathLength={1}
            style={{ color: "var(--ink-soft)", transitionDelay: "0s" }}
            stroke="currentColor"
            strokeWidth={1.6}
            d="M 20 168 Q 200 166 320 168 T 600 168"
          />

          {/* year ticks + labels */}
          <g
            fontFamily="var(--font-mono), monospace"
            fontSize={10}
            letterSpacing="0.05em"
            style={{ fill: "var(--ink-mute)" }}
          >
            <g data-stroke style={{ color: "var(--ink-mute)" }} stroke="currentColor" strokeWidth={1}>
              <line x1="20" y1="163" x2="20" y2="173" />
              <line x1="212" y1="163" x2="212" y2="173" />
              <line x1="356" y1="163" x2="356" y2="173" />
              <line x1="452" y1="163" x2="452" y2="173" />
              <line x1="596" y1="163" x2="596" y2="173" />
            </g>
            <text x="20" y="190" textAnchor="middle">2014</text>
            <text x="212" y="190" textAnchor="middle">2018</text>
            <text x="356" y="190" textAnchor="middle">2021</text>
            <text x="452" y="190" textAnchor="middle">2024</text>
            <text x="596" y="190" textAnchor="middle">&apos;26</text>
          </g>

          {ROLES.map((r) => (
            <g key={r.title[0] as string} style={{ color: r.color }}>
              {/* soft pencil underlay (static) */}
              <path data-stroke stroke="currentColor" strokeWidth={9} opacity={0.28} d={r.edge} />
              {/* crisp edge (traces) */}
              <path
                data-stroke
                data-trace
                pathLength={1}
                style={{ transitionDelay: `${r.delay}s` }}
                stroke="currentColor"
                strokeWidth={1.6}
                d={r.edge}
              />
              <circle cx={r.a[0]} cy={r.a[1]} r={3} fill="currentColor" />
              <circle cx={r.b[0]} cy={r.b[1]} r={3} fill="currentColor" />
              <text
                x={r.title[1] as number}
                y={r.title[2] as number}
                textAnchor="middle"
                fontFamily="var(--font-serif), serif"
                fontStyle="italic"
                fontSize={14}
                style={{ fill: "var(--ink)" }}
              >
                {r.title[0]}
              </text>
              <text
                x={r.label[1] as number}
                y={r.label[2] as number}
                textAnchor="middle"
                fontFamily="var(--font-mono), monospace"
                fontSize={9}
                letterSpacing="0.08em"
                style={{ fill: "var(--ink-mute)" }}
              >
                {r.label[0]}
              </text>
            </g>
          ))}

          {/* Aida — open-ended, with arrow */}
          <g style={{ color: "var(--pencil-orange)" }}>
            <path data-stroke stroke="currentColor" strokeWidth={9} opacity={0.28} d="M 452 84 Q 525 82 596 84" />
            <path
              data-stroke
              data-trace
              pathLength={1}
              style={{ transitionDelay: "0.5s" }}
              stroke="currentColor"
              strokeWidth={1.6}
              d="M 452 84 Q 525 82 596 84"
            />
            <circle cx={452} cy={84} r={3} fill="currentColor" />
            <path
              data-stroke
              data-trace
              pathLength={1}
              style={{ transitionDelay: "0.7s" }}
              stroke="currentColor"
              strokeWidth={1.6}
              d="M 588 78 L 600 84 L 588 90"
            />
            <text x={525} y={70} textAnchor="middle" fontFamily="var(--font-serif), serif" fontStyle="italic" fontSize={14} style={{ fill: "var(--ink)" }}>Aida</text>
            <text x={525} y={56} textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize={9} letterSpacing="0.08em" style={{ fill: "var(--ink-mute)" }}>FOUNDING PRODUCT LEAD</text>
          </g>

          <text x={528} y={196} fontFamily="var(--font-hand), cursive" fontSize={18} transform="rotate(-3 528 196)" style={{ fill: "var(--ink-soft)" }}>
            now ↗
          </text>
        </g>
      </svg>
    </div>
  );
}
