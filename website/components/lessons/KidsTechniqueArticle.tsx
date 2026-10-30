import Link from "next/link";
import type { KidsTechnique } from "@/data/kids-techniques";

export function KidsTechniqueArticle({ technique }: { technique: KidsTechnique }) {
  return (
    <main className="kids-technique-page" id="main-content">
      <section className="kids-technique-hero">
        <div className="kids-technique-hero-grid container-wide">
          <div>
            <nav className="lesson-breadcrumb" aria-label="麵包屑導覽">
              <Link href="/">HOME</Link><span aria-hidden="true">／</span>
              <Link href="/lessons/kids">兒童鋼琴課</Link><span aria-hidden="true">／</span>
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
              <p className="eyebrow">01 — KEY IDEA／重點說明</p>
              <h2 id="principle-heading">先理解動作，<br />再讓身體記住。</h2>
              {technique.principles.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
            <aside className="kids-technique-callout">
              <span className="eyebrow">REMEMBER</span>
              <blockquote>{technique.callout}</blockquote>
            </aside>
          </div>

          {technique.concepts && (
            <div className="kids-technique-concepts" aria-label="部位功能重點">
              {technique.concepts.map((concept) => (
                <div key={concept.label}><span>{concept.label}</span><strong>{concept.text}</strong></div>
              ))}
            </div>
          )}

          <section className="kids-technique-practice" aria-labelledby="practice-heading">
            <div className="kids-technique-practice-heading">
              <p className="eyebrow">02 — TRY THIS／練習方法</p>
              <h2 id="practice-heading">{technique.practiceTitle}</h2>
              <p>{technique.practiceIntro}</p>
            </div>
            <ol className="kids-technique-steps">
              {technique.practiceSteps.map((step, index) => (
                <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>
              ))}
            </ol>
          </section>

          <TechniqueNavigation currentSlug={technique.slug} />
        </div>
      </article>
    </main>
  );
}

function TechniqueNavigation({ currentSlug }: { currentSlug: string }) {
  const techniques = [
    ["posture", "正確坐姿"],
    ["hand-shape", "自然手型"],
    ["finger-action", "手指落鍵與抬指"],
    ["power", "手的力量配置"],
    ["wrist-arm", "手腕與手臂的配合"],
    ["relaxation", "避免過度僵硬"],
  ] as const;
  const currentIndex = techniques.findIndex(([slug]) => slug === currentSlug);
  const previous = currentIndex > 0 ? techniques[currentIndex - 1] : null;
  const next = currentIndex < techniques.length - 1 ? techniques[currentIndex + 1] : null;

  return (
    <nav className="kids-technique-navigation" aria-label="兒童技巧文章導覽">
      <Link className="button button-paper kids-technique-back" href="/lessons/kids#technique-foundations">← 返回兒童鋼琴課程</Link>
      <div className="kids-technique-prev-next">
        {previous ? <Link href={`/lessons/kids/${previous[0]}`}><span>上一篇</span><strong>← {previous[1]}</strong></Link> : <span />}
        {next ? <Link href={`/lessons/kids/${next[0]}`}><span>下一篇</span><strong>{next[1]} →</strong></Link> : <span />}
      </div>
    </nav>
  );
}
