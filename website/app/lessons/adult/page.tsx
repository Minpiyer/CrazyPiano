import type { Metadata } from "next";
import Link from "next/link";
import { LessonFaq } from "@/components/lessons/LessonFaq";
import { EditorialCard, LessonChecklist, LessonFinalCta, LessonHeading, LessonHero, LessonImageBlock } from "@/components/lessons/LessonShared";
import { routes } from "@/data/site";

export const metadata: Metadata = {
  title: "成人鋼琴課｜Adult Piano Lessons",
  description: "Crazy Piano 成人鋼琴課，依目前程度、學習經驗與真正想彈的音樂安排。零基礎、重新開始、古典與流行皆可。",
};

const beginnerSkills = ["五線譜", "高音譜表與低音譜表", "大譜表 Grand Staff", "節奏與拍感", "基礎視譜", "正確坐姿", "自然手型", "手指與手腕的基本運用"] as const;
const reviewPoints = ["過去學習經驗", "現在程度", "技巧狀況", "視譜狀況", "想彈的音樂", "學習目標"] as const;
const faq = [
  { question: "完全不會彈也可以嗎？", answer: "可以。零基礎會從五線譜、節奏、坐姿、手型與基本技巧開始，但內容與說明會以成人的理解與目標安排。" },
  { question: "很久沒彈了，可以重新開始嗎？", answer: "可以。會先了解以前的學習經驗與目前狀況，再從真正需要的位置重新開始，不必強迫回到第一本教材。" },
  { question: "一定要學古典音樂嗎？", answer: "不一定。古典、流行、電影、動畫或遊戲音樂都能依興趣安排；視譜、節奏與基本技巧仍會持續建立。" },
  { question: "可以只學我喜歡的歌曲嗎？", answer: "可以從喜歡的歌曲開始規劃。若現有版本太難，也能再評估是否需要客製樂譜與改編。" },
  { question: "沒有很多時間練習可以嗎？", answer: "可以先依目前生活節奏設定實際可行的練習方向，重點是知道每次練習要處理什麼。" },
  { question: "成人可以線上上課嗎？", answer: "可以。會依目前程度、曲目與學習需求，調整適合線上進行的課程方式。" },
] as const;

export default function AdultPianoLessonsPage() {
  return (
    <main className="lesson-page lesson-page-adult" id="main-content">
      <LessonHero eyebrow="ADULT PIANO LESSONS／成人鋼琴課" title={<>從你真正想彈的<br />音樂開始。</>} intro="不論零基礎、重新開始，或只是想完成一直很想彈的一首曲子，課程都可以依目前程度重新規劃。" core="成人學鋼琴，不需要重新走一條制式的路。課程可以從你現在的位置，以及你真正想彈的音樂開始。" image="/images/lessons/adult-piano-teacher.png" imageAlt="徐老師演奏鋼琴" variant="adult" badge={<><strong>START HERE</strong><span>從現在的位置</span></>} facts={["Beginner friendly", "Classical + Pop", "個人化學習路線"]} />

      <section className="lesson-section lesson-audience section-pad" id="lesson-overview"><div className="container-wide">
        <LessonHeading index="01" eyebrow="WHO IT'S FOR" title="不同背景，都可以找到自己的起點。" intro="成人學生的經驗差異很大；課程先理解你現在在哪裡，再決定下一步。" />
        <div className="lesson-card-grid lesson-card-grid-5">
          <EditorialCard label="BEGINNER" title="完全初學" tone="mustard"><p>第一次接觸樂譜與鋼琴，也能有系統地開始。</p></EditorialCard>
          <EditorialCard label="RETURN" title="重拾鋼琴" tone="orange"><p>整理過去經驗，從適合的位置重新建立能力。</p></EditorialCard>
          <EditorialCard label="CLASSICAL" title="古典音樂" tone="paper"><p>從作品、技巧與音樂理解深入學習。</p></EditorialCard>
          <EditorialCard label="POP" title="流行／當代" tone="burgundy"><p>把喜歡的歌曲放進真正可持續的學習路線。</p></EditorialCard>
          <EditorialCard label="PLAY WHAT YOU LOVE" title="想彈喜歡的歌" tone="green"><p>由曲目出發，同時建立看譜與技巧。</p></EditorialCard>
        </div>
      </div></section>

      <section className="lesson-section lesson-score section-pad"><div className="container-wide">
        <LessonHeading index="02" eyebrow="IF YOU'RE STARTING FROM ZERO" title="零基礎，也能用成熟而清楚的方式開始。" intro="基本能力仍然重要，但不會把成人課做成兒童教材。" />
        <LessonChecklist items={beginnerSkills} columns={2} />
      </div></section>

      <section className="lesson-section adult-returning section-pad"><div className="container-wide">
        <LessonHeading index="03" eyebrow="RETURNING PLAYER" title="以前學過，不代表一定要回到第一冊。" intro="先重新看見你已經會的、現在卡住的，以及真正想完成的目標。" inverse />
        <div className="lesson-review-grid">{reviewPoints.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div>
        <p className="lesson-pull-quote lesson-pull-quote-light">ASSESS → RECONNECT → MOVE FORWARD<br /><span>了解現在，再決定從哪裡繼續。</span></p>
      </div></section>

      <section className="lesson-section lesson-method section-pad"><div className="container-wide">
        <LessonImageBlock image="/images/lessons/adult-piano-teacher.png" alt="徐老師在鋼琴前示範演奏" label="04 — PLAY WHAT YOU LOVE" title={<>「我就是想彈這首。」<br />這也可以是很好的起點。</>}>
          <p>依目前程度、曲目難度、技巧需求與視譜能力安排學習方式。若現有版本超出目前程度，也能評估客製樂譜與改編。</p>
          <Link className="text-link" href={routes.custom}>了解客製樂譜與改編 →</Link>
        </LessonImageBlock>
      </div></section>

      <section className="lesson-section adult-repertoire section-pad"><div className="container-wide">
        <LessonHeading index="05" eyebrow="CLASSICAL + POP" title="音樂風格可以不同，學習仍然有方向。" intro="依興趣安排曲目，技巧、視譜與音樂理解則跟著實際需要加入。" />
        <div className="repertoire-strip" aria-label="可依興趣安排的音樂風格"><span>CLASSICAL</span><span>POP</span><span>FILM MUSIC</span><span>ANIME / GAME</span><span>CONTEMPORARY</span></div>
      </div></section>

      <section className="lesson-section adult-method section-pad"><div className="container-wide">
        <LessonHeading index="06" eyebrow="HOW WE LEARN" title="不是固定課表，是清楚而個人化的進度。" inverse />
        <div className="lesson-card-grid lesson-card-grid-3"><EditorialCard label="01" title="依目前程度調整" tone="orange"><p>先確認能力與需求，再決定學習起點。</p></EditorialCard><EditorialCard label="02" title="技巧與音樂性並重" tone="mustard"><p>不只彈對音，也理解節奏、聲音與樂句。</p></EditorialCard><EditorialCard label="03" title="需要時加入基礎" tone="paper"><p>依曲目加入樂理、視譜與技巧，不為了進度而塞滿內容。</p></EditorialCard></div>
      </div></section>

      <section className="lesson-section lesson-faq-section section-pad"><div className="container-wide"><LessonHeading index="07" eyebrow="FAQ" title="成人學琴，常見的問題。" /><LessonFaq items={faq} /></div></section>
      <LessonFinalCta title={<>從你真正想彈的<br />那一首開始。</>}><p>不需要先把所有基礎準備好。先告訴我你的經驗與目標，再一起找到適合的起點。</p></LessonFinalCta>
    </main>
  );
}
