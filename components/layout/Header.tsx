import Link from "next/link";
import { site } from "@/content/site";
import { MobileNav } from "./MobileNav";

function ChevronDown() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="ml-1 h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-ink"
          aria-label="Vedana Verlag – zur Startseite"
        >
          Vedana <span className="font-normal text-ink/55">Verlag</span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Hauptnavigation"
        >
          {site.nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center text-sm tracking-wide text-ink/80 transition-colors hover:text-gold group-hover:text-gold"
                >
                  {item.label}
                  <ChevronDown />
                </Link>
                <div className="pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                  <ul className="min-w-[13rem] rounded-xl border border-ink/10 bg-paper p-2 shadow-soft">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-ink/80 transition-colors hover:bg-paper-deep hover:text-gold"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-ink/80 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
