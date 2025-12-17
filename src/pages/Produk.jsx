import { ProductsSection, AssistanceSection } from '../components/Sections.jsx';

const Produk = () => (
  <main>
    <section className="page-heading">
      <p className="eyebrow">Halaman Produk</p>
      <h1>Kategori Barang</h1>
      <p className="muted">Gambaran singkat tentang barang yang tersedia di toko.</p>
    </section>
    <ProductsSection />
    <AssistanceSection />
  </main>
);

export default Produk;
