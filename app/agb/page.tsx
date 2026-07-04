import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { DraftNote } from "@/components/ui/DraftNote";
import { Placeholder } from "@/components/ui/Placeholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen des Vedana Verlags.",
  path: "/agb",
});

export default function AgbPage() {
  return (
    <LegalPageLayout title="Allgemeine Geschäftsbedingungen">
      <DraftNote />

      <h2>§ 1 Geltungsbereich und Anbieter</h2>
      <p>
        Diese Bedingungen gelten für Bestellungen beim Vedana Verlag,
        <Placeholder>[Inhaberin, Anschrift]</Placeholder>. Wir verkaufen an
        Verbraucherinnen und Verbraucher innerhalb Deutschlands.
      </p>

      <h2>§ 2 Vertragsschluss</h2>
      <p>
        Der Kauf erfolgt wahlweise online über die Schaltfläche „Jetzt kaufen“
        (Zahlungsabwicklung über Stripe) oder als Bestellung auf Rechnung per
        E-Mail. <Placeholder>[Genauen Ablauf des Vertragsschlusses
        beschreiben.]</Placeholder>
      </p>

      <h2>§ 3 Preise</h2>
      <p>
        Es gilt der vom Verlag festgelegte gebundene Ladenpreis
        (Buchpreisbindung). Als Kleinunternehmer im Sinne von § 19 UStG wird
        keine Umsatzsteuer berechnet.
      </p>

      <h2>§ 4 Versand und Lieferung</h2>
      <p>
        Der Versand erfolgt ausschließlich innerhalb Deutschlands und ist
        versandkostenfrei. <Placeholder>[Lieferzeiten und Versandart
        konkretisieren.]</Placeholder>
      </p>

      <h2>§ 5 Zahlung</h2>
      <p>
        Die Zahlung erfolgt über Stripe (Kartenzahlung u. a.) oder – bei
        Bestellung auf Rechnung – per Überweisung nach Erhalt der Ware.
        <Placeholder>[Zahlungsbedingungen und Fristen ergänzen.]</Placeholder>
      </p>

      <h2>§ 6 Widerrufsrecht</h2>
      <p>
        Verbraucherinnen und Verbrauchern steht ein gesetzliches Widerrufsrecht
        zu. Einzelheiten regelt die{" "}
        <a href="/widerruf">Widerrufsbelehrung</a>.
      </p>

      <h2>§ 7 Eigentumsvorbehalt</h2>
      <p>
        Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.
      </p>

      <h2>§ 8 Weitere Bestimmungen</h2>
      <p>
        <Placeholder>
          [Haftung, Gewährleistung, Streitbeilegung und Schlussbestimmungen
          anwaltlich ergänzen und prüfen lassen.]
        </Placeholder>
      </p>
    </LegalPageLayout>
  );
}
