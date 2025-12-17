import { ServicesSection, ContactSection } from '../components/Sections.jsx';

const Layanan = () => (
  <main>
    <section className="page-heading">
      <p className="eyebrow">Halaman Layanan</p>
      <h1>Cara Belanja & Dukungan</h1>
      <p className="muted">Informasi praktis untuk warga sekitar saat berkunjung.</p>
    </section>
    <ServicesSection />
    <ContactSection />
  </main>
);

export default Layanan;
