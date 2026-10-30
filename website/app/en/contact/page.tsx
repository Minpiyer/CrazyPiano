import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { InfoHeading, InfoHero } from "@/components/info/InfoShared";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Dr. Hsu | Book a 50-Minute Trial Piano Lesson",
  description: "Contact Crazy Piano to discuss kids, adult, or online piano lessons. Book a 50-minute trial lesson and share your current level, location, and musical goals.",
  path: "/en/contact",
  locale: "en",
  alternatePath: "/contact",
});

const videos = [
  { category: "SCALES / TECHNIQUE", title: "Understanding Scales", note: "Chinese-language teaching video", url: "https://www.youtube.com/watch?v=khoVWNOrBEU", image: "/images/contact/youtube-scales-khoVWNOrBEU.jpg" },
  { category: "BACH / INTERPRETATION", title: "An Introduction to Learning Bach", note: "Chinese-language teaching video", url: "https://www.youtube.com/watch?v=cMOq9T46eBY", image: "/images/contact/youtube-bach-introduction-cMOq9T46eBY.jpg" },
  { category: "BACH / TEACHING", title: "How to Practice and Interpret Bach: No. 15", note: "Chinese-language teaching video", url: "https://www.youtube.com/watch?v=hlusAJ9v_vI", image: "/images/contact/youtube-bach-practice-hlusAJ9v_vI.jpg" },
] as const;

const firstContact = ["Name", "Age", "Location", "Current level", "What you would like to learn", "A specific piece or goal, if any"] as const;

export default function EnglishContactPage() {
  return (
    <main id="main-content" className="info-page contact-page">
      <InfoHero locale="en" eyebrow="CONTACT / BOOK A LESSON" title={<>First, tell me<br />what you want to play.</>} intro="You do not need to know which lesson format is right for you. Share your current level, location, and what you would like to learn, and we can decide on the next step together." variant="contact"><div className="contact-hero-note"><span>HELLO,</span><strong>LET&apos;S<br />MAKE MUSIC.</strong><em>No pressure. Just music.</em></div></InfoHero>

      <section className="info-section contact-first section-pad"><div className="container-wide">
        <InfoHeading index="01" eyebrow="FIRST MESSAGE" title="A few details are enough to begin." intro={<p>You do not need to prepare a formal history. A simple description of where you are and what you hope to accomplish is perfect.</p>} />
        <div className="contact-first-grid"><ol>{firstContact.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol><aside><span>FOR EXAMPLE</span><p>“I have never played before.”</p><p>“I studied years ago and want to return.”</p><p>“I am preparing for ABRSM.”</p><p>“There is one piece I have always wanted to play.”</p></aside></div>
      </div></section>

      <section className="info-section contact-trial section-pad"><div className="container-wide contact-trial-grid">
        <div><p className="eyebrow">02 — TRIAL LESSON</p><h2>Use one complete lesson<br />to understand how we can work together.</h2><p>The trial lesson is the same length and uses the same single-lesson fee as a regular lesson. Fifty minutes gives us time to understand your current level, teach real material, and discuss a useful direction for future study.</p></div>
        <div className="trial-time"><span>TRIAL LESSON</span><strong>50</strong><em>MINUTES</em><p>Same regular single-lesson fee.</p></div>
      </div></section>

      <section className="info-section contact-options section-pad"><div className="container-wide">
        <InfoHeading index="03" eyebrow="CONTACT OPTIONS" title="Choose the contact method that works best for you." />
        <div className="contact-option-grid">
          <article className="contact-option contact-email"><span>EMAIL</span><h3>General and international lesson inquiries</h3><a href="mailto:minpiyer@gmail.com">minpiyer@gmail.com ↗</a></article>
          <article className="contact-option contact-line"><span>LINE</span><h3>Scan the QR code to add Crazy Piano</h3><div className="line-qr"><Image src="/images/contact/line-add-friend-qr.jpeg" alt="Crazy Piano LINE add-friend QR code" width={1206} height={882} sizes="(max-width: 767px) 88vw, 360px" loading="eager" /></div><a className="line-add-friend" href="https://line.me/ti/p/dXFpD4P63M" target="_blank" rel="noopener noreferrer">Add Friend on LINE ↗</a><p className="implementation-note">On mobile, the button opens LINE directly. The LINE ID is not published.</p></article>
          <article className="contact-option contact-youtube"><span>YOUTUBE</span><h3>Crazy Piano／瘋鋼琴</h3><p>See real teaching, performance, and piano technique videos.</p><a href="https://www.youtube.com/@crazypiano5945" target="_blank" rel="noreferrer">Visit Crazy Piano on YouTube ↗</a></article>
        </div>
      </div></section>

      <section className="info-section contact-videos section-pad"><div className="container-wide">
        <InfoHeading index="04" eyebrow="TEACHING ON YOUTUBE" title="See how I teach before getting in touch." intro={<p>These examples show how I approach basic technique, scales, Bach, and musical understanding. The videos are presented in Chinese.</p>} inverse />
        <div className="contact-video-grid">{videos.map((video) => <a href={video.url} target="_blank" rel="noreferrer" className="contact-video-card" key={video.url}><div><Image src={video.image} alt={`${video.title} video thumbnail`} fill sizes="(max-width: 767px) 92vw, 31vw" /><span aria-hidden="true">▶</span></div><p>{video.category}</p><h3>{video.title}</h3><small>{video.note}</small><strong>WATCH ON YOUTUBE ↗</strong></a>)}</div>
      </div></section>

      <section className="info-section contact-form-section section-pad" id="contact-form"><div className="container-wide">
        <InfoHeading index="05" eyebrow="CONTACT FORM" title="Write down what you are hoping to learn." intro={<p>Your message about your current level and goals will be sent directly to Dr. Hsu.</p>} />
        <ContactForm locale="en" />
      </div></section>

      <section className="info-section contact-next section-pad"><div className="container-wide">
        <InfoHeading index="06" eyebrow="WHAT HAPPENS NEXT" title="What happens after you get in touch?" />
        <ol className="contact-next-grid"><li><span>01</span><strong>Tell Me About You</strong><p>Share your current situation</p></li><li><span>02</span><strong>Confirm Lesson Direction</strong><p>Discuss the lesson direction and fee</p></li><li><span>03</span><strong>Book a 50-Minute Trial</strong><p>Arrange a full trial lesson</p></li></ol>
      </div></section>

      <section className="contact-final section-pad"><div className="container-wide"><p className="eyebrow">START HERE</p><h2>Begin from where you are now.</h2><p>Whether you are learning for the first time, returning to the piano, preparing for an exam, or carrying one piece you have always wanted to play, we can start with a conversation.</p><a className="button button-burgundy" href="mailto:minpiyer@gmail.com">Email Dr. Hsu ↗</a><blockquote>No pressure. Just music.</blockquote></div></section>
    </main>
  );
}
