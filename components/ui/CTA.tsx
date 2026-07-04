import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-ink text-paper shadow-soft hover:bg-gold hover:text-ink",
  secondary: "border border-ink/25 text-ink hover:border-gold hover:text-gold",
  ghost:
    "text-ink underline underline-offset-4 decoration-gold/40 hover:decoration-gold",
  light: "bg-paper text-ink shadow-soft hover:bg-gold hover:text-ink",
};

export function CTA({
  href,
  children,
  variant = "primary",
  external,
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const cls = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200",
    styles[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
