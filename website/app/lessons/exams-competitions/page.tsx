import type { Metadata } from "next";
import { LessonFaq } from "@/components/lessons/LessonFaq";
import { EditorialCard, LessonFinalCta, LessonHeading, LessonHero, LessonImageBlock } from "@/components/lessons/LessonShared";

export const metadata: Metadata = {
  title: "檢定與比賽｜Exams & Competitions",
  description: "Crazy Piano 檢定與比賽鋼琴課，具 ABRSM 輔導與 Grade 8 指導經驗，依曲目、規則、時間與學生程度安排準備方向。",
};

const process = [
  ["SCORE", "樂譜", "先讀懂譜面與作品資訊"], ["RHYTHM", "節奏", "建立準確而穩定的拍感"], ["TECHNIQUE", "技巧", "處理作品真正需要的動作"],
  ["PHRASING", "樂句", "讓音樂有方向與呼吸"], ["TONE", "音色", "用聲音呈現層次與風格"], ["MUSICAL EXPRESSION", "音樂表現", "把理解轉化成完整演奏"],
] as const;
const faq = [
  { question: "可以準備 ABRSM 嗎？", answer: "可以。老師具有 ABRSM 輔導經驗，會依考試要求、曲目與學生目前程度安排準備。" },
  { question: "Grade 8 可以輔導嗎？", answer: "老師曾輔導學生至 Grade 8。實際課程仍會先確認學生目前程度、曲目與準備狀況。" },
  { question: "已經選好曲目才來上課可以嗎？", answer: "可以。會先了解曲目、規則、準備時間與目前狀況，再整理真正需要優先處理的內容。" },
  { question: "比賽前多久開始準備比較好？", answer: "沒有固定答案，需要依曲目難度、規則、學生程度與目前完成度判斷，建議先提供相關資訊再確認。" },
  { question: "除了彈對音，會處理音樂表現嗎？", answer: "會。課程也會處理節奏穩定度、樂句、音色、作品風格與完整演奏。" },
  { question: "可以用線上課準備檢定嗎？", answer: "可以依學生程度與目標評估適合的線上準備方式，課程內容仍以實際檢定要求為準。" },
] as const;

export default function ExamsCompetitionsPage() {
  return (
    <main className="lesson-page lesson-page-exams" id="main-content">
      <LessonHero eyebrow="EXAMS & COMPETITIONS／檢定與比賽" title={<>目標不同，<br />準備的方法也不同。</>} intro="依照不同檢定、比賽、曲目與準備時間，重新安排技術、音樂表現與練習方向。" core="不是只把曲子彈完，而是依照不同檢定與比賽的要求，設定真正需要完成的目標。" image="/images/lessons/exams-hero-teacher.png" imageAlt="徐老師在鋼琴前演奏與示範" variant="exams" badge={<><strong>ABRSM</strong><span>Grade 8 coaching</span></>} facts={["ABRSM 輔導經驗", "比賽／檢定準備", "演奏者 × 評審視角"]} />

      <section className="lesson-section lesson-audience section-pad" id="lesson-overview"><div className="container-wide">
        <LessonHeading index="01" eyebrow="WHAT ARE YOU PREPARING FOR" title="先釐清這次真正要準備什麼。" intro="不同制度、舞台與時間條件，需要不同的練習配置。" />
        <div className="lesson-card-grid lesson-card-grid-4"><EditorialCard label="ABRSM" title="ABRSM" tone="mustard"><p>依級數、曲目與考試要求安排準備。</p></EditorialCard><EditorialCard label="EXAMS" title="檢定準備" tone="orange"><p>從曲目理解到穩定完成，逐項整理目標。</p></EditorialCard><EditorialCard label="COMPETITIONS" title="比賽準備" tone="burgundy"><p>依規則、時間限制與評分方向調整。</p></EditorialCard><EditorialCard label="STAGE" title="舞台／演奏準備" tone="green"><p>練習完整演奏、銜接與臨場應對。</p></EditorialCard></div>
      </div></section>

      <section className="lesson-section exams-abrsm section-pad"><div className="container-wide">
        <LessonHeading index="02" eyebrow="ABRSM" title={<>理解音樂，<br />再完成考試要求。</>} intro="曾輔導學生至 Grade 8。準備不只追求分數，而是把樂譜、技巧與音樂表現整合成完整演奏。" inverse />
        <div className="abrsm-ledger"><div><span>01</span><strong>曲目準備</strong></div><div><span>02</span><strong>技巧</strong></div><div><span>03</span><strong>節奏與穩定度</strong></div><div><span>04</span><strong>樂譜理解</strong></div><div><span>05</span><strong>樂句與風格</strong></div><div><span>06</span><strong>音樂表現</strong></div></div>
      </div></section>

      <section className="lesson-section exams-process section-pad"><div className="container-wide">
        <LessonHeading index="03" eyebrow="SCORE → MUSIC" title="從譜面，走向真正的演奏。" intro="每一層都互相影響；不是完成一張清單，而是讓音樂逐步成形。" />
        <ol className="music-process">{process.map(([en, zh, note], index) => <li key={en}><span className="process-index">0{index + 1}</span><strong>{en}</strong><h3>{zh}</h3><p>{note}</p></li>)}</ol>
      </div></section>

      <section className="lesson-section competition-prep section-pad"><div className="container-wide">
        <LessonHeading index="04" eyebrow="COMPETITION PREPARATION" title="不是所有比賽，都使用同一套準備方式。" intro="依比賽規則、指定或自選曲目、時間限制、學生程度與評分方向安排練習。" inverse />
        <div className="target-board"><span>RULES</span><span>REPERTOIRE</span><span>TIME LIMIT</span><span>CURRENT LEVEL</span><span>JUDGING FOCUS</span><strong>TARGET</strong></div>
      </div></section>

      <section className="lesson-section stage-prep section-pad"><div className="container-wide">
        <LessonHeading index="05" eyebrow="STAGE & PERFORMANCE" title="上台前，練習的不只是音符。" />
        <div className="lesson-card-grid lesson-card-grid-3"><EditorialCard label="FULL RUN" title="完整演奏" tone="orange"><p>建立從開始到結束的穩定度與注意力。</p></EditorialCard><EditorialCard label="RECOVER" title="錯誤後繼續" tone="mustard"><p>練習不因一個失誤停下，維持音樂方向。</p></EditorialCard><EditorialCard label="FINAL CHECK" title="上台前整理" tone="green"><p>處理曲目銜接、節奏、聲音與最後準備。</p></EditorialCard></div>
      </div></section>

      <section className="lesson-section judge-experience section-pad"><div className="container-wide">
        <LessonImageBlock image="/images/gallery/music-activity-teacher-stage-talk.jpg" alt="徐老師在音樂活動舞台上分享教學與演奏經驗" label="06 — TEACHER EXPERIENCE" title={<>從演奏、教學與活動經驗<br />理解準備方向。</>} reverse>
          <p>除了教學，也曾參與比賽或檢定相關評審工作。這張照片呈現音樂活動中的分享與交流；準備檢定與比賽時，則會結合演奏、教學與既有評審經驗，協助學生理解評分要求與舞台呈現。</p>
        </LessonImageBlock>
      </div></section>

      <section className="lesson-section lesson-faq-section section-pad"><div className="container-wide"><LessonHeading index="07" eyebrow="FAQ" title="關於檢定與比賽準備。" /><LessonFaq items={faq} /></div></section>
      <LessonFinalCta title={<>把目標拆清楚，<br />再一步一步準備。</>}><p>提供檢定制度或比賽規則、曲目、目前程度與時間，我們先一起確認真正需要完成的目標。</p></LessonFinalCta>
    </main>
  );
}
