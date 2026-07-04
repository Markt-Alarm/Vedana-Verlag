import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  // /danke wird über `noindex` (Seiten-Metadata) aus dem Index gehalten – kein
  // robots-disallow, damit Crawler das noindex überhaupt lesen können.
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
