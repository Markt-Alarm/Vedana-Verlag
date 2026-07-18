import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BackgroundSection } from "@/components/ui/BackgroundSection";
import { Reveal } from "@/components/ui/Reveal";
import { books } from "@/content/books";
import { werte } from "@/content/values";
import { getFeaturedPerson } from "@/content/people";
import { veranstaltungen } from "@/content/events";
import { site, backgrounds } from "@/content/site";
import { formatEuro } from "@/lib/format";

export default function HomePage() {
  const book = books[0];
  const mahinda = getFeaturedPerson();
  const veranstaltung = veranstaltungen[0];

  return (
    <>
      {/* Hero */}
      <BackgroundSection
        image={backgrounds.hero}
        priority
        overlayClassName="bg-gradient-to-r from-paper from-5% via-paper/90 via-55% to-paper/45 md:to-paper/25"
      >
        <Container className="py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl animate-fade-up">
            <Link
              href={`/buecher/${book.slug}`}
              className="inline-block"
              aria-label="Zum Shop – Der Buddha war wie Du"
            >
              <Image
                src="/images/brand/vedana-logo-v1.webp"
                alt="Vedana Verlag"
                width={402}
                height={253}
                priority
                className="mb-8 h-20 w-auto md:h-28"
              />
            </Link>
            <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
              {site.tagline}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.1] text-ink [text-shadow:0_1px_12px_rgba(251,246,238,0.7)] md:text-6xl">
              {site.claim}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/85 md:max-w-xl">
              Bücher, die nicht nur gelesen, sondern empfunden werden – liebevoll
              illustriert und mit Sorgfalt gemacht.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTA href={`/buecher/${book.slug}`}>Zum Buch</CTA>
              <CTA href="/verlag" variant="secondary">
                Über den Verlag
              </CTA>
            </div>
          </div>
        </Container>
      </BackgroundSection>

      {/* Aktuelles Buch */}
      <Container className="py-20 md:py-28">
        <Reveal className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-lg shadow-book">
            <Image
              src={book.cover}
              alt={book.coverAlt}
              fill
              sizes="(min-width: 768px) 24rem, 80vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">
              Unser aktuelles Buch
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl">{book.titel}</h2>
            {book.untertitel && (
              <p className="mt-2 text-xl text-ink/70">{book.untertitel}</p>
            )}
            <p className="mt-5 text-lg leading-relaxed text-ink/80">
              {book.kurzbeschreibung}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <CTA href={`/buecher/${book.slug}`}>Mehr zum Buch</CTA>
              {book.preis != null && (
                <span className="text-ink/70">{formatEuro(book.preis)}</span>
              )}
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Drei Werte – ruhige, hochwertige Fläche */}
      <section className="bg-paper-deep">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeader
              align="center"
              eyebrow="Was uns wichtig ist"
              title="Gefühl, Sinnlichkeit, Qualität"
              intro="Wir glauben an die Kraft liebevoll gewachsener Bücher."
            />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
            {werte.map((w, i) => (
              <Reveal key={w.titel} delay={i * 120}>
                <div className="h-full rounded-xl border border-ink/10 bg-paper p-7 shadow-soft transition-shadow duration-300 hover:shadow-book">
                  <h3 className="font-display text-2xl text-ink">{w.titel}</h3>
                  <p className="mt-3 leading-relaxed text-ink/75">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Verlag-Teaser */}
      {mahinda && (
        <Container className="py-20 md:py-28">
          <Reveal className="grid items-center gap-10 md:grid-cols-[1fr_16rem] md:gap-16">
            <div className="order-2 md:order-1">
              <SectionHeader
                eyebrow="Der Verlag"
                title="Ein Buch zu schreiben fühlt sich an wie Kinderkriegen."
                intro="Von der ersten Idee bis zu den druckvollen Presswehen – und warum wir daraus einen Verlag gemacht haben."
              />
              <div className="mt-7">
                <CTA href="/verlag" variant="secondary">
                  Mehr über uns
                </CTA>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg shadow-book">
                <Image
                  src={mahinda.bild}
                  alt={mahinda.bildAlt}
                  fill
                  sizes="(min-width: 768px) 16rem, 60vw"
                  className="object-cover object-[center_28%]"
                />
              </div>
              <p className="mt-3 text-center text-sm text-ink/60">
                {mahinda.name} · {mahinda.rolle}
              </p>
            </div>
          </Reveal>
        </Container>
      )}

      {/* Musikalische Lesungen – Teaser */}
      {veranstaltung && (
        <BackgroundSection
          image={backgrounds.veranstaltung}
          overlayClassName="bg-ink/55"
        >
          <Container className="py-24 md:py-28">
            <Reveal className="max-w-xl">
              <p className="font-display text-sm uppercase tracking-[0.25em] text-gold-soft">
                Veranstaltungen
              </p>
              <h2 className="mt-4 text-3xl text-paper md:text-4xl">
                {veranstaltung.titel}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-paper/85">
                Worte und Musik, die einander tragen. Wir gestalten musikalische
                Lesungen – für Veranstalter und besondere Anlässe.
              </p>
              <div className="mt-7">
                <CTA href="/musikalische-lesungen" variant="light">
                  Mehr erfahren &amp; anfragen
                </CTA>
              </div>
            </Reveal>
          </Container>
        </BackgroundSection>
      )}
    </>
  );
}
