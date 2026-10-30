import { KidsTechniqueArticle } from "@/components/lessons/KidsTechniqueArticle";
import { getKidsTechnique } from "@/data/kids-techniques";
import { createPageMetadata } from "@/lib/seo";

const technique = getKidsTechnique("posture");
export const metadata = createPageMetadata({ title: `${technique.title}｜兒童鋼琴技巧`, description: technique.cardDescription, path: "/lessons/kids/posture" });

export default function Page() { return <KidsTechniqueArticle technique={technique} />; }
