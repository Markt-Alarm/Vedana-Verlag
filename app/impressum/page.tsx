import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
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
      <h2>Anbieter</h2>
      <p>
        {site.name}
        <br />
        {site.address.strasse}
        <br />
        {site.address.plz} {site.address.ort}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: {site.contact.telefon}
        <br />
        Telefax: {site.contact.telefax}
        <br />
        E-Mail: {site.contact.email}
      </p>

      <h2>Vertretungsberechtigte</h2>
      <p>{site.address.inhaberin}</p>

      <h2>Register &amp; Sitz</h2>
      <p>
        Registergericht:{" "}
        <Placeholder>
          [Name des Registergerichts, z. B. Amtsgericht Musterstadt]
        </Placeholder>
        <br />
        Registernummer: <Placeholder>[HRB-Nummer]</Placeholder>
      </p>

      <h2>Umsatzsteuer</h2>
      <p>
        Als Kleinunternehmer im Sinne von § 19 UStG wird keine Umsatzsteuer
        berechnet. Eine Umsatzsteuer-Identifikationsnummer ist daher nicht
        vorhanden.
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        {site.address.inhaberin}
        <br />
        {site.address.strasse}
        <br />
        {site.address.plz} {site.address.ort}
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalPageLayout>
  );
}
