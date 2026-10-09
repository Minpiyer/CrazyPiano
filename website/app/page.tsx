import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { routes, videos } from "@/data/site";

const strengths = [
  ["01", "個人化進度", "從目標、程度與生活節奏出發，安排能持續累積的練習計畫。"],
  ["02", "扎實基本功", "建立視譜、節奏、觸鍵與音樂史脈絡，不只會彈一首曲子。"],
  ["03", "檢定與舞台", "從 ABRSM、比賽到發表會，練習如何準備，也練習如何自在演奏。"],
  ["04", "喜歡的歌也能學", "依程度改編流行、動漫與爵士曲目，把「想彈」變成「彈得到」。"],
] as const;

const studentTypes = [
  ["KIDS 7+", "兒童啟蒙", "從遊戲感、聽覺與節奏，建立安心又有成就感的第一步。"],
  ["ADULTS", "成人學琴", "零基礎、重拾鋼琴或完成一首夢想曲，都能從現在開始。"],
  ["ABRSM", "檢定準備", "清楚拆解曲目、音階、視奏與臨場表現，穩定走向目標。"],
  ["ONLINE", "全球線上", "北美與海外學生可線上上課，彈性安排時區與學習節奏。"],
] as const;

const lessonCards = [
  { href: routes.kids, label: "KIDS", title: "兒童鋼琴課", body: "建立視譜、節奏與正確姿勢，從看得懂、彈得對開始。", note: "線上課建議 7 歲以上" },
  { href: routes.adult, label: "ADULTS", title: "成人鋼琴課", body: "依背景與目標安排；可從零開始，也可直接學喜歡的曲子。", note: "古典／流行／重新起步" },
  { href: routes.exams, label: "EXAMS", title: "檢定與比賽", body: "依制度、曲目與準備時間，規劃技巧、視譜與舞台表現。", note: "ABRSM Grade 8 輔導經驗" },
  { href: routes.custom, label: "ARRANGE", title: "客製歌曲改編", body: "保留歌曲特色，依程度調整難度、左右手配置與伴奏。", note: "依曲目與需求確認" },
] as const;

const faq = [
  ["什麼年齡可以上課？", "兒童、青少年與成人皆可；線上兒童課建議 7 歲以上。"],
  ["成人零基礎也可以嗎？", "可以。試課會先了解你的經驗與想彈的音樂，再規劃合適起點。"],
  ["初學者可以線上學嗎？", "可以先透過試課確認目前程度與適合的學習方式。"],
  ["可以準備 ABRSM 檢定嗎？", "可以，曾有輔導學生準備至 Grade 8 的經驗，課程包含曲目、技巧與視奏。"],
  ["能改編我想彈的歌曲嗎？", "可以依學生程度客製改編，保留歌曲特色並設定可完成的練習目標。"],
  ["如何開始？", "先告訴我你的年齡、所在地區、目前程度與想學的內容，再一起確認方向。"],
] as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero section-pad">
        <div className="hero-grid container-wide">
          <div className="hero-copy">
            <p className="issue-label">PIANO LESSONS • TAIPEI + ONLINE • ISSUE 01</p>
            <p className="hero-eyebrow">臺北實體 × 全球線上｜兒童、青少年與成人鋼琴課</p>
            <h1>PLAY IT<br />YOUR WAY.</h1>
            <h2>看懂音樂，彈你想彈的。</h2>
            <p className="hero-lead">視譜能力是基礎，其他都可以跟著你的興趣與目標改變。<br className="desktop-break" />古典、流行、檢定，或你最喜歡的那首歌，都可以成為課程的一部分。</p>
            <div className="button-row">
              <Link className="button button-orange" href={routes.contact}>Book a Trial Lesson／預約試課</Link>
              <Link className="button button-paper" href={routes.about}>Meet Dr. Hsu／認識徐老師</Link>
            </div>
            <ul className="hero-facts" aria-label="教師專業摘要">
              <li>Doctor of Musical Arts</li>
              <li>Teaching since 2007</li>
              <li>Children・Teens・Adults</li>
              <li>Classical・Pop・ABRSM・改編</li>
            </ul>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <Image src="/images/profile/hsu-minpiyer-hero-enhanced.png" alt="徐老師演奏鋼琴" fill priority sizes="(max-width: 767px) 88vw, 42vw" />
            </div>
            <div className="doctorate-sticker" aria-label="Doctor of Musical Arts 2018">
              <strong>DOCTOR OF</strong><span>MUSICAL ARTS • 2018</span>
            </div>
            <div className="hero-circle" aria-hidden="true" />
          </div>
        </div>
        <div className="credential-ticker" aria-label="教師資歷">
          <span>Doctor of Musical Arts｜輔仁大學</span><span>教學自 2007 年｜近 20 年</span><span>兒童・青少年・成人</span><span>CLASSICAL・POP・ABRSM・改編</span>
        </div>
      </section>

      <section className="strengths section-pad">
        <div className="container-wide">
          <SectionHeading index="01" eyebrow="WHY CRAZY PIANO" title={<>有方向，也保留<br />喜歡音樂的理由。</>} note={<>技巧 × 音樂性 × 興趣<br />每堂課都帶走清楚的下一步</>} />
          <div className="four-grid strength-grid">
            {strengths.map(([number, title, body], index) => (
              <article className={`editorial-card tone-${index + 1}`} key={number}>
                <span className="card-number">{number}</span><h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="student-types section-pad">
        <div className="container-wide">
          <SectionHeading index="02" eyebrow="WHO IT'S FOR" title="每個年齡，都可以有自己的琴聲。" note="CHILDREN / ADULTS / EXAMS / ONLINE" inverse />
          <div className="four-grid student-grid">
            {studentTypes.map(([label, title, body], index) => (
              <article className={`student-card tone-${index + 1}`} key={label}>
                <span className="eyebrow">{label}</span><h3>{title}</h3><p>{body}</p><span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-home section-pad">
        <div className="about-grid container-wide">
          <div className="about-photo-stack">
            <div className="about-number" aria-hidden="true">03</div>
            <div className="about-photo">
              <Image src="/images/about/about-teacher-student-stage-2024.jpg" alt="徐老師在舞台旁與學生互動" fill sizes="(max-width: 767px) 88vw, 40vw" />
            </div>
            <div className="degree-seal">D.M.A.<small>DOCTOR OF MUSICAL ARTS</small></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">ABOUT DR. HSU — 徐家超博士</p>
            <h2>專業可以很扎實，<br />學習也可以很有趣。</h2>
            <p>主修鋼琴、副修小提琴，2018 年獲輔仁大學音樂藝術博士學位（Doctor of Musical Arts）。自 2007 年投入教學，具古典鋼琴、ABRSM 輔導、比賽與檢定評審經驗。</p>
            <blockquote>技巧、音樂基礎與興趣一起走，讓學生知道怎麼練，也願意繼續彈。</blockquote>
            <div className="fact-grid">
              <div><small>DEGREE</small><strong>Doctor of<br />Musical Arts</strong><span>Fu Jen • 2018</span></div>
              <div><small>TEACHING</small><strong>Teaching<br />since 2007</strong><span>Children • Teens • Adults</span></div>
              <div><small>EXPERIENCE</small><strong>ABRSM &<br />Judging</strong><span>Grade 8 coaching</span></div>
            </div>
            <Link className="button button-coffee" href={routes.about}>完整介紹／Full Profile →</Link>
          </div>
        </div>
      </section>

      <section className="video-portfolio section-pad">
        <div className="container-wide">
          <SectionHeading index="04" eyebrow="VIDEO PORTFOLIO / TEACHING PORTFOLIO" title="Crazy Piano／瘋鋼琴" note={<>See how I teach.<br />會教・會輔導・會演奏・也會玩不同風格</>} inverse />
          <div className="video-layout">
            <a className="video-featured" href={videos[0].url} target="_blank" rel="noreferrer">
              <div className="video-image"><Image src={videos[0].image} alt="合手彈奏與視奏能力教學影片縮圖" fill sizes="(max-width: 900px) 92vw, 58vw" /><span className="play-button" aria-hidden="true">▶</span></div>
              <span className="video-meta">{videos[0].category} • {videos[0].duration}</span><h3>{videos[0].title}</h3><span className="watch-link">WATCH ON YOUTUBE ↗</span>
            </a>
            <div className="video-secondary-list">
              {videos.slice(1).map((video) => (
                <a className="video-secondary" href={video.url} target="_blank" rel="noreferrer" key={video.url}>
                  <div className="video-thumb"><Image src={video.image} alt={`${video.title}影片縮圖`} fill sizes="(max-width: 900px) 35vw, 18vw" /><span aria-hidden="true">▶</span></div>
                  <div><span className="video-meta">{video.category} • {video.duration}</span><h3>{video.title}</h3><span className="watch-link">WATCH ↗</span></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="recital-gallery section-pad">
        <div className="container-wide">
          <SectionHeading index="05" eyebrow="PERFORMANCE & RECITAL GALLERY" title={<>每一次上台，<br />都是勇氣被看見。</>} note="舞台演出、學習與音樂活動紀錄。" />
          <div className="gallery-collage" data-photo-permission="Public use permission required before production launch">
            <figure className="gallery-main"><Image src="/images/gallery/homepage-performance-recital-stage.jpg" alt="徐老師在音樂廳舞台演奏平台鋼琴" fill sizes="(max-width: 767px) 92vw, 45vw" /></figure>
            <figure className="gallery-top"><Image src="/images/gallery/performance-young-student-piano-2024.jpg" alt="學生在舞台上演奏鋼琴" fill sizes="(max-width: 767px) 45vw, 24vw" /></figure>
            <figure className="gallery-bottom"><Image src="/images/gallery/performance-teen-student-piano-2024.jpg" alt="學生發表會鋼琴演奏" fill sizes="(max-width: 767px) 45vw, 24vw" /></figure>
            <figure className="gallery-side"><Image src="/images/gallery/music-activity-teacher-stage-talk.jpg" alt="徐老師在音樂活動舞台上分享演奏與學習經驗" fill sizes="(max-width: 767px) 45vw, 22vw" /></figure>
            <blockquote className="gallery-note"><small>RECITAL NOTES</small>不是完美才值得掌聲，<br />是努力本身就值得。</blockquote>
          </div>
          <Link className="text-link" href={routes.gallery}>VIEW ALL STORIES →</Link>
        </div>
      </section>

      <section className="lessons-home section-pad">
        <div className="container-wide">
          <SectionHeading index="06" eyebrow="LESSONS" title="選一條現在最適合你的路。" note="1 對 1 個人課｜實體＋線上" />
          <div className="four-grid lesson-grid">
            {lessonCards.map((lesson, index) => (
              <Link className={`lesson-card tone-${index + 1}`} href={lesson.href} key={lesson.href}>
                <span className="eyebrow">{lesson.label}</span><h3>{lesson.title}</h3><p>{lesson.body}</p><strong>{lesson.note}</strong><span>查看課程 ↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-home section-pad">
        <div className="container-wide">
          <SectionHeading index="07" eyebrow="PRICING" title="透明的收費，專注的一對一教學。" note="實際課程安排與費用，以確認學生需求後為準。" />
          <div className="pricing-grid">
            <article className="price-card tone-2"><span className="eyebrow">TAIWAN</span><h3>臺灣實體／線上</h3><strong>NT$1,200–1,500</strong><p>依程度、課程內容與學習目標安排。</p><Link href={routes.contact}>預約試課 ↗</Link></article>
            <article className="price-card tone-3"><span className="eyebrow">NORTH AMERICA</span><h3>北美線上課</h3><strong>From US$50</strong><p>Online piano lessons，依學生程度與需求安排。</p><Link href={routes.contact}>預約試課 ↗</Link></article>
            <article className="price-card tone-paper"><span className="eyebrow">OTHER ASIA</span><h3>其他亞洲地區</h3><strong>Contact</strong><p>請提供所在地區、目前程度與學習需求。</p><Link href={routes.contact}>詢問課程 ↗</Link></article>
          </div>
        </div>
      </section>

      <section className="faq-preview section-pad">
        <div className="container-wide">
          <SectionHeading index="08" eyebrow="BEFORE YOUR FIRST LESSON" title="開始以前，你可能想知道。" note="FAQ PREVIEW" />
          <div className="faq-list">
            {faq.map(([question, answer], index) => (
              <details key={question} open={index === 3}><summary>{question}<span aria-hidden="true">＋</span></summary><p>{answer}</p></details>
            ))}
          </div>
          <Link className="text-link" href={routes.faq}>查看完整 FAQ →</Link>
        </div>
      </section>

      <section className="final-cta section-pad">
        <div className="cta-inner container-wide">
          <div><p className="eyebrow">09 — START HERE</p><h2>從你最想彈的<br />那一首開始。</h2><p>告訴我你的程度、想學的音樂與方便的時間。試課後，我們一起整理最適合你的學習方向。</p><Link className="button button-burgundy" href={routes.contact}>Book a Trial Lesson／預約試課 ↗</Link></div>
          <div className="record-graphic" aria-hidden="true"><span /></div>
          <p className="hand-note">No pressure.<br />Just music.</p>
        </div>
      </section>
    </main>
  );
}
