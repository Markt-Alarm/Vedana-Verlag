import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  eyebrowClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
  eyebrowClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 font-display text-sm uppercase tracking-[0.2em] text-gold",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl leading-tight md:text-4xl">{title}</h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-ink/75">{intro}</p>
      )}
    </div>
  );
}
