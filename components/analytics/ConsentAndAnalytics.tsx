"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { site } from "@/content/site";

const GA_ID = site.analytics.googleAnalyticsId;
const STORAGE_KEY = "vedana-consent";

type Consent = "accepted" | "declined" | null;

/**
 * Cookie-Consent + Google Analytics.
 * - Ohne `googleAnalyticsId` (leer) erscheint KEIN Banner und es werden KEINE
 *   Cookies gesetzt.
 * - GA lädt ausschließlich nach ausdrücklicher Zustimmung („Akzeptieren").
 * - Die Wahl wird in localStorage gespeichert (kein Cookie).
 */
export function ConsentAndAnalytics() {
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted" || stored === "declined") {
        setConsent(stored);
      }
    } catch {
      // localStorage nicht verfügbar – dann bleibt es beim Banner ohne Speichern
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignorieren
    }
    setConsent(value);
  }

  const analyticsActive = mounted && consent === "accepted" && Boolean(GA_ID);
  const showBanner = mounted && consent === null && Boolean(GA_ID);

  return (
    <>
      {analyticsActive && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-label="Hinweis zu Cookies"
          className="fixed inset-x-0 bottom-0 z-[90] p-4 sm:p-6"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border border-ink/10 bg-paper/98 p-5 shadow-book backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-ink/80">
              Wir verwenden optionale Cookies für anonyme Statistik (Google
              Analytics), um die Website zu verbessern. Mehr in der{" "}
              <Link
                href="/datenschutz"
                className="text-gold underline underline-offset-2"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => choose("declined")}
                className="rounded-full border border-ink/25 px-5 py-2 text-sm text-ink transition-colors hover:border-gold hover:text-gold"
              >
                Ablehnen
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="rounded-full bg-ink px-5 py-2 text-sm text-paper shadow-soft transition-colors hover:bg-gold hover:text-ink"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
