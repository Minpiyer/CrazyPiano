import type { Metadata } from "next";

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
};

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const socialTitle = `${title}｜${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "zh_TW",
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
