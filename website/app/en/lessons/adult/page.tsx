import Link from "next/link";
import { LessonFaq } from "@/components/lessons/LessonFaq";
import { EditorialCard, LessonChecklist, LessonFinalCta, LessonHeading, LessonHero, LessonImageBlock } from "@/components/lessons/LessonShared";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Adult Piano Lessons | Beginners, Returning Players, and Favorite Music",
  description: "Personalized adult piano lessons for complete beginners, returning players, and anyone who wants to learn classical, pop, or a favorite piece with solid reading and technique.",
  path: "/en/lessons/adult",
  locale: "en",
  alternatePath: "/lessons/adult",
});

const beginnerSkills = ["Reading the staff", "Treble and bass clefs", "The grand staff", "Rhythm and pulse", "Beginning sight-reading", "Balanced posture", "Natural hand shape", "Basic finger and wrist coordination"] as const;
const reviewPoints = ["Previous learning experience", "Current level", "Technical condition", "Music-reading ability", "Music you want to play", "Learning goals"] as const;
const faq = [
  { question: "Can I start if I have never played before?", answer: "Yes. Complete beginners build notation, rhythm, posture, hand shape, and fundamental technique through explanations and repertoire suited to adult learners." },
  { question: "Can I return after many years away from the piano?", answer: "Yes. We first look at your previous experience and current ability, then resume from the point that makes sense. You do not have to restart with the first method book." },
  { question: "Do I have to study classical music?", answer: "No. Classical, pop, film, anime, game, and contemporary music can all be part of the plan. Reading, rhythm, and technique continue to develop along the way." },
  { question: "Can I focus on music I genuinely love?", answer: "Yes. A favorite piece can become an important starting point. If the available score is too difficult, we can discuss a custom arrangement." },
  { question: "What if I do not have much time to practice?", answer: "We can set realistic priorities around your schedule. The goal is to know exactly what each practice session is meant to accomplish." },
  { question: "Are online lessons available for adults?", answer: "Yes. The lesson format is adjusted to your level, repertoire, and learning needs." },
] as const;

export default function EnglishAdultPianoLessonsPage() {
  return (
    <main className="lesson-page lesson-page-adult" id="main-content">
      <LessonHero locale="en" eyebrow="ADULT PIANO LESSONS" title={<>Start with the music<br />you truly want to play.</>} intro="Whether you are a complete beginner, returning after a long break, or hoping to finish one piece you have always loved, lessons can be planned around your current level." core="Adult learners do not need to retrace one fixed path. We can begin from where you are now and from the music that genuinely matters to you." image="/images/lessons/adult-piano-lesson-ai.jpeg" imageAlt="AI-generated scene of an adult practicing at the piano" imageNote="AI-generated scene" variant="adult" badge={<><strong>START HERE</strong><span>Begin where you are</span></>} facts={["Beginner friendly", "Classical + Pop", "A personalized learning path"]} />

      <section className="lesson-section lesson-audience section-pad" id="lesson-overview"><div className="container-wide">
        <LessonHeading index="01" eyebrow="WHO IT'S FOR" title="Different backgrounds deserve different starting points." intro="Adult learners bring very different experiences. We first understand where you are, then decide what comes next." />
        <div className="lesson-card-grid lesson-card-grid-5">
          <EditorialCard label="BEGINNER" title="Complete Beginner" tone="mustard"><p>Start reading music and understanding the piano in a structured, adult-friendly way.</p></EditorialCard>
          <EditorialCard label="RETURN" title="Returning Player" tone="orange"><p>Reconnect with previous experience and rebuild from the right place.</p></EditorialCard>
          <EditorialCard label="CLASSICAL" title="Classical Music" tone="paper"><p>Explore repertoire through technique, style, and musical understanding.</p></EditorialCard>
          <EditorialCard label="POP" title="Pop / Contemporary" tone="burgundy"><p>Bring favorite songs into a learning path that can keep growing.</p></EditorialCard>
          <EditorialCard label="PLAY WHAT YOU LOVE" title="Favorite Music" tone="green"><p>Begin with a piece you love while developing reading and technique.</p></EditorialCard>
        </div>
      </div></section>

      <section className="lesson-section lesson-score section-pad"><div className="container-wide">
        <LessonHeading index="02" eyebrow="IF YOU'RE STARTING FROM ZERO" title="Begin from zero without being treated like a child." intro="The fundamentals still matter, but the language, pacing, and repertoire are designed for adult learners." />
        <LessonChecklist items={beginnerSkills} columns={2} />
      </div></section>

      <section className="lesson-section adult-returning section-pad"><div className="container-wide">
        <LessonHeading index="03" eyebrow="RETURNING PLAYER" title="Having studied before does not mean returning to Book One." intro="We look at what remains familiar, what needs rebuilding, and what you truly want to accomplish." inverse />
        <div className="lesson-review-grid">{reviewPoints.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div>
        <p className="lesson-pull-quote lesson-pull-quote-light">ASSESS → RECONNECT → MOVE FORWARD<br /><span>Understand where you are, then decide where to continue.</span></p>
      </div></section>

      <section className="lesson-section lesson-method section-pad"><div className="container-wide">
        <LessonImageBlock image="/images/lessons/adult-piano-teacher.png" alt="Dr. Hsu demonstrating at the piano" label="04 — PLAY WHAT YOU LOVE" title={<>“This is the piece I want to play.”<br />That can be an excellent starting point.</>}>
          <p>We consider your current level, the score&apos;s difficulty, its technical demands, and your reading ability. If the available score is beyond your present level, we can discuss a custom piano arrangement.</p>
          <Link className="text-link" href="/en/contact">Ask about custom arrangements →</Link>
        </LessonImageBlock>
      </div></section>

      <section className="lesson-section adult-repertoire section-pad"><div className="container-wide">
        <LessonHeading index="05" eyebrow="CLASSICAL + POP" title="The style can change. The learning still has direction." intro="Repertoire follows your interests, while theory, reading, and technique are added when the music calls for them." />
        <div className="repertoire-strip" aria-label="Musical styles available according to student interest"><span>CLASSICAL</span><span>POP</span><span>FILM MUSIC</span><span>ANIME / GAME</span><span>CONTEMPORARY</span></div>
      </div></section>

      <section className="lesson-section adult-method section-pad"><div className="container-wide">
        <LessonHeading index="06" eyebrow="HOW WE LEARN" title="Not a fixed syllabus—a clear, personal pace." inverse />
        <div className="lesson-card-grid lesson-card-grid-3"><EditorialCard label="01" title="Adjusted to Your Level" tone="orange"><p>We identify current strengths and needs before choosing a starting point.</p></EditorialCard><EditorialCard label="02" title="Technique + Musicianship" tone="mustard"><p>Lessons go beyond correct notes to rhythm, tone, phrasing, and understanding.</p></EditorialCard><EditorialCard label="03" title="Foundations When Needed" tone="paper"><p>Theory, reading, and technique support the music instead of crowding every lesson.</p></EditorialCard></div>
      </div></section>

      <section className="lesson-section lesson-faq-section section-pad"><div className="container-wide"><LessonHeading index="07" eyebrow="FAQ" title="Questions adult learners often ask." /><LessonFaq items={faq} /></div></section>
      <LessonFinalCta locale="en" title={<>Start with the piece<br />you truly want to play.</>}><p>You do not need to prepare every fundamental before contacting me. Tell me about your experience and your goal, and we will find a starting point that fits.</p></LessonFinalCta>
    </main>
  );
}
