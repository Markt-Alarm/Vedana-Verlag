import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Baut Seiten-Metadaten. Der Seitentitel wird im Root-Layout automatisch
 * um "· Vedana Verlag" ergänzt (title.template).
 */
export function pageMetadata(opts: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
}): Metadata {
  const fullTitle = opts.title
    ? `${opts.title} · ${site.name}`
    : `${site.name} – ${site.tagline}`;
  const description = opts.description ?? site.description;
  const url = opts.path ? new URL(opts.path, site.url).toString() : site.url;
  const image = opts.ogImage ?? "/opengraph-image";

  return {
    title: opts.title,
    description,
    alternates: { canonical: url },
    ...(opts.noindex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "de_DE",
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
