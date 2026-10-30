import { KidsTechniqueArticle } from "@/components/lessons/KidsTechniqueArticle";
import { getKidsTechniqueEn, kidsTechniquesEn } from "@/data/kids-techniques-en";
import { createPageMetadata } from "@/lib/seo";

const technique = getKidsTechniqueEn("power");
export const metadata = createPageMetadata({ title: "Using Power at the Piano", description: technique.cardDescription, path: "/en/lessons/kids/power", locale: "en", alternatePath: "/lessons/kids/power" });
export default function Page() { return <KidsTechniqueArticle technique={technique} techniques={kidsTechniquesEn} locale="en" />; }
