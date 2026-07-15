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
      "Eine inspirierende Einführung in die zeitlose Weisheit des Buddha.",
    beschreibung:
      "Dieses Buch entführt Dich auf eine sinnliche Reise in die buddhistische Welt. In zwölf längeren und kürzeren Geschichten erfährst Du, welche Einsichten und Methoden uns der Buddha für unser Leben mitgegeben hat. Eingebettet sind die Geschichten in eine zauberhafte Rahmenhandlung. Ein Junge, seine Schwester und ihr Vater begleiten uns durch die zwölf Monate eines Jahres. Monat für Monat öffnen sich Türen zu den großen Fragen des Lebens: Wie finden wir Gelassenheit? Warum leiden wir? Was bedeutet Karma? Und wie können wir zu Ruhe kommen? In poetischen Geschichten, verständlichen Erläuterungen und praktischen Übungen werden die Lehren des Buddha lebendig und unmittelbar erfahrbar.\n\nIn einer lauten Welt voller Ablenkungen lädt dieses herzerwärmende Buch zum Innehalten ein. Mit inspirierenden Texten und berührenden Illustrationen schenkt es Momente der Ruhe und Einsicht.\n\nFür alle, die sich einen lebendigen Zugang zur Lehre des Buddha wünschen.",
    zielgruppe:
      "Das Buch richtet sich an Leserinnen und Leser, die sich für Achtsamkeit, Spiritualität und persönliche Entwicklung interessieren. Es ist geeignet für Menschen, die bereits mit der buddhistischen Lehre in Berührung gekommen sind und auch für Menschen ohne Vorkenntnisse.",
    cover: "/images/buecher/der-buddha-war-wie-du-cover-v3.webp",
    coverAlt:
      "Buchcover „Der Buddha war wie Du“ – Aquarell mit Weltkugel, Vögeln und einer meditierenden Figur am Wasser.",
    preis: null, // TODO PLATZHALTER: gebundener Ladenpreis in Euro, z. B. 24.9
    isbn: undefined, // TODO PLATZHALTER
    erscheinungsjahr: undefined, // TODO PLATZHALTER
    seiten: undefined, // TODO PLATZHALTER
    format: undefined, // TODO PLATZHALTER: z. B. „Hardcover, durchgehend farbig illustriert“
    leseprobe: "/leseprobe/der-buddha-war-wie-du-leseprobe.pdf",
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
