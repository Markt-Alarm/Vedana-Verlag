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
    rolle: "Verlegerin, Autorin & Heilpraktikerin",
    beschreibung: "„Ein Buch zu schreiben fühlt sich an wie Kinderkriegen.“",
    bild: "/images/team/mahinda-ansari-v1.webp",
    bildAlt:
      "Porträt von Mahinda Ansari, Verlegerin, Autorin und Heilpraktikerin des Vedana Verlags.",
    featured: true,
  },
  {
    name: "Arthur Ansari",
    rolle: "Illustration & künstlerische Leitung",
    bild: "/images/team/arthur-ansari-v1.webp",
    bildAlt: "Porträt von Arthur Ansari, Illustration und künstlerische Leitung.",
  },
  {
    name: "Aaron Ansari",
    rolle: "Fotografie, Webdesign & Kalkulation",
    bild: "/images/team/aaron-ansari-v1.webp",
    bildAlt: "Porträt von Aaron Ansari, Fotografie, Webdesign und Kalkulation.",
  },
  {
    name: "Amber Ansari",
    rolle: "Stoffentwicklung",
    bild: "/images/team/amber-ansari-v1.webp",
    bildAlt: "Porträt von Amber Ansari, Stoffentwicklung.",
  },
  {
    name: "Elisa Anton",
    rolle: "Covergestaltung und Illustration",
    bild: "/images/team/elisa-anton-v1.webp",
    bildAlt: "Porträt von Elisa Anton, Covergestaltung und Illustration.",
  },
  {
    name: "Jan Ansari",
    rolle: "Lektorat · Germanist und Lehrer",
    bild: "/images/team/jan-ansari-v1.webp",
    bildAlt: "Porträt von Jan Ansari, Lektorat.",
  },
  {
    name: "Dr. Peter Ansari",
    rolle: "Texte und Layout",
    bild: "/images/team/peter-ansari-v1.webp",
    bildAlt: "Porträt von Dr. Peter Ansari, Texte und Layout.",
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
