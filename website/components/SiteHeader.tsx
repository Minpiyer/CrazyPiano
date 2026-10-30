"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { lessonLinks, routes } from "@/data/site";
import { getLanguageSwitchTarget, isEnglishPath } from "@/lib/i18n";

const primaryLinks = [
  { href: routes.home, label: "Home" },
  { href: routes.about, label: "About" },
  { href: routes.gallery, label: "Gallery" },
  { href: routes.fees, label: "Lesson Fees" },
  { href: routes.faq, label: "FAQ" },
  { href: routes.contact, label: "Contact" },
] as const;

const englishPrimaryLinks = [
  { href: "/en", label: "Home" },
  { href: "/en/about", label: "About" },
  { href: "/en/contact", label: "Contact" },
] as const;

const englishLessonLinks = [
  { href: "/en/lessons/kids", label: "Kids Piano Lessons", note: "A clear musical foundation" },
  { href: "/en/lessons/adult", label: "Adult Piano Lessons", note: "Start from where you are" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const english = isEnglishPath(pathname);
  const homeHref = english ? "/en" : routes.home;
  const contactHref = english ? "/en/contact" : routes.contact;
  const activePrimaryLinks = english ? englishPrimaryLinks : primaryLinks;
  const activeLessonLinks = english ? englishLessonLinks : lessonLinks;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopLessonsOpen, setDesktopLessonsOpen] = useState(false);
  const [mobileLessonsOpen, setMobileLessonsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setDesktopLessonsOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileLessonsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={homeHref} aria-label={english ? "Crazy Piano home" : "Crazy Piano 瘋鋼琴首頁"}>
          <span className="brand-mark" aria-hidden="true" />
          <span>CRAZY PIANO</span>
          <span className="brand-zh">瘋鋼琴</span>
        </Link>

        <nav className="desktop-nav" aria-label={english ? "Main navigation" : "主要導覽"}>
          <Link href={homeHref}>Home</Link>
          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              type="button"
              aria-expanded={desktopLessonsOpen}
              aria-controls="desktop-lessons-menu"
              onClick={() => setDesktopLessonsOpen((open) => !open)}
            >
              Lessons <span aria-hidden="true">⌄</span>
            </button>
            {desktopLessonsOpen && (
              <div className="lesson-menu" id="desktop-lessons-menu">
                {activeLessonLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setDesktopLessonsOpen(false)}>
                    <span>{link.label}</span>
                    <small>{"zh" in link ? link.zh : link.note}</small>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {activePrimaryLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <span className="language-switch" aria-label="Language switcher">
            <Link className={english ? "" : "is-active"} href={getLanguageSwitchTarget(pathname, "zh-Hant")} hrefLang="zh-Hant">中</Link>
            <span aria-hidden="true">／</span>
            <Link className={english ? "is-active" : ""} href={getLanguageSwitchTarget(pathname, "en")} hrefLang="en">EN</Link>
          </span>
          <Link className="button button-small button-burgundy desktop-trial" href={contactHref}>
            {english ? "Book a Trial" : "預約試課"} <span aria-hidden="true">↗</span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? (english ? "Close menu" : "關閉選單") : (english ? "Open menu" : "開啟選單")}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="mobile-menu" id="mobile-menu" aria-label={english ? "Mobile navigation" : "行動版主要導覽"}>
          <Link href={homeHref} onClick={closeMobile}>Home</Link>
          <button
            type="button"
            className="mobile-lessons-toggle"
            aria-expanded={mobileLessonsOpen}
            aria-controls="mobile-lessons-menu"
            onClick={() => setMobileLessonsOpen((open) => !open)}
          >
            Lessons <span aria-hidden="true">{mobileLessonsOpen ? "−" : "+"}</span>
          </button>
          {mobileLessonsOpen && (
            <div className="mobile-lessons" id="mobile-lessons-menu">
              {activeLessonLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMobile}>
                  {english ? link.label : ("zh" in link ? link.zh : link.label)}
                  <small>{english ? ("note" in link ? link.note : link.label) : link.label}</small>
                </Link>
              ))}
            </div>
          )}
          {activePrimaryLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMobile}>{link.label}</Link>
          ))}
          <Link className="button button-burgundy mobile-trial" href={contactHref} onClick={closeMobile}>
            {english ? "Book a Trial Lesson" : "Book a Trial Lesson／預約試課"}
          </Link>
        </nav>
      )}
    </header>
  );
}
