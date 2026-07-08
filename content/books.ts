/**
 * Bücher-Katalog. In V1 ein Buch, auf Wachstum ausgelegt.
 * Neues Buch = diesen Eintrag kopieren, Werte anpassen, Cover ablegen.
 *
 * Wichtig (Buchpreisbindung): `preis` ist der vom Verlag festgelegte,
 * gebundene Ladenpreis. Er muss überall identisch sein (auch bei Amazon).
 */

export type BookStatus = "erschienen" | "bald-verfuegbar" | "in-arbeit";

/**
 * Kaufwege. Reihenfolge im Array = Anzeige-Hierarchie in der Kaufbox.
 * Neue Kaufwege lassen sich ergänzen, ohne bestehende Einträge anzufassen.
 */
export type Kaufoption =
  | { typ: "stripe-payment-link"; url: string } // V1
  | { typ: "stripe-checkout"; priceId: string } // V2: Checkout Sessions
  | { typ: "rechnung" } // V1: vorformulierte Bestell-E-Mail (mailto)
  | { typ: "extern"; haendler: string; url: string }; // z. B. Amazon

export interface Book {
  slug: string; // → URL /buecher/[slug]
  titel: string;
  untertitel?: string;
  autor: string;
  kurzbeschreibung: string; // für Buchkarten & Startseite
  beschreibung: string; // ausführlich / Rückseitentext
  zielgruppe?: string; // "Für Menschen, die …"
  cover: string; // Pfad in /public/images/buecher
  coverAlt: string; // Alt-Text (Barrierefreiheit)
  preis: number | null; // gebundener Ladenpreis in Euro; null = folgt
  isbn?: string;
  erscheinungsjahr?: number;
  seiten?: number;
  format?: string;
  leseprobe?: string; // URL zur Leseprobe (z. B. PDF); leer = Platzhalter-Button
  lieferzeit?: string;
  kaufoptionen: Kaufoption[];
  status: BookStatus;
}

export const books: Book[] = [
  {
    slug: "der-buddha-war-wie-du",
    titel: "Der Buddha war wie Du",
    untertitel: "Die buddhistische Welt in Geschichten",
    autor: "Mahinda Ansari",
    kurzbeschreibung:
      "Die buddhistische Welt, erzählt in Geschichten – liebevoll illustriert und mit Gefühl geschrieben.",
    beschreibung:
      "„Der Buddha war wie Du“ erzählt die buddhistische Welt in Geschichten. " +
      "[PLATZHALTER: Bitte hier den finalen Klappen- bzw. Rückseitentext einsetzen. " +
      "Dieser Absatz bleibt bewusst neutral und erfindet keine Inhalte.]",
    zielgruppe:
      "[PLATZHALTER: z. B. „Für alle, die dem Buddhismus über Geschichten begegnen möchten.“]",
    cover: "/images/buecher/der-buddha-war-wie-du-cover-v1.webp",
    coverAlt:
      "Buchcover „Der Buddha war wie Du“ – Aquarell mit Weltkugel, Vögeln und einer meditierenden Figur am Wasser.",
    preis: null, // TODO PLATZHALTER: gebundener Ladenpreis in Euro, z. B. 24.9
    isbn: undefined, // TODO PLATZHALTER
    erscheinungsjahr: undefined, // TODO PLATZHALTER
    seiten: undefined, // TODO PLATZHALTER
    format: undefined, // TODO PLATZHALTER: z. B. „Hardcover, durchgehend farbig illustriert“
    leseprobe: undefined, // TODO PLATZHALTER: Link zur Leseprobe (PDF-URL) eintragen
    lieferzeit: "2–4 Werktage innerhalb Deutschlands",
    kaufoptionen: [
      // TODO PLATZHALTER: echten Stripe Payment Link eintragen.
      // Erst zum Go-live scharfschalten – bis dahin Test-/Platzhalter-Link.
      { typ: "stripe-payment-link", url: "https://buy.stripe.com/test_PLATZHALTER" },
      { typ: "rechnung" },
    ],
    status: "erschienen",
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function getAllBookSlugs(): string[] {
  return books.map((b) => b.slug);
}
