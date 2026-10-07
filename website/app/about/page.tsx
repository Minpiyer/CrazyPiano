import type { Metadata } from "next";
import Image from "next/image";
import { EditorialCta, EditorialHeading, EditorialHero } from "@/components/editorial/EditorialShared";

export const metadata: Metadata = {
  title: "關於徐老師｜About",
  description: "認識 Crazy Piano 徐老師的鋼琴教學理念、專業背景與個人化教學方式：基礎要建立，學音樂的路線可以不同。",
};

const foundations = ["視譜能力", "節奏", "手型與身體使用", "技巧", "音樂理解"] as const;
const flexiblePaths = ["學習曲目", "教材", "古典／流行比例", "檢定與比賽目標", "客製歌曲", "課程進度與方向"] as const;
const studentPaths = [
  ["CHILDREN", "兒童", "從閱讀、節奏與自然的身體使用，建立看得懂也彈得對的基礎。"],
  ["ADULTS", "成人", "從現在的經驗與真正想彈的音樂開始，不必重走同一條制式路線。"],
  ["EXAMS & COMPETITIONS", "檢定與比賽", "依實際制度、曲目與準備時間，整理技術、音樂表現與舞台目標。"],
  ["CUSTOM SCORES", "客製樂譜與改編", "讓喜歡的歌曲成為教材，同時建立視譜、節奏與演奏能力。"],
] as const;

export default function AboutPage() {
  return (
    <main id="main-content" className="editorial-page about-page">
      <EditorialHero
        variant="about"
        eyebrow="ABOUT CRAZY PIANO／關於我"
        title={<>基本功有標準，<br />學音樂不用只有一條路。</>}
        intro="看譜能力是我不會放掉的基礎。至於你想彈古典、流行、準備檢定，或只是很想完成某一首歌，課程可以跟著你的目標改變。"
        quote="看懂音樂，彈你想彈的。"
        image="/images/about/about-teacher-piano-portrait.png"
        imageAlt="徐老師在鋼琴前演奏"
        badge={<><strong>TEACHING</strong><span>SINCE 2007</span></>}
      />

      <section className="editorial-section about-philosophy section-pad">
        <div className="container-wide">
          <EditorialHeading index="01" eyebrow="TEACHING PHILOSOPHY" title={<>看懂音樂，<br />彈你想彈的。</>} intro={<p>Crazy Piano 不是拒絕教材，也不是沒有方向地自由學。真正不變的是音樂基礎；可以改變的是走向目標的路線。</p>} />
          <div className="philosophy-board">
            <article className="philosophy-column philosophy-fixed"><span className="eyebrow">THE FOUNDATION／不變的基礎</span><h3>這些能力，會一直建立。</h3><ul>{foundations.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul></article>
            <div className="philosophy-core" aria-label="核心理念"><strong>基礎要建立</strong><span>路線可以不同</span></div>
            <article className="philosophy-column philosophy-flexible"><span className="eyebrow">YOUR PATH／可以改變的路線</span><h3>跟著目標與興趣調整。</h3><ul>{flexiblePaths.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul></article>
          </div>
          <p className="about-tool-note">教材是工具，<br /><span>不是課程本身的目的。</span></p>
        </div>
      </section>

      <section className="editorial-section about-background section-pad">
        <div className="container-wide">
          <EditorialHeading index="02" eyebrow="ABOUT THE TEACHER" title="完整的訓練，放進真正能使用的教學裡。" intro={<p>專業背景不是要讓課程變得嚴肅，而是能更準確地看見學生正在遇到什麼，以及下一步需要什麼。</p>} inverse />
          <div className="background-layout">
            <div className="degree-panel"><span>DOCTOR OF</span><strong>MUSICAL<br />ARTS</strong><p>Piano major<br />Classical piano background</p></div>
            <dl className="credential-ledger">
              <div><dt>01／TEACHING</dt><dd>Teaching since 2007</dd></div>
              <div><dt>02／REPERTOIRE</dt><dd>Classical／Pop</dd></div>
              <div><dt>03／COACHING</dt><dd>ABRSM coaching experience<br />曾輔導學生至 Grade 8</dd></div>
              <div><dt>04／JUDGING</dt><dd>比賽與檢定相關評審經驗</dd></div>
              <div><dt>05／SCORE WORK</dt><dd>Custom arrangements<br />Transcription／Score writing</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="editorial-section about-why section-pad">
        <div className="about-why-grid container-wide">
          <div><p className="eyebrow">03 — WHY I TEACH THIS WAY</p><h2>知道自己正在做什麼，<br />才更容易一直走下去。</h2></div>
          <div className="about-why-copy"><p>長期教學後，我發現學生真正能持續學習，通常不是因為每個人都走同一套教材，而是因為他有基本能力、知道自己正在做什麼，也能接觸真正喜歡的音樂。</p><p>所以課程會依學生的年齡、程度、經驗、目標與興趣調整。教材仍然會使用，但它服務的是學習，不是反過來限制學生。</p><blockquote>有基本能力，也保留喜歡音樂的理由。</blockquote></div>
        </div>
      </section>

      <section className="editorial-section about-action section-pad" data-photo-permission="Public use permission required before production launch">
        <div className="about-action-grid container-wide">
          <div className="about-action-photo"><Image src="/images/about/about-teaching-in-action-piano-cajon.jpg" alt="徐老師彈鋼琴，學生以木箱鼓一起合奏" fill sizes="(max-width: 900px) 92vw, 52vw" /></div>
          <div className="about-action-copy"><p className="eyebrow">04 — TEACHING IN ACTION</p><h2>不只是上課，<br />也一起做音樂。</h2><p>課堂有時不只是老師坐在旁邊聽學生彈，也會透過合奏、節奏互動與實際示範，讓學生更直接理解拍感、聲音與彼此聆聽。</p><blockquote>Music is meant to be shared.</blockquote><p className="permission-note">Public use permission required before production launch.</p></div>
        </div>
      </section>

      <section className="editorial-section about-paths section-pad">
        <div className="container-wide">
          <EditorialHeading index="05" eyebrow="DIFFERENT STUDENTS, DIFFERENT PATHS" title="學生不同，適合的路也不同。" intro={<p>教學範圍相同，但起點、曲目與完成目標可以很不一樣。</p>} />
          <div className="about-path-grid">{studentPaths.map(([label, title, body], index) => <article className={`about-path-card about-path-${index + 1}`} key={label}><span>{label}</span><h3>{title}</h3><p>{body}</p><strong aria-hidden="true">↗</strong></article>)}</div>
        </div>
      </section>

      <section className="editorial-section about-approachable section-pad">
        <div className="about-approachable-grid container-wide"><p className="approachable-number" aria-hidden="true">06</p><div><p className="eyebrow">PROFESSIONAL + APPROACHABLE</p><h2>專業，<br />不代表一定要嚴肅。</h2></div><div><p>課程有要求，但要求是為了讓學生真正學會，而不是製造壓力。每一個練習都應該知道目的，每一次調整都應該讓音樂更清楚。</p><blockquote>No pressure.<br />Just music.</blockquote></div></div>
      </section>

      <EditorialCta title={<>先告訴我，<br />你想彈什麼。</>}><p>無論是第一次學鋼琴、重新開始、準備檢定，或只是一直有一首很想彈的曲子，都可以先從目前的程度與目標開始。</p></EditorialCta>
    </main>
  );
}
