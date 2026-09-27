"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type CampaignPhase = "vorverkauf" | "release";

const campaignStart = "2026-09-26";
const releaseDate = "2026-10-01";
const campaignEnd = "2026-10-15";

export function BookAnnouncement({
  purchaseUrl,
  priceLabel,
}: {
  purchaseUrl?: string;
  priceLabel?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [phase, setPhase] = useState<CampaignPhase | null>(null);

  useEffect(() => {
    const dateInBerlin = new Intl.DateTimeFormat("sv-SE", {
      timeZone: "Europe/Berlin",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date());

    // Die Release-Aktion läuft einschließlich 15. Oktober (Zeitzone Berlin).
    if (dateInBerlin < campaignStart || dateInBerlin > campaignEnd) return;

    const currentPhase: CampaignPhase =
      dateInBerlin < releaseDate ? "vorverkauf" : "release";
    const storageKey = `vedana-buchstart-2026-${currentPhase}-geschlossen`;

    try {
      if (localStorage.getItem(storageKey)) return;
    } catch {
      // Auch bei deaktiviertem Speicher bleibt der Hinweis schließbar.
    }

    const dialog = dialogRef.current;
    setPhase(currentPhase);
    dialog?.showModal();
    return () => {
      if (dialog?.open) dialog.close();
    };
  }, []);

  function rememberDismissal() {
    if (!phase) return;
    try {
      localStorage.setItem(`vedana-buchstart-2026-${phase}-geschlossen`, "1");
    } catch {
      // Kein Speicherzugriff: der Dialog funktioniert dennoch.
    }
  }

  const isRelease = phase === "release";
  const actionLabel = purchaseUrl
    ? isRelease
      ? "Jetzt bestellen"
      : "Jetzt vorbestellen"
    : "Buch ansehen";

  return (
    <dialog
      ref={dialogRef}
      onClose={rememberDismissal}
      aria-labelledby="book-announcement-title"
      className="w-[calc(100%-2rem)] max-w-3xl overflow-hidden rounded-2xl border border-gold/20 bg-paper p-0 text-ink shadow-book backdrop:bg-ink/60"
    >
      <div className="relative grid sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Hinweis schließen"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-2xl leading-none text-ink shadow-soft transition-colors hover:bg-paper-deep"
        >
          ×
        </button>
        <div className="flex h-44 items-center justify-center bg-paper-deep p-4 sm:h-auto sm:min-h-[24rem] sm:p-8">
          <div className="relative h-full w-28 shadow-book sm:h-80 sm:w-52">
            <Image
              src="/images/buecher/der-buddha-war-wie-du-cover-v3.webp"
              alt="Cover des Buches Der Buddha war wie Du"
              fill
              sizes="(min-width: 640px) 13rem, 7rem"
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center px-7 pb-9 pt-8 sm:px-10 sm:py-12">
          <p className="font-display text-xs uppercase tracking-[0.24em] text-gold">
            Buchstart · nur bis 15. Oktober
          </p>
          <h2 id="book-announcement-title" className="mt-4 text-3xl leading-tight sm:text-4xl">
            {isRelease ? "Jetzt neu erschienen." : "Bald ist es so weit."}
          </h2>
          <p className="mt-5 leading-relaxed text-ink/75">
            {isRelease
              ? "„Der Buddha war wie Du“ von Mahinda Ansari ist da – eine sinnliche Reise in die buddhistische Welt, erzählt in berührenden Geschichten."
              : "„Der Buddha war wie Du“ von Mahinda Ansari erscheint am 1. Oktober 2026. Entdecken Sie schon jetzt das Buch und seine Leseprobe."}
          </p>
          {priceLabel && (
            <p className="mt-4 font-display text-lg text-ink">
              {priceLabel}
              <span className="ml-2 font-body text-sm font-normal text-ink/55">
                · versandkostenfrei in Deutschland
              </span>
            </p>
          )}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            {purchaseUrl ? (
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => dialogRef.current?.close()}
                className="rounded-full bg-ink px-6 py-3 font-display text-sm text-paper transition-colors hover:bg-gold hover:text-ink"
              >
                {actionLabel}
              </a>
            ) : (
              <Link
                href="/buecher/der-buddha-war-wie-du"
                onClick={() => dialogRef.current?.close()}
                className="rounded-full bg-ink px-6 py-3 font-display text-sm text-paper transition-colors hover:bg-gold hover:text-ink"
              >
                {actionLabel}
              </Link>
            )}
            <Link
              href="/buecher/der-buddha-war-wie-du#leseprobe"
              onClick={() => dialogRef.current?.close()}
              className="font-display text-sm text-ink/65 underline decoration-ink/25 underline-offset-4 hover:text-ink"
            >
              Leseprobe lesen
            </Link>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="w-full text-left font-display text-xs text-ink/45 hover:text-ink sm:w-auto"
            >
              Angebot schließen
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

