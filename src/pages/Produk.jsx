import { useMemo, useState } from 'react';
import { identity, productCategories, featuredProducts } from '../data/content.js';
import Icon from '../components/Icon.jsx';

const isRedCard = (index) => index % 8 < 4;
const cardTone = (index) => (isRedCard(index) ? '#b00014' : '#e9edf5');

const Produk = () => {
  const [query, setQuery] = useState('');
  const [showGrosir, setShowGrosir] = useState(false);

  const filteredCategories = useMemo(() => {
    const q = query.toLowerCase();
    return productCategories.filter(
      (cat) =>
        cat.title.toLowerCase().includes(q) ||
        cat.items.some((item) => item.toLowerCase().includes(q))
    );
  }, [query]);

  const filteredFeatured = useMemo(() => {
    const q = query.toLowerCase();
    return featuredProducts.filter((item) => {
      const matchesQuery =
        item.name.toLowerCase().includes(q) ||
        item.pack.toLowerCase().includes(q) ||
        item.note.toLowerCase().includes(q);
      const matchesGrosir = !showGrosir || item.note.toLowerCase().includes('grosir');
      return matchesQuery && matchesGrosir;
    });
  }, [query, showGrosir]);

  return (
    <main>
      <section className="section page-heading">
        <p className="eyebrow">Produk yang Tersedia</p>
        <h1>Kategori & Contoh Unggulan</h1>
      </section>

      <section className="section section--filters">
        <input
          type="search"
          className="input"
          placeholder="Cari kategori atau barang..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className={`pill pill--toggle ${showGrosir ? 'pill--toggle-active' : ''}`}
          onClick={() => setShowGrosir((v) => !v)}
          type="button"
        >
          Grosir saja
        </button>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Daftar Kategori</h2>
        </div>
        <div className="grid grid--two grid--illustration">
          {filteredCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`card card--category card--illustration card--icon-inset card--tall ${
                isRedCard(idx) ? 'card--on-dark' : ''
              }`}
              style={{ '--card-bg': cardTone(idx) }}
            >
              <Icon icon={cat.icon} alt={cat.title} className="icon" size={140} />
              <h3>{cat.title}</h3>
              <ul className="list list--plain">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          {!filteredCategories.length && <p className="muted">Tidak ada kategori cocok.</p>}
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Produk Unggulan</h2>
        </div>
        <div className="feature-list">
          {filteredFeatured.map((item) => (
            <div key={item.name} className="feature-item">
              <div>
                <h3>{item.name}</h3>
                <p className="muted">{item.pack}</p>
              </div>
              <span className="pill pill--outline">{item.note}</span>
            </div>
          ))}
          {!filteredFeatured.length && <p className="muted">Produk belum ditemukan, cek kata kunci lain.</p>}
        </div>
      </section>

      <section className="section cta">
        <div className="cta__content">
          <h2>Tanya stok sebelum datang</h2>
          <a className="button button--solid" href={identity.whatsappLink} target="_blank" rel="noreferrer">
            Chat WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default Produk;
