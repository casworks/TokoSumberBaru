import { identity, storyText, valuesList } from '../data/content.js';

const Tentang = () => (
  <main>
    <section className="section page-heading">
      <p className="eyebrow">Tentang Toko</p>
      <h1>Kisah Singkat & Nilai</h1>
      <p className="muted">Paragraf tunggal yang menjelaskan siapa yang dilayani.</p>
    </section>

    <section className="section section--split">
      <div>
        <h2>Story</h2>
        <p>{storyText}</p>
      </div>
      <div className="photo-placeholder photo-placeholder--tall" aria-label="Foto toko lama">
        <span>Foto Toko</span>
      </div>
    </section>

    <section className="section">
      <div className="section__head">
        <h2>Nilai Toko</h2>
        <p className="muted">Poin singkat tanpa kartu tebal.</p>
      </div>
      <ul className="list list--pill">
        {valuesList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>

    <section className="section cta">
      <div className="cta__content">
        <h2>Butuh stok harian? Kami siap.</h2>
        <a className="button button--solid" href={identity.whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </section>
  </main>
);

export default Tentang;