export type RecitalImage = {
  src: string;
  width: number;
  height: number;
  altZh: string;
  altEn: string;
  captionZh: string;
  captionEn: string;
  layout: "landscape" | "portrait";
};

export const studentRecital2026 = {
  zhTitle: "2026 徐家超學生鋼琴發表會",
  enTitle: "2026 Dr. Hsu Student Piano Recital",
  zhDate: "2026 年 11 月 8 日",
  enDate: "November 8, 2026",
  venue: "雅什藝文",
  cover: "/images/events/2026-student-recital/recital-group-photo.jpg",
  poster: "/images/events/2026-student-recital/recital-poster-with-venue.png",
  programPreview: "/images/events/2026-student-recital/recital-program-preview.png",
  programPdf: "/images/events/2026-student-recital/recital-program.pdf",
  performanceVideoUrl: null as string | null,
} as const;

export const recitalImages: RecitalImage[] = [
  {
    src: "/images/events/2026-student-recital/recital-group-photo.jpg",
    width: 1706,
    height: 960,
    altZh: "2026 學生鋼琴發表會演出者與徐老師的舞台合照",
    altEn: "Performers and Dr. Hsu together on stage at the 2026 student piano recital",
    captionZh: "演出者與老師在舞台上留下共同完成的紀錄。",
    captionEn: "Performers and teacher together after sharing the stage.",
    layout: "landscape",
  },
  {
    src: "/images/events/2026-student-recital/teacher-coaching-piano-duet.jpg",
    width: 960,
    height: 1706,
    altZh: "徐老師在鋼琴旁協助兩位演出者準備合奏",
    altEn: "Dr. Hsu guiding two performers at the piano",
    captionZh: "上台前的整理，也是舞台經驗的一部分。",
    captionEn: "The final preparation before performing is part of the stage experience.",
    layout: "portrait",
  },
  {
    src: "/images/events/2026-student-recital/student-stage-performance.jpg",
    width: 960,
    height: 1706,
    altZh: "演出者在舞台鋼琴前演奏",
    altEn: "A performer playing the piano on stage",
    captionZh: "把平常的練習，帶到真正的舞台上完成。",
    captionEn: "Bringing everyday practice onto a real stage.",
    layout: "portrait",
  },
  {
    src: "/images/events/2026-student-recital/teacher-student-after-recital.jpg",
    width: 960,
    height: 1706,
    altZh: "徐老師與演出者在鋼琴旁合影",
    altEn: "Dr. Hsu and a performer beside the piano",
    captionZh: "演出之後，留下屬於這一次的舞台記憶。",
    captionEn: "A quiet record of this particular performance day.",
    layout: "portrait",
  },
  {
    src: "/images/events/2026-student-recital/teacher-young-performers.jpg",
    width: 960,
    height: 1706,
    altZh: "徐老師與兩位年輕演出者在鋼琴旁合影",
    altEn: "Dr. Hsu with two young performers beside the piano",
    captionZh: "每位學生，都有自己的準備方式與上台節奏。",
    captionEn: "Every student prepares and steps onto the stage in a different way.",
    layout: "portrait",
  },
  {
    src: "/images/events/2026-student-recital/family-recital-moment.jpg",
    width: 1706,
    height: 960,
    altZh: "發表會後老師、演出者與家庭在鋼琴旁合影",
    altEn: "Teacher, performers, and family members together after the recital",
    captionZh: "發表會也是學生、老師與家庭一起完成的一天。",
    captionEn: "A recital day is also something students, teachers, and families complete together.",
    layout: "landscape",
  },
  {
    src: "/images/events/2026-student-recital/family-stage-portrait.jpg",
    width: 960,
    height: 1706,
    altZh: "發表會後的舞台合影",
    altEn: "A stage portrait after the recital",
    captionZh: "音樂結束後，舞台上的故事仍被好好留下。",
    captionEn: "After the music ends, the stage still holds the story of the day.",
    layout: "portrait",
  },
  {
    src: "/images/events/2026-student-recital/teacher-student-stage-portrait.jpg",
    width: 960,
    height: 1706,
    altZh: "徐老師與演出者在舞台鋼琴旁合影",
    altEn: "Dr. Hsu and a performer beside the stage piano",
    captionZh: "一次完整演出，也是一段學習歷程的節點。",
    captionEn: "A complete performance marks one meaningful point in a longer learning journey.",
    layout: "portrait",
  },
];
