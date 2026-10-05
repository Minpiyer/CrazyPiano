import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Sans_TC, Noto_Serif_TC, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const sans = Noto_Sans_TC({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Noto_Serif_TC({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Crazy Piano／瘋鋼琴｜徐家超博士鋼琴教學", template: "%s｜Crazy Piano／瘋鋼琴" },
  description: "臺北實體與全球線上鋼琴課。看懂音樂，彈你想彈的。兒童、成人、ABRSM、比賽與客製樂譜教學。",
  openGraph: {
    title: "Crazy Piano／瘋鋼琴",
    description: "看懂音樂，彈你想彈的。",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant-TW" data-scroll-behavior="smooth">
      <body className={`${sans.variable} ${serif.variable} ${display.variable} ${mono.variable}`}>
        <a className="skip-link" href="#main-content">跳到主要內容</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
