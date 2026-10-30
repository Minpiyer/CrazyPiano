import type { Metadata } from "next";
import { getLocalizedAlternates, type SiteLocale } from "@/lib/i18n";

export const SITE_NAME = "Crazy Piano｜瘋鋼琴";
export const SITE_URL = new URL("https://crazypiano.me");

const defaultOgImage = {
  url: "/images/profile/hsu-minpiyer-hero-enhanced.png",
  width: 1586,
  height: 992,
  alt: "徐家超於鋼琴前演奏的 Crazy Piano 品牌照片",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  locale?: SiteLocale;
  alternatePath?: string;
};

export function createPageMetadata({ title, description, path, locale = "zh-Hant", alternatePath }: PageMetadataInput): Metadata {
  const socialTitle = `${title}｜${SITE_NAME}`;
  const zhPath = locale === "en" ? alternatePath : path;
  const enPath = locale === "en" ? path : alternatePath;
  const languages = zhPath && enPath ? getLocalizedAlternates(zhPath, enPath) : undefined;

  return {
    title,
    description,
    alternates: { canonical: path, languages },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: locale === "en" ? "en_US" : "zh_TW",
      alternateLocale: locale === "en" ? ["zh_TW"] : alternatePath ? ["en_US"] : undefined,
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [defaultOgImage.url],
    },
  };
}

export const DEFAULT_OG_IMAGE = defaultOgImage;
