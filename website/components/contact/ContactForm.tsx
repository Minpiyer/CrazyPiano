"use client";

import { FormEvent, useRef, useState } from "react";

const fields = [
  { id: "name", label: "Name／姓名", type: "text", autoComplete: "name", required: true, maxLength: 100 },
  { id: "email", label: "Email", type: "email", autoComplete: "email", required: true, maxLength: 254 },
  { id: "location", label: "Location／所在地區", type: "text", autoComplete: "country-name", required: false, maxLength: 120 },
  { id: "age", label: "Age／年齡", type: "text", autoComplete: "off", required: false, maxLength: 30 },
  { id: "currentLevel", label: "Current Level／目前程度", type: "text", autoComplete: "off", required: false, maxLength: 200 },
  { id: "learningGoal", label: "What would you like to learn?／想學什麼？", type: "text", autoComplete: "off", required: true, maxLength: 1000 },
] as const;

type SubmitState = "idle" | "submitting" | "success" | "error";

const statusCopy: Record<SubmitState, string> = {
  idle: "必填欄位標示為 required。資料只會用於回覆這次課程詢問。",
  submitting: "送出中…",
  success: "訊息已送出，謝謝你的詢問。",
  error: "傳送失敗，請稍後再試，或直接寄信至 minpiyer@gmail.com。",
};

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const statusRef = useRef<HTMLParagraphElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitState === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      location: formData.get("location"),
      age: formData.get("age"),
      currentLevel: formData.get("currentLevel"),
      learningGoal: formData.get("learningGoal"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    setSubmitState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as { ok?: boolean } | null;

      if (!response.ok || !result?.ok) throw new Error("Contact request failed");

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    } finally {
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  }

  const isSubmitting = submitState === "submitting";

  return (
    <form className="contact-form" aria-describedby="contact-form-status" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        {fields.map((field) => (
          <div className="contact-field" key={field.id}>
            <label htmlFor={field.id}>
              {field.label}
              {field.required && <span className="required-mark" aria-hidden="true"> *</span>}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              autoComplete={field.autoComplete}
              required={field.required}
              maxLength={field.maxLength}
              disabled={isSubmitting}
            />
          </div>
        ))}
        <div className="contact-field contact-field-wide">
          <label htmlFor="message">Message／補充訊息</label>
          <textarea id="message" name="message" rows={6} maxLength={3000} disabled={isSubmitting} />
        </div>
        <div className="contact-honeypot" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" autoComplete="off" tabIndex={-1} />
        </div>
      </div>
      <button className="button button-burgundy contact-submit" type="submit" disabled={isSubmitting} aria-disabled={isSubmitting}>
        {isSubmitting ? "Sending／送出中…" : "Send Inquiry／送出詢問"}
      </button>
      <p
        className={`contact-form-status is-${submitState}`}
        id="contact-form-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        ref={statusRef}
        tabIndex={-1}
      >
        {statusCopy[submitState]}
      </p>
    </form>
  );
}
