import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { DraftNote } from "@/components/ui/DraftNote";
import { Placeholder } from "@/components/ui/Placeholder";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Impressum",
  description: "Impressum des Vedana Verlags.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <LegalPageLayout title="Impressum">
      <DraftNote />

      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        Vedana Verlag
        <br />
        <Placeholder>[Inhaberin, z. B. Mahinda Ansari]</Placeholder>
        <br />
        <Placeholder>[Straße und Hausnummer]</Placeholder>
        <br />
        <Placeholder>[PLZ und Ort]</Placeholder>
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: {site.contact.telefon}
        <br />
        E-Mail: <Placeholder>{site.contact.email}</Placeholder>
      </p>

      <h2>Umsatzsteuer</h2>
      <p>
        Als Kleinunternehmer im Sinne von § 19 UStG wird keine Umsatzsteuer
        berechnet. Eine Umsatzsteuer-Identifikationsnummer ist daher nicht
        vorhanden.
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        <Placeholder>[Name und Anschrift der verantwortlichen Person]</Placeholder>
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        <Placeholder>
          [Angaben zur Verbraucherstreitbeilegung nach aktueller Rechtslage
          ergänzen bzw. anwaltlich prüfen lassen.]
        </Placeholder>
      </p>
    </LegalPageLayout>
  );
}
