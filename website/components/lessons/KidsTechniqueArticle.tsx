import Link from "next/link";
import { kidsTechniques, type KidsTechnique } from "@/data/kids-techniques";
import type { SiteLocale } from "@/lib/i18n";

export function KidsTechniqueArticle({ technique, locale = "zh-Hant", techniques = kidsTechniques }: { technique: KidsTechnique; locale?: SiteLocale; techniques?: readonly KidsTechnique[] }) {
  const english = locale === "en";
  return (
    <main className="kids-technique-page" id="main-content">
      <section className="kids-technique-hero">
        <div className="kids-technique-hero-grid container-wide">
          <div>
            <nav className="lesson-breadcrumb" aria-label={english ? "Breadcrumb" : "麵包屑導覽"}>
              <Link href={english ? "/en" : "/"}>HOME</Link><span aria-hidden="true">／</span>
              <Link href={english ? "/en/lessons/kids" : "/lessons/kids"}>{english ? "Kids Piano Lessons" : "兒童鋼琴課"}</Link><span aria-hidden="true">／</span>
              <span>{technique.title}</span>
            </nav>
            <p className="eyebrow">KIDS TECHNIQUE {technique.index} — {technique.englishTitle}</p>
            <h1>{technique.title}</h1>
            <p className="kids-technique-summary">{technique.summary}</p>
          </div>
          <div className="kids-technique-number" aria-hidden="true">
            <span>{technique.index}</span>
            <small>FOUNDATION</small>
          </div>
        </div>
      </section>

      <article className="kids-technique-content section-pad">
        <div className="container-wide">
          <div className="kids-technique-reading-grid">
            <section className="kids-technique-copy" aria-labelledby="principle-heading">
              <p className="eyebrow">01 — {english ? "KEY IDEA" : "KEY IDEA／重點說明"}</p>
              <h2 id="principle-heading">{english ? <>Understand the movement.<br />Then let the body remember.</> : <>先理解動作，<br />再讓身體記住。</>}</h2>
              {technique.principles.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
            <aside className="kids-technique-callout">
              <span className="eyebrow">REMEMBER</span>
              <blockquote>{technique.callout}</blockquote>
            </aside>
          </div>

          {technique.concepts && (
            <div className="kids-technique-concepts" aria-label={english ? "Playing mechanism highlights" : "部位功能重點"}>
              {technique.concepts.map((concept) => (
                <div key={concept.label}><span>{concept.label}</span><strong>{concept.text}</strong></div>
              ))}
            </div>
          )}

          <section className="kids-technique-practice" aria-labelledby="practice-heading">
            <div className="kids-technique-practice-heading">
              <p className="eyebrow">02 — {english ? "TRY THIS" : "TRY THIS／練習方法"}</p>
              <h2 id="practice-heading">{technique.practiceTitle}</h2>
              <p>{technique.practiceIntro}</p>
            </div>
            <ol className="kids-technique-steps">
              {technique.practiceSteps.map((step, index) => (
                <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>
              ))}
            </ol>
          </section>

          <TechniqueNavigation currentSlug={technique.slug} locale={locale} techniques={techniques} />
        </div>
      </article>
    </main>
  );
}

function TechniqueNavigation({ currentSlug, locale, techniques }: { currentSlug: string; locale: SiteLocale; techniques: readonly KidsTechnique[] }) {
  const english = locale === "en";
  const basePath = english ? "/en/lessons/kids" : "/lessons/kids";
  const currentIndex = techniques.findIndex(({ slug }) => slug === currentSlug);
  const previous = currentIndex > 0 ? techniques[currentIndex - 1] : null;
  const next = currentIndex < techniques.length - 1 ? techniques[currentIndex + 1] : null;

  return (
    <nav className="kids-technique-navigation" aria-label={english ? "Kids technique lesson navigation" : "兒童技巧文章導覽"}>
      <Link className="button button-paper kids-technique-back" href={`${basePath}#technique-foundations`}>{english ? "← Back to Kids Piano Lessons" : "← 返回兒童鋼琴課程"}</Link>
      <div className="kids-technique-prev-next">
        {previous ? <Link href={`${basePath}/${previous.slug}`}><span>{english ? "Previous" : "上一篇"}</span><strong>← {previous.title}</strong></Link> : <span />}
        {next ? <Link href={`${basePath}/${next.slug}`}><span>{english ? "Next" : "下一篇"}</span><strong>{next.title} →</strong></Link> : <span />}
      </div>
    </nav>
  );
}
