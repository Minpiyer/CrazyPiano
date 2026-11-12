import { EventsOverview } from "@/components/events/EventPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Piano Recitals & Events",
  description: "Explore Crazy Piano student recitals and event stories—stage experiences shaped together by students, teacher, and families.",
  path: "/en/events",
  locale: "en",
  alternatePath: "/events",
});

export default function EnglishEventsPage() {
  return <EventsOverview locale="en" />;
}
