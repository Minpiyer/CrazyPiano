import Image from "next/image";
import Link from "next/link";
import { scoreWorks, type ScoreWork } from "@/data/scores";
import type { SiteLocale } from "@/lib/i18n";

type ScorePageProps = { locale: SiteLocale };

export function ScoresOverview({ locale }: ScorePageProps) {
  const english = locale === "en";
  const basePath = english ? "/en/scores" : "/scores";

  return (
    <main id="main-content" className="scores-page">
      <section className="scores-hero">
        <div className="scores-hero-grid container-wide">
          <div>
            <p className="eyebrow">ARRANGEMENT PORTFOLIO</p>
            <h1>{english ? <>Scores shaped<br />for real players.</> : <>讓彈鋼琴不再只有獨奏，<br />而是充滿有趣又有挑戰的四手聯彈。</>}</h1>
            <p>{english
              ? "A selected portfolio of piano arrangements by Dr. Hsu, showing how melody, texture, difficulty, and ensemble roles can be reshaped for the people who will actually play the music."
              : "這裡展示徐家超的鋼琴編曲作品，從旋律、織度、難度到合奏分工，重新整理成真正適合演奏者使用的版本。"}</p>
          </div>
          <div className="scores-hero-art" aria-hidden="true"><span>ARRANGE</span><strong>02</strong><small>SELECTED WORKS</small></div>
        </div>
      </section>

      <section className="scores-index section-pad">
        <div className="container-wide">
          <header className="scores-section-heading">
            <p className="eyebrow">01 — {english ? "SELECTED ARRANGEMENTS" : "精選編曲作品"}</p>
            <h2>{english ? "A closer look at the musical choices behind each score." : "不只看樂譜，也看每一個編曲選擇。"}</h2>
          </header>
          <div className="score-work-grid">
            {scoreWorks.map((work, index) => (
              <article className={`score-work-card score-work-card-${index + 1}`} key={work.slug}>
                <Link className="score-work-image" href={`${basePath}/${work.slug}`} aria-label={english ? `View ${work.enTitle}` : `查看 ${work.zhTitle}`}>
                  <Image src={work.previews[0].src} alt={english ? work.previews[0].enAlt : work.previews[0].zhAlt} width={work.previews[0].width} height={work.previews[0].height} sizes="(max-width: 900px) 100vw, 48vw" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </Link>
                <div className="score-work-copy">
                  <p className="eyebrow">{english ? "PIANO ARRANGEMENT" : "鋼琴編曲作品"}</p>
                  <h2>{english ? work.enTitle : work.zhTitle}</h2>
                  <dl><div><dt>{english ? "FORMAT" : "編制"}</dt><dd>{english ? work.enArrangement : work.zhArrangement}</dd></div><div><dt>{english ? "LEVEL" : "難度"}</dt><dd>{english ? work.enDifficulty : work.zhDifficulty}</dd></div></dl>
                  <p>{english ? work.enSummary : work.zhSummary}</p>
                  <Link className="button button-burgundy" href={`${basePath}/${work.slug}`}>{english ? "View Arrangement" : "查看作品"}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scores-rights-note section-pad"><div className="container-wide"><p className="eyebrow">PORTFOLIO PREVIEW ONLY</p><h2>{english ? "Selected score excerpts are shown here." : "目前只展示部分樂譜。"}</h2><p>{english ? "For arrangement inquiries, contact me by email or LINE." : "如有編曲合作需求，可透過 Email 或 LINE 與我聯繫。"}</p></div></section>
    </main>
  );
}

export function ScoreWorkDetail({ locale, work }: ScorePageProps & { work: ScoreWork }) {
  const english = locale === "en";
  const scoresHref = english ? "/en/scores" : "/scores";
  const contactHref = english ? "/en/contact" : "/contact";

  return (
    <main id="main-content" className="scores-page score-detail-page">
      <section className="score-detail-hero">
        <div className="score-detail-hero-grid container-wide">
          <div className="score-detail-copy">
            <nav className="score-breadcrumb" aria-label={english ? "Breadcrumb" : "麵包屑導覽"}><Link href={scoresHref}>{english ? "Arrangements" : "編曲作品"}</Link><span>/</span><span>{english ? work.enTitle : work.zhTitle}</span></nav>
            <p className="eyebrow">ARRANGEMENT CASE STUDY</p>
            <h1>{english ? work.enTitle : work.zhTitle}</h1>
            <p>{english ? work.enSummary : work.zhSummary}</p>
            <dl className="score-detail-facts"><div><dt>{english ? "FORMAT" : "編制"}</dt><dd>{english ? work.enArrangement : work.zhArrangement}</dd></div><div><dt>{english ? "LEVEL" : "難度"}</dt><dd>{english ? work.enDifficulty : work.zhDifficulty}</dd></div></dl>
          </div>
          <figure className="score-detail-cover"><Image src={work.previews[0].src} alt={english ? work.previews[0].enAlt : work.previews[0].zhAlt} width={work.previews[0].width} height={work.previews[0].height} priority sizes="(max-width: 900px) 100vw, 48vw" /><figcaption>{english ? "WATERMARKED PREVIEW" : "浮水印預覽"}</figcaption></figure>
        </div>
      </section>

      <section className="score-concept section-pad"><div className="score-concept-grid container-wide"><p className="score-concept-number" aria-hidden="true">01</p><div><p className="eyebrow">{english ? "ARRANGEMENT APPROACH" : "編曲方向"}</p><h2>{english ? work.enConceptTitle : work.zhConceptTitle}</h2>{(english ? work.enConcept : work.zhConcept) && <p>{english ? work.enConcept : work.zhConcept}</p>}</div><ul>{(english ? work.enFeatures : work.zhFeatures).map((feature, index) => <li key={feature}><span>{String(index + 1).padStart(2, "0")}</span>{feature}</li>)}</ul></div></section>

      <section className="score-preview-section section-pad"><div className="container-wide"><header className="scores-section-heading"><p className="eyebrow">02 — {english ? "SELECTED SCORE EXCERPTS" : "精選樂譜片段"}</p><h2>{english ? work.enPreviewTitle : work.zhPreviewTitle}</h2></header><div className="score-preview-grid">{work.previews.map((preview, index) => <figure className={index === 2 ? "score-preview-detail" : ""} key={preview.src}><div><Image src={preview.src} alt={english ? preview.enAlt : preview.zhAlt} width={preview.width} height={preview.height} sizes="(max-width: 767px) 100vw, 48vw" /></div><figcaption><span>{String(index + 1).padStart(2, "0")}</span>{english ? preview.enCaption : preview.zhCaption}</figcaption></figure>)}</div></div></section>

      {work.videoUrl && <section className="score-video-section section-pad"><div className="container-wide"><p className="eyebrow">03 — VIDEO</p><h2>{english ? "Hear the arrangement in performance." : "從演奏中聽見編曲。"}</h2><a className="button button-burgundy" href={work.videoUrl} target="_blank" rel="noopener noreferrer">{english ? "Watch on YouTube" : "前往 YouTube 觀看"}</a></div></section>}

      <section className="score-copyright-note"><div className="container-wide"><strong>{english ? "Portfolio notice" : "作品展示說明"}</strong><p>{english ? "This page presents selected excerpts from an independent arrangement. Copyright in the underlying composition belongs to its respective rights holders. No complete score, PDF download, sale, or distribution license is offered here." : "本頁僅展示自行編曲的少量片段。原作品著作權歸相關權利人所有；網站不提供完整樂譜、PDF 下載、販售或發行授權。"}</p></div></section>

      <section className="score-final-cta section-pad"><div className="container-wide"><div><p className="eyebrow">ARRANGEMENT INQUIRIES</p><h2>{english ? "Have music you would like shaped for real players?" : "有想整理成適合演奏者使用的音樂嗎？"}</h2><p>{english ? "Tell me about the music, instrumentation, player level, and intended setting. We can begin by clarifying what the arrangement needs to accomplish." : "可以先說明曲目、編制、演奏者程度與使用情境，再一起確認編曲真正需要完成什麼。"}</p></div><Link className="button button-burgundy" href={contactHref}>{english ? "Arrangement Inquiries" : "編曲合作洽詢"}</Link></div></section>
    </main>
  );
}
