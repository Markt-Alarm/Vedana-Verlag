import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactBlock } from "@/components/ui/ContactBlock";
import { ContactForm } from "@/components/ui/ContactForm";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Kontakt",
  description: "So erreichen Sie den Vedana Verlag – Telefon und E-Mail.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeader
            eyebrow="Kontakt"
            title="Schreiben Sie uns"
            intro="Ob Bestellung, Rückfrage oder eine Anfrage für eine musikalische Lesung – wir freuen uns, von Ihnen zu hören."
          />
          <ContactBlock className="mt-8" />
          <p className="mt-8 text-sm text-ink/55">
            {site.shop.versandRaum}. {site.shop.versandHinweis}.
          </p>
          <div className="mt-8 rounded-xl bg-paper-deep p-6">
            <h2 className="font-display text-lg">Bestellung auf Rechnung</h2>
            <p className="mt-2 text-sm text-ink/70">
              Sie möchten auf Rechnung bestellen? Wählen Sie im Formular
              „Bestellung“ und nennen Sie uns das gewünschte Buch, die
              Stückzahl und Ihre Lieferadresse – wir melden uns umgehend. Die
              Zahlung online läuft sicher über Stripe; alternativ liefern wir
              innerhalb Deutschlands auf Rechnung.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-ink/10 bg-paper p-8 shadow-soft">
          <h2 className="font-display text-xl">Nachricht schreiben</h2>
          <p className="mt-2 text-ink/70">
            Füllen Sie das Formular aus – wir melden uns so schnell wie
            möglich bei Ihnen zurück.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
