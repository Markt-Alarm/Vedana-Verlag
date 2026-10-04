"use client";

import type { BookStatus } from "@/content/books";
import { cn } from "@/lib/cn";
import { useReleaseState } from "./useReleaseState";

const map: Record<BookStatus, { label: string; className: string } | null> = {
  erschienen: null, // erschienene Bücher brauchen kein Badge
  "bald-verfuegbar": { label: "Erscheint bald", className: "bg-sage/20" },
  "in-arbeit": { label: "In Arbeit", className: "bg-bluegrey/25" },
};

export function StatusBadge({
  status,
  releaseAt,
}: {
  status: BookStatus;
  releaseAt?: string;
}) {
  const releaseState = useReleaseState(releaseAt);
  if (
    status === "bald-verfuegbar" &&
    (releaseState === "pending" || releaseState === "released")
  ) {
    return null;
  }
  const s = map[status];
  if (!s) return null;
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-medium tracking-wide text-ink/80",
        s.className,
      )}
    >
      {s.label}
    </span>
  );
}
