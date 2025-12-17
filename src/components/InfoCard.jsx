const InfoCard = ({ title, eyebrow, description, children }) => (
  <section className="card" aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-heading`}>
    <div className="card__header">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={`${title.toLowerCase().replace(/\s+/g, '-')}-heading`}>{title}</h2>
      {description && <p className="muted">{description}</p>}
    </div>
    <div className="card__body">{children}</div>
  </section>
);

export default InfoCard;
