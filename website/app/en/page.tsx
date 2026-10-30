import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { videos } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Crazy Piano | Personalized Piano Lessons with Dr. Hsu",
  description: "Personalized piano lessons for children and adults with Dr. Hsu. Build music reading and technique while learning classical, pop, ABRSM, and music you truly want to play.",
  path: "/en",
  locale: "en",
  alternatePath: "/",
});

const strengths = [
  ["01", "A Personal Pace", "Plan steady progress around your goals, current level, and real-life practice schedule."],
  ["02", "A Solid Foundation", "Develop reading, rhythm, touch, and musical context—not just one finished piece."],
  ["03", "Exams and Performance", "Prepare for ABRSM, competitions, and recitals with clear technical and performance goals."],
  ["04", "Music You Love", "Adapt pop, anime, film, or contemporary music to a level you can genuinely learn from."],
] as const;

const studentTypes = [
  ["KIDS 7+", "Children", "Build a confident first step through reading, listening, rhythm, and natural movement."],
  ["ADULTS", "Adult Learners", "Begin from zero, return after a break, or work toward one piece you have always wanted to play."],
  ["ABRSM", "Exam Preparation", "Organize repertoire, scales, sight-reading, and performance preparation around a clear goal."],
  ["ONLINE", "Worldwide Online", "Online lessons for students abroad, with learning plans adapted to level, goals, and time zone."],
] as const;

const lessonCards = [
  { href: "/en/lessons/kids", label: "KIDS", title: "Kids Piano Lessons", body: "Build music reading, rhythm, posture, and technique from a clear foundation.", note: "Online lessons recommended for ages 7+", action: "Explore lessons" },
  { href: "/en/lessons/adult", label: "ADULTS", title: "Adult Piano Lessons", body: "Begin from zero, return to the piano, or learn music you genuinely care about.", note: "Classical / Pop / Returning players", action: "Explore lessons" },
  { href: "/en/contact", label: "EXAMS", title: "Exams & Competitions", body: "Plan technique, reading, musical expression, and stage preparation around the actual requirements.", note: "ABRSM coaching through Grade 8", action: "Ask about preparation" },
  { href: "/en/contact", label: "ARRANGE", title: "Custom Piano Arrangements", body: "Keep the character of a favorite song while adjusting difficulty, texture, and hand coordination.", note: "Planned according to the music and student", action: "Ask about arrangements" },
] as const;

const faq = [
  ["Who can take lessons?", "Children, teenagers, and adults are welcome. Online lessons for children are generally recommended from age 7."],
  ["Can an adult complete beginner start?", "Yes. A trial lesson helps clarify your experience, goals, and the music you want to play."],
  ["Can beginners learn online?", "Yes. A trial lesson can help determine whether the format and current setup are a good fit."],
  ["Can you help with ABRSM preparation?", "Yes. Dr. Hsu has coached students through Grade 8, including repertoire, technique, and sight-reading."],
  ["Can you arrange a song I want to play?", "Yes. A piece can be adapted to the student's present level while preserving its musical identity."],
  ["How do I begin?", "Share your age, location, current level, and what you would like to learn. We can then discuss a useful starting point."],
] as const;

const englishVideoTitles = [
  "Developing Sight-Reading Through Hands-Together Playing",
  "Making Music in an ABRSM Repertoire Piece",
  "Kapustin Etude Op. 40 No. 8",
  "Zankyosanka: Virtuosic Piano and Drum Arrangement",
] as const;

export default function EnglishHomePage() {
  return (
    <main id="main-content">
      <section className="hero section-pad"><div className="hero-grid container-wide">
        <div className="hero-copy"><p className="issue-label">PIANO LESSONS • TAIPEI + ONLINE • ISSUE 01</p><p className="hero-eyebrow">In-person in Taipei × Worldwide online｜Children, teens, and adults</p><h1>PLAY IT<br />YOUR WAY.</h1><h2>Understand the music. Play what you love.</h2><p className="hero-lead">Music reading is the foundation. Beyond that, lessons can change with your interests and goals.<br className="desktop-break" />Classical music, pop, exams, or one song you have always wanted to play can all become part of the learning process.</p><div className="button-row"><Link className="button button-orange" href="/en/contact">Book a Trial Lesson</Link><Link className="button button-paper" href="/en/about">Meet Dr. Hsu</Link></div><ul className="hero-facts" aria-label="Teacher credentials"><li>Doctor of Musical Arts</li><li>Teaching since 2007</li><li>Children・Teens・Adults</li><li>Classical・Pop・ABRSM・Arranging</li></ul></div>
        <div className="hero-visual"><div className="hero-image-frame"><Image src="/images/profile/hsu-minpiyer-hero-enhanced.png" alt="Dr. Hsu performing at the piano" fill priority sizes="(max-width: 767px) 88vw, 42vw" /></div><div className="doctorate-sticker" aria-label="Doctor of Musical Arts 2018"><strong>DOCTOR OF</strong><span>MUSICAL ARTS • 2018</span></div></div>
      </div><div className="credential-ticker" aria-label="Teacher credentials"><span>Doctor of Musical Arts｜Fu Jen University</span><span>Teaching since 2007</span><span>Children・Teens・Adults</span><span>CLASSICAL・POP・ABRSM・ARRANGING</span></div></section>

      <section className="strengths section-pad"><div className="container-wide"><SectionHeading index="01" eyebrow="WHY CRAZY PIANO" title={<>A clear direction—and a reason<br />to keep loving the music.</>} note={<>Technique × musicianship × interest<br />Leave every lesson with a clear next step</>} /><div className="four-grid strength-grid">{strengths.map(([number, title, body], index) => <article className={`editorial-card tone-${index + 1}`} key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <section className="student-types section-pad"><div className="container-wide"><SectionHeading index="02" eyebrow="WHO IT'S FOR" title="Every age can find its own musical voice." note="CHILDREN / ADULTS / EXAMS / ONLINE" inverse /><div className="four-grid student-grid">{studentTypes.map(([label, title, body], index) => <article className={`student-card tone-${index + 1}`} key={label}><span className="eyebrow">{label}</span><h3>{title}</h3><p>{body}</p><span className="card-arrow" aria-hidden="true">↗</span></article>)}</div></div></section>

      <section className="about-home section-pad"><div className="about-grid container-wide"><div className="about-photo-stack"><div className="about-number" aria-hidden="true">03</div><div className="about-photo"><Image src="/images/about/about-teacher-student-stage-2024.jpg" alt="Dr. Hsu interacting with a student beside the stage" fill sizes="(max-width: 767px) 88vw, 40vw" /></div><div className="degree-seal">D.M.A.<small>DOCTOR OF MUSICAL ARTS</small></div></div><div className="about-copy"><p className="eyebrow">ABOUT DR. HSU</p><h2>Professional training can be rigorous.<br />Learning can still be engaging.</h2><p>A piano major with violin as a secondary instrument, Dr. Hsu earned a Doctor of Musical Arts degree from Fu Jen Catholic University in 2018. He has taught since 2007 and brings experience in classical piano, ABRSM coaching, competitions, and exam-related judging.</p><blockquote>Let technique, musical foundation, and genuine interest grow together.</blockquote><div className="fact-grid"><div><small>DEGREE</small><strong>Doctor of<br />Musical Arts</strong><span>Fu Jen • 2018</span></div><div><small>TEACHING</small><strong>Teaching<br />since 2007</strong><span>Children • Teens • Adults</span></div><div><small>EXPERIENCE</small><strong>ABRSM &<br />Judging</strong><span>Grade 8 coaching</span></div></div><Link className="button button-coffee" href="/en/about">Full Profile →</Link></div></div></section>

      <section className="video-portfolio section-pad"><div className="container-wide"><SectionHeading index="04" eyebrow="VIDEO PORTFOLIO / TEACHING PORTFOLIO" title="Crazy Piano／瘋鋼琴" note={<>See how I teach, coach, perform,<br />and work across different styles.</>} inverse /><div className="video-layout"><a className="video-featured" href={videos[0].url} target="_blank" rel="noreferrer"><div className="video-image"><Image src={videos[0].image} alt="Sight-reading teaching video thumbnail" fill sizes="(max-width: 900px) 92vw, 58vw" /><span className="play-button" aria-hidden="true">▶</span></div><span className="video-meta">{videos[0].category} • {videos[0].duration}</span><h3>{englishVideoTitles[0]}</h3><span className="watch-link">WATCH ON YOUTUBE ↗</span></a><div className="video-secondary-list">{videos.slice(1).map((video, index) => <a className="video-secondary" href={video.url} target="_blank" rel="noreferrer" key={video.url}><div className="video-thumb"><Image src={video.image} alt={`${englishVideoTitles[index + 1]} video thumbnail`} fill sizes="(max-width: 900px) 35vw, 18vw" /><span aria-hidden="true">▶</span></div><div><span className="video-meta">{video.category} • {video.duration}</span><h3>{englishVideoTitles[index + 1]}</h3><span className="watch-link">WATCH ↗</span></div></a>)}</div></div></div></section>

      <section className="recital-gallery section-pad"><div className="container-wide"><SectionHeading index="05" eyebrow="PERFORMANCE & RECITAL GALLERY" title={<>Every performance makes<br />a student&apos;s courage visible.</>} note="Moments from performance, learning, and musical activities." /><div className="gallery-collage"><figure className="gallery-main"><Image src="/images/gallery/homepage-performance-recital-stage.jpg" alt="Dr. Hsu performing on a concert grand piano" fill sizes="(max-width: 767px) 92vw, 45vw" /></figure><figure className="gallery-top"><Image src="/images/gallery/performance-young-student-piano-2024.jpg" alt="A young student performing at the piano" fill sizes="(max-width: 767px) 45vw, 24vw" /></figure><figure className="gallery-bottom"><Image src="/images/gallery/performance-teen-student-piano-2024.jpg" alt="A teen student performing in recital" fill sizes="(max-width: 767px) 45vw, 24vw" /></figure><figure className="gallery-side"><Image src="/images/gallery/music-activity-teacher-stage-talk.jpg" alt="Dr. Hsu speaking at a music event" fill sizes="(max-width: 767px) 45vw, 22vw" /></figure><blockquote className="gallery-note"><small>RECITAL NOTES</small>Applause is not reserved for perfection.<br />Effort deserves to be seen.</blockquote></div></div></section>

      <section className="lessons-home section-pad"><div className="container-wide"><SectionHeading index="06" eyebrow="LESSONS" title="Choose the path that fits you now." note="One-to-one lessons｜In person + online" /><div className="four-grid lesson-grid">{lessonCards.map((lesson, index) => <Link className={`lesson-card tone-${index + 1}`} href={lesson.href} key={lesson.title}><span className="eyebrow">{lesson.label}</span><h3>{lesson.title}</h3><p>{lesson.body}</p><strong>{lesson.note}</strong><span>{lesson.action} ↗</span></Link>)}</div></div></section>

      <section className="pricing-home section-pad"><div className="container-wide"><SectionHeading index="07" eyebrow="PRICING" title="Clear fees. Focused one-to-one teaching." note="Final lesson format and fee are confirmed after discussing the student's needs." /><div className="pricing-grid"><article className="price-card tone-2"><span className="eyebrow">TAIWAN</span><h3>In-person / Online</h3><strong>NT$1,200–1,500</strong><p>Based on level, lesson content, and learning goals.</p><Link href="/en/contact">Book a trial ↗</Link></article><article className="price-card tone-3"><span className="eyebrow">NORTH AMERICA</span><h3>Online Lessons</h3><strong>From US$50</strong><p>Planned according to the student&apos;s level and needs.</p><Link href="/en/contact">Book a trial ↗</Link></article><article className="price-card tone-paper"><span className="eyebrow">OTHER ASIA</span><h3>Other Asian Regions</h3><strong>Contact</strong><p>Share your location, level, and learning goals.</p><Link href="/en/contact">Ask about lessons ↗</Link></article></div></div></section>

      <section className="faq-preview section-pad"><div className="container-wide"><SectionHeading index="08" eyebrow="BEFORE YOUR FIRST LESSON" title="A few things you may want to know." note="FAQ PREVIEW" /><div className="faq-list">{faq.map(([question, answer], index) => <details key={question} open={index === 3}><summary>{question}<span aria-hidden="true">＋</span></summary><p>{answer}</p></details>)}</div><Link className="text-link" href="/en/contact">Ask another question →</Link></div></section>

      <section className="final-cta section-pad"><div className="cta-inner container-wide"><div><p className="eyebrow">09 — START HERE</p><h2>Begin with the piece<br />you most want to play.</h2><p>Tell me about your level, the music you want to learn, and where you are located. After a trial lesson, we can shape a learning direction that fits.</p><Link className="button button-burgundy" href="/en/contact">Book a Trial Lesson ↗</Link></div><div className="record-graphic" aria-hidden="true"><span /></div><p className="hand-note">No pressure.<br />Just music.</p></div></section>
    </main>
  );
}
