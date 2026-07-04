import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactBlock } from "@/components/ui/ContactBlock";
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
      <div className="max-w-2xl">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
          Veranstaltungen
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl">Musikalische Lesungen</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/80">
          Worte und Musik, die einander tragen: Der Vedana Verlag gestaltet
          musikalische Lesungen – literarische Texte, behutsam begleitet von
          Musik. Für Buchhandlungen, Kulturveranstaltungen und besondere Anlässe.
        </p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl">Anfrage stellen</h2>
          <p className="mt-3 text-ink/70">
            Erzählen Sie uns von Ihrer Veranstaltung – wir melden uns persönlich
            bei Ihnen.
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
