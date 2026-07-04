"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { site } from "@/content/site";

const BASE = site.standort; // { name, lat, lon }

function haversineKm(aLat: number, aLon: number, bLat: number, bLon: number) {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLon = toRad(bLon - aLon);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

type Status = "idle" | "loading" | "done" | "notfound" | "error";

export function LesungenMap() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<{ km: number; label: string } | null>(null);

  async function calc(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setStatus("loading");
    setResult(null);
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=de&q=${encodeURIComponent(
        q,
      )}`;
      // Browser sendet Referer automatisch → erfüllt die Nominatim-Nutzungsrichtlinie.
      const res = await fetch(url, { headers: { "Accept-Language": "de" } });
      const data = await res.json();
      if (!Array.isArray(data) || data.length === 0) {
        setStatus("notfound");
        return;
      }
      const km = haversineKm(
        BASE.lat,
        BASE.lon,
        parseFloat(data[0].lat),
        parseFloat(data[0].lon),
      );
      setResult({ km: Math.round(km), label: String(data[0].display_name).split(",")[0] });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const bbox = `${BASE.lon - 0.35},${BASE.lat - 0.2},${BASE.lon + 0.35},${BASE.lat + 0.2}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${BASE.lat},${BASE.lon}`;

  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-ink/10 bg-paper-deep">
        {mapLoaded ? (
          <iframe
            title={`Karte – Startpunkt ${BASE.name}`}
            src={mapSrc}
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setMapLoaded(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center transition-colors hover:bg-paper/40"
          >
            <MapPinIcon />
            <span className="font-display text-lg text-ink">Karte laden</span>
            <span className="max-w-xs text-xs text-ink/55">
              Startpunkt {BASE.name}. Beim Laden werden Kartendaten von
              OpenStreetMap abgerufen.
            </span>
          </button>
        )}
      </div>

      <form onSubmit={calc} className="mt-5">
        <label htmlFor="dist" className="mb-1.5 block text-sm font-medium text-ink/80">
          Entfernung ab {BASE.name} berechnen
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            id="dist"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ort oder PLZ eingeben"
            className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full border border-ink/25 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold"
          >
            Berechnen
          </button>
        </div>
      </form>

      <div className="mt-3 min-h-[1.5rem] text-sm" aria-live="polite">
        {status === "loading" && <p className="text-ink/60">Berechne …</p>}
        {status === "notfound" && (
          <p className="text-ink/70">Ort nicht gefunden – bitte genauer angeben (z. B. mit PLZ).</p>
        )}
        {status === "error" && (
          <p className="text-ink/70">Berechnung gerade nicht möglich. Bitte später erneut versuchen.</p>
        )}
        {status === "done" && result && (
          <p className="text-ink">
            Von {BASE.name} nach {result.label}:{" "}
            <strong className="text-gold">ca. {result.km} km</strong> (Luftlinie).
          </p>
        )}
      </div>

      <p className="mt-2 text-xs text-ink/50">
        Kartendaten © OpenStreetMap-Mitwirkende. Entfernung als Luftlinie – dient
        nur der Orientierung.
      </p>
    </div>
  );
}
