"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessonLinks, routes } from "@/data/site";
import { getLanguageSwitchTarget, isEnglishPath } from "@/lib/i18n";

export function SiteFooter() {
  const pathname = usePathname();
  const english = isEnglishPath(pathname);
  const contactHref = english ? "/en/contact" : routes.contact;
  return (
    <footer className="site-footer">
      <div className="footer-grid container-wide">
        <div className="footer-brand">
          <p>CRAZY PIANO<br /><span>瘋鋼琴</span></p>
          <div>{english ? <>Play it your way.<br />Build the skills. Make the music yours.</> : <>Play it your way.<br />把技巧練好，也把音樂變成自己的。</>}</div>
        </div>
        <div className="footer-column">
          <h2>EXPLORE</h2>
          <Link href={english ? "/en/about" : routes.about}>{english ? "About Dr. Hsu" : "關於徐老師"}</Link>
          {!english && <Link href={routes.gallery}>教學現場</Link>}
          {!english && <Link href={routes.fees}>課程費用</Link>}
          {!english && <Link href={routes.faq}>常見問題</Link>}
        </div>
        <div className="footer-column">
          <h2>LESSONS</h2>
          {english ? <><Link href="/en/lessons/kids">Kids Piano Lessons</Link><Link href="/en/lessons/adult">Adult Piano Lessons</Link></> : lessonLinks.map((link) => <Link key={link.href} href={link.href}>{link.zh}</Link>)}
        </div>
        <div className="footer-column">
          <h2>CONNECT</h2>
          <a href="https://www.youtube.com/@crazypiano5945" target="_blank" rel="noreferrer">YouTube</a>
          <a href="mailto:minpiyer@gmail.com">minpiyer@gmail.com</a>
          <Link href={contactHref}>{english ? "Book a Trial Lesson" : "預約試課"}</Link>
          <span className="footer-language-switch"><Link href={getLanguageSwitchTarget(pathname, "zh-Hant")} hrefLang="zh-Hant">中文</Link>／<Link href={getLanguageSwitchTarget(pathname, "en")} hrefLang="en">English</Link></span>
        </div>
      </div>
      <div className="footer-bottom container-wide">
        <span>© 2026 CRAZY PIANO / DR. HSU. ALL RIGHTS RESERVED.</span>
        <span>TAIPEI ↔ WORLDWIDE ONLINE</span>
      </div>
    </footer>
  );
}
