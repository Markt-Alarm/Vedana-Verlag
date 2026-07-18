import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactBlock } from "@/components/ui/ContactBlock";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { LesungenForm } from "@/components/lesungen/LesungenForm";
import { LesungenMap } from "@/components/lesungen/LesungenMap";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Musikalische Lesungen",
  description:
    "Musikalische Lesungen mit dem Vedana Verlag – für Buchhandlungen, Kulturveranstaltungen und besondere Anlässe. Jetzt anfragen.",
  path: "/musikalische-lesungen",
});

export default function LesungenPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_20rem] md:gap-14 lg:grid-cols-[1fr_24rem]">
        <div className="max-w-2xl">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            Veranstaltungen
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl">Musikalische Lesungen</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Mit unseren Büchern möchten wir Menschen berühren – und genau das
            möchten wir auch bei unseren Lesungen. Worte, Musik und Gesang
            verschmelzen zu einem stimmungsvollen Erlebnis, das Herz und Seele
            anspricht.
          </p>
        </div>

        <div
          className="relative mx-auto aspect-[2/3] w-full max-w-xs md:max-w-none"
          style={{
            maskImage:
              "radial-gradient(ellipse 78% 78% at center, black 60%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 78% 78% at center, black 60%, transparent 100%)",
          }}
        >
          <Image
            src="/images/lesungen/cello-lesung-v1.webp"
            alt="Cello mit Notenständer in einem hellen, ruhigen Raum – Stimmung einer musikalischen Lesung"
            fill
            sizes="(min-width: 768px) 24rem, 70vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl">Anfrage stellen</h2>
          <p className="mt-3 text-ink/70">
            Gerne können Sie eine musikalische Lesung für Ihre Veranstaltung
            buchen. Wir freuen uns auf Ihren Anruf unter{" "}
            <PhoneNumber
              number={site.contact.telefon}
              href={`tel:${site.contact.telefonHref}`}
              className="font-medium text-ink underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
            />
            .
          </p>
          <div className="mt-8">
            <LesungenForm />
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl">Anfahrt ab {site.standort.name}</h2>
          <p className="mt-3 text-ink/70">
            Wir reisen von {site.standort.name} an. Sehen Sie den Startpunkt auf
            der Karte und berechnen Sie die Entfernung zu Ihrem Veranstaltungsort.
          </p>
          <div className="mt-8">
            <LesungenMap />
          </div>
          <div className="mt-10 border-t border-ink/10 pt-8">
            <h3 className="font-display text-lg">Lieber direkt?</h3>
            <p className="mt-2 text-sm text-ink/70">
              Sie erreichen uns auch telefonisch oder per E-Mail.
            </p>
            <ContactBlock className="mt-4" />
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
