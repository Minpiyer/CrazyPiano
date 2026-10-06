import type { Metadata } from "next";
import { LessonFaq } from "@/components/lessons/LessonFaq";
import { EditorialCard, LessonChecklist, LessonFinalCta, LessonHeading, LessonHero, LessonImageBlock } from "@/components/lessons/LessonShared";

export const metadata: Metadata = {
  title: "兒童鋼琴課｜Kids Piano Lessons",
  description: "Crazy Piano 兒童鋼琴課，線上課建議 7 歲以上。從視譜、節奏、正確姿勢與基本技巧，建立看得懂、彈得對的基礎。",
};

const scoreSkills = ["五線譜的基本結構", "音符位置與音名", "高音譜表", "低音譜表", "大譜表 Grand Staff", "高音與低音概念", "樂譜與鍵盤對應", "音階的基本組成", "基礎節奏", "基礎視譜能力"] as const;
const techniqueSkills = ["正確坐姿", "自然手型", "手指落鍵與抬指", "手指力量的使用", "手腕如何配合", "避免過度僵硬"] as const;
const materials = ["Faber Piano Adventures", "Hanon", "鋼琴小精靈", "鋼琴森林", "其他依年齡與程度安排的教材"] as const;
const faq = [
  { question: "線上兒童課幾歲開始比較適合？", answer: "線上課建議 7 歲以上。實際仍會依孩子的專注力、閱讀能力與配合情況判斷。" },
  { question: "完全沒有學過也可以嗎？", answer: "可以。課程會從五線譜、鍵盤位置、節奏與自然的彈奏姿勢開始，逐步建立真正能理解與閱讀樂譜的能力。" },
  { question: "每位學生都用同一套教材嗎？", answer: "不會。教材會依年齡、程度、理解速度與進度調整，可能搭配不同教材與學生喜歡的曲目。" },
  { question: "會不會只背音名，不會真正看譜？", answer: "教學目標不是只背音名，而是讓學生能理解音符、節奏與鍵盤位置的關係，逐步建立獨立視譜能力。" },
  { question: "兒童也可以學喜歡的歌曲嗎？", answer: "可以。在視譜、節奏與基本技巧持續建立的前提下，也能依程度加入孩子真正有興趣的音樂。" },
] as const;

export default function KidsPianoLessonsPage() {
  return (
    <main className="lesson-page lesson-page-kids" id="main-content">
      <LessonHero eyebrow="KIDS PIANO LESSONS／兒童鋼琴課" title={<>先看得懂，<br />再彈得更自由。</>} intro="從五線譜、節奏與正確姿勢開始，讓孩子不只記住琴鍵，而是逐步理解自己正在彈什麼。" core="先建立看得懂、彈得對的基礎，再慢慢走向真正喜歡的音樂。" image="/images/lessons/kids-piano-student-2024.jpg" imageAlt="兒童學生在舞台上專注演奏鋼琴" variant="kids" badge={<><strong>ONLINE</strong><span>建議 7 歲以上</span></>} facts={["線上課建議 7 歲以上", "視譜 × 節奏", "姿勢 × 基本技巧"]} />

      <section className="lesson-section lesson-audience section-pad" id="lesson-overview"><div className="container-wide">
        <LessonHeading index="01" eyebrow="WHO IT'S FOR" title="適合正在建立第一套音樂語言的孩子。" intro="不急著背很多曲子，先讓眼睛、耳朵、手與身體知道如何一起工作。" />
        <div className="lesson-card-grid lesson-card-grid-3">
          <EditorialCard label="START" title="第一次學鋼琴" tone="orange"><p>從鍵盤、音符與節奏開始，建立清楚而安心的第一步。</p></EditorialCard>
          <EditorialCard label="ONLINE 7+" title="線上學習" tone="mustard"><p>適合能跟著指示操作、開始具備閱讀能力的 7 歲以上兒童。</p></EditorialCard>
          <EditorialCard label="FOUNDATION" title="重新整理基礎" tone="green"><p>已有學習經驗，也可以針對視譜、姿勢或節奏重新建立穩定基礎。</p></EditorialCard>
        </div>
      </div></section>

      <section className="lesson-section lesson-score section-pad"><div className="container-wide">
        <LessonHeading index="02" eyebrow="READ THE SCORE" title={<>從五線譜，走到<br />真正能自己讀譜。</>} intro="不是只背音名，而是理解樂譜上的符號如何變成節奏、聲音與琴鍵。" />
        <LessonChecklist items={scoreSkills} columns={2} />
        <p className="lesson-pull-quote">SEE → UNDERSTAND → PLAY<br /><span>看見、理解，再彈出來。</span></p>
      </div></section>

      <section className="lesson-section lesson-technique section-pad"><div className="container-wide">
        <LessonHeading index="03" eyebrow="POSTURE & TECHNIQUE" title="從第一堂課，就練習自然地使用身體。" intro="好的姿勢不是固定不動，而是讓手指、手腕與身體能有效率地支持音樂。" inverse />
        <div className="lesson-card-grid lesson-card-grid-3">
          {techniqueSkills.map((skill, index) => <EditorialCard key={skill} label={`0${index + 1}`} title={skill} tone={index % 3 === 0 ? "orange" : index % 3 === 1 ? "paper" : "mustard"}><p>{index < 2 ? "從觀察與調整開始，建立可持續的彈奏方式。" : "配合曲目與練習，避免用力過度或只靠手指硬撐。"}</p></EditorialCard>)}
        </div>
      </div></section>

      <section className="lesson-section lesson-materials section-pad"><div className="container-wide">
        <LessonHeading index="04" eyebrow="MATERIALS" title="教材是工具，不是每個人都要走同一條路。" intro="會依學生年齡、程度、理解速度與進度安排，不把所有孩子限制在完全相同的教材與速度。" />
        <div className="lesson-material-list">{materials.map((material, index) => <div key={material}><span>{String(index + 1).padStart(2, "0")}</span><strong>{material}</strong></div>)}</div>
      </div></section>

      <section className="lesson-section lesson-method section-pad"><div className="container-wide">
        <LessonImageBlock image="/images/lessons/kids-piano-student-2024.jpg" alt="兒童學生專注彈奏鋼琴" label="05 — HOW WE LEARN" title={<>視譜、節奏與技巧，<br />一起慢慢長出來。</>} reverse>
          <p>每堂課會依孩子當下的理解與練習狀況調整。視譜、節奏與基本技巧彼此配合，不用背誦或反覆模仿取代理解。</p>
          <ul className="lesson-inline-list"><li>依理解速度調整</li><li>清楚的練習下一步</li><li>基礎與興趣並行</li></ul>
        </LessonImageBlock>
      </div></section>

      <section className="lesson-section lesson-faq-section section-pad"><div className="container-wide"><LessonHeading index="06" eyebrow="FAQ" title="家長常問的幾件事。" /><LessonFaq items={faq} /></div></section>
      <LessonFinalCta title={<>從孩子看得懂的<br />第一個音符開始。</>}><p>告訴我孩子的年齡、目前經驗與喜歡的音樂，我們先一起確認適合的開始方式。</p></LessonFinalCta>
    </main>
  );
}
