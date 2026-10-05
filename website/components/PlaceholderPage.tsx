import Link from "next/link";
import { routes } from "@/data/site";

export function PlaceholderPage({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <main className="placeholder-page">
      <section className="placeholder-card">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>此頁面的完整設計將於下一輪依正式 Pen 設計稿實作。</p>
        <Link className="button button-burgundy" href={routes.home}>返回首頁</Link>
      </section>
    </main>
  );
}
