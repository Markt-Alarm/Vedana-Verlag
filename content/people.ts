/**
 * Team / Mitwirkende. Rollen sprachlich vereinheitlicht (wärmer + professionell).
 * `featured: true` nur bei Mahinda (erscheint prominent auf der Verlagsseite).
 * Bilder erzeugt `npm run prepare-images` nach /public/images/team.
 * Reihenfolge bewusst gesetzt (Wunsch des Verlags).
 */

export interface Person {
  name: string;
  rolle: string;
  beschreibung?: string; // optionaler persönlicher Satz
  bild: string;
  bildAlt: string;
  featured?: boolean;
}

export const people: Person[] = [
  {
    name: "Mahinda Ansari",
    rolle: "Autorin & Heilpraktikerin",
    beschreibung: "„Ein Buch zu schreiben fühlt sich an wie Kinderkriegen.“",
    bild: "/images/team/mahinda-ansari-v1.webp",
    bildAlt:
      "Porträt von Mahinda Ansari, Autorin und Heilpraktikerin des Vedana Verlags.",
    featured: true,
  },
  {
    name: "Elisa Anton",
    rolle: "Covergestaltung & Illustration",
    bild: "/images/team/elisa-anton-v2.webp",
    bildAlt: "Porträt von Elisa Anton, Covergestaltung und Illustration.",
  },
  {
    name: "Arthur Ansari",
    rolle: "Illustration",
    bild: "/images/team/arthur-ansari-v1.webp",
    bildAlt: "Porträt von Arthur Ansari, Illustration.",
  },
  {
    name: "Aaron Ansari",
    rolle: "Fotos, Webdesign & Kalkulation",
    bild: "/images/team/aaron-ansari-v1.webp",
    bildAlt: "Porträt von Aaron Ansari, Fotos, Webdesign und Kalkulation.",
  },
  {
    name: "Amber Ansari",
    rolle: "Stoffentwicklung",
    bild: "/images/team/amber-ansari-v2.webp",
    bildAlt: "Porträt von Amber Ansari, Stoffentwicklung.",
  },
  {
    name: "Dr. Peter Ansari",
    rolle: "Texte und Layout",
    bild: "/images/team/peter-ansari-v1.webp",
    bildAlt: "Porträt von Dr. Peter Ansari, Texte und Layout.",
  },
  {
    name: "Jan Ansari",
    rolle: "Lektorat · Germanist und Lehrer",
    bild: "/images/team/jan-ansari-v1.webp",
    bildAlt: "Porträt von Jan Ansari, Lektorat.",
  },
  {
    name: "Anna Ansari",
    rolle: "Lektorat · promovierte Germanistin",
    bild: "/images/team/anna-ansari-v1.webp",
    bildAlt: "Porträt von Anna Ansari, Lektorat.",
  },
];

export function getFeaturedPerson(): Person | undefined {
  return people.find((p) => p.featured);
}
