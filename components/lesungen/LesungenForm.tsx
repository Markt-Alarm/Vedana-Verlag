"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { site } from "@/content/site";

const inputClass =
  "w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";
const labelClass = "mb-1.5 block text-sm font-medium text-ink/80";

export function LesungenForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const ort = get("ort");
    const subject = `Anfrage musikalische Lesung${ort ? ` – ${ort}` : ""}`;
    const body = [
      `Name: ${get("name")}`,
      `E-Mail: ${get("email")}`,
      `Telefon: ${get("telefon")}`,
      `Wunschtermin / Zeitraum: ${get("termin")}`,
      `Veranstaltungsort: ${ort}`,
      `Art der Veranstaltung: ${get("art")}`,
      "",
      "Nachricht:",
      get("nachricht"),
    ].join("\n");

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name *
          </label>
          <input id="name" name="name" required className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="telefon" className={labelClass}>
            Telefon (optional)
          </label>
          <input id="telefon" name="telefon" type="tel" className={inputClass} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="termin" className={labelClass}>
            Wunschtermin / Zeitraum
          </label>
          <input id="termin" name="termin" placeholder="z. B. Herbst 2026" className={inputClass} />
        </div>
        <div>
          <label htmlFor="ort" className={labelClass}>
            Veranstaltungsort
          </label>
          <input id="ort" name="ort" placeholder="Ort oder PLZ" className={inputClass} />
        </div>
        <div>
          <label htmlFor="art" className={labelClass}>
            Art der Veranstaltung
          </label>
          <select id="art" name="art" className={inputClass} defaultValue="">
            <option value="" disabled>
              Bitte wählen …
            </option>
            <option>Buchhandlung</option>
            <option>Kulturveranstaltung / Festival</option>
            <option>Private Feier</option>
            <option>Sonstiges</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="nachricht" className={labelClass}>
          Nachricht *
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={5}
          placeholder="Erzählen Sie uns kurz von Ihrer Veranstaltung."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper shadow-soft transition-colors hover:bg-gold hover:text-ink"
      >
        Anfrage per E-Mail senden
      </button>

      {sent && (
        <p className="text-sm text-ink/70" role="status">
          Ihr E-Mail-Programm sollte sich mit der vorbereiteten Anfrage geöffnet
          haben. Falls nicht, schreiben Sie uns direkt an {site.contact.email}.
        </p>
      )}

      <p className="text-xs text-ink/50">
        Mit dem Absenden öffnet sich Ihr E-Mail-Programm mit einer vorbereiteten
        Nachricht an den Verlag. Es werden keine Daten auf dieser Website
        gespeichert.
      </p>
    </form>
  );
}
