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
    "/musikalische-lesungen",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    "/agb",
    "/widerruf",
  ];

  const priorities: Record<string, number> = {
    "/": 1,
    "/verlag": 0.8,
    "/verlag/team": 0.6,
    "/musikalische-lesungen": 0.8,
    "/kontakt": 0.7,
    "/impressum": 0.2,
    "/datenschutz": 0.2,
    "/agb": 0.2,
    "/widerruf": 0.2,
  };

  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: new URL(r, site.url).toString(),
    changeFrequency:
      r === "/" || r === "/musikalische-lesungen" ? "monthly" : "yearly",
    priority: priorities[r] ?? 0.5,
  }));

  const bookEntries = getAllBookSlugs().map((slug) => ({
    url: new URL(`/buecher/${slug}`, site.url).toString(),
    lastModified: new Date("2026-10-15T00:00:00+02:00"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...bookEntries];
}
