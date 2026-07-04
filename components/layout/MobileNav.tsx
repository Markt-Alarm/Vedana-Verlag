"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:text-gold"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          {open ? (
            <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-40 border-b border-ink/10 bg-paper/98 backdrop-blur-md"
        >
          <nav className="mx-auto max-w-6xl px-5 py-4" aria-label="Hauptnavigation (mobil)">
            <ul className="flex flex-col divide-y divide-ink/10">
              {site.nav.map((item) => (
                <li key={item.href} className="py-3">
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block font-display text-lg text-ink transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mt-1 space-y-1 pl-4">
                      {item.children
                        .filter((child) => child.href !== item.href)
                        .map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={close}
                              className="block py-1.5 text-ink/70 transition-colors hover:text-gold"
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
        </div>
      )}
    </div>
  );
}
