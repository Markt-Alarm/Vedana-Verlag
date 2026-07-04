/**
 * Veranstaltungen. In V1 nur ein Teaser (keine festen Termine).
 * Sobald Termine existieren: `datum`/`ort` füllen – die Struktur trägt das bereits.
 */

export interface Veranstaltung {
  titel: string;
  typ: "musikalische-lesung" | "lesung" | "sonstiges";
  beschreibung: string;
  datum?: string;
  ort?: string;
  buchbar?: boolean;
}

export const veranstaltungen: Veranstaltung[] = [
  {
    titel: "Musikalische Lesungen",
    typ: "musikalische-lesung",
    beschreibung:
      "Der Vedana Verlag gestaltet musikalische Lesungen – Worte und Musik, die einander tragen. " +
      "[PLATZHALTER: Format kurz bestätigen oder ergänzen.]",
    buchbar: true,
  },
];
