import { identity, heroContent, highlights, stats, categoriesHome, shoppingSteps } from '../data/content.js';
import Icon from '../components/Icon.jsx';
import storePict from '../assets/store-pict.png';

const highlightTones = ['#e9edf5'];
const categoryTones = ['#b00014'];

const Home = () => (
  <main>
    <section className="hero hero--split hero--dark">
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
          <div className="photo-frame" aria-label={heroContent.imageAlt}>
            <img src={storePict} alt={heroContent.imageAlt} loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section className="section section--panel">
      <div className="section__head">
        <h2>Keunggulan</h2>
      </div>
      <div className="grid grid--four">
        {highlights.map((item, idx) => (
          <div
            key={item.title}
            className="card card--illustration"
            style={{ '--card-bg': highlightTones[idx % highlightTones.length] }}
          >
            <Icon icon={item.icon} alt={item.title} className="icon" size={140} />
            <h3>{item.title}</h3>
            <p className="muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section section--panel stats">
      <div className="section__head">
        <h2>Statistik Toko</h2>
        <p className="muted">Angka singkat untuk bangun kepercayaan.</p>
      </div>
      <div className="stats__grid">
        {stats.map((item) => (
          <div key={item.label} className="stat">
            <div className="stat__value">{item.value}</div>
            <div className="stat__label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="section section--accent">
      <div className="section__head">
        <h2>Kategori Produk</h2>
      </div>
      <div className="grid grid--three">
        {categoriesHome.map((item, idx) => (
          <div
            key={item.title}
            className="card card--category card--illustration card--icon-inset card--on-dark"
            style={{ '--card-bg': categoryTones[idx % categoryTones.length] }}
          >
            <Icon icon={item.icon} alt={item.title} className="icon" size={130} />
            <h3>{item.title}</h3>
            <p className="muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section section--panel">
      <div className="section__head">
        <h2>Cara Belanja</h2>
        <p className="muted">Step sederhana tanpa ribet, cocok untuk pelanggan baru.</p>
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
        <h2>Tanya stok sebelum datang</h2>
        <a className="button button--solid" href={identity.whatsappLink} target="_blank" rel="noreferrer">
          Chat WhatsApp
        </a>
      </div>
    </section>
  </main>
);

export default Home;
