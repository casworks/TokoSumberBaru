import { identity, contacts } from '../data/content.js';
import StatusBar from '../components/StatusBar.jsx';

const Kontak = () => (
  <main>
    <section className="section page-heading">
      <p className="eyebrow">Kontak</p>
      <h1>Hubungi & Temukan Kami</h1>
      <p className="muted">Info alamat, jam buka, dan rute menuju toko.</p>
    </section>

    <section className="section contact-layout">
      <div className="contact-info">
        <div className="contact-block">
          <p className="label">Alamat</p>
          <p>{contacts.direction}</p>
        </div>
        <div className="contact-block">
          <p className="label">Jam Operasional</p>
          <StatusBar />
          <p className="muted">Jam standar: {identity.hours}</p>
        </div>
      <div className="contact-block">
        <p className="label">WhatsApp</p>
        <a className="button button--solid" href={identity.whatsappLink} target="_blank" rel="noreferrer">
          Hubungi via WhatsApp
        </a>
      </div>
    </div>
      <div className="map-embed" aria-label="Google Maps embed">
        <iframe
          title="Lokasi Toko Sumber Baru"
          src="https://www.google.com/maps?q=Toko+Sumber+Baru+Kalijudan&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </main>
);

export default Kontak;