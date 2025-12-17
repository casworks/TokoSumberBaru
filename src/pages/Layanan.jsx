import { identity, servicesList, serviceAreas } from '../data/content.js';

const Layanan = () => (
  <main>
    <section className="section page-heading">
      <p className="eyebrow">Layanan</p>
      <h1>Cara Kami Melayani</h1>
      <p className="muted">Pilihan layanan utama untuk eceran, grosir, dan langganan.</p>
    </section>

    <section className="section">
      <div className="section__head">
        <h2>Jenis Layanan</h2>
        <p className="muted">Pilih mode belanja yang paling cocok.</p>
      </div>
      <div className="grid grid--two">
        {servicesList.map((item) => (
          <div key={item.title} className="card card--service">
            <div className="icon icon--large">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p className="muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section">
      <div className="section__head">
        <h2>Area Layanan</h2>
        <p className="muted">Lokasi utama yang biasa dilayani.</p>
      </div>
      <div className="area">
        <div className="map-embed" aria-label="Peta area layanan">
          <iframe
            title="Peta Layanan Toko Sumber Baru"
            src="https://www.google.com/maps?q=Toko+Sumber+Baru+Kalijudan&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <ul className="list list--plain">
          {serviceAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className="section cta">
      <div className="cta__content">
        <h2>Siapkan pesanan via WhatsApp</h2>
        <a className="button button--solid" href={identity.whatsappLink} target="_blank" rel="noreferrer">
          Chat WhatsApp
        </a>
      </div>
    </section>
  </main>
);

export default Layanan;