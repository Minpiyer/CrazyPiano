import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { routes } from "@/data/site";

type EditorialHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  quote?: string;
  image: string;
  imageAlt: string;
  variant: "about" | "gallery";
  badge: ReactNode;
};

export function EditorialHero({ eyebrow, title, intro, quote, image, imageAlt, variant, badge }: EditorialHeroProps) {
  return (
    <section className={`editorial-hero editorial-hero-${variant}`}>
      <div className="editorial-hero-grid container-wide">
        <div className="editorial-hero-copy">
          <nav className="editorial-breadcrumb" aria-label="麵包屑導覽"><Link href={routes.home}>HOME</Link><span>/</span><span>{variant.toUpperCase()}</span></nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="editorial-hero-intro">{intro}</p>
          {quote && <blockquote>{quote}</blockquote>}
          <Link className="button button-burgundy" href={routes.contact}>Book a Trial Lesson／預約試課</Link>
        </div>
        <div className="editorial-hero-visual">
          <div className="editorial-hero-image"><Image src={image} alt={imageAlt} fill preload sizes="(max-width: 900px) 92vw, 43vw" /></div>
          <div className="editorial-hero-badge">{badge}</div>
          <span className="editorial-hero-circle" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export function EditorialHeading({ index, eyebrow, title, intro, inverse = false }: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  inverse?: boolean;
}) {
  return (
    <header className={`editorial-heading${inverse ? " editorial-heading-inverse" : ""}`}>
      <div><p className="eyebrow">{index} — {eyebrow}</p><h2>{title}</h2></div>
      {intro && <div className="editorial-heading-intro">{intro}</div>}
    </header>
  );
}

export function EditorialPhoto({ src, alt, label, caption, className = "", permission = false, priority = false }: {
  src: string;
  alt: string;
  label: string;
  caption: string;
  className?: string;
  permission?: boolean;
  priority?: boolean;
}) {
  return (
    <figure className={`editorial-photo ${className}`} data-photo-permission={permission ? "Public use permission required before production launch" : undefined}>
      <div className="editorial-photo-image"><Image src={src} alt={alt} fill preload={priority} sizes="(max-width: 767px) 92vw, (max-width: 1100px) 48vw, 38vw" /></div>
      <figcaption><span>{label}</span><p>{caption}</p></figcaption>
    </figure>
  );
}

export function EditorialCta({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <section className="editorial-final-cta section-pad">
      <div className="editorial-final-grid container-wide">
        <div><p className="eyebrow">START HERE</p><h2>{title}</h2><div className="editorial-final-copy">{children}</div><Link className="button button-burgundy" href={routes.contact}>Book a Trial Lesson／預約試課 ↗</Link></div>
        <div className="editorial-record" aria-hidden="true"><span /></div>
        <p className="editorial-hand-note">No pressure.<br />Just music.</p>
      </div>
    </section>
  );
}
