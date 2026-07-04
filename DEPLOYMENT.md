# Deployment-Runbook – Vedana Website (GitHub → Vercel)

**Ausgangslage (schon erledigt):**

- GitHub-Ordner `C:\Users\aaron\Documents\GitHub\Vedana-Verlag` ist ein Git-Repo, mit GitHub verknüpft.
- Vercel-Projekt **`vedana-verlag`** (Team „Markt-Alarm's projects") ist mit dem GitHub-Repo verbunden → **jeder Push auf `main` startet automatisch ein Deployment.**

Es fehlt nur noch: fertigen Code hineinkopieren, Bilder erzeugen, committen, pushen.

---

## 1. Code in den verknüpften Ordner spiegeln

PowerShell oder CMD (kopiert Code **und** Original-Bilder, lässt `.git`/Build-Artefakte in Ruhe):

```
robocopy "C:\Users\aaron\Documents\Claude\Projects\Vedana Website" "C:\Users\aaron\Documents\GitHub\Vedana-Verlag" /E /XD node_modules .next .git
```

> robocopy-Exitcodes 0–7 bedeuten Erfolg – das ist normal, kein Fehler.

## 2. Lokal vorbereiten & prüfen

```
cd "C:\Users\aaron\Documents\GitHub\Vedana-Verlag"
npm install
npm run prepare-images
npm run build
```

`prepare-images` erzeugt `public/images/…` aus den Originalbildern. `npm run build` muss **fehlerfrei** durchlaufen (bitte einmal lokal bestätigen – in meiner Umgebung war kein Build möglich; der statische Review war aber ohne Fehler).

## 3. Finale Domain eintragen

In `content/site.ts` das Feld `url` auf die endgültige Domain setzen (z. B. `https://www.vedana-verlag.de`). Es steuert Canonical-URLs, Sitemap und Open-Graph-Tags.

## 4. Committen & pushen (löst Auto-Deploy aus)

```
git add .
git commit -m "Vedana Website V1"
git push
```

Wichtig: `package-lock.json` (aus `npm install`) und `public/images/` (aus `prepare-images`) **mit committen** – beide sind nicht ge-ignored. Die großen Originalbilder, der Ordner `Stock Fotos/`, `.docx` und die Strategie-Datei bleiben dank `.gitignore` außen vor.

## 5. Deployment prüfen

Nach dem Push baut Vercel automatisch das Projekt **vedana-verlag**. Den Status/die Build-Logs siehst du im Vercel-Dashboard – oder ich hole sie dir über den Vercel-Connector (Build-Logs, Laufzeitfehler), sobald du gepusht hast.

## 6. Domain verbinden

Vercel-Projekt → **Settings → Domains** → `vedana-verlag.de` hinzufügen und die DNS-Einträge gemäß Vercel setzen.

> ⚠️ **Achtung:** Unter dieser Domain läuft aktuell die alte WordPress-Seite. Stelle die Domain erst um, wenn die neue Seite über die `*.vercel.app`-Vorschau geprüft ist. Bis dahin testest du gefahrlos über die Vercel-URL.

## 7. Vor dem echten Verkauf (Go-live-Checkliste)

- [ ] `content/site.ts`: Domain, Verlags-E-Mail, Telefon geprüft
- [ ] `content/books.ts`: Preis, ISBN, Seiten, Format, echter Stripe Payment Link (DE-only, Versand 0 €, `success_url` = `/danke`)
- [ ] Impressum / Datenschutz / AGB / Widerruf gefüllt **und juristisch geprüft**
- [ ] Optional: `googleAnalyticsId` (GA4) + `googleSiteVerification`
- [ ] Fotolizenzen gesichert (Pexels frei nutzbar; iStock nur mit gültiger Lizenz)

---

## Technische Hinweise

- Node ist auf **20.x** gepinnt (`engines` in `package.json` + `.nvmrc`) → Vercel nutzt Node 20.
- Framework „Next.js" wird von Vercel automatisch erkannt (Build `next build`, Install `npm install`). Ein `vercel.json` ist **nicht** nötig.
- **Keine** Umgebungsvariablen/Secrets nötig – der Stripe Payment Link ist öffentlich.
- `sharp` ist als Dependency enthalten (Bild-Optimierung) – Vercel installiert es automatisch.
- **Root Directory:** In den Projekt-Einstellungen muss **Root Directory = Repo-Wurzel** (leer/`.`) sein, da `package.json` direkt im Repo liegt.
- **Framework-Preset prüfen:** Im Projekt `vedana-verlag` ist aktuell noch kein Framework gesetzt. Unter **Settings → General → Framework Preset** sollte **Next.js** stehen (beim ersten Push erkennt Vercel das meist automatisch – bitte trotzdem kontrollieren, sonst baut Vercel leer/falsch).
- **Node-Version:** Das Vercel-Projekt steht auf 24.x. Unsere `engines.node` (`20.x`) hat aber Vorrang → gebaut wird mit Node 20 (getestet mit Next 14.2). Optional in **Settings → General → Node.js Version** ebenfalls 20.x wählen, dann ist es konsistent.
