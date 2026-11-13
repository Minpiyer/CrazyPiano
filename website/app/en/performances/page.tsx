import { PerformancesOverview } from "@/components/events/EventPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Performances",
  description: "Explore Crazy Piano student recitals, personal performances, music events, and special projects—moments when learning meets the stage.",
  path: "/en/performances",
  locale: "en",
  alternatePath: "/performances",
});

export default function EnglishPerformancesPage() {
  return <PerformancesOverview locale="en" />;
}
