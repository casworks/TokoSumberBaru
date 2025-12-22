import { useEffect, useState } from 'react';
import { HashRouter, NavLink, Route, Routes, Link, useLocation } from 'react-router-dom';
import { navItems, identity, contacts, serviceAreas } from './data/content.js';
import logoPutih from './assets/logo/logo-bg-putih.png';
import Home from './pages/Home.jsx';
import Produk from './pages/Produk.jsx';
import Layanan from './pages/Layanan.jsx';
import Kontak from './pages/Kontak.jsx';
import Tentang from './pages/Tentang.jsx';
import Loker from './pages/Loker.jsx';
import StatusBar from './components/StatusBar.jsx';

const Layout = () => {
  const location = useLocation();
  const dropdownLinks = [
    { path: '/tentang', label: 'Tentang Toko' },
    { path: '/kontak', label: 'Kontak' }
  ];
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const openDropdown = () => setDropdownOpen(true);
  const closeDropdown = () => {
    setDropdownOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleDropdownBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <div className="status-top">
        <StatusBar />
      </div>
      <header className="header">
        <div className="header__bar">
          <div className="nav__brand">
            <Link to="/" aria-label="Beranda">
              <img className="nav__logo" src={logoPutih} alt="Logo" />
            </Link>
          </div>
          <nav className="nav__links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  isActive ? 'nav__link nav__link--top nav__link--active' : 'nav__link nav__link--top'
                }
                onClick={closeDropdown}
              >
                {item.label}
              </NavLink>
            ))}
            <div
              className={`nav__dropdown ${dropdownOpen ? 'nav__dropdown--open' : ''}`}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
              onBlur={handleDropdownBlur}
            >
              <button
                type="button"
                className="nav__link nav__link--top nav__link--parent"
                onClick={toggleDropdown}
                onFocus={openDropdown}
              >
                Tentang
              </button>
              <div className="nav__dropdown-menu">
                {dropdownLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}
                    onClick={closeDropdown}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>
          <div className="header__actions">
            <a className="button button--solid" href={identity.whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/loker" element={<Loker />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>

      <footer className="footer">
        {(() => {
          const yearNow = new Date().getFullYear();
          const baseAreas = serviceAreas.filter((area) => area.toLowerCase() !== 'sekitarnya');
          const areaSummary = baseAreas.length ? `${baseAreas.join(', ')}, dan sekitarnya` : 'Sumberwaru dan sekitarnya';

          return (
            <div className="footer__container">
              <div className="footer__grid">
                <div className="footer__col">
                  <div className="footer__brand">
                    <img className="footer__logo" src={logoPutih} alt="Logo Toko Sumber Baru" />
                    <div className="footer__brandText">
                      <div className="footer__brandName">{identity.name}</div>
                      <div className="footer__text">{identity.footerBlurb}</div>
                    </div>
                  </div>
                </div>

                <div className="footer__col">
                  <div className="footer__title">Informasi Toko</div>
                  <div className="footer__text">{identity.location}</div>
                  <div className="footer__text">Jam Operasional: {identity.hoursFooter}</div>
                  <div className="footer__text">Melayani daerah {areaSummary}</div>
                </div>

                <div className="footer__col">
                  <div className="footer__title">Hubungi Kami</div>
                  <div className="footer__linksRow">
                    <a className="footer__link" href={identity.whatsappLink} target="_blank" rel="noreferrer">
                      WhatsApp
                    </a>
                    <span className="footer__sep">|</span>
                    <a className="footer__link" href={contacts.mapsLink} target="_blank" rel="noreferrer">
                      Google Maps
                    </a>
                  </div>
                  <div className="footer__quicklinks">
                    <Link className="footer__quicklink" to="/">
                      Beranda
                    </Link>
                    <Link className="footer__quicklink" to="/produk">
                      Produk
                    </Link>
                    <Link className="footer__quicklink" to="/layanan">
                      Layanan
                    </Link>
                    <Link className="footer__quicklink" to="/tentang">
                      Tentang
                    </Link>
                  </div>
                </div>
              </div>

              <div className="footer__divider" />

              <div className="footer__bottom">
                <div className="footer__muted">© {yearNow} {identity.name}</div>
              </div>
            </div>
          );
        })()}
      </footer>
    </div>
  );
};

const App = () => (
  <HashRouter>
    <Layout />
  </HashRouter>
);

export default App;
