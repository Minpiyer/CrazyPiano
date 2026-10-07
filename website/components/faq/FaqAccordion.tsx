"use client";

import { useId, useState } from "react";

export type FaqGroup = {
  label: string;
  title: string;
  items: readonly { question: string; answer: string }[];
};

export function FaqAccordion({ groups }: { groups: readonly FaqGroup[] }) {
  const instanceId = useId();
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="full-faq-groups">
      {groups.map((group, groupIndex) => (
        <section className="full-faq-group" key={group.label} aria-labelledby={`${instanceId}-group-${groupIndex}`}>
          <header>
            <span>{String(groupIndex + 1).padStart(2, "0")}</span>
            <div><p>{group.label}</p><h2 id={`${instanceId}-group-${groupIndex}`}>{group.title}</h2></div>
          </header>
          <div className="full-faq-list">
            {group.items.map((item, itemIndex) => {
              const key = `${groupIndex}-${itemIndex}`;
              const isOpen = openItem === key;
              const buttonId = `${instanceId}-button-${key}`;
              const panelId = `${instanceId}-panel-${key}`;
              return (
                <article className="full-faq-item" key={item.question}>
                  <h3>
                    <button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenItem(isOpen ? null : key)}>
                      <span>{item.question}</span><span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                  </h3>
                  {isOpen && <div className="full-faq-answer" id={panelId} role="region" aria-labelledby={buttonId}><p>{item.answer}</p></div>}
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
