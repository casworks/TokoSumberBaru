import { HashRouter, NavLink, Route, Routes, Link } from 'react-router-dom';
import { navItems } from './data/content.js';
import Home from './pages/Home.jsx';
import Produk from './pages/Produk.jsx';
import Layanan from './pages/Layanan.jsx';
import Kontak from './pages/Kontak.jsx';
import Pendampingan from './pages/Pendampingan.jsx';

const Layout = () => (
  <div className="app-shell">
    <nav className="nav">
      <div className="nav__brand">
        <Link to="/">Toko Sumber Baru</Link>
      </div>
      <div className="nav__links">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produk" element={<Produk />} />
      <Route path="/layanan" element={<Layanan />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="/pendampingan" element={<Pendampingan />} />
    </Routes>

    <footer className="footer">
      <p>
        Landing page mitra toko dibuat sebagai sarana identitas dan representasi digital awal bagi UMKM, yang
        difasilitasi oleh mahasiswa kerja praktek sebagai bagian dari pendampingan digital dasar.
      </p>
    </footer>
  </div>
);

const App = () => (
  <HashRouter>
    <Layout />
  </HashRouter>
);

export default App;
