import { useMemo, useState } from 'react';
import { identity, productCategories, featuredProducts } from '../data/content.js';

const TAGS_DEFAULT = 4;

const getBadgeClass = (note) => {
  const n = note.toLowerCase();
  if (n.includes('grosir') && n.includes('ecer')) return 'badge--both';
  if (n.includes('grosir')) return 'badge--grosir';
  return 'badge--ecer';
};

const Produk = () => {
  const [query, setQuery] = useState('');
  const [showGrosir, setShowGrosir] = useState(false);
  const [expandedCards, setExpandedCards] = useState(new Set());

  const expand = (title) =>
    setExpandedCards((prev) => new Set([...prev, title]));
  const collapse = (title) =>
    setExpandedCards((prev) => { const s = new Set(prev); s.delete(title); return s; });

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
      {/* Heading + integrated search */}
      <div className="prod-heading">
        <div className="prod-heading__inner">
          <div>
            <span className="eyebrow">Produk yang Tersedia</span>
            <h1>Kategori &amp; Produk</h1>
            <p className="prod-heading__meta">
              {productCategories.length} kategori &nbsp;·&nbsp; {featuredProducts.length} produk unggulan
            </p>
          </div>
          <div className="prod-search-wrap">
            <input
              className="input"
              type="search"
              placeholder="Cari kategori atau barang…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Cari produk"
            />
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="filter-bar">
        <span className="filter-bar__label">Filter</span>
        <button
          className={`pill pill--toggle ${showGrosir ? 'pill--toggle-active' : ''}`}
          onClick={() => setShowGrosir((v) => !v)}
          type="button"
        >
          Grosir saja
        </button>
        {query && (
          <span className="filter-bar__query">
            Hasil untuk &ldquo;<strong>{query}</strong>&rdquo;
          </span>
        )}
        {query && (
          <button className="pill pill--toggle" type="button" onClick={() => setQuery('')}>
            ✕ Reset
          </button>
        )}
      </div>

      {/* Category grid */}
      <section className="section">
        <div className="section__head">
          <h2>Kategori Produk</h2>
          <p>
            {filteredCategories.length} dari {productCategories.length} kategori ditampilkan
          </p>
        </div>
        <div className="cat-grid">
          {filteredCategories.map((cat) => {
            const isExpanded = expandedCards.has(cat.title);
            const visibleItems = isExpanded ? cat.items : cat.items.slice(0, TAGS_DEFAULT);
            const hidden = cat.items.length - TAGS_DEFAULT;
            return (
              <div
                key={cat.title}
                className="cat-card"
                onMouseLeave={() => collapse(cat.title)}
              >
                <div className="cat-card__icon">
                  <img src={cat.icon} alt={cat.title} loading="lazy" />
                </div>
                <div className="cat-card__body">
                  <div className="cat-card__title">{cat.title}</div>
                  <span className="cat-card__count">{cat.items.length} item</span>
                  <div className="cat-card__tags">
                    {visibleItems.map((item) => (
                      <span key={item} className="cat-card__tag">{item}</span>
                    ))}
                    {!isExpanded && hidden > 0 && (
                      <button
                        type="button"
                        className="cat-card__tag cat-card__tag--more"
                        onClick={() => expand(cat.title)}
                      >
                        +{hidden} lagi
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {!filteredCategories.length && (
            <div className="empty-state">
              <p>
                Tidak ada hasil untuk &ldquo;<strong>{query}</strong>&rdquo;.
                Hubungi kami langsung untuk cek ketersediaan.
              </p>
              <a
                className="button button--solid"
                href={`${identity.whatsappLink}?text=${encodeURIComponent(
                  `Halo, apakah tersedia: ${query}?`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Tanya via WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Featured products */}
      <section className="section" style={{ background: '#fafafa' }}>
        <div className="section__head">
          <h2>Produk Unggulan</h2>
          <p>Stok tersedia — tanya harga &amp; ketersediaan via WhatsApp sebelum datang.</p>
        </div>
        <div className="prod-grid">
          {filteredFeatured.map((item) => (
            <div key={item.name} className="prod-card">
              <div className="prod-card__name">{item.name}</div>
              <div className="prod-card__pack">{item.pack}</div>
              <div className="prod-card__footer">
                <span className={`badge ${getBadgeClass(item.note)}`}>{item.note}</span>
                <a
                  className="prod-card__wa"
                  href={`${identity.whatsappLink}?text=${encodeURIComponent(
                    `Halo, saya ingin tanya stok ${item.name}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Tanya stok →
                </a>
              </div>
            </div>
          ))}
          {!filteredFeatured.length && (
            <div className="empty-state">
              <p>
                {showGrosir
                  ? 'Tidak ada produk grosir yang cocok.'
                  : 'Produk tidak ditemukan. Coba kata kunci lain.'}
              </p>
              <button
                className="button button--ghost"
                onClick={() => { setQuery(''); setShowGrosir(false); }}
                type="button"
              >
                Reset filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
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
