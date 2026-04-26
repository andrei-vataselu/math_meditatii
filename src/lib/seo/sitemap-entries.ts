import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const SITE_URL = siteConfig.url;

export const sitemapEntries: MetadataRoute.Sitemap = [
  { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
  { url: `${SITE_URL}/despre-mine`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/despre-meditatii`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/planuri`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/resurse-gratuite`, changeFrequency: "weekly", priority: 0.9 },
  {
    url: `${SITE_URL}/subiecte-oficiale-bacalaureat`,
    changeFrequency: "daily",
    priority: 0.95,
  },
  {
    url: `${SITE_URL}/subiecte-oficiale-evaluare-nationala`,
    changeFrequency: "daily",
    priority: 0.95,
  },
  { url: `${SITE_URL}/recenzii`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/sitemap`, changeFrequency: "monthly", priority: 0.4 },
  {
    url: `${SITE_URL}/termeni-si-conditii`,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  {
    url: `${SITE_URL}/politica-cookies`,
    changeFrequency: "yearly",
    priority: 0.3,
  },
];
