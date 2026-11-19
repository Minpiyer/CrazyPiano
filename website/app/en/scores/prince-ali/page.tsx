import { ScoreWorkDetail } from "@/components/scores/ScorePages";
import { getScoreWork } from "@/data/scores";
import { createPageMetadata } from "@/lib/seo";

const work = getScoreWork("prince-ali");

export const metadata = createPageMetadata({
  title: "Prince Ali Piano Four Hands Arrangement",
  description: "A portfolio case study of a Prince Ali piano four-hands arrangement, including the primo and secondo roles, arranging approach, and selected watermarked score excerpts.",
  path: "/en/scores/prince-ali",
  locale: "en",
  alternatePath: "/scores/prince-ali",
});

export default function EnglishPrinceAliScorePage() {
  return <ScoreWorkDetail locale="en" work={work} />;
}
