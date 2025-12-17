import { HashRouter, NavLink, Route, Routes, Link } from 'react-router-dom';
import { navItems, identity } from './data/content.js';
import Home from './pages/Home.jsx';
import Produk from './pages/Produk.jsx';
import Layanan from './pages/Layanan.jsx';
import Kontak from './pages/Kontak.jsx';
import Tentang from './pages/Tentang.jsx';
import StatusBar from './components/StatusBar.jsx';

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
      <div className="nav__right">
        <StatusBar />
        <a className="button button--solid" href={identity.whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produk" element={<Produk />} />
      <Route path="/layanan" element={<Layanan />} />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="/kontak" element={<Kontak />} />
    </Routes>

    <footer className="footer">
      <p className="footer__brand">{identity.name}</p>
      <p className="footer__muted">{identity.location}</p>
      <p className="footer__muted">WhatsApp: {identity.whatsapp}</p>
      <p className="footer__muted">© {new Date().getFullYear()}</p>
    </footer>
  </div>
);

export default App;
