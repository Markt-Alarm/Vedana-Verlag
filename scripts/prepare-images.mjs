/**
 * Bild-Pipeline für die Vedana-Website.
 *
 * Kopiert die Original-Assets (Projektwurzel + Ordner "Stock Fotos") in
 * /public/images, benennt sie sauber + versioniert und wandelt sie in
 * optimierte WebP-Dateien um. Motiv wechseln? Neue Datei ablegen, Pfad in
 * content/site.ts bzw. books.ts/people.ts anpassen, Skript erneut laufen lassen.
 *
 * Aufruf:  npm run prepare-images
 * Voraussetzung: `npm install` (sharp ist enthalten).
 */

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();

/** @type {{src: string, dest: string, w: number}[]} */
const jobs = [
  // Marke (Logo mit Transparenz)
  { src: "logo transp.png", dest: "public/images/brand/vedana-logo-v1.webp", w: 600 },

  // Buchcover
  {
    src: "Der Buddha in Geschichten.png",
    dest: "public/images/buecher/der-buddha-war-wie-du-cover-v1.webp",
    w: 1000,
  },

  // Team-Porträts
  { src: "Mahinda.png", dest: "public/images/team/mahinda-ansari-v1.webp", w: 800 },
  { src: "Arthur Ansari.png", dest: "public/images/team/arthur-ansari-v1.webp", w: 800 },
  { src: "peter ansari.png", dest: "public/images/team/peter-ansari-v1.webp", w: 800 },
  { src: "anna ansari.png", dest: "public/images/team/anna-ansari-v1.webp", w: 800 },
  { src: "Jan Ansari.png", dest: "public/images/team/jan-ansari-v1.webp", w: 800 },
  { src: "Aaron Ansari.png", dest: "public/images/team/aaron-ansari-v1.webp", w: 800 },
  { src: "elisa anton.png", dest: "public/images/team/elisa-anton-v1.webp", w: 800 },
  { src: "Amber Ansari.png", dest: "public/images/team/amber-ansari-v1.webp", w: 800 },

  // Hintergründe (dezent, hinter Overlay)
  { src: "Stock Fotos/pexels-pixabay-159866.jpg", dest: "public/images/backgrounds/hero-v1.webp", w: 2000 },
  { src: "Stock Fotos/pexels-sunsetoned-5913138.jpg", dest: "public/images/backgrounds/werte-v1.webp", w: 2000 },
  { src: "Stock Fotos/pexels-lilartsy-1793042.jpg", dest: "public/images/backgrounds/verlag-v1.webp", w: 2000 },
  { src: "Stock Fotos/Bild musikalische Lesung.jpg", dest: "public/images/backgrounds/veranstaltung-v1.webp", w: 2000 },
  { src: "Stock Fotos/pexels-sunsetoned-5913138.jpg", dest: "public/images/backgrounds/kontakt-v1.webp", w: 2000 },
  { src: "Stock Fotos/Impressum_pexels-ravikant-2877338.jpg", dest: "public/images/backgrounds/legal-v1.webp", w: 2000 },
];

let ok = 0;
let missing = 0;

for (const job of jobs) {
  const srcPath = path.join(root, job.src);
  const destPath = path.join(root, job.dest);

  if (!existsSync(srcPath)) {
    console.warn(`⚠  Quelle fehlt, übersprungen: ${job.src}`);
    missing++;
    continue;
  }

  await mkdir(path.dirname(destPath), { recursive: true });
  await sharp(srcPath)
    .resize({ width: job.w, withoutEnlargement: true })
    .webp({ quality: 80, alphaQuality: 100 })
    .toFile(destPath);

  console.log(`✓ ${job.dest}`);
  ok++;
}

console.log(
  `\nFertig: ${ok} Bild(er) erzeugt${missing ? `, ${missing} Quelle(n) fehlten` : ""}.`,
);
