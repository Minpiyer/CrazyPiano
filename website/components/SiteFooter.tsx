import Link from "next/link";
import { lessonLinks, routes } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid container-wide">
        <div className="footer-brand">
          <p>CRAZY PIANO<br /><span>瘋鋼琴</span></p>
          <div>Play it your way.<br />把技巧練好，也把音樂變成自己的。</div>
        </div>
        <div className="footer-column">
          <h2>EXPLORE</h2>
          <Link href={routes.about}>關於徐老師</Link>
          <Link href={routes.gallery}>教學現場</Link>
          <Link href={routes.fees}>課程費用</Link>
          <Link href={routes.faq}>常見問題</Link>
        </div>
        <div className="footer-column">
          <h2>LESSONS</h2>
          {lessonLinks.map((link) => <Link key={link.href} href={link.href}>{link.zh}</Link>)}
        </div>
        <div className="footer-column">
          <h2>CONNECT</h2>
          <a href="https://www.youtube.com/@crazypiano5945" target="_blank" rel="noreferrer">YouTube</a>
          <a href="mailto:minpiyer@gmail.com">minpiyer@gmail.com</a>
          <Link href={routes.contact}>預約試課</Link>
          <span>中／English</span>
        </div>
      </div>
      <div className="footer-bottom container-wide">
        <span>© 2026 CRAZY PIANO / DR. HSU. ALL RIGHTS RESERVED.</span>
        <span>TAIPEI ↔ WORLDWIDE ONLINE</span>
      </div>
    </footer>
  );
}
