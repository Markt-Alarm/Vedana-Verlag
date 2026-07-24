/**
 * Zentrale Verlags- und Seiteneinstellungen.
 * Alle mit "TODO PLATZHALTER" markierten Werte vor dem Go-live ersetzen.
 */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const site = {
  name: "Vedana Verlag",
  // Für SEO/Metadaten. Beim Deploy auf die echte Domain setzen.
  url: "https://www.vedana-verlag.de",
  tagline: "Bücher für das Herz",
  claim: "Wenn Bücher mehr sind als geschriebene Worte",
  description:
    "Der Vedana Verlag macht Bücher, die nicht nur gelesen, sondern empfunden werden – liebevoll illustriert, sorgfältig gedruckt, mit Gefühl, Sinnlichkeit und Qualität.",

  contact: {
    telefon: "04263 / 675 66 70",
    telefonHref: "+4942636756670", // TODO PRÜFEN: internationale Schreibweise verifizieren
    telefax: "04263 / 675 66 70",
    email: "info@vedana-verlag.de",
  },

  // Ladungsfähige Anschrift des Verlags (Impressum, Datenschutz).
  address: {
    inhaberin: "Mahinda Ansari",
    strasse: "Vor den Bruchhöfen 24",
    plz: "27383",
    ort: "Scheeßel",
  },

  // Zentrale Shop-Einstellungen
  shop: {
    // Kleinunternehmer nach §19 UStG → KEIN "inkl. MwSt." ausweisen.
    steuerhinweis: "Gemäß §19 UStG wird keine Umsatzsteuer berechnet.",
    versandHinweis: "Versandkostenfrei innerhalb Deutschlands",
    versandRaum: "Versand nur innerhalb Deutschlands",
    versandkosten: null as string | null, // V2: z. B. "2,90 €"
  },

  // Google-Integration. Leer lassen, bis vorhanden – ohne Analytics-ID
  // erscheint KEIN Cookie-Banner und es werden KEINE Cookies gesetzt.
  analytics: {
    googleAnalyticsId: "", // TODO PLATZHALTER: "G-XXXXXXXXXX"
  },
  googleSiteVerification: "", // TODO PLATZHALTER: Search-Console-Meta-Token

  // Sitz des Verlags – Startpunkt der Entfernungsberechnung (musikalische Lesungen).
  standort: {
    name: "Scheeßel",
    lat: 53.1667,
    lon: 9.4833,
  },

  // „Bücher" ist bewusst NICHT in der Hauptnavigation (aktuell nur ein Buch).
  // Die Route /buecher bleibt bestehen und wird später wieder eingeblendet.
  nav: [
    { label: "Start", href: "/" },
    {
      label: "Verlag",
      href: "/verlag",
      children: [
        { label: "Über den Verlag", href: "/verlag" },
        { label: "Team", href: "/verlag/team" },
      ],
    },
    { label: "Musikalische Lesungen", href: "/musikalische-lesungen" },
    { label: "Shop", href: "/buecher/der-buddha-war-wie-du" },
    { label: "Kontakt", href: "/kontakt" },
  ] as NavItem[],

  legalNav: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
    { label: "Widerruf", href: "/widerruf" },
  ] as NavItem[],
};

/**
 * Hintergrundbilder je Bereich – bewusst leicht austauschbar.
 * Die Dateien erzeugt `npm run prepare-images` aus dem Ordner "Stock Fotos".
 * Motiv wechseln = nur den Pfad hier ändern.
 */
export const backgrounds = {
  hero: "/images/backgrounds/hero-v1.webp",
  werte: "/images/backgrounds/werte-v1.webp",
  verlag: "/images/backgrounds/verlag-v1.webp",
  veranstaltung: "/images/backgrounds/veranstaltung-v1.webp",
  kontakt: "/images/backgrounds/kontakt-v1.webp",
  legal: "/images/backgrounds/legal-v1.webp",
};
