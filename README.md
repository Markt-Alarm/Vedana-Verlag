# Vedana Verlag – Website

Moderne, statische Website für den Vedana Verlag. **Next.js (App Router) · TypeScript · Tailwind CSS.**
Kein Backend, keine Datenbank, kein Secret Key im Code. Der Verkauf läuft in V1 über **Stripe Payment Links** und **Bestellung auf Rechnung per E-Mail**.

---

## Schnellstart

Voraussetzung: **Node.js 18.18+** (empfohlen 20).

```bash
npm install
npm run prepare-images   # wandelt die Original-Bilder in optimierte WebP-Dateien um
npm run dev              # startet http://localhost:3000
```

> **Wichtig:** `npm run prepare-images` muss einmal (und nach jedem Bildwechsel) laufen.
> Es erzeugt den Ordner `public/images/` aus den Originaldateien. Ohne diesen Schritt
> fehlen Cover, Porträts, Logo und Hintergründe.

Weitere Befehle: `npm run build` (Produktionsbuild), `npm run start` (Build lokal starten), `npm run lint`.

---

## Projektstruktur

```
app/                     Seiten (Routing über Ordnernamen)
  page.tsx               Startseite
  buecher/               Katalog + [slug] Detailseite
  verlag/                Verlagsseite + team/
  kontakt/  danke/       Kontakt · Bestellbestätigung (noindex)
  impressum/ datenschutz/ agb/ widerruf/   Rechtsseiten (Entwurf)
  sitemap.ts robots.ts not-found.tsx
components/              layout/ · book/ · person/ · ui/
content/                 ← ALLE Inhalte zentral (hier pflegen)
  site.ts  books.ts  people.ts  events.ts  values.ts
lib/                     Helfer (Preisformat, Metadaten)
scripts/prepare-images.mjs   Bild-Pipeline
public/images/           erzeugt vom Skript (nicht von Hand bearbeiten)
```

---

## Inhalte pflegen

Alle Texte und Daten liegen in `content/`. Jede Datei ist auf Deutsch kommentiert.
Mit **`TODO PLATZHALTER`** markierte Stellen müssen vor dem Go-live ersetzt werden;
auf der Website erscheinen offene Stellen als gestrichelt umrandete Markierungen.

**Neues Buch hinzufügen:** in `content/books.ts` den bestehenden Eintrag kopieren,
Werte anpassen, Cover in die Quellordner legen, in `scripts/prepare-images.mjs` eine
Zeile ergänzen, `npm run prepare-images` ausführen. Fertig.

**Bilder / Cache:** Dateinamen sind versioniert (`…-v1.webp`). Bei einem Austausch neuen
Namen vergeben (`…-v2.webp`) und im Content-Pfad ändern – neuer Name = neue URL = kein
Cache-Problem.

---

## Stripe scharfschalten (Go-live)

1. Stripe-Konto anlegen, Produkt „Der Buddha war wie Du“ mit dem **gebundenen Ladenpreis** erstellen.
2. **Payment Link** erstellen und dort einstellen:
   - Lieferadresse erfassen, **erlaubte Länder = nur Deutschland (DE)**
   - **Versandtarif 0 €** (versandkostenfrei)
   - Nach Zahlung weiterleiten auf **`https://DEINE-DOMAIN/danke`**
   - Button-/Bestelltext auf rechtssichere Formulierung prüfen („zahlungspflichtig bestellen“)
3. Den Link in `content/books.ts` unter `kaufoptionen` → `stripe-payment-link` eintragen
   (ersetzt den Test-/Platzhalter-Link).

Kein Secret Key nötig – der Payment Link ist eine öffentliche URL.

---

## Rechtliches, Steuern, Datenschutz (bitte lesen)

- **Kleinunternehmer §19 UStG:** Es wird **keine** Umsatzsteuer ausgewiesen. Der Hinweis lautet
  überall „Gemäß §19 UStG wird keine Umsatzsteuer berechnet“ (nicht „inkl. MwSt.“).
- **Buchpreisbindung:** Der Verlag legt den gebundenen Ladenpreis fest; **alle** Händler
  (auch Amazon) müssen ihn einhalten. Preis überall identisch halten.
- **Widerrufsrecht:** Bücher sind **nicht** ausgenommen – 14-Tage-Rückgabe muss möglich sein.
- Die Seiten **Impressum, Datenschutz, AGB, Widerruf sind Entwürfe** und müssen mit echten
  Daten gefüllt und **juristisch geprüft** werden, bevor echtes Geld fließt.
- **Cookies / Statistik:** Standardmäßig setzt die Seite **keine** Cookies – dann erscheint
  auch **kein** Banner. Sobald du in `content/site.ts` eine `googleAnalyticsId` (`G-…`) einträgst,
  erscheint ein DSGVO-Consent-Banner und **Google Analytics lädt erst nach Zustimmung**
  (mit `anonymize_ip`). Für die Google Search Console kannst du `googleSiteVerification` setzen.
  Bitte keine Google Fonts per CDN oder weitere Tracker ohne Consent einbinden.

---

## Deployment auf Vercel

> Ausführlicher Schritt-für-Schritt-Runbook mit exakten Windows-Befehlen: **`DEPLOYMENT.md`**.

1. In `content/site.ts` das Feld `url` auf die echte Domain setzen (für SEO/Sitemap/OG).
2. Projekt zu GitHub pushen.
3. Auf [vercel.com](https://vercel.com) importieren → Framework „Next.js“ wird erkannt → **Deploy**.
4. Domain verbinden. Fertig – die Seite ist statisch, schnell und wartungsarm.

`npm run prepare-images` läuft lokal; die erzeugten Dateien in `public/images/` werden
mit committet (der Build auf Vercel führt das Skript nicht aus).

---

## Go-live-Checkliste

- [ ] `content/site.ts`: echte Domain, E-Mail, Telefon geprüft
- [ ] `content/books.ts`: Preis, ISBN, Seiten, Format, Erscheinungsjahr, echter Stripe-Link
- [ ] Impressum / Datenschutz / AGB / Widerruf gefüllt **und juristisch geprüft**
- [ ] Stripe Payment Link live, DE-only, Versand 0 €, `success_url` = `/danke`
- [ ] Bilder geprüft (`npm run prepare-images`), Lizenz der Fotos gesichert
- [ ] Optional: `googleAnalyticsId` (GA4) und `googleSiteVerification` in `content/site.ts` gesetzt
- [ ] `npm run build` läuft fehlerfrei, mobil + Lighthouse geprüft
```
