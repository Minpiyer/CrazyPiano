import { PerformancesOverview } from "@/components/events/EventPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "展演活動",
  description: "Crazy Piano 瘋鋼琴的學生發表會、個人演出、音樂活動與特別企劃紀錄，收藏每一次與鋼琴相關的舞台時刻。",
  path: "/performances",
  alternatePath: "/en/performances",
});

export default function PerformancesPage() {
  return <PerformancesOverview locale="zh-Hant" />;
}
