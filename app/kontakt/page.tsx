import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactBlock } from "@/components/ui/ContactBlock";
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
        </div>

        <div className="rounded-xl bg-paper-deep p-8">
          <h2 className="font-display text-xl">Bestellung auf Rechnung</h2>
          <p className="mt-3 text-ink/75">
            Sie möchten auf Rechnung bestellen? Schreiben Sie uns eine E-Mail mit
            dem gewünschten Buch, der Stückzahl und Ihrer Lieferadresse – wir
            melden uns umgehend.
          </p>
          <p className="mt-4 text-sm text-ink/55">
            Die Zahlung online läuft sicher über Stripe; alternativ liefern wir
            innerhalb Deutschlands auf Rechnung.
          </p>
        </div>
      </div>
    </Container>
  );
}
