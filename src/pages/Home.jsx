import Hero from '../components/Hero.jsx';
import { IdentitySection, AboutSection, ProductsSection, ServicesSection, ContactSection } from '../components/Sections.jsx';

const Home = () => (
  <main>
    <Hero />
    <div className="grid grid--two">
      <IdentitySection />
      <AboutSection />
    </div>
    <div className="grid grid--two">
      <ProductsSection />
      <ServicesSection />
    </div>
    <ContactSection />
  </main>
);

export default Home;
