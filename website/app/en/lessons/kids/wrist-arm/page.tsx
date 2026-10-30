import { KidsTechniqueArticle } from "@/components/lessons/KidsTechniqueArticle";
import { getKidsTechniqueEn, kidsTechniquesEn } from "@/data/kids-techniques-en";
import { createPageMetadata } from "@/lib/seo";

const technique = getKidsTechniqueEn("wrist-arm");
export const metadata = createPageMetadata({ title: "Coordinating the Wrist and Arm", description: technique.cardDescription, path: "/en/lessons/kids/wrist-arm", locale: "en", alternatePath: "/lessons/kids/wrist-arm" });
export default function Page() { return <KidsTechniqueArticle technique={technique} techniques={kidsTechniquesEn} locale="en" />; }
