import InfoCard from './InfoCard';
import { identity, aboutText, categories, services, contacts, supportNote } from '../data/content.js';

export const IdentitySection = () => (
  <InfoCard
    title="Inti Utama"
    eyebrow="1. Identitas Toko"
    description="Menegaskan keberadaan toko secara digital, jelas dan dapat dirujuk."
  >
    <dl className="details">
      <div className="details__item">
        <dt>Nama Toko</dt>
        <dd>{identity.name}</dd>
      </div>
      <div className="details__item">
        <dt>Jenis Usaha</dt>
        <dd>{identity.type}</dd>
      </div>
      <div className="details__item">
        <dt>Lokasi Umum</dt>
        <dd>{identity.location}</dd>
      </div>
      <div className="details__item">
        <dt>Jam Operasional</dt>
        <dd>{identity.hours}</dd>
      </div>
    </dl>
  </InfoCard>
);

export const AboutSection = () => (
  <InfoCard
    title="Konteks Singkat"
    eyebrow="2. Tentang Toko"
    description="Narasi netral yang membangun kedekatan tanpa mengarah ke promosi."
  >
    <p>{aboutText}</p>
  </InfoCard>
);

export const ProductsSection = () => (
  <InfoCard
    title="Apa yang Dijual"
    eyebrow="3. Produk / Kategori Barang"
    description="Tidak daftar lengkap, hanya gambaran karakter toko."
  >
    <ul className="pill-list">
      {categories.map((item) => (
        <li className="pill" key={item}>{item}</li>
      ))}
    </ul>
  </InfoCard>
);

export const ServicesSection = () => (
  <InfoCard
    title="Cara Berbelanja"
    eyebrow="4. Informasi Layanan"
    description="Praktis dan relevan untuk warga sekitar."
  >
    <ul className="list">
      {services.map((service) => (
        <li key={service}>{service}</li>
      ))}
    </ul>
  </InfoCard>
);

export const ContactSection = () => (
  <InfoCard
    title="Hubungi Toko"
    eyebrow="5. Kontak & Akses"
    description="Memudahkan interaksi dan rujukan lokasi."
  >
    <div className="contact">
      <div>
        <p className="label">Nomor Toko / WhatsApp</p>
        <p className="contact__value">{contacts.phone}</p>
      </div>
      <div>
        <p className="label">Petunjuk Lokasi</p>
        <p className="contact__value">{contacts.direction}</p>
      </div>
    </div>
  </InfoCard>
);

export const AssistanceSection = () => (
  <InfoCard
    title="Catatan Pendampingan"
    eyebrow="Pendampingan & Dokumentasi"
    description="Informasi pendukung mengenai kegiatan kerja praktek."
  >
    <p>{supportNote}</p>
  </InfoCard>
);
