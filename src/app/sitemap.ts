import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spkp-pp.or.id";

  const routes = [
    "",
    "/about",
    "/berita-acara",
    "/contact",
    "/pengurus",
    "/services",
    "/majalah-terompet",
    "/surat-keputusan",
    "/tupoksi",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
