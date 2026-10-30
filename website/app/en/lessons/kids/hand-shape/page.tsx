import { KidsTechniqueArticle } from "@/components/lessons/KidsTechniqueArticle";
import { getKidsTechniqueEn, kidsTechniquesEn } from "@/data/kids-techniques-en";
import { createPageMetadata } from "@/lib/seo";

const technique = getKidsTechniqueEn("hand-shape");
export const metadata = createPageMetadata({ title: "Natural Piano Hand Shape for Children", description: technique.cardDescription, path: "/en/lessons/kids/hand-shape", locale: "en", alternatePath: "/lessons/kids/hand-shape" });
export default function Page() { return <KidsTechniqueArticle technique={technique} techniques={kidsTechniquesEn} locale="en" />; }
