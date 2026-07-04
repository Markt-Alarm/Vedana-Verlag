import Image from "next/image";
import type { Person } from "@/content/people";
import { RichText } from "@/components/ui/RichText";

export function FeaturedPerson({ person }: { person: Person }) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-[16rem_1fr] md:gap-12">
      <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg shadow-book">
        <Image
          src={person.bild}
          alt={person.bildAlt}
          fill
          sizes="(min-width: 768px) 16rem, 70vw"
          className="object-cover object-[center_28%]"
        />
      </div>
      <div>
        <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">
          {person.rolle}
        </p>
        <h2 className="mt-2 text-3xl">{person.name}</h2>
        {person.beschreibung && (
          <RichText text={person.beschreibung} className="mt-4" />
        )}
      </div>
    </div>
  );
}
