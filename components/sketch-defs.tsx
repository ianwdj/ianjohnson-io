// Shared hand-drawn "rough" SVG filters, rendered once. Marks reference these
// via filter="url(#rough-soft)" etc.
export function SketchDefs() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      style={{ position: "absolute" }}
    >
      <defs>
        <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.022"
            numOctaves="2"
            seed="3"
            result="t"
          />
          <feDisplacementMap in="SourceGraphic" in2="t" scale="1.6" />
        </filter>
        <filter id="rough-soft" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="2"
            seed="7"
            result="t"
          />
          <feDisplacementMap in="SourceGraphic" in2="t" scale="0.9" />
        </filter>
      </defs>
    </svg>
  );
}
