import type { ReactNode } from "react";

/**
 * Sichtbare, aber gestaltete Markierung für noch zu ersetzende Inhalte.
 * So bleibt klar, was vor dem Go-live gefüllt werden muss.
 */
export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="inline rounded border border-dashed border-gold/60 bg-gold/10 px-1.5 py-0.5 text-[0.95em] text-ink/70">
      {children}
    </span>
  );
}
