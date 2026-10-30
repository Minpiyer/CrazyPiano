import Image from "next/image";
import teachingInAction from "@/public/images/about/about-teaching-in-action-piano-cajon.jpg";
import { EditorialCta, EditorialHeading, EditorialHero } from "@/components/editorial/EditorialShared";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Dr. Hsu | Piano Teaching Philosophy",
  description: "Meet Dr. Hsu and the teaching philosophy behind Crazy Piano: build real music-reading, rhythm, technique, and understanding while following a path shaped by each student's goals.",
  path: "/en/about",
  locale: "en",
  alternatePath: "/about",
});

const foundations = ["Music reading", "Rhythm", "Hand shape and body use", "Technique", "Musical understanding"] as const;
const flexiblePaths = ["Repertoire", "Method books", "Classical / pop balance", "Exam and competition goals", "Custom arrangements", "Learning pace and direction"] as const;
const studentPaths = [
  ["CHILDREN", "Children", "Build reading, rhythm, and natural movement so children understand what they see and play."],
  ["ADULTS", "Adults", "Begin from your present experience and the music you truly want to play—without retracing one fixed path."],
  ["EXAMS & COMPETITIONS", "Exams & Competitions", "Plan technique, musical expression, and performance goals around the actual syllabus, repertoire, and timeline."],
  ["CUSTOM SCORES", "Custom Scores & Arrangements", "Turn favorite music into workable learning material while developing reading, rhythm, and coordination."],
] as const;

export default function EnglishAboutPage() {
  return (
    <main id="main-content" className="editorial-page about-page">
      <EditorialHero locale="en" variant="about" eyebrow="ABOUT CRAZY PIANO" title={<>The fundamentals have standards.<br />The musical path does not have to be the same for everyone.</>} intro="Music reading is one foundation I will not leave out. Beyond that, whether you want classical music, pop, exam preparation, or one piece you have always wanted to play, lessons can change with your goals." quote="Understand the music. Play what you love." image="/images/about/about-teacher-piano-portrait.png" imageAlt="Dr. Hsu performing at the piano" badge={<><strong>TEACHING</strong><span>SINCE 2007</span></>} />

      <section className="editorial-section about-philosophy section-pad"><div className="container-wide">
        <EditorialHeading index="01" eyebrow="TEACHING PHILOSOPHY" title={<>Understand the music.<br />Play what you love.</>} intro={<p>Crazy Piano is not about rejecting method books, and it is not directionless learning. The musical foundation stays consistent; the route toward each student&apos;s goal can change.</p>} />
        <div className="philosophy-board">
          <article className="philosophy-column philosophy-fixed"><span className="eyebrow">THE FOUNDATION</span><h3>These skills keep developing.</h3><ul>{foundations.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul></article>
          <div className="philosophy-core" aria-label="Core philosophy"><strong>Build the foundation</strong><span>Shape your own path</span></div>
          <article className="philosophy-column philosophy-flexible"><span className="eyebrow">YOUR PATH</span><h3>Adjust the route to your goals and interests.</h3><ul>{flexiblePaths.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul></article>
        </div>
        <p className="about-tool-note">Method books are tools,<br /><span>not the purpose of the lesson.</span></p>
      </div></section>

      <section className="editorial-section about-background section-pad"><div className="container-wide">
        <EditorialHeading index="02" eyebrow="ABOUT THE TEACHER" title="Complete musical training, applied to practical teaching." intro={<p>Professional training is not meant to make lessons intimidating. It makes it possible to see more clearly what a student is experiencing and what the next step should be.</p>} inverse />
        <div className="background-layout">
          <div className="degree-panel"><span>DOCTOR OF</span><strong>MUSICAL<br />ARTS</strong><p>Piano major<br />Classical piano background</p></div>
          <dl className="credential-ledger"><div><dt>01／TEACHING</dt><dd>Teaching since 2007</dd></div><div><dt>02／REPERTOIRE</dt><dd>Classical / Pop</dd></div><div><dt>03／COACHING</dt><dd>ABRSM coaching experience<br />Students coached through Grade 8</dd></div><div><dt>04／JUDGING</dt><dd>Exam- and competition-related judging experience</dd></div><div><dt>05／SCORE WORK</dt><dd>Custom arrangements<br />Transcription / Score writing</dd></div></dl>
        </div>
      </div></section>

      <section className="editorial-section about-why section-pad"><div className="about-why-grid container-wide">
        <div><p className="eyebrow">03 — WHY I TEACH THIS WAY</p><h2>Students keep going when they understand what they are doing.</h2></div>
        <div className="about-why-copy"><p>After years of teaching, I have found that students rarely continue because everyone follows the same book. They continue when they have real skills, understand what they are doing, and can also connect with music they genuinely enjoy.</p><p>Lessons therefore respond to age, level, experience, goals, and interests. Method books still have a place, but they serve the learning process rather than defining its limits.</p><blockquote>Build real ability—and keep a reason to love the music.</blockquote></div>
      </div></section>

      <section className="editorial-section about-action section-pad"><div className="about-action-grid container-wide">
        <div className="about-action-photo"><Image src={teachingInAction} alt="Dr. Hsu at the piano making music with a student playing cajón" fill sizes="(max-width: 600px) calc(100vw - 48px), 500px" /></div>
        <div className="about-action-copy"><p className="eyebrow">04 — TEACHING IN ACTION</p><h2>Lessons can also mean<br />making music together.</h2><p>A lesson is not always the teacher sitting beside the piano and listening. Ensemble playing, rhythm interaction, and demonstration can help students experience pulse, sound, and musical listening more directly.</p><blockquote>Music is meant to be shared.</blockquote></div>
      </div></section>

      <section className="editorial-section about-paths section-pad"><div className="container-wide">
        <EditorialHeading index="05" eyebrow="DIFFERENT STUDENTS, DIFFERENT PATHS" title="Different students need different routes." intro={<p>The teaching range may be the same, but starting points, repertoire, and goals can be very different.</p>} />
        <div className="about-path-grid">{studentPaths.map(([label, title, body], index) => <article className={`about-path-card about-path-${index + 1}`} key={label}><span>{label}</span><h3>{title}</h3><p>{body}</p><strong aria-hidden="true">↗</strong></article>)}</div>
      </div></section>

      <section className="editorial-section about-approachable section-pad"><div className="about-approachable-grid container-wide"><p className="approachable-number" aria-hidden="true">06</p><div><p className="eyebrow">PROFESSIONAL + APPROACHABLE</p><h2>Professional does not have to mean severe.</h2></div><div><p>Lessons have standards, but those standards exist to help students truly learn—not to create pressure. Every exercise should have a purpose, and every adjustment should make the music clearer.</p><blockquote>No pressure.<br />Just music.</blockquote></div></div></section>

      <EditorialCta locale="en" title={<>First, tell me<br />what you want to play.</>}><p>Whether you are learning for the first time, returning to the piano, preparing for an exam, or carrying one piece you have always wanted to play, we can begin from your present level and goal.</p></EditorialCta>
    </main>
  );
}
