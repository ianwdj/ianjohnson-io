// Placeholder for sections not yet ported (Slice 2+). Intentionally minimal —
// not shipped copy, just enough to wire the page-lift transition.
export function SectionStub({
  num,
  title,
}: {
  num: string;
  title: string;
}) {
  return (
    <div className="min-h-[592px]">
      <h2 className="flex items-baseline gap-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-mute">
        <span className="text-accent">{num}</span>
        <span>{title}</span>
      </h2>
      <p className="mt-10 max-w-prose font-serif text-ink-soft">
        Coming together in the next pass.
      </p>
    </div>
  );
}
