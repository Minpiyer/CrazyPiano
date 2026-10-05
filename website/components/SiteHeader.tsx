"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { lessonLinks, routes } from "@/data/site";

const primaryLinks = [
  { href: routes.home, label: "Home" },
  { href: routes.about, label: "About" },
  { href: routes.gallery, label: "Gallery" },
  { href: routes.fees, label: "Lesson Fees" },
  { href: routes.faq, label: "FAQ" },
  { href: routes.contact, label: "Contact" },
] as const;

export function SiteHeader() {
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
        <Link className="brand" href={routes.home} aria-label="Crazy Piano 瘋鋼琴首頁">
          <span className="brand-mark" aria-hidden="true" />
          <span>CRAZY PIANO</span>
          <span className="brand-zh">瘋鋼琴</span>
        </Link>

        <nav className="desktop-nav" aria-label="主要導覽">
          <Link href={routes.home}>Home</Link>
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
                {lessonLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setDesktopLessonsOpen(false)}>
                    <span>{link.label}</span>
                    <small>{link.zh}</small>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {primaryLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <span className="language-switch" aria-label="Language switcher placeholder">中／EN</span>
          <Link className="button button-small button-burgundy desktop-trial" href={routes.contact}>
            預約試課 <span aria-hidden="true">↗</span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="mobile-menu" id="mobile-menu" aria-label="行動版主要導覽">
          <Link href={routes.home} onClick={closeMobile}>Home</Link>
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
              {lessonLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMobile}>
                  {link.zh}<small>{link.label}</small>
                </Link>
              ))}
            </div>
          )}
          {primaryLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMobile}>{link.label}</Link>
          ))}
          <Link className="button button-burgundy mobile-trial" href={routes.contact} onClick={closeMobile}>
            Book a Trial Lesson／預約試課
          </Link>
        </nav>
      )}
    </header>
  );
}
