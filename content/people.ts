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
    rolle: "Verlegerin & Autorin",
    beschreibung:
      "[PLATZHALTER: kurzer persönlicher Satz zu Mahinda – Gründung, Haltung, Anliegen.]",
    bild: "/images/team/mahinda-ansari-v1.webp",
    bildAlt: "Porträt von Mahinda Ansari, Verlegerin und Autorin des Vedana Verlags.",
    featured: true,
  },
  {
    name: "Dr. Peter Ansari",
    rolle: "Text & Buchgestaltung",
    bild: "/images/team/peter-ansari-v1.webp",
    bildAlt: "Porträt von Dr. Peter Ansari, Text und Buchgestaltung.",
  },
  {
    name: "Anna Ansari",
    rolle: "Lektorat · promovierte Germanistin",
    bild: "/images/team/anna-ansari-v1.webp",
    bildAlt: "Porträt von Anna Ansari, Lektorat.",
  },
  {
    name: "Aaron Ansari",
    rolle: "Fotografie, Gestaltung & Kalkulation",
    bild: "/images/team/aaron-ansari-v1.webp",
    bildAlt: "Porträt von Aaron Ansari, Fotografie, Gestaltung und Kalkulation.",
  },
  {
    name: "Amber Ansari",
    rolle: "Stoffentwicklung",
    bild: "/images/team/amber-ansari-v1.webp",
    bildAlt: "Porträt von Amber Ansari, Stoffentwicklung.",
  },
  {
    name: "Arthur Ansari",
    rolle: "Illustration & künstlerische Leitung",
    bild: "/images/team/arthur-ansari-v1.webp",
    bildAlt: "Porträt von Arthur Ansari, Illustration und künstlerische Leitung.",
  },
  {
    name: "Elisa Anton",
    rolle: "Lektorat & Korrektorat",
    bild: "/images/team/elisa-anton-v1.webp",
    bildAlt: "Porträt von Elisa Anton, Lektorat und Korrektorat.",
  },
  {
    name: "Jan Ansari",
    rolle: "Lektorat · Germanist und Lehrer",
    bild: "/images/team/jan-ansari-v1.webp",
    bildAlt: "Porträt von Jan Ansari, Lektorat.",
  },
];

export function getFeaturedPerson(): Person | undefined {
  return people.find((p) => p.featured);
}
