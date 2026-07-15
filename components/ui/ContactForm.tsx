"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { site } from "@/content/site";

const inputClass =
  "w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";
const labelClass = "mb-1.5 block text-sm font-medium text-ink/80";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const anliegen = get("anliegen");
    const subject = `Kontaktanfrage${anliegen ? ` – ${anliegen}` : ""}`;
    const body = [
      `Name: ${get("name")}`,
      `E-Mail: ${get("email")}`,
      `Anliegen: ${anliegen}`,
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
          <label htmlFor="contact-name" className={labelClass}>
            Name *
          </label>
          <input
            id="contact-name"
            name="name"
            required
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            E-Mail *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className={inputClass}
            autoComplete="email"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-anliegen" className={labelClass}>
            Anliegen
          </label>
          <select
            id="contact-anliegen"
            name="anliegen"
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Bitte wählen …
            </option>
            <option>Bestellung</option>
            <option>Rückfrage zu einem Buch</option>
            <option>Musikalische Lesung</option>
            <option>Sonstiges</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-nachricht" className={labelClass}>
          Nachricht *
        </label>
        <textarea
          id="contact-nachricht"
          name="nachricht"
          required
          rows={5}
          placeholder="Wie können wir Ihnen helfen?"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper shadow-soft transition-colors hover:bg-gold hover:text-ink"
      >
        Nachricht per E-Mail senden
      </button>

      {sent && (
        <p className="text-sm text-ink/70" role="status">
          Ihr E-Mail-Programm sollte sich mit der vorbereiteten Nachricht
          geöffnet haben. Falls nicht, schreiben Sie uns direkt an{" "}
          {site.contact.email}.
        </p>
      )}

      <p className="text-xs text-ink/50">
        Mit dem Absenden öffnet sich Ihr E-Mail-Programm mit einer
        vorbereiteten Nachricht an den Verlag. Es werden keine Daten auf
        dieser Website gespeichert.
      </p>
    </form>
  );
}
