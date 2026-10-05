export const routes = {
  home: "/",
  about: "/about",
  gallery: "/gallery",
  fees: "/lesson-fees",
  faq: "/faq",
  contact: "/contact",
  kids: "/lessons/kids",
  adult: "/lessons/adult",
  exams: "/lessons/exams-competitions",
  custom: "/lessons/custom-scores",
} as const;

export const lessonLinks = [
  { href: routes.kids, label: "Kids Piano Lessons", zh: "兒童鋼琴課" },
  { href: routes.adult, label: "Adult Piano Lessons", zh: "成人鋼琴課" },
  { href: routes.exams, label: "Exams & Competitions", zh: "檢定與比賽" },
  { href: routes.custom, label: "Custom Piano Scores & Arrangements", zh: "客製樂譜與改編" },
] as const;

export const videos = [
  {
    title: "【瘋鋼琴】合手彈奏才能訓練你的視奏能力",
    category: "TEACHING / SIGHT READING",
    duration: "6:18",
    image: "/images/youtube/youtube-sight-reading-1d5kKyn0e0s.jpg",
    url: "https://www.youtube.com/watch?v=1d5kKyn0e0s",
  },
  {
    title: "【瘋鋼琴】如何做音樂 以ABRSM 2023-2024考曲中 B2為例",
    category: "ABRSM / MUSICAL INTERPRETATION",
    duration: "10:26",
    image: "/images/youtube/youtube-abrsm-MHoITHYaKqo.jpg",
    url: "https://www.youtube.com/watch?v=MHoITHYaKqo",
  },
  {
    title: "【瘋鋼琴】Kapustin’ Etude Op. 40 No. 8",
    category: "PERFORMANCE / MODERN CLASSICAL",
    duration: "3:00",
    image: "/images/youtube/youtube-kapustin-j7VB2m2s4wE.jpg",
    url: "https://www.youtube.com/watch?v=j7VB2m2s4wE",
  },
  {
    title: "【瘋鋼琴】殘響散歌——超技鋼琴＋爵士鼓版本（與老師合奏版）",
    category: "POP / CONTEMPORARY / ARRANGEMENT",
    duration: "3:07",
    image: "/images/youtube/youtube-zankyosanka-jbpx7LJPVLw.jpg",
    url: "https://www.youtube.com/watch?v=jbpx7LJPVLw",
  },
] as const;

export const launchReminders = {
  lineAddFriendUrl: "LINE add-friend URL required before production launch.",
  formBackend: "Form backend required during Next.js development.",
  photoPermissions: "Confirm every image marked Public use permission required before production launch.",
} as const;
