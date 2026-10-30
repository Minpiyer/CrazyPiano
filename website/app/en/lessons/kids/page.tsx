import Link from "next/link";
import { LessonFaq } from "@/components/lessons/LessonFaq";
import { EditorialCard, LessonChecklist, LessonFinalCta, LessonHeading, LessonHero, LessonImageBlock } from "@/components/lessons/LessonShared";
import { kidsTechniquesEn } from "@/data/kids-techniques-en";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Kids Piano Lessons | Reading, Rhythm, and Technique",
  description: "Personalized kids piano lessons with Dr. Hsu, building music reading, rhythm, posture, and healthy piano technique. Online lessons are recommended for ages 7 and up.",
  path: "/en/lessons/kids",
  locale: "en",
  alternatePath: "/lessons/kids",
});

const scoreSkills = ["How the staff works", "Notes and letter names", "Treble clef", "Bass clef", "The grand staff", "High and low pitch", "Connecting notation to the keyboard", "How scales are built", "Foundational rhythm", "Beginning sight-reading"] as const;
const materials = ["Faber Piano Adventures", "Hanon", "Age-appropriate piano method books", "Supplementary repertoire", "Materials chosen for the student's level and learning pace"] as const;
const faq = [
  { question: "What age is best for online piano lessons?", answer: "Online lessons are generally recommended for children age 7 and up. The best fit also depends on attention, reading readiness, and how comfortably the child can follow directions." },
  { question: "Can a complete beginner start here?", answer: "Yes. Lessons begin with the staff, keyboard geography, rhythm, and natural playing posture, then gradually build true music-reading skills." },
  { question: "Does every student use the same method book?", answer: "No. Materials are selected according to age, level, learning pace, and current goals. Favorite pieces can be added when they support the student's development." },
  { question: "Will my child learn to read rather than memorize note names?", answer: "Yes. The goal is to understand how notes, rhythm, and keyboard positions work together, so the student can become an independent reader." },
  { question: "Can children learn music they genuinely enjoy?", answer: "Yes. Favorite music can be included while reading, rhythm, and healthy technique continue to develop." },
] as const;

export default function EnglishKidsPianoLessonsPage() {
  return (
    <main className="lesson-page lesson-page-kids" id="main-content">
      <LessonHero locale="en" eyebrow="KIDS PIANO LESSONS" title={<>Learn to read first.<br />Then play with freedom.</>} intro="We begin with notation, rhythm, and healthy posture, so children do more than memorize keys—they gradually understand the music they are playing." core="Build the ability to read and play with confidence, then grow toward the music your child truly enjoys." image="/images/lessons/kids-piano-student-2024.jpg" imageAlt="A young pianist performing with focus on stage" variant="kids" badge={<><strong>ONLINE</strong><span>Recommended for ages 7+</span></>} facts={["Online lessons: ages 7+", "Reading × rhythm", "Posture × technique"]} />

      <section className="lesson-section lesson-audience section-pad" id="lesson-overview"><div className="container-wide">
        <LessonHeading index="01" eyebrow="WHO IT'S FOR" title="For children building their first musical language." intro="There is no rush to memorize a long list of pieces. First, the eyes, ears, hands, and body learn how to work together." />
        <div className="lesson-card-grid lesson-card-grid-3">
          <EditorialCard label="START" title="First Piano Lessons" tone="orange"><p>Begin with the keyboard, notation, and rhythm in a clear and encouraging way.</p></EditorialCard>
          <EditorialCard label="ONLINE 7+" title="Online Learning" tone="mustard"><p>A good fit for children age 7 and up who are ready to follow directions and begin reading music.</p></EditorialCard>
          <EditorialCard label="FOUNDATION" title="Rebuilding the Basics" tone="green"><p>Students with prior experience can strengthen reading, posture, rhythm, or technical foundations.</p></EditorialCard>
        </div>
      </div></section>

      <section className="lesson-section lesson-score section-pad"><div className="container-wide">
        <LessonHeading index="02" eyebrow="READ THE SCORE" title={<>From the staff to<br />independent reading.</>} intro="Students do not simply memorize note names. They learn how symbols become rhythm, sound, and movement at the keyboard." />
        <LessonChecklist items={scoreSkills} columns={2} />
        <p className="lesson-pull-quote">SEE → UNDERSTAND → PLAY<br /><span>See it. Understand it. Play it.</span></p>
      </div></section>

      <section className="lesson-section lesson-technique section-pad" id="technique-foundations"><div className="container-wide">
        <LessonHeading index="03" eyebrow="POSTURE & TECHNIQUE" title="Use the body naturally from the very first lesson." intro="Good posture is not about staying frozen. It allows the fingers, wrists, arms, and body to support the music efficiently." inverse />
        <div className="lesson-card-grid lesson-card-grid-3">
          {kidsTechniquesEn.map((technique, index) => (
            <Link className="kids-technique-card-link" href={`/en/lessons/kids/${technique.slug}`} key={technique.slug} aria-label={`Read the ${technique.title} guide`}>
              <EditorialCard label={technique.index} title={technique.title} tone={index % 3 === 0 ? "orange" : index % 3 === 1 ? "paper" : "mustard"}>
                <p>{technique.cardDescription}</p><span className="kids-technique-card-action">READ THE GUIDE →</span>
              </EditorialCard>
            </Link>
          ))}
        </div>
      </div></section>

      <section className="lesson-section lesson-materials section-pad"><div className="container-wide">
        <LessonHeading index="04" eyebrow="MATERIALS" title="Method books are tools—not a single path every child must follow." intro="Materials are selected for the student's age, level, comprehension, and progress rather than forcing every child through the same book at the same speed." />
        <div className="lesson-material-list">{materials.map((material, index) => <div key={material}><span>{String(index + 1).padStart(2, "0")}</span><strong>{material}</strong></div>)}</div>
      </div></section>

      <section className="lesson-section lesson-method section-pad"><div className="container-wide">
        <LessonImageBlock image="/images/lessons/kids-piano-student-2024.jpg" alt="A child playing the piano with concentration" label="05 — HOW WE LEARN" title={<>Reading, rhythm, and technique<br />grow together.</>} reverse>
          <p>Each lesson responds to what the child currently understands and can practice. Reading, rhythm, and technique support one another; memorization and imitation never replace understanding.</p>
          <ul className="lesson-inline-list"><li>Adjusted to the student&apos;s pace</li><li>A clear next step for practice</li><li>Foundation and interest together</li></ul>
        </LessonImageBlock>
      </div></section>

      <section className="lesson-section lesson-faq-section section-pad"><div className="container-wide"><LessonHeading index="06" eyebrow="FAQ" title="Questions parents often ask." /><LessonFaq items={faq} /></div></section>
      <LessonFinalCta locale="en" title={<>Start with the first note<br />your child can truly read.</>}><p>Tell me your child&apos;s age, previous experience, and favorite music. We can begin by finding the right starting point together.</p></LessonFinalCta>
    </main>
  );
}
