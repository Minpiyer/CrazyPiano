type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  note?: React.ReactNode;
  inverse?: boolean;
};

export function SectionHeading({ index, eyebrow, title, note, inverse = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${inverse ? " section-heading-inverse" : ""}`}>
      <div>
        <p className="eyebrow">{index} — {eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {note && <div className="section-note">{note}</div>}
    </div>
  );
}
