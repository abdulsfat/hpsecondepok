import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.hpsecondepok.co.id/sitemap.xml",
    host: "https://www.hpsecondepok.co.id",
  };
}
