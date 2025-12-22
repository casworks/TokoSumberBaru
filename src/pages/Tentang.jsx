import { identity, storyText, valuesList, heroContent } from '../data/content.js';
import storePict from '../assets/store-pict.png';

const Tentang = () => (
  <main>
    <section className="section page-heading">
      <p className="eyebrow">Tentang Toko</p>
      <h1>Kisah Singkat & Nilai</h1>
    </section>

    <section className="section section--split">
      <div>
        <h2>Story</h2>
        <p>{storyText}</p>
      </div>
      <div className="photo-frame photo-frame--tall" aria-label="Foto toko">
        <img src={storePict} alt={heroContent.imageAlt} loading="lazy" />
      </div>
    </section>

    <section className="section">
      <div className="section__head">
        <h2>Nilai Toko</h2>
      </div>
      <ul className="list list--pill">
        {valuesList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>

    <section className="section cta cta--dark">
      <div className="cta__content">
        <h2>Tanya stok sebelum datang</h2>
        <a className="button button--solid" href={identity.whatsappLink} target="_blank" rel="noreferrer">
          Chat WhatsApp
        </a>
      </div>
    </section>
  </main>
);

export default Tentang;
