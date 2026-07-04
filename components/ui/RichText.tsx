import { Fragment } from "react";
import { Placeholder } from "./Placeholder";
import { cn } from "@/lib/cn";

/** Hebt [PLATZHALTER …]-Abschnitte innerhalb eines Textes sichtbar hervor. */
function splitPlaceholders(text: string) {
  const parts = text.split(/(\[PLATZHALTER[^\]]*\])/g);
  return parts.map((p, i) =>
    p.startsWith("[PLATZHALTER") ? (
      <Placeholder key={i}>{p}</Placeholder>
    ) : (
      <Fragment key={i}>{p}</Fragment>
    ),
  );
}

/** Rendert Fließtext (Absätze durch Leerzeile getrennt) mit Platzhalter-Markierung. */
export function RichText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const paragraphs = text.split(/\n\n+/);
  return (
    <div className={cn("prose-vedana", className)}>
      {paragraphs.map((para, i) => (
        <p key={i}>{splitPlaceholders(para)}</p>
      ))}
    </div>
  );
}
