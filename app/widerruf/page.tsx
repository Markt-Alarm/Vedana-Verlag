import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { DraftNote } from "@/components/ui/DraftNote";
import { Placeholder } from "@/components/ui/Placeholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Widerruf",
  description: "Widerrufsbelehrung und Muster-Widerrufsformular des Vedana Verlags.",
  path: "/widerruf",
});

export default function WiderrufPage() {
  return (
    <LegalPageLayout title="Widerrufsbelehrung">
      <DraftNote />

      <h2>Widerrufsrecht</h2>
      <p>
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen
        Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem
        Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der
        Beförderer ist, die Waren in Besitz genommen haben bzw. hat.
      </p>
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (
        <Placeholder>[Name, Anschrift, Telefon, E-Mail]</Placeholder>) mittels
        einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder
        eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen,
        informieren. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
        Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
        Widerrufsfrist absenden.
      </p>

      <h2>Folgen des Widerrufs</h2>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die
        wir von Ihnen erhalten haben, unverzüglich und spätestens binnen
        vierzehn Tagen zurückzuzahlen. <Placeholder>[Regelung zu Rücksendekosten
        und Wertersatz gemäß amtlichem Muster prüfen und einsetzen.]</Placeholder>
      </p>

      <h2>Muster-Widerrufsformular</h2>
      <p>
        (Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular
        aus und senden Sie es zurück.)
      </p>
      <p>
        <Placeholder>
          [Amtliches Muster-Widerrufsformular vollständig einsetzen: Empfänger
          (Name/Anschrift/E-Mail), Bestellung, Datum, Name und Anschrift der
          Verbraucherin/des Verbrauchers, Unterschrift. Rechtlich prüfen lassen.]
        </Placeholder>
      </p>
    </LegalPageLayout>
  );
}
