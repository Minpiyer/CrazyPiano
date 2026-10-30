import { KidsTechniqueArticle } from "@/components/lessons/KidsTechniqueArticle";
import { getKidsTechnique } from "@/data/kids-techniques";
import { createPageMetadata } from "@/lib/seo";

const technique = getKidsTechnique("wrist-arm");
export const metadata = createPageMetadata({ title: `${technique.title}｜兒童鋼琴技巧`, description: technique.cardDescription, path: "/lessons/kids/wrist-arm" });

export default function Page() { return <KidsTechniqueArticle technique={technique} />; }
