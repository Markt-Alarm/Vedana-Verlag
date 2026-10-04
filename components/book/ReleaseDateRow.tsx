"use client";

import type { Book } from "@/content/books";
import { Placeholder } from "@/components/ui/Placeholder";
import { useReleaseState } from "./useReleaseState";

export function ReleaseDateRow({ book }: { book: Book }) {
  const releaseState = useReleaseState(book.erscheinungszeitpunkt);

  if (
    book.status === "bald-verfuegbar" &&
    releaseState !== "before"
  ) {
    return null;
  }

  return (
    <div className="flex justify-between gap-4 border-b border-ink/10 py-2.5 text-sm">
      <dt className="text-ink/55">Erscheinungstermin</dt>
      <dd className="text-right text-ink/85">
        {book.erscheinungsdatum ??
          book.erscheinungsjahr ?? <Placeholder>folgt</Placeholder>}
      </dd>
    </div>
  );
}
