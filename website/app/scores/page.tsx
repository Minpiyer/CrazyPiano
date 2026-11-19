import { ScoresOverview } from "@/components/scores/ScorePages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "樂譜作品｜徐家超鋼琴編曲作品集",
  description: "瀏覽徐家超的鋼琴四手聯彈與客製編曲作品，了解旋律、織度、難度與合奏聲部如何重新配置。網站僅展示少量浮水印預覽，不提供完整樂譜下載或販售。",
  path: "/scores",
  alternatePath: "/en/scores",
});

export default function ScoresPage() {
  return <ScoresOverview locale="zh-Hant" />;
}
