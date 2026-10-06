import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { routes } from "@/data/site";

type HeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  core: string;
  image: string;
  imageAlt: string;
  variant: "kids" | "adult" | "exams" | "custom";
  badge?: ReactNode;
  facts: readonly string[];
};

export function LessonHero({ eyebrow, title, intro, core, image, imageAlt, variant, badge, facts }: HeroProps) {
  return (
    <section className={`lesson-hero lesson-hero-${variant}`}>
      <div className="lesson-hero-grid container-wide">
        <div className="lesson-hero-copy">
          <nav className="lesson-breadcrumb" aria-label="麵包屑導覽">
            <Link href={routes.home}>HOME</Link><span aria-hidden="true">／</span><span>LESSONS</span>
          </nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lesson-hero-intro">{intro}</p>
          <blockquote>{core}</blockquote>
          <div className="button-row">
            <Link className="button button-burgundy" href={routes.contact}>Book a Trial Lesson／預約試課</Link>
            <a className="button button-paper" href="#lesson-overview">看看課程內容</a>
          </div>
          <ul className="lesson-hero-facts" aria-label="課程重點">
            {facts.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
        </div>
        <div className="lesson-hero-visual">
          <div className="lesson-hero-image">
            <Image src={image} alt={imageAlt} fill preload sizes="(max-width: 900px) 92vw, 43vw" />
          </div>
          {badge && <div className="lesson-hero-badge">{badge}</div>}
          <span className="lesson-hero-shape" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
export function LessonHeading({ index, eyebrow, title, intro, inverse = false }: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  inverse?: boolean;
}) {
  return (
    <header className={`lesson-heading${inverse ? " lesson-heading-inverse" : ""}`}>
      <div><p className="eyebrow">{index} — {eyebrow}</p><h2>{title}</h2></div>
      {intro && <div className="lesson-heading-intro">{intro}</div>}
    </header>
  );
}

export function EditorialCard({ label, title, children, tone = "paper" }: {
  label: string;
  title: string;
  children: ReactNode;
  tone?: "paper" | "orange" | "mustard" | "burgundy" | "green";
}) {
  return (
    <article className={`lesson-editorial-card lesson-tone-${tone}`}>
      <span className="eyebrow">{label}</span>
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}

export function LessonChecklist({ items, columns = 2 }: { items: readonly string[]; columns?: 2 | 3 }) {
  return (
    <ul className={`lesson-checklist lesson-checklist-${columns}`}>
      {items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
    </ul>
  );
}

export function LessonImageBlock({ image, alt, label, title, children, reverse = false }: {
  image: string;
  alt: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className={`lesson-image-block${reverse ? " lesson-image-block-reverse" : ""}`}>
      <div className="lesson-image-block-photo"><Image src={image} alt={alt} fill sizes="(max-width: 900px) 92vw, 46vw" /></div>
      <div className="lesson-image-block-copy"><p className="eyebrow">{label}</p><h2>{title}</h2>{children}</div>
    </div>
  );
}

export function LessonFinalCta({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <section className="lesson-final-cta section-pad">
      <div className="lesson-final-grid container-wide">
        <div><p className="eyebrow">START HERE</p><h2>{title}</h2><div className="lesson-final-copy">{children}</div><Link className="button button-burgundy" href={routes.contact}>Book a Trial Lesson／預約試課 ↗</Link></div>
        <div className="lesson-record" aria-hidden="true"><span /></div>
        <p className="lesson-hand-note">No pressure.<br />Just music.</p>
      </div>
    </section>
  );
}

