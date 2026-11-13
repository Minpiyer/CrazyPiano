import Image from "next/image";
import Link from "next/link";
import { EventGallery } from "@/components/events/EventGallery";
import { recitalImages, studentRecital2026 } from "@/data/events";

type EventPageProps = { locale: "zh-Hant" | "en" };

export function EventsOverview({ locale }: EventPageProps) {
  const english = locale === "en";
  const detailHref = english ? "/en/events/2026-student-recital" : "/events/2026-student-recital";

  return (
    <main id="main-content" className="events-page">
      <section className="events-hero">
        <div className="events-hero-grid container-wide">
          <div className="events-hero-copy">
            <p className="eyebrow">RECITAL ARCHIVE / {english ? "EVENTS" : "發表會活動"}</p>
            <h1>{english ? <>A stage<br />built together.</> : <>把練習帶上舞台，<br />留下共同完成的聲音。</>}</h1>
            <p>{english
              ? "A recital is more than a presentation of results. It is a stage experience shaped together by students, teacher, and families. This archive gathers those moments year by year."
              : "發表會不只是展示成果，而是學生、老師與家庭共同完成的一次舞台經驗。這裡依年份整理每一次演出與活動紀錄。"}</p>
          </div>
          <figure className="events-hero-photo">
            <Image src={studentRecital2026.cover} alt={english ? "Performers and Dr. Hsu together on the recital stage" : "演出者與徐老師在發表會舞台合照"} width={1706} height={960} priority sizes="(max-width: 900px) 100vw, 48vw" />
            <figcaption>{english ? "RECITAL / 2026" : "發表會紀錄 / 2026"}</figcaption>
          </figure>
        </div>
      </section>

      <section className="events-index section-pad">
        <div className="container-wide">
          <header className="events-section-heading">
            <p className="eyebrow">01 — {english ? "RECITALS & EVENTS" : "歷年活動"}</p>
            <h2>{english ? "Stories from the stage." : "舞台上的每一次，都是學習的一部分。"}</h2>
          </header>
          <article className="event-record-card">
            <Link className="event-record-photo" href={detailHref} aria-label={english ? "View the 2026 student recital story" : "查看 2026 學生鋼琴發表會活動紀錄"}>
              <Image src={studentRecital2026.cover} alt={english ? "2026 student piano recital group photo" : "2026 學生鋼琴發表會舞台合照"} width={1706} height={960} sizes="(max-width: 900px) 100vw, 57vw" />
            </Link>
            <div className="event-record-copy">
              <p className="event-year">2026</p>
              <h2>{english ? studentRecital2026.enTitle : studentRecital2026.zhTitle}</h2>
              <dl>
                <div><dt>{english ? "DATE" : "日期"}</dt><dd>{english ? studentRecital2026.enDate : studentRecital2026.zhDate}</dd></div>
                <div><dt>{english ? "VENUE" : "地點"}</dt><dd>{studentRecital2026.venue}</dd></div>
              </dl>
              <p>{english ? "A record of the performances, preparation, and shared moments that made this recital day complete." : "記錄這一天的演出、準備，以及學生、老師與家庭共同完成的舞台時刻。"}</p>
              <Link className="button button-burgundy" href={detailHref}>{english ? "View Recital Story" : "查看活動紀錄"}<span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export function StudentRecital2026({ locale }: EventPageProps) {
  const english = locale === "en";
  const eventsHref = english ? "/en/events" : "/events";
  const highlights = english
    ? [
        ["01", "Complete a performance", "Students brought their preparation onto the stage and carried each piece through as a complete performance."],
        ["02", "Listen to one another", "Sharing a program also means hearing different music, approaches, and ways of expressing a piece."],
        ["03", "A day shaped together", "The recital was completed not only by the performers, but also through the support of teachers and families."],
      ]
    : [
        ["01", "完成一次演出", "學生把準備帶上舞台，從開始到結束，完整走過屬於自己的曲目。"],
        ["02", "聽見彼此的音樂", "同一場節目裡，也能聽見不同曲目、不同準備方式與不同的音樂表達。"],
        ["03", "一起完成這一天", "發表會不只由台上的演出者完成，也包含老師與家庭一路上的陪伴與支持。"],
      ];

  return (
    <main id="main-content" className="events-page event-detail-page">
      <section className="event-detail-hero">
        <div className="event-detail-hero-grid container-wide">
          <div className="event-detail-title">
            <p className="eyebrow">2026 / {english ? "STUDENT RECITAL" : "學生鋼琴發表會"}</p>
            <h1>{english ? studentRecital2026.enTitle : studentRecital2026.zhTitle}</h1>
            <p>{english
              ? "This recital was not only a presentation of progress. It was a stage experience completed together by students, teacher, and families."
              : "這場發表會不只是展示成果，而是學生、老師與家庭共同完成的一次舞台經驗。"}</p>
          </div>
          <figure className="event-detail-cover">
            <Image src={studentRecital2026.cover} alt={english ? "Performers and Dr. Hsu together after the 2026 recital" : "2026 發表會演出者與徐老師舞台合照"} width={1706} height={960} priority sizes="(max-width: 900px) 100vw, 48vw" />
            <figcaption>CRAZY PIANO / RECITAL 2026</figcaption>
          </figure>
        </div>
      </section>

      <section className="event-meta-strip" aria-label={english ? "Event information" : "活動資訊"}>
        <dl className="container-wide">
          <div><dt>{english ? "EVENT" : "活動"}</dt><dd>{english ? "Student Piano Recital" : "學生鋼琴發表會"}</dd></div>
          <div><dt>{english ? "DATE" : "日期"}</dt><dd>{english ? studentRecital2026.enDate : studentRecital2026.zhDate}</dd></div>
          <div><dt>{english ? "VENUE" : "地點"}</dt><dd>{studentRecital2026.venue}</dd></div>
        </dl>
      </section>

      <section className="event-story section-pad">
        <div className="event-story-grid container-wide">
          <p className="event-story-number" aria-hidden="true">01</p>
          <div><p className="eyebrow">{english ? "THE DAY" : "這一天"}</p><h2>{english ? "Practice became a shared stage experience." : "練習在這一天，變成一次真正的舞台經驗。"}</h2></div>
          <div className="event-story-copy">
            <p>{english ? "Each student arrived with different music, preparation, and experience. What connected the program was the process of stepping onto the same stage, listening to one another, and carrying a piece from its first note to its last." : "每位學生帶著不同的曲目、準備方式與學習經驗來到舞台。把大家連在一起的，不是相同的程度，而是願意上台、聽見彼此，並把一首曲子從第一個音走到最後一個音。"}</p>
            <p>{english ? "The photographs below record the performance, the moments of preparation, and the people who helped make the day possible." : "下面的照片記錄演出、上台前後的準備，以及一起讓這一天得以完成的人。"}</p>
          </div>
        </div>
      </section>

      <section className="event-highlights section-pad">
        <div className="container-wide">
          <header className="events-section-heading events-section-heading-inverse"><p className="eyebrow">02 — {english ? "RECITAL HIGHLIGHTS" : "活動亮點"}</p><h2>{english ? "More than playing the right notes." : "舞台上完成的，不只是把音彈對。"}</h2></header>
          <div className="event-highlight-grid">{highlights.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className="event-materials section-pad">
        <div className="container-wide">
          <header className="events-section-heading">
            <p className="eyebrow">03 — {english ? "POSTER & PROGRAM" : "海報與節目單"}</p>
            <h2>{english ? "The recital, from invitation to performance." : "從活動邀請，到當天的演出曲目。"}</h2>
            <p>{english
              ? "The original poster and program preserve how the recital was introduced and how the performances unfolded on the day."
              : "保留這次發表會的正式海報與演出節目單，記錄活動資訊與當天的演出順序。"}</p>
          </header>
          <div className="event-material-grid">
            <article className="event-material-card event-material-poster">
              <a href={studentRecital2026.poster} target="_blank" rel="noreferrer" aria-label={english ? "Open the full 2026 recital poster" : "開啟 2026 發表會完整海報"}>
                <Image
                  src={studentRecital2026.poster}
                  alt={english ? "Official poster for the 2026 student piano recital" : "2026 徐家超學生鋼琴發表會正式海報"}
                  width={1672}
                  height={941}
                  sizes="(max-width: 900px) 100vw, 58vw"
                />
              </a>
              <div className="event-material-copy">
                <p className="eyebrow">POSTER / 2026</p>
                <h3>{english ? "Recital Poster" : "發表會海報"}</h3>
                <p>{english ? "Event date, start time, and venue details." : "活動日期、開始時間與場地資訊。"}</p>
                <a className="button button-burgundy" href={studentRecital2026.poster} target="_blank" rel="noreferrer">{english ? "View Full Poster" : "查看完整海報"}<span aria-hidden="true">↗</span></a>
              </div>
            </article>

            <article className="event-material-card event-material-program">
              <a href={studentRecital2026.programPdf} target="_blank" rel="noreferrer" aria-label={english ? "Open the 2026 recital program PDF" : "開啟 2026 發表會節目單 PDF"}>
                <Image
                  src={studentRecital2026.programPreview}
                  alt={english ? "Program for the 2026 student piano recital" : "2026 徐家超學生鋼琴發表會節目單"}
                  width={910}
                  height={1287}
                  sizes="(max-width: 900px) 82vw, 30vw"
                />
              </a>
              <div className="event-material-copy">
                <p className="eyebrow">PROGRAM / 2026</p>
                <h3>{english ? "Performance Program" : "演出節目單"}</h3>
                <p>{english ? "The complete one-page program and performance order." : "完整單頁節目與當天演出順序。"}</p>
                <a className="button button-burgundy" href={studentRecital2026.programPdf} target="_blank" rel="noreferrer">{english ? "Open Program PDF" : "開啟節目單 PDF"}<span aria-hidden="true">↗</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="event-gallery-section section-pad">
        <div className="container-wide">
          <header className="events-section-heading"><p className="eyebrow">04 — {english ? "SELECTED MOMENTS" : "精選照片"}</p><h2>{english ? "Moments before, during, and after the music." : "從準備、演出，到音樂結束之後。"}</h2><p>{english ? "Select any photograph to view it at a larger size." : "點選照片可放大查看。"}</p></header>
          <EventGallery images={recitalImages} locale={locale} />
        </div>
      </section>

      <section className="event-back-section">
        <div className="container-wide"><div><p className="eyebrow">RECITAL ARCHIVE</p><h2>{english ? "See every recital and event." : "回到歷年發表會活動。"}</h2></div><Link className="button button-burgundy" href={eventsHref}>{english ? "Back to Recitals" : "返回發表會活動"}<span aria-hidden="true">←</span></Link></div>
      </section>
    </main>
  );
}
