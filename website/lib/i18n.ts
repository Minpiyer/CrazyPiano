export type SiteLocale = "zh-Hant" | "en";

export const localizedRoutePairs = [
  ["/", "/en"],
  ["/about", "/en/about"],
  ["/lessons/kids", "/en/lessons/kids"],
  ["/lessons/adult", "/en/lessons/adult"],
  ["/contact", "/en/contact"],
  ["/lessons/kids/posture", "/en/lessons/kids/posture"],
  ["/lessons/kids/hand-shape", "/en/lessons/kids/hand-shape"],
  ["/lessons/kids/finger-action", "/en/lessons/kids/finger-action"],
  ["/lessons/kids/power", "/en/lessons/kids/power"],
  ["/lessons/kids/wrist-arm", "/en/lessons/kids/wrist-arm"],
  ["/lessons/kids/relaxation", "/en/lessons/kids/relaxation"],
] as const;

const zhToEn = new Map<string, string>(localizedRoutePairs);
const enToZh = new Map<string, string>(localizedRoutePairs.map(([zh, en]) => [en, zh]));

function normalizePathname(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/$/, "");
}

export function isEnglishPath(pathname: string) {
  const normalized = normalizePathname(pathname);
  return normalized === "/en" || normalized.startsWith("/en/");
}

export function getLanguageSwitchTarget(pathname: string, targetLocale: SiteLocale) {
  const normalized = normalizePathname(pathname);
  if (targetLocale === "en") return zhToEn.get(normalized) ?? "/en";
  return enToZh.get(normalized) ?? "/";
}

export function getLocalizedAlternates(zhPath: string, enPath: string) {
  return {
    "zh-Hant": zhPath,
    en: enPath,
    "x-default": zhPath,
  } as const;
}
