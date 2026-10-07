import type { Metadata } from "next";
import Link from "next/link";
import { EditorialCta } from "@/components/editorial/EditorialShared";
import { InfoHeading, InfoHero } from "@/components/info/InfoShared";
import { routes } from "@/data/site";

export const metadata: Metadata = {
  title: "課程費用｜Lesson Fees",
  description: "Crazy Piano 一對一鋼琴課程費用：臺灣、北美線上與其他亞洲地區，依學生程度、目標與課程需求安排。",
};

const fees = [
  { region: "TAIWAN", title: "台灣", price: "NT$1,200–1,500", body: "依程度、課程內容與學習目標安排。", tone: "fees-taiwan" },
  { region: "NORTH AMERICA", title: "北美線上", price: "From US$50", body: "Online piano lessons，依學生程度與需求安排。", tone: "fees-north-america" },
  { region: "OTHER ASIA", title: "其他亞洲地區", price: "Contact", body: "請提供所在地區、目前程度與學習需求，再確認適合的課程方式。", tone: "fees-asia" },
] as const;

const lessonContents = [
  ["SIGHT-READING", "視譜能力"], ["TECHNIQUE", "基本技巧"], ["CLASSICAL / POP", "古典／流行"],
  ["ABRSM", "檢定準備"], ["COMPETITIONS", "比賽準備"], ["CUSTOM SCORES", "客製樂譜與改編"],
] as const;

export default function LessonFeesPage() {
  return (
    <main id="main-content" className="info-page fees-page">
      <InfoHero eyebrow="LESSON FEES" title={<>先找到適合你的<br />學習方式。</>} intro="每個人的程度、目標與想彈的音樂都不同。以下提供基本課程費用範圍，實際內容會依學生需求安排。" variant="fees">
        <div className="fees-hero-ticket"><span>ONE-TO-ONE</span><strong>LESSONS</strong><em>TAIPEI ↔ WORLDWIDE</em></div><span className="info-disc" />
      </InfoHero>

      <section className="info-section fees-overview section-pad"><div className="container-wide">
        <InfoHeading index="01" eyebrow="LESSON FEES" title="清楚的費用，專注的一對一教學。" intro={<p>三個地區代表所在地與上課方式，不是不同等級的課程。</p>} />
        <div className="fees-page-grid">{fees.map((fee) => <article className={`fees-page-card ${fee.tone}`} key={fee.region}><span>{fee.region}</span><h3>{fee.title}</h3><strong>{fee.price}</strong><p>{fee.body}</p><Link href={routes.contact}>Book a Trial Lesson／預約試課 ↗</Link></article>)}</div>
        <p className="fees-note">實際課程安排與費用，以確認學生需求後為準。</p>
      </div></section>

      <section className="info-section fees-includes section-pad"><div className="container-wide">
        <InfoHeading index="02" eyebrow="WHAT CAN LESSONS INCLUDE" title="課程內容，跟著你的目標走。" intro={<p>以下不是每堂課全部都要學，而是依學生現在的程度與真正想完成的目標安排。</p>} inverse />
        <div className="fees-content-grid">{lessonContents.map(([label, title], index) => <article key={label}><span>{String(index + 1).padStart(2, "0")}／{label}</span><h3>{title}</h3></article>)}</div>
      </div></section>

      <section className="info-section fees-online section-pad"><div className="container-wide fees-split">
        <div><p className="eyebrow">03 — ONLINE LESSONS</p><h2>線上課，從適合的起點開始。</h2><p>線上課建議 7 歲以上；兒童與成人皆可依程度安排。課程可包含古典、流行、視譜、檢定與客製歌曲等內容。</p></div>
        <aside><span>TRIAL LESSON</span><strong>50 MINUTES</strong><p>試上與正式單堂採相同費用，讓我們有足夠時間了解程度、實際進行教學並討論後續方向。</p></aside>
      </div></section>

      <section className="info-section fees-why section-pad"><div className="container-wide fees-split">
        <div><p className="eyebrow">04 — WHY A RANGE?</p><h2>為什麼費用會有範圍？</h2></div>
        <div className="fees-why-copy"><p>不同學生需要的課程準備不同。一般學習、檢定／比賽、特定曲目或客製樂譜，老師課前需要準備的內容也可能不同。</p><p>先了解需求，再一起確認適合的課程方式與費用。</p></div>
      </div></section>

      <EditorialCta title={<>不知道自己<br />適合哪一種？</>}><p>先告訴我目前程度、所在地區，以及最想學的內容，再一起確認適合的課程方式。</p></EditorialCta>
    </main>
  );
}
