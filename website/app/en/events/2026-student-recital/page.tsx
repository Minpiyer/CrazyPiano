import { StudentRecital2026 } from "@/components/events/EventPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "2026 Dr. Hsu Student Piano Recital",
  description: "A photo story from Dr. Hsu's student piano recital at 雅什藝文 on November 8, 2026—a stage experience shared by students, teacher, and families.",
  path: "/en/events/2026-student-recital",
  locale: "en",
  alternatePath: "/events/2026-student-recital",
});

export default function EnglishStudentRecitalPage() {
  return <StudentRecital2026 locale="en" />;
}
