export type ScorePreview = {
  src: string;
  width: number;
  height: number;
  zhAlt: string;
  enAlt: string;
  zhCaption: string;
  enCaption: string;
};

export type ScoreWork = {
  slug: "prince-ali" | "remember-me";
  zhTitle: string;
  enTitle: string;
  zhArrangement: string;
  enArrangement: string;
  zhDifficulty: string;
  enDifficulty: string;
  zhSummary: string;
  enSummary: string;
  zhConcept: string;
  enConcept: string;
  zhConceptTitle: string;
  enConceptTitle: string;
  zhPreviewTitle: string;
  enPreviewTitle: string;
  zhFeatures: readonly string[];
  enFeatures: readonly string[];
  previews: readonly ScorePreview[];
  videoUrl?: string;
};

export const scoreWorks: readonly ScoreWork[] = [
  {
    slug: "prince-ali",
    zhTitle: "Prince Ali",
    enTitle: "Prince Ali",
    zhArrangement: "鋼琴四手聯彈／第一部與第二部分部譜",
    enArrangement: "Piano Four Hands / Separate Primo and Secondo Parts",
    zhDifficulty: "中高階",
    enDifficulty: "Upper-intermediate to advanced",
    zhSummary: "以雙人合奏重新配置旋律、節奏推進與低音支撐，保留作品鮮明的舞台感與動能。",
    enSummary: "A two-player arrangement that redistributes melody, rhythmic drive, and bass support while preserving the music's theatrical energy.",
    zhConceptTitle: "兩個人共同完成一個作品。",
    enConceptTitle: "Two parts, one musical direction.",
    zhPreviewTitle: "好聽的作品，由兩個人共同合作，培養默契。",
    enPreviewTitle: "Enough to see the arranging decisions—not enough to reproduce the complete work.",
    zhConcept: "並非只有第一部負責旋律；有時第二部也會有自己的旋律線條，而在其他段落，第二部則扮演伴奏與支撐的角色。兩位演奏者需要互相聆聽，才能共同完成一個作品。",
    enConcept: "The primo part carries the principal melody, agile figures, and brighter register, while the secondo part shapes the rhythmic framework, bass direction, and harmonic weight. Each part remains musically complete while depending on shared pulse and breathing.",
    zhFeatures: ["旋律與伴奏分工清楚", "快速音型與節奏推進", "需要穩定合奏與聲部平衡"],
    enFeatures: ["Clear division of melodic and accompanying roles", "Fast figures and forward rhythmic motion", "Ensemble balance and a steady shared pulse"],
    previews: [
      { src: "/images/scores/prince-ali/primo-opening.webp", width: 1400, height: 989, zhAlt: "Prince Ali 第一部開頭樂譜預覽", enAlt: "Opening preview of the Prince Ali primo part", zhCaption: "第一部／開頭配置", enCaption: "Primo / Opening texture" },
      { src: "/images/scores/prince-ali/secondo-opening.webp", width: 1400, height: 989, zhAlt: "Prince Ali 第二部開頭樂譜預覽", enAlt: "Opening preview of the Prince Ali secondo part", zhCaption: "第二部／節奏與低音支撐", enCaption: "Secondo / Rhythm and bass support" },
      { src: "/images/scores/prince-ali/development-detail.webp", width: 1400, height: 667, zhAlt: "Prince Ali 第一聲部半音階伴奏型態局部預覽", enAlt: "Detail preview of a fast passage in the Prince Ali arrangement", zhCaption: "第一聲部變成許多半音階的伴奏型態，不再只是旋律。", enCaption: "Development detail / Fast figures and ensemble density" },
    ],
  },
  {
    slug: "remember-me",
    zhTitle: "Remember Me",
    enTitle: "Remember Me",
    zhArrangement: "鋼琴四手聯彈／第一部與第二部分部譜",
    enArrangement: "Piano Four Hands / Separate Primo and Secondo Parts",
    zhDifficulty: "中階",
    enDifficulty: "Intermediate",
    zhSummary: "複雜的節奏，完整呈現原曲人聲歌唱的即興感。",
    enSummary: "Complex rhythms preserve the improvisatory character of the original vocal line.",
    zhConceptTitle: "複雜的節奏，完整呈現原曲人聲歌唱的即興感。",
    enConceptTitle: "Complex rhythms preserve the improvisatory character of the original vocal line.",
    zhPreviewTitle: "兩個人一起完成這首優美的作品吧。",
    enPreviewTitle: "Two players, one beautiful piece—shape it together.",
    zhConcept: "",
    enConcept: "",
    zhFeatures: ["一部的旋律線條", "充滿流動性的伴奏型態", "快速音群帶來充滿動能的表現"],
    enFeatures: ["The primo melodic line", "A flowing accompaniment texture", "Fast note groups that create momentum"],
    previews: [
      { src: "/images/scores/remember-me/primo-opening.webp", width: 1400, height: 989, zhAlt: "Remember Me 一部旋律線條樂譜預覽", enAlt: "Preview of the Remember Me primo melodic line", zhCaption: "一部的旋律線條", enCaption: "The primo melodic line" },
      { src: "/images/scores/remember-me/secondo-opening.webp", width: 1400, height: 989, zhAlt: "Remember Me 二部流動伴奏型態樂譜預覽", enAlt: "Preview of the flowing accompaniment in the Remember Me secondo part", zhCaption: "充滿流動性的伴奏型態", enCaption: "A flowing accompaniment texture" },
      { src: "/images/scores/remember-me/fast-passage-detail.webp", width: 1400, height: 775, zhAlt: "Remember Me 快速音群局部樂譜預覽", enAlt: "Detail preview of fast note groups in the Remember Me arrangement", zhCaption: "快速音群帶來充滿動能的表現", enCaption: "Fast note groups that create momentum" },
    ],
  },
] as const;

export function getScoreWork(slug: ScoreWork["slug"]) {
  const work = scoreWorks.find((item) => item.slug === slug);
  if (!work) throw new Error(`Unknown score work: ${slug}`);
  return work;
}
