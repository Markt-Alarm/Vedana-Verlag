import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PersonCard } from "@/components/person/PersonCard";
import { people } from "@/content/people";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Team",
  description: "Die Menschen hinter dem Vedana Verlag.",
  path: "/verlag/team",
});

export default function TeamPage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionHeader
        eyebrow="Mitwirkende"
        title="Das Team"
        intro="Menschen, die mit Liebe zum Detail an unseren Büchern arbeiten."
      />
      <ul className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {people.map((person) => (
          <li key={person.name}>
            <PersonCard person={person} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
