import Image from "next/image";
import type { Person } from "@/content/people";

export function PersonCard({ person }: { person: Person }) {
  return (
    <figure className="text-center">
      <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-lg bg-paper-deep shadow-soft">
        <Image
          src={person.bild}
          alt={person.bildAlt}
          fill
          sizes="(min-width: 768px) 16rem, 45vw"
          className="object-cover object-[center_30%]"
        />
      </div>
      <figcaption className="mt-4">
        <p className="font-display text-lg text-ink">{person.name}</p>
        <p className="mt-1 text-sm text-ink/60">{person.rolle}</p>
      </figcaption>
    </figure>
  );
}
