import Link from "next/link";
import Image from "next/image";
import type { Book } from "@/content/books";
import { StatusBadge } from "./StatusBadge";

export function BookCard({ book }: { book: Book }) {
  return (
    <Link href={`/buecher/${book.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-paper-deep shadow-soft transition-shadow duration-300 group-hover:shadow-book">
        <div className="relative aspect-[2/3]">
          <Image
            src={book.cover}
            alt={book.coverAlt}
            fill
            sizes="(min-width: 768px) 22rem, 60vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
      <div className="mt-4">
        <StatusBadge status={book.status} />
        <h3 className="mt-2 font-display text-xl text-ink transition-colors group-hover:text-gold">
          {book.titel}
        </h3>
        {book.untertitel && (
          <p className="mt-0.5 text-ink/60">{book.untertitel}</p>
        )}
        <p className="mt-1 text-sm text-ink/55">{book.autor}</p>
      </div>
    </Link>
  );
}
