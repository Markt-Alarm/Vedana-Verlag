import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { FeaturedPerson } from "@/components/person/FeaturedPerson";
import { getFeaturedPerson } from "@/content/people";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Verlag",
  description:
    "Bücher mit Herz. Über den Vedana Verlag – Haltung, Anspruch und die Menschen dahinter.",
  path: "/verlag",
});

export default function VerlagPage() {
  const mahinda = getFeaturedPerson();

  return (
    <>
      <Container className="py-16 md:py-24">
        <div className="max-w-prose">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">
            Der Verlag
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl">Bücher mit Herz</h1>
          <div className="prose-vedana mt-8">
            <p>
              „Vedana“ ist ein Wort aus dem Pali, der Sprache, in der die
              Lehrreden des Buddha überliefert wurden. Es bedeutet Gefühl oder
              Empfindung. Gemeint ist der erste Eindruck, den etwas in uns
              hinterlässt – noch bevor wir nachdenken oder urteilen. Zunächst ist
              da einfach nur ein Gefühl. Ein leiser innerer Kompass.
            </p>
            <p>
              Genau deshalb haben wir diesen Begriff als Namen für unseren Verlag
              gewählt. Er bringt auf den Punkt, was uns wichtig ist: Wir möchten
              Bücher schaffen, die nicht nur den Verstand ansprechen, sondern auch
              Gefühle auslösen.
            </p>
            <p>
              Deshalb schreiben wir in einer klaren, verständlichen Sprache und
              ergänzen unsere Texte mit liebevollen, handgefertigten
              Illustrationen. Das Lesen von Büchern hat in unserem Leben eine
              große Bedeutung. Gute Bücher haben die Kraft, das Leben zu
              verändern.
            </p>
            <p>
              Wir sind ein kleiner Familienverlag und machen Bücher nicht am
              Fließband, sondern mit Sorgfalt, Handschrift und einem hohen
              Qualitätsanspruch.
            </p>
            <p>
              Für uns steht der Vedana Verlag für Texte und Bilder, die nicht laut
              sein müssen, um zu wirken. Für Bücher, die nicht nur gelesen,
              sondern empfunden werden. Für Geschichten, die berühren, nachklingen
              und etwas in Bewegung setzen.
            </p>
          </div>
        </div>
      </Container>

      {/* Gründungsgeschichte */}
      <Container className="pb-16 md:pb-24">
        <div className="max-w-prose rounded-xl bg-paper-deep p-8 md:p-10">
          <h2 className="font-display text-2xl">Wie alles begann</h2>
          <div className="prose-vedana mt-4">
            <p>
              Ein Buch zu schreiben fühlt sich an wie Kinderkriegen. Zuerst
              empfängt man eine Idee, dann kommt die schöne Zeit, in der man mit
              dem Text schwanger ist. Wenn der Geburtstermin sich nähert, wird es
              noch einmal richtig anstrengend. Unter Hochdruck wird das Manuskript
              überarbeitet, angepasst und verändert. Der Weg vom Manuskript zum
              gedruckten Buch führt schließlich über die Druckerpresse. Wir
              wissen: Die Geburt steht nun bevor. Bald können wir nichts mehr
              verändern. Wir müssen loslassen. Vielleicht schleichen sich Ängste
              ein – wie wird mein Baby von der Welt aufgenommen? Wir schwitzen,
              ein paar letzte Änderungen und dann ist es soweit: Unter druckvollen
              Presswehen erblickt unser Schatz das Licht der Welt. Voller Liebe
              und Stolz betrachten wir das Neugeborene und wünschen ihm bei seinem
              Weg in die Öffentlichkeit nur das Allerbeste.
            </p>
            <p>
              Damit sich die Veröffentlichung des Buches genauso liebevoll
              gestaltet wie der Prozess seines Verfassens, haben wir diesen Verlag
              gegründet. Dabei leitet uns eine klare innere Ausrichtung: keine
              Massenware oder genormter Mainstream, sondern liebevoll gewachsene
              Texte und berührende Illustrationen. Qualität vor Quantität. Das ist
              unser Anspruch.
            </p>
            <p>Viel Vergnügen beim Lesen!</p>
          </div>
        </div>
      </Container>

      {/* Qualitätsversprechen */}
      <Container className="pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <SectionHeader eyebrow="Qualität" title="Sorgfalt, die man spürt" />
          <p className="text-lg leading-relaxed text-ink/80">
            Damit ein Buch mit allen Sinnen erfahrbar wird, setzen wir nicht nur
            auf berührende Illustrationen, sondern auch auf Qualität im Druck.
            Unsere Druckerei ist ein Hamburger Traditionshaus.
          </p>
        </div>
      </Container>

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
            Das Team hinter dem Vedana Verlag
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            Der Vedana Verlag ist Familiensache – wir gestalten unsere Bücher
            gemeinsam, jede und jeder mit den eigenen Stärken.
          </p>
          <div className="mt-6 flex justify-center">
            <CTA href="/verlag/team">Zum Team</CTA>
          </div>
        </div>
      </Container>
    </>
  );
}
