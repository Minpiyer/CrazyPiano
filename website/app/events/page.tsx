import { EventsOverview } from "@/components/events/EventPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "鋼琴發表會活動紀錄",
  description: "Crazy Piano 瘋鋼琴歷年學生鋼琴發表會與活動紀錄。看見學生、老師與家庭一起完成的舞台經驗。",
  path: "/events",
  alternatePath: "/en/events",
});

export default function EventsPage() {
  return <EventsOverview locale="zh-Hant" />;
}
