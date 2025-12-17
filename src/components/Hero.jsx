import { Link } from 'react-router-dom';
import Badge from './Badge';

const Hero = () => (
  <header className="hero">
    <div className="hero__content">
      <p className="eyebrow">Identitas Digital</p>
      <h1>Toko Sumber Baru</h1>
      <p className="tagline">Toko kebutuhan harian di kawasan Kalijudan, Surabaya</p>
      <div className="hero__badges">
        <Badge text="Jam buka: 06.00 - 22.00 WIB" />
        <Badge text="Pendampingan mahasiswa" />
      </div>
      <div className="hero__cta">
        <Link className="button button--solid" to="/kontak">Kontak & Akses</Link>
        <Link className="button button--ghost" to="/produk">Lihat Produk Utama</Link>
      </div>
    </div>
  </header>
);

export default Hero;
