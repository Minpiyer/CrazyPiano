import type { MetadataRoute } from "next";
import { getLocalizedAlternates, localizedRoutePairs } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/lessons/kids", changeFrequency: "monthly", priority: 0.9 },
  { path: "/lessons/kids/posture", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lessons/kids/hand-shape", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lessons/kids/finger-action", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lessons/kids/power", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lessons/kids/wrist-arm", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lessons/kids/relaxation", changeFrequency: "monthly", priority: 0.7 },
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
  return routes.flatMap(({ path, changeFrequency, priority }) => {
    const pair = localizedRoutePairs.find(([zhPath]) => zhPath === path);
    const pagePaths = pair ? [pair[0], pair[1]] : [path];
    return pagePaths.map((pagePath) => ({
      url: new URL(pagePath, SITE_URL).toString(),
      changeFrequency,
      priority,
      alternates: pair ? { languages: getLocalizedAlternates(pair[0], pair[1]) } : undefined,
    }));
  });
}
