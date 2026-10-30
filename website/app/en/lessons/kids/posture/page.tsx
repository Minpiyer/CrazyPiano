import { KidsTechniqueArticle } from "@/components/lessons/KidsTechniqueArticle";
import { getKidsTechniqueEn, kidsTechniquesEn } from "@/data/kids-techniques-en";
import { createPageMetadata } from "@/lib/seo";

const technique = getKidsTechniqueEn("posture");
export const metadata = createPageMetadata({ title: "Balanced Piano Posture for Children", description: technique.cardDescription, path: "/en/lessons/kids/posture", locale: "en", alternatePath: "/lessons/kids/posture" });
export default function Page() { return <KidsTechniqueArticle technique={technique} techniques={kidsTechniquesEn} locale="en" />; }
