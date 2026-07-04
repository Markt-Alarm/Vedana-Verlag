import type { ReactNode } from "react";
import { Container } from "./Container";

export function LegalPageLayout({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated?: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <article>
      <Container className="py-16 md:py-24">
        <div className="max-w-prose">
          <h1 className="font-display text-4xl md:text-5xl">{title}</h1>
          {updated && (
            <p className="mt-3 text-sm text-ink/55">Stand: {updated}</p>
          )}
          {intro && <p className="mt-6 text-lg text-ink/75">{intro}</p>}
          <div className="prose-vedana mt-10">{children}</div>
        </div>
      </Container>
    </article>
  );
}
