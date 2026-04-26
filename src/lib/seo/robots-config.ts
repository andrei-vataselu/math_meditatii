import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const base = siteConfig.url;

export const robotsConfig: MetadataRoute.Robots = {
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: `${base}/sitemap.xml`,
  host: base,
};
