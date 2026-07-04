import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getAllBookSlugs } from "@/content/books";

export default function sitemap(): MetadataRoute.Sitemap {
  // /buecher (Katalog) ist aktuell aus der Navigation ausgeblendet und daher
  // auch nicht in der Sitemap. Die Buchdetailseite(n) bleiben enthalten.
  const routes = [
    "/",
    "/verlag",
    "/verlag/team",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    "/agb",
    "/widerruf",
  ];

  const now = new Date();

  const staticEntries = routes.map((r) => ({
    url: new URL(r, site.url).toString(),
    lastModified: now,
  }));

  const bookEntries = getAllBookSlugs().map((slug) => ({
    url: new URL(`/buecher/${slug}`, site.url).toString(),
    lastModified: now,
  }));

  return [...staticEntries, ...bookEntries];
}
