import { StudentRecital2026 } from "@/components/events/EventPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "2026 徐家超學生鋼琴發表會｜活動紀錄",
  description: "2026 年 11 月 8 日於雅什藝文舉行的徐家超學生鋼琴發表會。精選照片記錄學生、老師與家庭共同完成的舞台經驗。",
  path: "/events/2026-student-recital",
  alternatePath: "/en/events/2026-student-recital",
});

export default function StudentRecitalPage() {
  return <StudentRecital2026 locale="zh-Hant" />;
}
