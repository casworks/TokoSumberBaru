import { identity, heroContent, highlights, stats, categoriesHome, shoppingSteps } from '../data/content.js';

const Home = () => (
  <main>
    <section className="hero hero--split">
      <div className="hero__content">
        <div className="hero__text">
          <p className="eyebrow">Toko Sumber Baru</p>
          <h1>{heroContent.headline}</h1>
          <p className="tagline">{heroContent.sub}</p>
          <div className="hero__cta">
            <a className="button button--solid" href={identity.whatsappLink} target="_blank" rel="noreferrer">
              {heroContent.cta}
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="photo-placeholder" aria-label={heroContent.imageAlt}>
            <span>Foto Toko</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="section__head">
        <h2>Keunggulan Toko</h2>
        <p className="muted">Ringkasan cepat untuk calon pembeli dan reseller.</p>
      </div>
      <div className="grid grid--four">
        {highlights.map((item) => (
          <div key={item.title} className="card card--light">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section stats">
      <div className="stats__grid">
        {stats.map((item) => (
          <div key={item.label} className="stat">
            <div className="stat__icon">{item.icon}</div>
            <div className="stat__value">{item.value}</div>
            <div className="stat__label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="section">
      <div className="section__head">
        <h2>Kategori Produk</h2>
        <p className="muted">Pilihan utama yang tersedia setiap hari.</p>
      </div>
      <div className="grid grid--three">
        {categoriesHome.map((item) => (
          <div key={item.title} className="card card--category">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section">
      <div className="section__head">
        <h2>Cara Belanja</h2>
        <p className="muted">Memandu pelanggan baru agar cepat transaksi.</p>
      </div>
      <div className="steps">
        {shoppingSteps.map((step, idx) => (
          <div key={step} className="step">
            <div className="step__number">{idx + 1}</div>
            <div className="step__text">{step}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="section cta">
      <div className="cta__content">
        <h2>Butuh stok hari ini?</h2>
        <a className="button button--solid" href={identity.whatsappLink} target="_blank" rel="noreferrer">
          Chat WhatsApp Sekarang
        </a>
      </div>
    </section>
  </main>
);

export default Home;