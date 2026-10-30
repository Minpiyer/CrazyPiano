import { KidsTechniqueArticle } from "@/components/lessons/KidsTechniqueArticle";
import { getKidsTechniqueEn, kidsTechniquesEn } from "@/data/kids-techniques-en";
import { createPageMetadata } from "@/lib/seo";

const technique = getKidsTechniqueEn("finger-action");
export const metadata = createPageMetadata({ title: "Finger Action at the Piano", description: technique.cardDescription, path: "/en/lessons/kids/finger-action", locale: "en", alternatePath: "/lessons/kids/finger-action" });
export default function Page() { return <KidsTechniqueArticle technique={technique} techniques={kidsTechniquesEn} locale="en" />; }
