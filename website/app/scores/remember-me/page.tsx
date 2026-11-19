import { ScoreWorkDetail } from "@/components/scores/ScorePages";
import { getScoreWork } from "@/data/scores";
import { createPageMetadata } from "@/lib/seo";

const work = getScoreWork("remember-me");

export const metadata = createPageMetadata({
  title: "Remember Me 鋼琴四手聯彈編曲",
  description: "Remember Me 鋼琴四手聯彈編曲作品展示：以複雜節奏呈現原曲人聲歌唱的即興感，並展示三張浮水印樂譜片段。",
  path: "/scores/remember-me",
  alternatePath: "/en/scores/remember-me",
});

export default function RememberMeScorePage() {
  return <ScoreWorkDetail locale="zh-Hant" work={work} />;
}
