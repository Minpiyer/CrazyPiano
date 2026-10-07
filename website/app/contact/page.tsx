import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { InfoHeading, InfoHero } from "@/components/info/InfoShared";

export const metadata: Metadata = {
  title: "聯絡與預約｜Contact",
  description: "聯絡 Crazy Piano 徐老師，預約 50 分鐘鋼琴試上課；可透過 Email 或 LINE 詢問兒童、成人、檢定與客製樂譜課程。",
};

const videos = [
  { category: "SCALES / TECHNIQUE", title: "[瘋鋼琴] 如何了解音階", url: "https://www.youtube.com/watch?v=khoVWNOrBEU", image: "/images/contact/youtube-scales-khoVWNOrBEU.jpg" },
  { category: "BACH / INTERPRETATION", title: "[瘋鋼琴] 認識巴哈初步與其學習的要點～最後有下期預告演奏樂曲！", url: "https://www.youtube.com/watch?v=cMOq9T46eBY", image: "/images/contact/youtube-bach-introduction-cMOq9T46eBY.jpg" },
  { category: "BACH / TEACHING", title: "[瘋鋼琴]巴哈初步講解練習方法及詮釋要點。以第一冊No.15 為例 。最後學生示範演奏", url: "https://www.youtube.com/watch?v=hlusAJ9v_vI", image: "/images/contact/youtube-bach-practice-hlusAJ9v_vI.jpg" },
] as const;

const firstContact = ["姓名", "年齡", "所在地區", "目前程度", "想學的內容／目標", "是否有特定曲目"] as const;

export default function ContactPage() {
  return (
    <main id="main-content" className="info-page contact-page">
      <InfoHero eyebrow="CONTACT / BOOK A LESSON" title={<>先告訴我，<br />你想彈什麼。</>} intro="不需要先知道自己適合哪一種課程。告訴我目前程度、所在地區與想學的內容，再一起確認適合的方式。" variant="contact" ctaHref="#contact-form">
        <div className="contact-hero-note"><span>HELLO,</span><strong>LET&apos;S<br />MAKE MUSIC.</strong><em>No pressure. Just music.</em></div>
      </InfoHero>

      <section className="info-section contact-first section-pad"><div className="container-wide">
        <InfoHeading index="01" eyebrow="FIRST MESSAGE" title="第一次聯絡，可以先告訴我這些。" intro={<p>不必先整理成正式履歷，簡單說明現在的狀況與最想完成的事就可以。</p>} />
        <div className="contact-first-grid"><ol>{firstContact.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol><aside><span>FOR EXAMPLE</span><p>「第一次學鋼琴」</p><p>「以前學過，想重新開始」</p><p>「準備 ABRSM」</p><p>「有一首很想彈的歌」</p></aside></div>
      </div></section>

      <section className="info-section contact-trial section-pad"><div className="container-wide contact-trial-grid">
        <div><p className="eyebrow">02 — TRIAL LESSON</p><h2>先用一堂完整的課，<br />認識彼此的學習方式。</h2><p>試上課程與正式課程時間相同，採相同單堂費用。50 分鐘可以有足夠時間了解學生目前程度與學習需求、實際進行教學，並討論後續方向。</p></div>
        <div className="trial-time"><span>TRIAL LESSON</span><strong>50</strong><em>MINUTES</em><p>Same regular single-lesson fee.</p></div>
      </div></section>

      <section className="info-section contact-options section-pad"><div className="container-wide">
        <InfoHeading index="03" eyebrow="CONTACT OPTIONS" title="選一個最方便的方式聯絡。" />
        <div className="contact-option-grid">
          <article className="contact-option contact-email"><span>EMAIL</span><h3>一般課程與海外學生詢問</h3><a href="mailto:minpiyer@gmail.com">minpiyer@gmail.com ↗</a></article>
          <article className="contact-option contact-line"><span>LINE</span><h3>掃描 QR Code 加好友</h3><div className="line-qr"><Image src="/images/contact/line-add-friend-qr.jpeg" alt="Crazy Piano LINE 加好友 QR Code" width={1206} height={882} sizes="(max-width: 767px) 88vw, 360px" /></div><button type="button" disabled aria-disabled="true">LINE／Add Friend — URL PENDING</button><p className="implementation-note">LINE add-friend URL required before production launch. LINE ID 不公開。</p></article>
          <article className="contact-option contact-youtube"><span>YOUTUBE</span><h3>瘋鋼琴</h3><p>看看實際教學、演奏與教學影片。</p><a href="https://www.youtube.com/@crazypiano5945" target="_blank" rel="noreferrer">YouTube｜瘋鋼琴 ↗</a></article>
        </div>
      </div></section>

      <section className="info-section contact-videos section-pad"><div className="container-wide">
        <InfoHeading index="04" eyebrow="TEACHING ON YOUTUBE" title="先看看我是怎麼教的。" intro={<p>從基本技巧、音階，到巴哈與作品理解，可以先從實際教學影片了解我的教學方式。</p>} inverse />
        <div className="contact-video-grid">{videos.map((video) => <a href={video.url} target="_blank" rel="noreferrer" className="contact-video-card" key={video.url}><div><Image src={video.image} alt={`${video.title}影片縮圖`} fill sizes="(max-width: 767px) 92vw, 31vw" /><span aria-hidden="true">▶</span></div><p>{video.category}</p><h3>{video.title}</h3><strong>WATCH ON YOUTUBE ↗</strong></a>)}</div>
      </div></section>

      <section className="info-section contact-form-section section-pad" id="contact-form"><div className="container-wide">
        <InfoHeading index="05" eyebrow="CONTACT FORM" title="把目前的想法先寫下來。" intro={<p>表單介面已完成；正式上線前仍需連接後端服務。</p>} />
        <ContactForm />
      </div></section>

      <section className="info-section contact-next section-pad"><div className="container-wide">
        <InfoHeading index="06" eyebrow="WHAT HAPPENS NEXT" title="聯絡之後呢？" />
        <ol className="contact-next-grid"><li><span>01</span><strong>Tell Me About You</strong><p>告訴我目前狀況</p></li><li><span>02</span><strong>Confirm Lesson Direction</strong><p>確認課程方向與費用</p></li><li><span>03</span><strong>Book a 50-minute Trial</strong><p>安排 50 分鐘試上</p></li></ol>
      </div></section>

      <section className="contact-final section-pad"><div className="container-wide"><p className="eyebrow">START HERE</p><h2>從你現在的位置開始就好。</h2><p>第一次學、重新開始、準備檢定，或只是有一首一直很想彈的歌，都可以先聊聊。</p><a className="button button-burgundy" href="mailto:minpiyer@gmail.com">Email Dr. Hsu／寄信詢問 ↗</a><blockquote>No pressure. Just music.</blockquote></div></section>
    </main>
  );
}
