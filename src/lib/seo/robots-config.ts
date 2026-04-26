import type { MetadataRoute } from "next";

export const robotsConfig: MetadataRoute.Robots = {
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: "https://matebac.com/sitemap.xml",
  host: "https://matebac.com",
};
