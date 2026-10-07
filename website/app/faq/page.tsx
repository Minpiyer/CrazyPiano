import type { Metadata } from "next";
import { EditorialCta } from "@/components/editorial/EditorialShared";
import { FaqAccordion, type FaqGroup } from "@/components/faq/FaqAccordion";
import { InfoHero } from "@/components/info/InfoShared";

export const metadata: Metadata = {
  title: "常見問題｜FAQ",
  description: "Crazy Piano 鋼琴課常見問題：初學、兒童與成人課程、線上教學、ABRSM、比賽、客製樂譜、費用與試上方式。",
};

const groups: readonly FaqGroup[] = [
  { label: "GETTING STARTED", title: "開始學鋼琴", items: [
    { question: "完全沒有學過鋼琴，也可以開始嗎？", answer: "可以。會先從目前的閱讀能力、節奏感與手部使用開始，逐步建立看譜、基本技巧與演奏習慣。" },
    { question: "線上課幾歲開始比較適合？", answer: "線上課建議 7 歲以上。實際仍會依孩子的專注力、閱讀能力與配合情況判斷。" },
    { question: "成人現在才開始會不會太晚？", answer: "不會。成人課程會依目前程度與真正想完成的目標安排，不需要和兒童走完全相同的學習路線。" },
  ]},
  { label: "LESSON CONTENT", title: "課程內容", items: [
    { question: "一定要學古典音樂嗎？", answer: "不一定。古典、流行、檢定曲目或學生真正喜歡的歌曲，都可以依程度安排進課程；看譜、節奏與基本技巧仍會持續建立。" },
    { question: "一定要照固定教材上課嗎？", answer: "不一定。教材是學習工具，不是唯一的課程路線。會依學生程度、年齡、目標與學習內容選擇適合的教材與曲目。" },
    { question: "可以只學我喜歡的歌嗎？", answer: "可以把喜歡的歌曲當成重要學習內容，但課程不會只教按哪些琴鍵，仍會透過曲目建立看譜、節奏、技巧與音樂理解。" },
  ]},
  { label: "EXAMS & COMPETITIONS", title: "檢定與比賽", items: [
    { question: "可以準備 ABRSM 嗎？", answer: "可以。老師有 ABRSM 輔導經驗，曾輔導學生至 Grade 8，課程會依考試要求與學生目前程度安排。" },
    { question: "可以準備比賽嗎？", answer: "可以。會依比賽規則、曲目、時間與學生程度，調整技巧、穩定度、音樂表現與舞台準備。" },
    { question: "可以保證通過檢定或比賽得獎嗎？", answer: "不會保證結果。課程會協助學生依照實際要求充分準備，但考試與比賽結果仍受到多種因素影響。" },
  ]},
  { label: "CUSTOM SCORES", title: "客製樂譜與改編", items: [
    { question: "如果想彈的歌曲沒有樂譜怎麼辦？", answer: "可以先提供歌曲與目前程度。若作品適合，也可以依照音樂內容重新聽寫、整理並編寫成鋼琴版本。" },
    { question: "如果現有樂譜太難怎麼辦？", answer: "可以依學生目前程度，重新調整伴奏、和聲、節奏、左右手配置與技術難度，製作較適合學習的客製版本。" },
    { question: "是不是所有歌曲都能客製？", answer: "不一定。仍需要依歌曲內容、學生程度與實際需求判斷是否適合。" },
  ]},
  { label: "ONLINE LESSONS", title: "線上課程", items: [
    { question: "線上課可以學哪些內容？", answer: "依學生程度，可安排古典、流行、視譜、技巧、ABRSM、比賽準備與客製歌曲等內容。" },
    { question: "線上課和實體課會差很多嗎？", answer: "課程核心仍然相同：看譜、節奏、技巧、音樂理解與曲目學習。實際上課方式則會依線上環境調整。" },
  ]},
  { label: "FEES & BOOKING", title: "費用與預約", items: [
    { question: "課程費用是多少？", answer: "Taiwan：NT$1,200–1,500。North America：From US$50。Other Asia：Contact。實際安排會依學生需求確認。" },
    { question: "為什麼費用會有範圍？", answer: "不同學生所需要的課前準備與課程內容不同，例如一般學習、檢定／比賽、特定曲目或客製樂譜，實際安排會有所差異。" },
    { question: "試上課多久？費用怎麼算？", answer: "試上為 50 分鐘，與正式課程採相同單堂費用。希望有足夠時間了解學生目前程度與學習目標，也讓學生實際體驗完整的上課方式。" },
    { question: "要怎麼聯絡老師？", answer: "可使用 Email 或 LINE 聯絡。Email：minpiyer@gmail.com；LINE 可掃描 Contact 頁面的 QR Code 加好友。YouTube「瘋鋼琴」可查看實際教學與演奏內容。" },
    { question: "怎麼開始？", answer: "可以先提供年齡、目前程度、所在地區、想學的內容，以及是否有特定曲目或目標，再一起確認適合的課程方式。" },
  ]},
] as const;

export default function FaqPage() {
  return (
    <main id="main-content" className="info-page faq-page">
      <InfoHero eyebrow="FAQ" title={<>上課前，你可能會<br />想知道這些。</>} intro="如果你的情況不在下面，也可以直接告訴我目前程度與想學的內容。" variant="faq">
        <div className="faq-hero-stack"><span>Q</span><span>A</span><strong>?</strong></div>
      </InfoHero>
      <section className="info-section faq-content section-pad"><div className="container-wide"><FaqAccordion groups={groups} /></div></section>
      <section className="faq-fact-strip"><div className="container-wide"><span>Teaching since 2007</span><span>Online lessons：建議 7+</span><span>ABRSM coaching：Grade 8</span><span>Trial：50 minutes</span></div></section>
      <EditorialCta title="還有其他問題？"><p>告訴我目前程度與想學的內容，通常就可以很快確認適合的方向。</p></EditorialCta>
    </main>
  );
}
