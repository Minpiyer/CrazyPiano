"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { RecitalImage } from "@/data/events";

type EventGalleryProps = {
  images: RecitalImage[];
  locale: "zh-Hant" | "en";
};

export function EventGallery({ images, locale }: EventGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const english = locale === "en";
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") setActiveIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") setActiveIndex((index) => index === null ? null : (index + 1) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <div className="event-gallery-grid">
        {images.map((image, index) => (
          <button
            className={`event-gallery-item event-gallery-${image.layout} ${index === 0 ? "event-gallery-featured" : ""}`}
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={english ? `Open photo ${index + 1}: ${image.altEn}` : `放大第 ${index + 1} 張照片：${image.altZh}`}
          >
            <span className="event-gallery-photo">
              <Image
                src={image.src}
                alt={english ? image.altEn : image.altZh}
                width={image.width}
                height={image.height}
                sizes={image.layout === "landscape" ? "(max-width: 520px) 100vw, (max-width: 900px) 100vw, 58vw" : "(max-width: 520px) 100vw, (max-width: 900px) 50vw, 32vw"}
              />
              <span className="event-gallery-expand" aria-hidden="true">＋</span>
            </span>
            <span className="event-gallery-caption">
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <span>{english ? image.captionEn : image.captionZh}</span>
            </span>
          </button>
        ))}
      </div>

      {activeImage && activeIndex !== null && (
        <div className="event-lightbox" role="dialog" aria-modal="true" aria-label={english ? "Recital photo viewer" : "發表會照片檢視器"}>
          <button className="event-lightbox-backdrop" type="button" onClick={() => setActiveIndex(null)} aria-label={english ? "Close photo viewer" : "關閉照片檢視器"} />
          <div className="event-lightbox-panel">
            <button className="event-lightbox-close" type="button" onClick={() => setActiveIndex(null)} aria-label={english ? "Close" : "關閉"}>×</button>
            <div className="event-lightbox-image">
              <Image src={activeImage.src} alt={english ? activeImage.altEn : activeImage.altZh} fill sizes="95vw" priority />
            </div>
            <div className="event-lightbox-copy">
              <button type="button" onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)} aria-label={english ? "Previous photo" : "上一張照片"}>←</button>
              <p><strong>{activeIndex + 1} / {images.length}</strong>{english ? activeImage.captionEn : activeImage.captionZh}</p>
              <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % images.length)} aria-label={english ? "Next photo" : "下一張照片"}>→</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
