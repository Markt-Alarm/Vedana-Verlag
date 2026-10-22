import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsentAndAnalytics } from "@/components/analytics/ConsentAndAnalytics";
import { BookAnnouncement } from "@/components/book/BookAnnouncement";
import { books } from "@/content/books";
import { site } from "@/content/site";
import { formatEuro } from "@/lib/format";
import { getReleaseState } from "@/lib/release";

// Selbst gehostet über next/font → kein Google-Fonts-Request (DSGVO-sauber).
const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const body = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: site.url },
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Bücher",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vedana Verlag – Bücher für das Herz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(site.googleSiteVerification
    ? { verification: { google: site.googleSiteVerification } }
    : {}),
};

const organizationId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;
const publisherJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: site.name,
      url: site.url,
      description: site.description,
      logo: {
        "@type": "ImageObject",
        url: new URL("/images/brand/vedana-logo-v1.webp", site.url).toString(),
      },
      email: site.contact.email,
      telephone: site.contact.telefonHref,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.strasse,
        postalCode: site.address.plz,
        addressLocality: site.address.ort,
        addressCountry: "DE",
      },
      founder: {
        "@type": "Person",
        name: site.address.inhaberin,
        url: new URL("/verlag/team", site.url).toString(),
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: site.name,
      url: site.url,
      inLanguage: "de-DE",
      publisher: { "@id": organizationId },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const launchBook = books[0];
  const paymentLink = launchBook.kaufoptionen.find(
    (option) => option.typ === "stripe-payment-link",
  );
  const showAnnouncement =
    getReleaseState(launchBook.erscheinungszeitpunkt) === "before";

  return (
    <html lang="de" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(publisherJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          Zum Inhalt springen
        </a>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ConsentAndAnalytics />
        {showAnnouncement && (
          <BookAnnouncement
            purchaseUrl={paymentLink?.url}
            priceLabel={launchBook.preis != null ? formatEuro(launchBook.preis) : undefined}
          />
        )}
      </body>
    </html>
  );
}

