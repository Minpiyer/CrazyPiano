import { ScoresOverview } from "@/components/scores/ScorePages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Piano Arrangements Portfolio",
  description: "Explore Dr. Hsu's piano four-hands and custom arranging work, with selected watermarked excerpts showing how melody, texture, difficulty, and ensemble roles are shaped for real players.",
  path: "/en/scores",
  locale: "en",
  alternatePath: "/scores",
});

export default function EnglishScoresPage() {
  return <ScoresOverview locale="en" />;
}
