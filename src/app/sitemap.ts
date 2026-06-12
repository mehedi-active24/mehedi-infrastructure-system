import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mehedi-active24.vercel.app";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/architecture`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/logs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/toolkit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
