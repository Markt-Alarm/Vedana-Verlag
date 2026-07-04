import type { Book, Kaufoption } from "@/content/books";
import { site } from "@/content/site";
import { formatEuro } from "@/lib/format";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";

function buildRechnungMailto(book: Book): string {
  const subject = `Bestellung auf Rechnung – ${book.titel}`;
  const body = [
    "Guten Tag,",
    "",
    "hiermit möchte ich folgendes Buch auf Rechnung bestellen:",
    "",
    `Titel: ${book.titel}`,
    "Menge: 1",
    "",
    "Lieferadresse (Versand nur innerhalb Deutschlands):",
    "Name:",
    "Straße und Hausnummer:",
    "PLZ und Ort:",
    "",
    "Vielen Dank!",
  ].join("\n");
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export function BuyBox({ book }: { book: Book }) {
  const stripe = book.kaufoptionen.find(
    (k): k is Extract<Kaufoption, { typ: "stripe-payment-link" }> =>
      k.typ === "stripe-payment-link",
  );
  const hatRechnung = book.kaufoptionen.some((k) => k.typ === "rechnung");
  const extern = book.kaufoptionen.filter(
    (k): k is Extract<Kaufoption, { typ: "extern" }> => k.typ === "extern",
  );
  const istPlatzhalterLink = stripe ? /PLATZHALTER|test_/i.test(stripe.url) : false;
  const kaufbar = book.status === "erschienen";

  return (
    <div className="rounded-xl border border-ink/10 bg-paper p-6 shadow-soft">
      <div className="flex items-baseline gap-3">
        {book.preis != null ? (
          <span className="font-display text-3xl text-ink">
            {formatEuro(book.preis)}
          </span>
        ) : (
          <span className="font-display text-2xl">
            <Placeholder>Preis folgt</Placeholder>
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink/60">
        {site.shop.steuerhinweis}
        <br />
        {site.shop.versandHinweis}.
        {book.lieferzeit ? ` Lieferzeit: ${book.lieferzeit}.` : ""}
      </p>

      {kaufbar ? (
        <div className="mt-6 space-y-3 border-t border-ink/10 pt-6">
          {stripe && (
            <div>
              <CTA href={stripe.url} external variant="primary" className="w-full">
                Jetzt kaufen
              </CTA>
              {istPlatzhalterLink && (
                <p className="mt-2 text-xs leading-relaxed text-ink/50">
                  Hinweis: aktuell Test-/Platzhalter-Link. Vor dem Go-live durch
                  den echten Stripe Payment Link ersetzen.
                </p>
              )}
            </div>
          )}

          {hatRechnung && (
            <CTA
              href={buildRechnungMailto(book)}
              variant="secondary"
              className="w-full"
            >
              Auf Rechnung bestellen
            </CTA>
          )}

          {extern.map((e) => (
            <CTA
              key={e.url}
              href={e.url}
              external
              variant="ghost"
              className="w-full"
            >
              Auch erhältlich bei {e.haendler}
            </CTA>
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-lg bg-paper-deep p-4 text-sm text-ink/70">
          Dieses Buch ist noch nicht erhältlich.
          {book.status === "bald-verfuegbar" ? " Es erscheint in Kürze." : ""}
        </p>
      )}

      <p className="mt-4 text-xs text-ink/45">{site.shop.versandRaum}.</p>
    </div>
  );
}
