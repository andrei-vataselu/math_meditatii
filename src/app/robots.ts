import type { MetadataRoute } from "next";
import { robotsConfig } from "@/lib/seo/robots-config";

export default function robots(): MetadataRoute.Robots {
  return robotsConfig;
}
