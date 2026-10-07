import Link from "next/link";
import type { ReactNode } from "react";
import { routes } from "@/data/site";

export function InfoHero({ eyebrow, title, intro, variant, children }: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  variant: "fees" | "faq" | "contact";
  children: ReactNode;
}) {
  return (
    <section className={`info-hero info-hero-${variant}`}>
      <div className="info-hero-grid container-wide">
        <div className="info-hero-copy">
          <nav className="info-breadcrumb" aria-label="麵包屑導覽"><Link href={routes.home}>HOME</Link><span>/</span><span>{eyebrow}</span></nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <Link className="button button-burgundy" href={routes.contact}>Book a Trial Lesson／預約試課</Link>
        </div>
        <div className="info-hero-art" aria-hidden="true">{children}</div>
      </div>
    </section>
  );
}

export function InfoHeading({ index, eyebrow, title, intro, inverse = false }: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  inverse?: boolean;
}) {
  return (
    <header className={`info-heading${inverse ? " info-heading-inverse" : ""}`}>
      <div><p className="eyebrow">{index} — {eyebrow}</p><h2>{title}</h2></div>
      {intro && <div className="info-heading-intro">{intro}</div>}
    </header>
  );
}
