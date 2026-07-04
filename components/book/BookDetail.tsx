import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Book } from "@/content/books";
import { site } from "@/content/site";
import { BuyBox } from "./BuyBox";
import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";
import { Placeholder } from "@/components/ui/Placeholder";

function MetaRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex justify-between gap-4 border-b border-ink/10 py-2.5 text-sm">
      <dt className="text-ink/55">{label}</dt>
      <dd className="text-right text-ink/85">{children}</dd>
    </div>
  );
}

export function BookDetail({ book }: { book: Book }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.titel,
    ...(book.untertitel ? { alternativeHeadline: book.untertitel } : {}),
    author: { "@type": "Person", name: book.autor },
    publisher: { "@type": "Organization", name: site.name },
    inLanguage: "de",
    ...(book.isbn ? { isbn: book.isbn } : {}),
    ...(book.erscheinungsjahr
      ? { datePublished: String(book.erscheinungsjahr) }
      : {}),
    image: new URL(book.cover, site.url).toString(),
    ...(book.preis != null
      ? {
          offers: {
            "@type": "Offer",
            price: book.preis.toFixed(2),
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };

  return (
    <>
      <Container className="py-10 md:py-16">
        <nav className="text-sm text-ink/55" aria-label="Brotkrumen-Navigation">
          <Link href="/" className="transition-colors hover:text-gold">
            Start
          </Link>
          <span className="px-2" aria-hidden="true">
            /
          </span>
          <span className="text-ink/75">{book.titel}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative mx-auto aspect-[2/3] w-full max-w-xs overflow-hidden rounded-lg shadow-book">
              <Image
                src={book.cover}
                alt={book.coverAlt}
                fill
                sizes="(min-width: 1024px) 20rem, 70vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-6">
              <BuyBox book={book} />
            </div>
          </div>

          <div>
            <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">
              {book.autor}
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl">{book.titel}</h1>
            {book.untertitel && (
              <p className="mt-3 text-xl text-ink/70">{book.untertitel}</p>
            )}

            <RichText text={book.beschreibung} className="mt-8" />

            {book.zielgruppe && (
              <div className="mt-8 rounded-lg bg-paper-deep p-6">
                <h2 className="font-display text-lg">Für wen ist dieses Buch?</h2>
                <p className="mt-2 text-ink/80">
                  {book.zielgruppe.includes("[PLATZHALTER") ? (
                    <Placeholder>{book.zielgruppe}</Placeholder>
                  ) : (
                    book.zielgruppe
                  )}
                </p>
              </div>
            )}

            <dl className="mt-10 max-w-md">
              <MetaRow label="Format">
                {book.format ?? <Placeholder>folgt</Placeholder>}
              </MetaRow>
              <MetaRow label="Umfang">
                {book.seiten ? (
                  `${book.seiten} Seiten`
                ) : (
                  <Placeholder>folgt</Placeholder>
                )}
              </MetaRow>
              <MetaRow label="ISBN">
                {book.isbn ?? <Placeholder>folgt</Placeholder>}
              </MetaRow>
              <MetaRow label="Erschienen">
                {book.erscheinungsjahr ?? <Placeholder>folgt</Placeholder>}
              </MetaRow>
            </dl>
          </div>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
