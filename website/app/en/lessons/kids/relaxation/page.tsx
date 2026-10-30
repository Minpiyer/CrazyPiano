import { KidsTechniqueArticle } from "@/components/lessons/KidsTechniqueArticle";
import { getKidsTechniqueEn, kidsTechniquesEn } from "@/data/kids-techniques-en";
import { createPageMetadata } from "@/lib/seo";

const technique = getKidsTechniqueEn("relaxation");
export const metadata = createPageMetadata({ title: "Avoiding Excess Tension at the Piano", description: technique.cardDescription, path: "/en/lessons/kids/relaxation", locale: "en", alternatePath: "/lessons/kids/relaxation" });
export default function Page() { return <KidsTechniqueArticle technique={technique} techniques={kidsTechniquesEn} locale="en" />; }
