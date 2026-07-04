import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { FeaturedPerson } from "@/components/person/FeaturedPerson";
import { getFeaturedPerson } from "@/content/people";
import { werte } from "@/content/values";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Verlag",
  description:
    "Vedana bedeutet Gefühl. Über den Vedana Verlag – Haltung, Anspruch und die Menschen dahinter.",
  path: "/verlag",
});

export default function VerlagPage() {
  const mahinda = getFeaturedPerson();
  const qualitaet = werte.find((w) => w.titel === "Qualität");

  return (
    <>
      <Container className="py-16 md:py-24">
        <div className="max-w-prose">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">
            Der Verlag
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl">Vedana bedeutet Gefühl</h1>
          <div className="prose-vedana mt-8">
            <p>
              Vedana ist ein Wort aus dem Pali und bedeutet Gefühl, Empfindung –
              der Moment, bevor wir denken. Genau darum geht es uns: um Bücher,
              die berühren, statt nur zu informieren.
            </p>
            <p>
              Wir sind ein kleiner Familienverlag. Wir machen Bücher nicht am
              Fließband, sondern mit Sorgfalt, Handschrift und einem hohen
              Qualitätsanspruch – vom Text über die Illustration bis zum Druck.
            </p>
          </div>
        </div>
      </Container>

      {/* Gründungsgeschichte */}
      <Container className="pb-16 md:pb-24">
        <div className="max-w-prose rounded-xl bg-paper-deep p-8">
          <h2 className="font-display text-2xl">Wie alles begann</h2>
          <p className="mt-4">
            <Placeholder>
              [PLATZHALTER: persönliche Gründungsgeschichte (Geburts-Metapher)
              aus „Texte für die Verlags.docx“ einsetzen – sprachlich geglättet.]
            </Placeholder>
          </p>
        </div>
      </Container>

      {/* Qualitätsversprechen */}
      {qualitaet && (
        <Container className="pb-16 md:pb-24">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <SectionHeader eyebrow="Qualität" title="Sorgfalt, die man spürt" />
            <p className="text-lg leading-relaxed text-ink/80">
              {qualitaet.text}
            </p>
          </div>
        </Container>
      )}

      {/* Mahinda */}
      {mahinda && (
        <Container className="pb-16 md:pb-24">
          <FeaturedPerson person={mahinda} />
        </Container>
      )}

      {/* Team-Link */}
      <Container className="pb-20 md:pb-28">
        <div className="rounded-xl border border-ink/10 p-8 text-center md:p-12">
          <h2 className="font-display text-2xl md:text-3xl">
            Das Team hinter Vedana
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            Viele Hände, eine Haltung: Menschen, die mit Liebe zum Detail an
            unseren Büchern arbeiten.
          </p>
          <div className="mt-6 flex justify-center">
            <CTA href="/verlag/team">Zum Team</CTA>
          </div>
        </div>
      </Container>
    </>
  );
}
