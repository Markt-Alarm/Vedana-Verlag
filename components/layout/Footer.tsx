import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { books } from "@/content/books";
import { PhoneNumber } from "@/components/ui/PhoneNumber";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink/10 bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link
              href={`/buecher/${books[0].slug}`}
              className="inline-block"
              aria-label="Zum Buch – Der Buddha war wie Du"
            >
              <Image
                src="/images/brand/vedana-logo-v1.webp"
                alt="Vedana Verlag"
                width={402}
                height={253}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs font-display text-lg italic text-ink/70">
              Bücher mit Herz
            </p>
          </div>

          <nav aria-label="Seiten">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-ink/45">Seiten</p>
            <ul className="space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink/80 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mt-2 space-y-2 pl-3">
                      {item.children
                        .filter((child) => child.href !== item.href)
                        .map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="text-sm text-ink/65 transition-colors hover:text-gold"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Rechtliches">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-ink/45">Rechtliches</p>
            <ul className="space-y-3">
              {site.legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink/80 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/10 pt-6 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <PhoneNumber number={site.contact.telefon} />
        </div>
      </div>
    </footer>
  );
}
