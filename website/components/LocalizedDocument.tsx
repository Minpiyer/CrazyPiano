"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { isEnglishPath } from "@/lib/i18n";

export function LocalizedDocument() {
  const pathname = usePathname();
  const english = isEnglishPath(pathname);

  useEffect(() => {
    document.documentElement.lang = english ? "en" : "zh-Hant-TW";
  }, [english]);

  return <a className="skip-link" href="#main-content">{english ? "Skip to main content" : "跳到主要內容"}</a>;
}
