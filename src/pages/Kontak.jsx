import { ContactSection, AssistanceSection } from '../components/Sections.jsx';

const Kontak = () => (
  <main>
    <section className="page-heading">
      <p className="eyebrow">Halaman Kontak</p>
      <h1>Kontak & Akses</h1>
      <p className="muted">Hubungi toko atau temukan lokasi terdekat.</p>
    </section>
    <ContactSection />
    <AssistanceSection />
  </main>
);

export default Kontak;
