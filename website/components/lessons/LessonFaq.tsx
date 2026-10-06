"use client";

import { useState } from "react";

export type LessonFaqItem = {
  question: string;
  answer: string;
};

export function LessonFaq({ items }: { items: readonly LessonFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="lesson-faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `lesson-faq-panel-${index}`;
        const buttonId = `lesson-faq-button-${index}`;

        return (
          <article className="lesson-faq-item" key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="lesson-faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
