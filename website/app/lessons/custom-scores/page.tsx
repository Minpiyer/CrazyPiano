import type { Metadata } from "next";
import Image from "next/image";
import { LessonFaq } from "@/components/lessons/LessonFaq";
import { EditorialCard, LessonFinalCta, LessonHeading, LessonHero } from "@/components/lessons/LessonShared";

export const metadata: Metadata = {
  title: "客製樂譜與改編｜Custom Piano Scores & Arrangements",
  description: "Crazy Piano 客製樂譜與改編：依學生程度調整困難樂譜，或依音源聽寫、整理並編寫適合學習的鋼琴版本。",
};

const adjustmentItems = ["和聲", "伴奏型", "節奏複雜度", "左右手配置", "手部跨度", "音符密度", "技術難度"] as const;
const faq = [
  { question: "一定要有很多基礎才能使用客製樂譜嗎？", answer: "不一定。會先了解目前程度、閱讀能力與想學的曲目，再判斷適合的難度與學習方式。" },
  { question: "可以指定想彈的曲子嗎？", answer: "可以先提供歌曲或音源。是否適合改編、聽寫與製作，仍需要依作品內容與實際需求確認。" },
  { question: "兒童也可以用這種方式學嗎？", answer: "可以。兒童、青少年與成人都能依程度使用；課程仍會把看譜、節奏與技巧放進學習過程。" },
  { question: "會不會只學會一首歌，不會看譜？", answer: "不會只教按哪些琴鍵。樂譜會成為建立閱讀、節奏、左右手協調與音樂理解的教材。" },
  { question: "是不是所有歌曲都能製作？", answer: "不一定。正式安排仍需依歌曲內容、學生程度、需求與可行性確認。" },
] as const;

export default function CustomScoresPage() {
  return (
    <main className="lesson-page lesson-page-custom" id="main-content">
      <LessonHero eyebrow="CUSTOM PIANO SCORES & ARRANGEMENTS／客製樂譜與改編" title={<>選你喜歡的音樂，<br />給你適合的版本。</>} intro="已有樂譜但難度太高，或找不到適合的鋼琴譜，都可以依目前程度、閱讀能力與學習目標重新整理。" core="讓喜歡的音樂成為教材，同時建立看譜、節奏、左右手協調與音樂理解。" image="/images/lessons/custom-example-01-custom.jpg" imageAlt="依學生程度整理的客製鋼琴樂譜預覽" variant="custom" badge={<><strong>CUSTOM SCORE</strong><span>Made for your level</span></>} facts={["困難版 → 客製版", "Listen → Transcribe", "興趣 × 基本功"]} />

      <section className="lesson-section lesson-audience section-pad" id="lesson-overview"><div className="container-wide">
        <LessonHeading index="01" eyebrow="WHO IT'S FOR" title="喜歡的歌，也可以成為你的鋼琴教材。" intro="適合想彈流行、動畫、電影或遊戲音樂，也想兼顧興趣與基本能力的學生。" />
        <div className="lesson-card-grid lesson-card-grid-4"><EditorialCard label="TOO DIFFICULT" title="現有版本太難" tone="orange"><p>技巧、跨度或音符密度超出目前程度。</p></EditorialCard><EditorialCard label="NO SUITABLE SCORE" title="沒有合適的譜" tone="mustard"><p>只有音源，或找不到適合學習的鋼琴版本。</p></EditorialCard><EditorialCard label="MOTIVATION" title="想提高學習動機" tone="burgundy"><p>用真正喜歡的音樂，連結持續練習的理由。</p></EditorialCard><EditorialCard label="FOUNDATION" title="興趣與基礎並行" tone="green"><p>曲目可以自由，看譜、節奏與技巧仍持續建立。</p></EditorialCard></div>
      </div></section>

      <section className="lesson-section custom-adjust section-pad"><div className="container-wide">
        <LessonHeading index="02" eyebrow="HOW I ADAPT" title="保留音樂特色，調整真正影響學習的難度。" intro="不是把大量音符拿掉，而是在目前能掌握的範圍內，重新安排聲音與動作。" inverse />
        <div className="custom-adjust-grid">{adjustmentItems.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div>
      </div></section>

      <section className="lesson-section custom-comparison section-pad"><div className="container-wide">
        <LessonHeading index="03" eyebrow="BEFORE / AFTER" title="選你喜歡的音樂，改成適合你的版本。" intro="保留旋律與音樂特色，依照目前程度調整伴奏、和聲與技術難度。" />
        <div className="score-comparison">
          <figure className="score-preview score-preview-difficult"><div className="score-image"><Image src="/images/lessons/custom-example-01-difficult.jpg" alt="技巧與音符密度較高的困難版鋼琴樂譜局部預覽" fill sizes="(max-width: 900px) 92vw, 46vw" /><span className="score-watermark">PREVIEW</span></div><figcaption><span className="eyebrow">DIFFICULT SCORE</span><h3>困難版</h3><p>節奏、音域、伴奏型與技術要求較複雜。</p></figcaption></figure>
          <div className="score-arrow" aria-hidden="true">→</div>
          <figure className="score-preview score-preview-custom"><div className="score-image"><Image src="/images/lessons/custom-example-01-custom.jpg" alt="依程度調整後的客製版鋼琴樂譜局部預覽" fill sizes="(max-width: 900px) 92vw, 46vw" /><span className="score-watermark">PREVIEW</span></div><figcaption><span className="eyebrow">CUSTOM SCORE</span><h3>客製版</h3><p>保留音樂特色，讓目前程度可以實際學習與完成。</p></figcaption></figure>
        </div>
        <p className="score-preview-note">譜例僅作局部、低解析度教學服務展示，不提供完整樂譜或下載。</p>
      </div></section>

      <section className="lesson-section custom-transcribe section-pad"><div className="container-wide">
        <LessonHeading index="04" eyebrow="TRANSCRIBED SAMPLES" title="找不到合適的譜，也可以從音源開始。" intro="依音源聽寫旋律、和聲與結構，再整理、編寫成適合鋼琴學習的版本。" inverse />
        <ol className="transcribe-flow"><li><span>01</span><strong>LISTEN</strong><em>聆聽音源</em></li><li><span>02</span><strong>TRANSCRIBE</strong><em>聽寫音樂</em></li><li><span>03</span><strong>ARRANGE</strong><em>整理與編寫</em></li><li><span>04</span><strong>PLAY</strong><em>實際學習</em></li></ol>
        <div className="transcribed-note"><p className="eyebrow">TWO SERVICES, ONE GOAL</p><p>無論是調整既有樂譜，或由音源重新聽寫與編寫，目標都是讓學生有一份真正能讀、能學、也願意繼續彈的版本。</p></div>
      </div></section>

      <section className="lesson-section custom-value section-pad"><div className="container-wide">
        <LessonHeading index="05" eyebrow="WHY IT HELPS" title="不是只完成一首歌，也在喜歡的音樂裡建立能力。" />
        <div className="lesson-card-grid lesson-card-grid-5"><EditorialCard label="01" title="學習動機" tone="mustard"><p>想彈的音樂，讓練習有明確理由。</p></EditorialCard><EditorialCard label="02" title="看譜能力" tone="orange"><p>用可掌握的版本累積閱讀經驗。</p></EditorialCard><EditorialCard label="03" title="節奏與拍感" tone="paper"><p>在熟悉的音樂中理解節奏組織。</p></EditorialCard><EditorialCard label="04" title="左右手協調" tone="burgundy"><p>依程度安排可完成的雙手配置。</p></EditorialCard><EditorialCard label="05" title="音樂理解" tone="green"><p>看見旋律、和聲與結構如何合作。</p></EditorialCard></div>
      </div></section>

      <section className="lesson-section lesson-faq-section section-pad"><div className="container-wide"><LessonHeading index="06" eyebrow="FAQ" title="客製樂譜常見問題。" /><LessonFaq items={faq} /></div></section>
      <LessonFinalCta title={<>你先告訴我想彈什麼，<br />我再整理適合的方向。</>}><p>提供歌曲、音源、目前程度與學習目標，再一起確認適合調整既有樂譜，或由音源重新聽寫與編寫。</p></LessonFinalCta>
    </main>
  );
}
