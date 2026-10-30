export type KidsTechnique = {
  slug: string;
  index: string;
  title: string;
  englishTitle: string;
  cardDescription: string;
  summary: string;
  principles: readonly string[];
  concepts?: readonly { label: string; text: string }[];
  practiceTitle: string;
  practiceIntro: string;
  practiceSteps: readonly string[];
  callout: string;
};

export const kidsTechniques: readonly KidsTechnique[] = [
  {
    slug: "posture",
    index: "01",
    title: "正確坐姿",
    englishTitle: "POSTURE",
    cardDescription: "從琴椅高度與坐的位置開始，讓肩膀、手臂和手腕自然工作。",
    summary: "先找到能自由移動、又不需要聳肩或抬高手臂的位置。",
    principles: [
      "坐上琴椅後，先讓雙手自然垂放，再將前臂抬到琴鍵的位置。理想狀態是前臂與琴鍵大致呈水平。",
      "椅子太高或太低，都容易讓肩膀、手腕與手臂產生不必要的緊繃。坐琴椅時也不要整張坐滿，原則上坐前半部即可，讓身體能配合鍵盤左右移動。",
    ],
    practiceTitle: "坐好，再開始彈",
    practiceIntro: "先把手放下，再把前臂帶到琴鍵上，依序確認身體的位置。",
    practiceSteps: ["前臂與琴鍵大致水平", "肩膀沒有聳起", "身體沒有過度前傾", "琴椅只坐前半部"],
    callout: "坐得穩，不等於坐得僵。好的坐姿要讓身體保有移動空間。",
  },
  {
    slug: "hand-shape",
    index: "02",
    title: "自然手型",
    englishTitle: "HAND SHAPE",
    cardDescription: "把放鬆時自然彎曲的手指帶到琴鍵上，不刻意拱高。",
    summary: "手型不是擺出來的形狀，而是放鬆、支撐與活動之間的平衡。",
    principles: [
      "彈鋼琴時，手掌與手指應保持自然的拱形。可以想像手中輕輕握著一顆蘋果，手掌內部自然形成空間，手指也保持彎曲。",
      "也可以觀察走路時雙手自然垂下的形狀。人在放鬆時，手指本來就不會完全伸直；彈琴時就是把這個自然形狀帶到琴鍵上，而不是刻意把手拱得很高。",
    ],
    practiceTitle: "先觀察自然的手",
    practiceIntro: "不要急著在琴鍵上調整，先從身體放鬆時的手型開始。",
    practiceSteps: ["讓雙手自然垂在身體兩側", "觀察手指原本的彎曲弧度", "保持掌心內部的空間", "把同樣的形狀輕放到琴鍵上"],
    callout: "自然手型不是越圓越好；重點是手指能支撐，也能自由移動。",
  },
  {
    slug: "finger-action",
    index: "03",
    title: "手指落鍵與抬指",
    englishTitle: "FINGER ACTION",
    cardDescription: "建立清楚的抬指、落鍵與支撐，讓聲音集中而穩定。",
    summary: "手指先清楚抬起，再落鍵、支撐，最後回到放鬆。",
    principles: [
      "手指訓練的重點，是建立力量、獨立性與支撐能力。要彈奏的手指需要先抬起，再向下落鍵。",
      "落鍵時，手指最前端的關節要保持彎曲，不能塌陷，並使用指腹接觸琴鍵。穩定的支撐能讓力量完整傳到琴鍵上，聲音也會更集中、飽滿。",
    ],
    practiceTitle: "像小槌子一樣清楚",
    practiceIntro: "先在 C–D–E–F–G 五指固定位置，每次只訓練一根手指。",
    practiceSteps: ["手指主動而明確地抬起", "向下落鍵時有力量", "最前端關節保持彎曲", "使用指腹接觸琴鍵", "其他手指不要產生多餘緊張"],
    callout: "抬起 → 向下敲擊 → 支撐 → 放鬆",
  },
  {
    slug: "power",
    index: "04",
    title: "手的力量配置",
    englishTitle: "POWER & SUPPORT",
    cardDescription: "分清楚手臂、手腕與手指的工作，力量才不會全部擠在一處。",
    summary: "彈鋼琴不是所有聲音都只靠手指；不同部位有不同任務。",
    principles: [
      "手臂負責整隻手在鍵盤上的移動，以及較大的和弦與較強力度。需要 forte 以上的力度或更有穿透力的音色時，通常會使用更多手臂的重量與力量。",
      "手腕主要負責不同和弦之間的移動與圓滑銜接；手指則負責快速音群、音符清晰度，以及較細緻的音色控制。",
    ],
    concepts: [
      { label: "ARM／手臂", text: "方向、移動與較大的力量。" },
      { label: "WRIST／手腕", text: "和弦之間的移動與圓滑銜接。" },
      { label: "FINGERS／手指", text: "快速音群、清晰度與細緻控制。" },
    ],
    practiceTitle: "從兩個音開始",
    practiceIntro: "手腕可以先從 C–E 的兩音和弦，也就是三度音程開始。",
    practiceSteps: ["用手腕帶動兩音和弦", "依三度音程逐步上行", "觀察移動是否圓滑自然", "不要把所有力量都壓在手指上"],
    callout: "力量不是越多越好，而是由正確的部位在正確的時候工作。",
  },
  {
    slug: "wrist-arm",
    index: "05",
    title: "手腕與手臂的配合",
    englishTitle: "WRIST & ARM",
    cardDescription: "手腕負責轉向與圓滑，手臂負責移動方向與力量。",
    summary: "和弦演奏常同時使用手腕與手臂，但兩者的功能並不相同。",
    principles: [
      "手腕主要負責和弦之間的移動與銜接，讓不同位置之間的轉換更加圓滑。",
      "手臂負責整隻手移動的方向，以及較大的力量表現。當聲音需要更有穿透力、傳得更遠或需要更強力度時，會更多地運用手臂。",
    ],
    concepts: [
      { label: "WRIST／手腕", text: "負責轉向與圓滑。" },
      { label: "ARM／手臂", text: "負責方向與力量。" },
    ],
    practiceTitle: "先分清楚兩種感覺",
    practiceIntro: "練習和弦移動時，不必追求很大的聲音，先觀察動作由哪個部位帶領。",
    practiceSteps: ["換位置時讓手腕自然轉向", "整隻手移動時由手臂帶方向", "增加力度時不要鎖住手腕", "完成動作後回到自然狀態"],
    callout: "手腕讓路線圓滑，手臂把整隻手帶到需要的位置。",
  },
  {
    slug: "relaxation",
    index: "06",
    title: "避免過度僵硬",
    englishTitle: "RELAXATION",
    cardDescription: "需要出力時快速出力，完成動作後立即回到放鬆。",
    summary: "速度提高時，更要避免讓手指、手腕與前臂一直維持緊張。",
    principles: [
      "彈快速音群或提升樂曲速度時，手指與手部肌肉很容易不自覺縮緊。肌肉過度緊繃，反而會讓手指變得遲鈍、容易彈錯，也更難提高速度。",
      "放鬆不是完全不用力，而是需要出力時快速出力，完成動作後立即放鬆，不讓肌肉長時間維持不必要的緊張。",
    ],
    practiceTitle: "速度先退一步",
    practiceIntro: "遇到快速段落時，先降低速度，回到能自然控制動作的範圍。",
    practiceSteps: ["留意手指、手腕與前臂是否縮緊", "一僵硬就先降低速度", "保持動作放鬆而穩定", "確認能控制後再逐漸加速"],
    callout: "快速不是一直用力，而是出力與放鬆之間的快速切換。",
  },
] as const;

export function getKidsTechnique(slug: string) {
  const technique = kidsTechniques.find((item) => item.slug === slug);
  if (!technique) throw new Error(`Unknown kids technique: ${slug}`);
  return technique;
}
