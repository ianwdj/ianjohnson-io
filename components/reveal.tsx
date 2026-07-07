"use client";

import { useEffect, useRef, useState } from "react";

/* Fades a section up as it enters the viewport. Fires once.
   Progressive enhancement: content is visible by default (SSR ships no
   hidden state). Only after hydration, elements confirmed to be below
   the viewport are hidden and observed — so content can never be
   trapped invisible by a missing/broken IntersectionObserver. */
type Phase = "static" | "pending" | "shown";

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;
    // only animate elements that start fully below the viewport
    if (el.getBoundingClientRect().top <= window.innerHeight) return;

    setPhase("pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const phaseClass =
    phase === "pending"
      ? "reveal-pending"
      : phase === "shown"
        ? "reveal-shown"
        : "";

  return (
    <div
      ref={ref}
      className={`${phaseClass}${className ? ` ${className}` : ""}`.trim()}
    >
      {children}
    </div>
  );
}
