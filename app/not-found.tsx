import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";

export default function NotFound() {
  return (
    <Container className="py-24 text-center md:py-32">
      <div className="mx-auto max-w-md">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
          Seite nicht gefunden
        </p>
        <h1 className="mt-4 text-5xl">404</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/75">
          Diese Seite gibt es leider nicht (mehr). Vielleicht finden Sie hier
          weiter:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CTA href="/">Zur Startseite</CTA>
          <CTA href="/buecher" variant="secondary">
            Zu den Büchern
          </CTA>
        </div>
      </div>
    </Container>
  );
}
