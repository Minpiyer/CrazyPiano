import { ScoreWorkDetail } from "@/components/scores/ScorePages";
import { getScoreWork } from "@/data/scores";
import { createPageMetadata } from "@/lib/seo";

const work = getScoreWork("remember-me");

export const metadata = createPageMetadata({
  title: "Remember Me Piano Four Hands Arrangement",
  description: "A portfolio view of a Remember Me piano four-hands arrangement, using complex rhythms to preserve the improvisatory quality of the vocal line, with three watermarked excerpts.",
  path: "/en/scores/remember-me",
  locale: "en",
  alternatePath: "/scores/remember-me",
});

export default function EnglishRememberMeScorePage() {
  return <ScoreWorkDetail locale="en" work={work} />;
}
