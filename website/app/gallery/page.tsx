import type { Metadata } from "next";
import Image from "next/image";
import { EditorialCta, EditorialHeading, EditorialHero, EditorialPhoto } from "@/components/editorial/EditorialShared";

export const metadata: Metadata = {
  title: "教學現場｜Gallery",
  description: "從鋼琴課堂、師生合奏、姿勢教學與學生舞台，到老師演奏及評審活動，看見 Crazy Piano 真正的教學現場。",
};

const postureVideo = {
  title: "【瘋鋼琴】如何使用正確手姿勢來彈琴，三個重點",
  url: "https://www.youtube.com/watch?v=BBhqRfK0UZU&t=114s",
  image: "/images/gallery/gallery-posture-video-preview.jpg",
} as const;

export default function GalleryPage() {
  return (
    <main id="main-content" className="editorial-page gallery-page">
      <EditorialHero
        variant="gallery"
        eyebrow="TEACHING IN ACTION／教學現場"
        title={<>音樂，不只是在<br />琴鍵上完成。</>}
        intro="從課堂、合奏、舞台到比賽與評審，這些都是音樂真正發生的地方。"
        quote="See how we learn, listen and make music together."
        image="/images/gallery/gallery-performance-teacher-recital-hall.jpg"
        imageAlt="徐老師在音樂廳演奏鋼琴"
        badge={<><strong>REAL MOMENTS</strong><span>LESSON → STAGE</span></>}
      />

      <section className="editorial-section gallery-teaching section-pad">
        <div className="container-wide">
          <EditorialHeading index="01" eyebrow="TEACHING" title="課堂裡真正發生的事。" intro={<p>示範、聆聽、看譜與調整，不是把答案直接交給學生，而是一起找到下一個能做到的步驟。</p>} />
          <div className="gallery-feature-row">
            <EditorialPhoto src="/images/gallery/gallery-teaching-adult-lesson.jpg" alt="徐老師在鋼琴旁指導成人學生" label="LESSON NOTES／成人課堂" caption="先聽見問題，再把技巧與音樂拆成能理解的下一步。" />
            <aside className="gallery-margin-note"><span>LOOK</span><strong>看譜</strong><span>LISTEN</span><strong>聆聽</strong><span>ADJUST</span><strong>調整</strong></aside>
          </div>
        </div>
      </section>

      <section className="editorial-section gallery-ensemble section-pad">
        <div className="container-wide">
          <EditorialHeading index="02" eyebrow="ENSEMBLE" title="不只練琴，也一起做音樂。" intro={<p>有些音樂概念，真的一起演奏一次，比講很多次更直接。</p>} inverse />
          <div className="gallery-duo-grid">
            <EditorialPhoto src="/images/gallery/gallery-ensemble-piano-drums.jpg" alt="徐老師彈鋼琴，另一位演奏者搭配鼓組合奏" label="PIANO × RHYTHM" caption="在合奏裡聽見節奏、呼吸與彼此的時間。" permission />
            <EditorialPhoto src="/images/gallery/gallery-ensemble-violin-piano.jpg" alt="學生拉小提琴，徐老師以鋼琴合作演奏" label="VIOLIN × PIANO" caption="旋律與伴奏不是分開完成，而是彼此回應。" permission />
          </div>
        </div>
      </section>

      <section className="editorial-section gallery-posture section-pad">
        <div className="container-wide">
          <EditorialHeading index="03" eyebrow="POSTURE / TECHNIQUE" title="有些動作，看實際示範更直接。" intro={<p>手型、手腕與手指的使用，不是固定一個漂亮形狀，而是讓身體能自然、有效率地支持聲音。</p>} />
          <div className="posture-layout">
            <EditorialPhoto src="/images/gallery/gallery-posture-child-hand-position.jpg" alt="學生手指在鋼琴鍵盤上的近距離姿勢" label="HAND POSITION" caption="從手指落鍵、手腕配合到避免過度僵硬。" permission />
            <a className="technique-video-card" href={postureVideo.url} target="_blank" rel="noreferrer" aria-label={`${postureVideo.title}，在 YouTube 觀看`} data-photo-permission="Public use permission required before production launch">
              <div className="technique-video-image"><Image src={postureVideo.image} alt="正確手姿勢教學影片縮圖" fill sizes="(max-width: 900px) 92vw, 46vw" /><span className="gallery-play" aria-hidden="true">▶</span></div>
              <div className="technique-video-copy"><span>TECHNIQUE／POSTURE VIDEO</span><h3>{postureVideo.title}</h3><strong>WATCH VIDEO ↗</strong></div>
            </a>
          </div>
        </div>
      </section>

      <section className="editorial-section gallery-recital section-pad">
        <div className="container-wide">
          <EditorialHeading index="04" eyebrow="RECITAL" title="從課堂走上舞台。" intro={<p>舞台不是只有最後的結果，也包含準備、專注，以及在觀眾面前把音樂完整說完的經驗。</p>} />
          <div className="gallery-recital-grid">
            <EditorialPhoto src="/images/gallery/gallery-recital-student-solo-stage.jpg" alt="學生在舞台鋼琴前獨奏" label="SOLO PERFORMANCE" caption="從第一個音到最後一次呼吸，練習獨立完成演奏。" permission />
            <EditorialPhoto src="/images/gallery/music-activity-teacher-stage-talk.jpg" alt="徐老師在音樂活動舞台上與觀眾分享" label="RECITAL NOTES" caption="演出前後的說明與交流，也是完整音樂活動的一部分。" />
          </div>
        </div>
      </section>

      <section className="editorial-section gallery-performance section-pad">
        <div className="container-wide">
          <EditorialHeading index="05" eyebrow="PERFORMANCE" title="老師也持續在演奏。" intro={<p>教學與演奏並不是兩件分開的事。示範、聲音選擇與舞台經驗，都會回到課堂裡。</p>} inverse />
          <div className="performance-layout">
            <EditorialPhoto src="/images/gallery/gallery-performance-teacher-studio-piano.jpg" alt="徐老師在錄音室彈奏平台鋼琴" label="AT THE PIANO" caption="持續從演奏者角度理解作品、聲音與技巧。" />
            <EditorialPhoto src="/images/gallery/gallery-performance-editorial-piano-reflection.jpg" alt="從平台鋼琴內部與反射角度拍攝徐老師演奏" label="ANOTHER ANGLE" caption="音樂有很多觀看與聆聽的角度。" className="editorial-photo-tall" />
          </div>
        </div>
      </section>

      <section className="editorial-section gallery-judging section-pad">
        <div className="container-wide">
          <EditorialHeading index="06" eyebrow="JUDGING" title="從演奏者，也從評審角度看音樂。" intro={<p>除了教學，也曾參與相關評審工作。準備檢定與比賽時，會同時注意作品理解、評分要求與舞台呈現。</p>} />
          <div className="judging-layout">
            <EditorialPhoto src="/images/gallery/gallery-judging-event-portrait.jpg" alt="徐老師與音樂活動成人參與者在活動現場合照" label="EVENT／JUDGING" caption="從活動現場理解演奏者需要面對的實際要求。" />
            <EditorialPhoto src="/images/gallery/gallery-judging-live-session.jpg" alt="徐老師在音樂活動中聆聽學生現場演奏" label="LIVE SESSION" caption="不只注意彈對多少，也聽見節奏、音樂表現與舞台完整度。" permission />
          </div>
          <p className="gallery-scope-note">評審經驗依現有資料呈現，不代表特定比賽層級或規模。</p>
        </div>
      </section>

      <section className="editorial-section gallery-moments section-pad">
        <div className="container-wide">
          <EditorialHeading index="07" eyebrow="GALLERY MOMENTS" title="在正式課程之外，留下做音樂的片刻。" intro={<p>不追求把照片塞滿，而是留下幾個能看見互動、專注與音樂正在發生的時刻。</p>} />
          <div className="moments-layout">
            <EditorialPhoto src="/images/gallery/gallery-ensemble-teacher-student-stage.jpg" alt="徐老師與學生在舞台鋼琴旁合作" label="TOGETHER ON STAGE" caption="老師與學生一起完成舞台上的音樂。" permission />
            <blockquote><span>TEACHING IN ACTION</span>有時是一句提醒，<br />有時是一段示範，<br />有時只是一起聽見<br />下一個更好的聲音。</blockquote>
          </div>
          <p className="gallery-permission-note">Public use permission required before production launch for student images.</p>
        </div>
      </section>

      <EditorialCta title={<>下一段音樂，<br />可以從現在開始。</>}><p>從現在的程度開始，一起找到適合你的學習方式。第一次學、重新開始，或準備下一次舞台，都可以先聊聊。</p></EditorialCta>
    </main>
  );
}
