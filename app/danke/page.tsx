import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { pageMetadata } from "@/lib/metadata";

// success_url für Stripe. Rein informativ (kein Zahlungsnachweis), daher noindex.
export const metadata = pageMetadata({
  title: "Danke",
  description: "Vielen Dank für Ihre Bestellung beim Vedana Verlag.",
  path: "/danke",
  noindex: true,
});

export default function DankePage() {
  return (
    <Container className="py-24 text-center md:py-32">
      <div className="mx-auto max-w-xl">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
          Vielen Dank
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl">
          Ihre Bestellung ist bei uns angekommen
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/75">
          Sie erhalten in Kürze eine Bestätigung per E-Mail. Wir verpacken Ihr
          Buch mit Sorgfalt und schicken es auf den Weg – versandkostenfrei
          innerhalb Deutschlands.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CTA href="/">Zur Startseite</CTA>
          <CTA href="/buecher" variant="secondary">
            Weiter stöbern
          </CTA>
        </div>
      </div>
    </Container>
  );
}
