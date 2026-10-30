import type { KidsTechnique } from "@/data/kids-techniques";

export const kidsTechniquesEn: readonly KidsTechnique[] = [
  {
    slug: "posture",
    index: "01",
    title: "Balanced Piano Posture",
    englishTitle: "POSTURE",
    cardDescription: "Set the bench height and sitting position so the shoulders, arms, and wrists can move naturally.",
    summary: "Find a position that supports free movement without lifting the shoulders or reaching up toward the keys.",
    principles: [
      "After sitting down, let both arms hang naturally at your sides. Then lift the forearms to the keyboard. Ideally, the forearms should be roughly level with the keys.",
      "A bench that is too high or too low can create unnecessary tension in the shoulders, wrists, and arms. Sit on the front half of the bench rather than filling the whole seat, so the body can stay responsive and move across the keyboard.",
    ],
    practiceTitle: "Settle your body before you play",
    practiceIntro: "Let your arms hang first, then bring the forearms to the keyboard and check each point in order.",
    practiceSteps: ["Forearms are roughly level with the keys", "Shoulders stay down", "The body is not leaning too far forward", "Sit on the front half of the bench"],
    callout: "Sitting securely does not mean sitting rigidly. Good posture leaves room for movement.",
  },
  {
    slug: "hand-shape",
    index: "02",
    title: "Natural Hand Shape",
    englishTitle: "HAND SHAPE",
    cardDescription: "Bring the naturally curved shape of a relaxed hand to the keyboard without forcing a high arch.",
    summary: "Hand shape is a balance between relaxation, support, and freedom to move—not a pose to hold.",
    principles: [
      "The palm and fingers should keep a natural curve. Imagine gently holding an apple: there is space inside the hand, and the fingers remain comfortably rounded.",
      "Notice the shape of your hands when your arms hang loosely while walking. Relaxed fingers are not completely straight. Bring that natural shape to the keys instead of forcing the hand into an exaggerated arch.",
    ],
    practiceTitle: "Observe your relaxed hand first",
    practiceIntro: "Before adjusting anything at the piano, notice how the hand looks when the whole body is at ease.",
    practiceSteps: ["Let both arms hang naturally", "Notice the fingers' natural curve", "Keep space inside the palm", "Place the same relaxed shape gently on the keys"],
    callout: "A higher arch is not automatically better. The fingers need both support and freedom.",
  },
  {
    slug: "finger-action",
    index: "03",
    title: "Lifting and Dropping the Fingers",
    englishTitle: "FINGER ACTION",
    cardDescription: "Build a clear lift, drop, and supported landing for a focused, steady sound.",
    summary: "Lift clearly, drop into the key, support the sound, and then release unnecessary tension.",
    principles: [
      "Finger training develops strength, independence, and support. The finger that plays should lift first and then travel down into the key.",
      "At the moment of contact, the fingertip joint should stay curved rather than collapsing. Use the finger pad to meet the key. Stable support carries energy into the instrument and produces a more focused, resonant tone.",
    ],
    practiceTitle: "Use a clear, hammer-like motion",
    practiceIntro: "Begin in a fixed five-finger position on C–D–E–F–G and train one finger at a time.",
    practiceSteps: ["Lift the playing finger clearly", "Drop with a definite action", "Keep the fingertip joint curved", "Contact the key with the finger pad", "Keep the other fingers free of extra tension"],
    callout: "Lift → drop → support → release",
  },
  {
    slug: "power",
    index: "04",
    title: "How the Hand Uses Power",
    englishTitle: "POWER & SUPPORT",
    cardDescription: "Understand the different jobs of the arm, wrist, and fingers so effort is not trapped in one place.",
    summary: "Piano sound does not come from the fingers alone. Each part of the playing mechanism has a different role.",
    principles: [
      "The arm moves the whole hand across the keyboard and contributes weight to larger chords and stronger dynamics. Forte playing and a more projecting tone often require more support from the arm.",
      "The wrist helps chords travel and connect smoothly. The fingers handle fast note patterns, clarity, and finer control of tone.",
    ],
    concepts: [
      { label: "ARM", text: "Direction, movement, and larger-scale power." },
      { label: "WRIST", text: "Smooth movement and connection between chords." },
      { label: "FINGERS", text: "Fast notes, clarity, and detailed control." },
    ],
    practiceTitle: "Begin with two notes",
    practiceIntro: "Start with a C–E two-note chord—a third—and let the wrist guide the movement.",
    practiceSteps: ["Let the wrist carry the two-note chord", "Move upward in thirds", "Keep each transfer smooth and natural", "Do not force all the effort into the fingers"],
    callout: "Good power is not about using more effort. It is about using the right part at the right moment.",
  },
  {
    slug: "wrist-arm",
    index: "05",
    title: "Coordinating Wrist and Arm",
    englishTitle: "WRIST & ARM",
    cardDescription: "The wrist guides smooth changes of direction; the arm carries movement and strength.",
    summary: "The wrist and arm often work together in chord playing, but they do not do the same job.",
    principles: [
      "The wrist helps the hand change direction and connect chords smoothly as the playing position shifts.",
      "The arm carries the direction of the whole hand and contributes larger-scale power. A more projecting sound or stronger dynamic usually involves more support from the arm.",
    ],
    concepts: [
      { label: "WRIST", text: "Direction changes and smooth connection." },
      { label: "ARM", text: "Travel, direction, and power." },
    ],
    practiceTitle: "Separate the two sensations",
    practiceIntro: "When moving between chords, begin quietly and notice which part of the body is leading the motion.",
    practiceSteps: ["Let the wrist turn naturally between positions", "Let the arm guide the whole hand across the keyboard", "Do not lock the wrist when adding sound", "Return to a natural state after each action"],
    callout: "The wrist keeps the path fluid; the arm carries the hand where it needs to go.",
  },
  {
    slug: "relaxation",
    index: "06",
    title: "Avoiding Excess Tension",
    englishTitle: "RELAXATION",
    cardDescription: "Use energy quickly when it is needed, then release it as soon as the action is complete.",
    summary: "As the tempo rises, the fingers, wrist, and forearm must not remain continuously tense.",
    principles: [
      "Fast passages often make the hand tighten without notice. Too much muscular tension slows the fingers, increases mistakes, and makes speed harder to develop.",
      "Relaxation does not mean using no energy. It means applying effort quickly when the action requires it and releasing unnecessary tension immediately afterward.",
    ],
    practiceTitle: "Take the tempo back one step",
    practiceIntro: "When a fast passage becomes tight, slow down until the movement is natural and controllable again.",
    practiceSteps: ["Notice tension in the fingers, wrist, or forearm", "Reduce the tempo as soon as stiffness appears", "Keep the movement stable and released", "Increase the tempo gradually only after control returns"],
    callout: "Fast playing is not constant force. It is a quick exchange between effort and release.",
  },
] as const;

export function getKidsTechniqueEn(slug: string) {
  const technique = kidsTechniquesEn.find((item) => item.slug === slug);
  if (!technique) throw new Error(`Unknown English kids technique: ${slug}`);
  return technique;
}
