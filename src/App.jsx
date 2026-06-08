// ============================================================
// PIPS TECHNOLOGIES — App root
// ============================================================
import React, { useState, useEffect } from 'react';
import { LangProvider } from './i18n.jsx';
import SplashScreen from './components/SplashScreen.jsx';
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
import WaitlistPage from './components/WaitlistPage.jsx';

export default function App() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  // Ouvre/ferme la waitlist via le hash #waitlist
  useEffect(() => {
    const onHash = () => {
      setShowWaitlist(window.location.hash === '#waitlist');
    };
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const closeWaitlist = () => {
    window.location.hash = '';
    setShowWaitlist(false);
  };

  return (
    <LangProvider>
      <SplashScreen />
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
      {showWaitlist && <WaitlistPage onClose={closeWaitlist} />}
    </LangProvider>
  );
}
