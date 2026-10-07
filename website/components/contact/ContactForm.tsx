const fields = [
  { id: "name", label: "Name／姓名", type: "text", autoComplete: "name" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  { id: "location", label: "Location／所在地區", type: "text", autoComplete: "country-name" },
  { id: "age", label: "Age／年齡", type: "text", autoComplete: "off" },
  { id: "level", label: "Current Level／目前程度", type: "text", autoComplete: "off" },
  { id: "goal", label: "What would you like to learn?／想學什麼？", type: "text", autoComplete: "off" },
] as const;

export function ContactForm() {
  return (
    <form className="contact-form" aria-describedby="contact-form-status">
      <div className="contact-form-grid">
        {fields.map((field) => (
          <div className="contact-field" key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <input id={field.id} name={field.id} type={field.type} autoComplete={field.autoComplete} />
          </div>
        ))}
        <div className="contact-field contact-field-wide">
          <label htmlFor="message">Message／補充訊息</label>
          <textarea id="message" name="message" rows={6} />
        </div>
      </div>
      <button className="button button-burgundy contact-submit" type="submit" disabled aria-disabled="true">Send Inquiry／送出詢問</button>
      <p className="implementation-note" id="contact-form-status">Form backend required before production launch. 表單目前尚未連線，不會送出資料。</p>
    </form>
  );
}
