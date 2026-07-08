/* Temporary palette-exploration page. Each block overrides the site's CSS
   variables locally, so everything inside renders with real tokens.
   Delete after a direction is chosen. */

type Palette = {
  name: string;
  note: string;
  vars: Record<string, string>;
};

const PALETTES: Palette[] = [
  {
    name: "A — Current (cream + coral)",
    note: "The baseline. Warm, but in the Claude/Anthropic neighborhood.",
    vars: {},
  },
  {
    name: "B — Porcelain (warm gray + coral)",
    note: "Gallery-wall greige. Quietest departure, coral stays the signature.",
    vars: {
      "--cream": "#EFECE6",
      "--cream-deep": "#E6E2D9",
      "--ink": "#33302B",
      "--ink-strong": "#242118",
      "--putty": "#8B857A",
      "--coral": "#E8503A",
      "--coral-deep": "#C93F2C",
      "--hairline": "#DCD6CB",
    },
  },
  {
    name: "C — Blush (dusty rose + oxblood)",
    note: "Theodore's apartment. Warmest and most Her, most distinctive.",
    vars: {
      "--cream": "#F3E7E0",
      "--cream-deep": "#ECDacf".toLowerCase(),
      "--ink": "#3B2E28",
      "--ink-strong": "#2A201B",
      "--putty": "#96796B",
      "--coral": "#B33A25",
      "--coral-deep": "#96301E",
      "--hairline": "#E2CFC3",
    },
  },
  {
    name: "D — Sage (green-gray + terracotta)",
    note: "Calm and organic. Reads craft-studio rather than AI-lab.",
    vars: {
      "--cream": "#EBECE1",
      "--cream-deep": "#E1E3D3",
      "--ink": "#30322A",
      "--ink-strong": "#22241D",
      "--putty": "#82867A",
      "--coral": "#C75B39",
      "--coral-deep": "#A94827",
      "--hairline": "#D7DAC8",
    },
  },
  {
    name: "E — Evening (dark warm)",
    note: "Her at night. Maximum departure; flips the whole mood.",
    vars: {
      "--cream": "#231E19",
      "--cream-deep": "#2C2620",
      "--ink": "#E4DACB",
      "--ink-strong": "#F3EBDE",
      "--putty": "#9A8E80",
      "--coral": "#E8603A",
      "--coral-deep": "#F07A55",
      "--hairline": "#3B342C",
    },
  },
];

function Sample() {
  return (
    <div className="mx-auto max-w-wide px-6 py-14">
      <p className="font-serif text-[20px] italic text-putty">I&rsquo;m Ian.</p>
      <h2 className="mt-3 font-serif text-[52px] font-normal leading-[1.05] tracking-[-0.01em] text-ink-strong">
        I build things, mostly AI.
      </h2>
      <p className="mt-4 max-w-[560px] text-[17px] leading-[1.65] text-ink">
        Founding product lead at Aida, an agentic-native revenue system.
        Building products since 2014.
      </p>
      <div className="mt-8 border-t border-hairline pt-6">
        <div className="grid gap-6 sm:grid-cols-[200px_1fr]">
          <div>
            <p className="font-serif text-[22px] text-ink-strong">
              Aida
              <span aria-hidden className="ml-2 inline-block h-[7px] w-[7px] rounded-full bg-coral align-middle" />
            </p>
            <p className="meta mt-2">2024–now</p>
          </div>
          <div>
            <p className="leading-[1.6] text-ink">
              Catches the follow-ups, updates the CRM, and preps the meeting so
              reps can spend their time selling.{" "}
              <a href="#" className="link">
                Case study
              </a>
            </p>
            <p className="meta mt-3">Founding product lead</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaletteLab() {
  return (
    <div className="relative z-10 py-16">
      <h1 className="mx-auto max-w-wide px-6 font-serif text-[28px]">
        Palette lab
      </h1>
      <div className="mt-10 flex flex-col">
        {PALETTES.map((p) => (
          <section
            key={p.name}
            style={{ ...p.vars, backgroundColor: "var(--cream)" } as React.CSSProperties}
            className="border-t border-hairline"
          >
            <div className="mx-auto max-w-wide px-6 pt-10">
              <p className="meta !text-coral">{p.name}</p>
              <p className="mt-2 max-w-[560px] text-[15px] leading-[1.6] text-putty">
                {p.note}
              </p>
            </div>
            <Sample />
          </section>
        ))}
      </div>
    </div>
  );
}
