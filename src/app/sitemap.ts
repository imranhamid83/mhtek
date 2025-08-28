import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mhtek.example";
  return [
    { url: `${baseUrl}/`, priority: 1 },
    { url: `${baseUrl}/about`, priority: 0.8 },
    { url: `${baseUrl}/services`, priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.8 },
  ];
}


