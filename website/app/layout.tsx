import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { IBM_Plex_Mono, Noto_Sans_TC, Noto_Serif_TC, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedDocument } from "@/components/LocalizedDocument";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const sans = Noto_Sans_TC({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Noto_Serif_TC({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  applicationName: SITE_NAME,
  title: { default: "Crazy Piano／瘋鋼琴｜徐家超博士鋼琴教學", template: "%s｜Crazy Piano／瘋鋼琴" },
  description: "徐家超的 Crazy Piano 鋼琴教學：看懂音樂，彈你想彈的。提供兒童、成人與線上鋼琴課程，以及 ABRSM、比賽準備和客製樂譜改編。",
  authors: [{ name: "徐家超", url: "/about" }],
  creator: "徐家超",
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Crazy Piano｜瘋鋼琴｜徐家超鋼琴教學",
    description: "看懂音樂，彈你想彈的。兒童、成人、線上鋼琴課程、ABRSM、比賽準備與客製樂譜改編。",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "zh_TW",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crazy Piano｜瘋鋼琴｜徐家超鋼琴教學",
    description: "看懂音樂，彈你想彈的。兒童、成人、線上鋼琴課程、ABRSM、比賽準備與客製樂譜改編。",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant-TW" data-scroll-behavior="smooth">
      <body className={`${sans.variable} ${serif.variable} ${display.variable} ${mono.variable}`}>
        <LocalizedDocument />
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
