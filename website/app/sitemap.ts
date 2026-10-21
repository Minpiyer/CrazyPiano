import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/lessons/kids", changeFrequency: "monthly", priority: 0.9 },
  { path: "/lessons/adult", changeFrequency: "monthly", priority: 0.9 },
  { path: "/lessons/exams-competitions", changeFrequency: "monthly", priority: 0.9 },
  { path: "/lessons/custom-scores", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lesson-fees", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, SITE_URL).toString(),
    changeFrequency,
    priority,
  }));
}
