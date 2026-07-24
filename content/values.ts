/**
 * Die drei Werte des Verlags. Texte übernommen aus den bestehenden
 * Verlagstexten (vedana-verlag.de), sprachlich nur leicht geglättet.
 */

export interface Wert {
  titel: string;
  text: string;
}

export const werte: Wert[] = [
  {
    titel: "Gefühl",
    text: "Vedana bedeutet Gefühl – das ist unser Motto und unser Anliegen. Wir wünschen uns, dass unsere Bücher Ihre Gefühle berühren und Gefühle auslösen. Wir schreiben nicht nur für den Verstand.",
  },
  {
    titel: "Sinnlichkeit",
    text: "Wir wollen sinnliche Bücher erschaffen. Deshalb werden sie liebevoll illustriert. Für unsere Texte wählen wir eine Sprache, die unmittelbar wirkt und erfahrbar wird – denn komplizierte Formulierungen schaffen eher Distanz.",
  },
  {
    titel: "Qualität",
    text: "Damit ein Buch mit allen Sinnen erfahrbar wird, setzen wir nicht nur auf handgefertigte Illustrationen, sondern auch auf Qualität beim Druck. Unsere Texte sind über Jahre gewachsen und garantiert ohne KI-generierte Inhalte. Unser Lektorat sorgt für einen fehlerfreien Lesegenuss. Sorgfalt, die man spürt.",
  },
];
