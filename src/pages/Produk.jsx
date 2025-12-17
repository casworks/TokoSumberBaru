import { identity, productCategories, featuredProducts } from '../data/content.js';

const Produk = () => (
  <main>
    <section className="section page-heading">
      <p className="eyebrow">Produk yang Tersedia</p>
      <h1>Kategori & Contoh Unggulan</h1>
      <p className="muted">Ringkasan kategori utama dan contoh produk tanpa harga fix.</p>
    </section>

    <section className="section">
      <div className="section__head">
        <h2>Daftar Kategori</h2>
        <p className="muted">Detail singkat isi rak untuk ecer dan grosir.</p>
      </div>
      <div className="grid grid--three">
        {productCategories.map((cat) => (
          <div key={cat.title} className="card card--category card--tall">
            <div className="icon">{cat.icon}</div>
            <h3>{cat.title}</h3>
            <ul className="list list--plain">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="section">
      <div className="section__head">
        <h2>Produk Unggulan</h2>
        <p className="muted">Contoh cepat tanpa harga detail, fleksibel untuk stok.</p>
      </div>
      <div className="feature-list">
        {featuredProducts.map((item) => (
          <div key={item.name} className="feature-item">
            <div>
              <h3>{item.name}</h3>
              <p className="muted">{item.pack}</p>
            </div>
            <span className="pill pill--outline">{item.note}</span>
          </div>
        ))}
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

export default Produk;