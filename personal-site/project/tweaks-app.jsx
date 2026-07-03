// Tweaks for the personal landing page.
// Drives data-* attributes on <body> which the stylesheet keys off.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "paper": "cream",
  "ruling": "dot",
  "pairing": "a",
  "accent": "on",
  "desk": "on"
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const b = document.body;
  b.setAttribute('data-paper', t.paper);
  b.setAttribute('data-ruling', t.ruling);
  b.setAttribute('data-pairing', t.pairing);
  b.setAttribute('data-accent', t.accent);
  b.setAttribute('data-desk', t.desk);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply on every render (also covers initial mount)
  React.useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="Paper" />
      <TweakRadio
        label="Stock"
        value={t.paper}
        options={[
          { value: 'cream', label: 'Cream' },
          { value: 'warm',  label: 'Warm' },
          { value: 'cool',  label: 'Cool' },
        ]}
        onChange={(v) => setTweak('paper', v)}
      />
      <TweakRadio
        label="Ruling"
        value={t.ruling}
        options={[
          { value: 'blank', label: 'Blank' },
          { value: 'ruled', label: 'Ruled' },
          { value: 'dot',   label: 'Dot' },
        ]}
        onChange={(v) => setTweak('ruling', v)}
      />

      <TweakSection label="Type" />
      <TweakRadio
        label="Pairing"
        value={t.pairing}
        options={[
          { value: 'a', label: 'Source Serif' },
          { value: 'b', label: 'Spectral' },
        ]}
        onChange={(v) => setTweak('pairing', v)}
      />

      <TweakSection label="Accent" />
      <TweakRadio
        label="Ribbon red"
        value={t.accent}
        options={[
          { value: 'on',  label: 'On' },
          { value: 'off', label: 'Off' },
        ]}
        onChange={(v) => setTweak('accent', v)}
      />

      <TweakSection label="Frame" />
      <TweakRadio
        label="Desk surface"
        value={t.desk}
        options={[
          { value: 'on',  label: 'On' },
          { value: 'off', label: 'Off' },
        ]}
        onChange={(v) => setTweak('desk', v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<App />);
