import { ScoreWorkDetail } from "@/components/scores/ScorePages";
import { getScoreWork } from "@/data/scores";
import { createPageMetadata } from "@/lib/seo";

const work = getScoreWork("prince-ali");

export const metadata = createPageMetadata({
  title: "Prince Ali 鋼琴四手聯彈編曲",
  description: "Prince Ali 鋼琴四手聯彈編曲作品展示：查看第一部、第二部的聲部分工、編曲方向與少量浮水印樂譜預覽。",
  path: "/scores/prince-ali",
  alternatePath: "/en/scores/prince-ali",
});

export default function PrinceAliScorePage() {
  return <ScoreWorkDetail locale="zh-Hant" work={work} />;
}
