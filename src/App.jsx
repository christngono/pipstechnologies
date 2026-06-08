// ============================================================
// PIPS TECHNOLOGIES — App root
// ============================================================
import { LangProvider } from './i18n.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import { TrustBand, CuisineStrip } from './components/Bands.jsx';
import About from './components/About.jsx';
import Story from './components/Story.jsx';
import PipsEat from './components/PipsEat.jsx';
import { Drivers, Restaurants } from './components/Audiences.jsx';
import Download from './components/Download.jsx';
import Partners from './components/Partners.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function App() {
  return (
    <LangProvider>
      <Nav />
      <Hero />
      <TrustBand />
      <About />
      <Story />
      <PipsEat />
      <CuisineStrip />
      <Drivers />
      <Restaurants />
      <Download />
      <Partners />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </LangProvider>
  );
}
