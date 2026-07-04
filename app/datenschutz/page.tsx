import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { DraftNote } from "@/components/ui/DraftNote";
import { Placeholder } from "@/components/ui/Placeholder";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung des Vedana Verlags.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <LegalPageLayout title="Datenschutzerklärung">
      <DraftNote />

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website:
        <br />
        Vedana Verlag, <Placeholder>[Inhaberin, Anschrift, E-Mail]</Placeholder>
      </p>

      <h2>2. Hosting</h2>
      <p>
        Diese Website wird bei Vercel gehostet. Beim Aufruf werden technisch
        notwendige Server-Logdaten (z. B. IP-Adresse, Zeitpunkt, aufgerufene
        Seite) verarbeitet. <Placeholder>[Rechtsgrundlage, Speicherdauer und
        Auftragsverarbeitung mit Vercel ergänzen.]</Placeholder>
      </p>

      <h2>3. Schriftarten</h2>
      <p>
        Die verwendeten Schriftarten werden lokal von unserem Server
        ausgeliefert (self-hosted). Es findet kein Verbindungsaufbau zu Google
        Fonts oder anderen Drittanbietern statt.
      </p>

      <h2>4. Cookies und Statistik</h2>
      <p>
        Die technisch notwendigen Funktionen dieser Website kommen ohne Cookies
        aus. Optionale Statistik-Cookies (Google Analytics) werden ausschließlich
        nach Ihrer ausdrücklichen Einwilligung über den Cookie-Hinweis gesetzt.
        Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft
        widerrufen. <Placeholder>[Details zu Google Analytics, Speicherdauer und
        Rechtsgrundlage (Art. 6 Abs. 1 lit. a DSGVO) sowie Auftragsverarbeitung
        ergänzen.]</Placeholder>
      </p>

      <h2>5. Zahlungsabwicklung (Stripe)</h2>
      <p>
        Für den Kauf „Jetzt kaufen“ werden Sie zur Zahlung an Stripe
        weitergeleitet (Stripe Payments Europe, Ltd.). Dabei verarbeitet Stripe
        die für die Zahlung und den Versand nötigen Daten (z. B. Name,
        Lieferadresse, Zahlungsdaten) in eigener Verantwortung.
        <Placeholder>[Details, Rechtsgrundlage und Link zur
        Stripe-Datenschutzerklärung ergänzen.]</Placeholder>
      </p>

      <h2>6. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail ({site.contact.email}) oder telefonisch
        kontaktieren – etwa für eine Bestellung auf Rechnung – verarbeiten wir
        Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage bzw.
        Bestellung. <Placeholder>[Speicherdauer und Rechtsgrundlage
        ergänzen.]</Placeholder>
      </p>

      <h2>7. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie ein
        Beschwerderecht bei einer Aufsichtsbehörde.
        <Placeholder>[Zuständige Aufsichtsbehörde und Kontaktweg
        ergänzen.]</Placeholder>
      </p>

      <h2>8. Karten &amp; Entfernungsberechnung (OpenStreetMap)</h2>
      <p>
        Auf der Seite „Musikalische Lesungen“ kann eine Karte geladen werden. Sie
        wird erst nach einem Klick auf „Karte laden“ von OpenStreetMap abgerufen –
        vorher werden keine Kartendaten geladen. Für die optionale
        Entfernungsberechnung wird der eingegebene Ort über den Dienst Nominatim
        (OpenStreetMap) abgefragt. Dabei wird Ihre IP-Adresse an die OpenStreetMap
        Foundation übermittelt. <Placeholder>[Rechtsgrundlage (Art. 6 Abs. 1
        lit. a/f DSGVO) und Link zur OSMF-Datenschutzerklärung ergänzen.]</Placeholder>
      </p>
    </LegalPageLayout>
  );
}
