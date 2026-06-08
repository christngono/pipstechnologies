import React, { useState, useEffect } from 'react';
import { useLang } from '../hooks.jsx';
import { IcArrowRight, IcClose, IcLogo, IcMenu } from './Icons.jsx';

// ============================================================
// PIPS TECHNOLOGIES — Navigation (sticky pill bar, FR/EN toggle)
// ============================================================

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const items = [
    { href: "#about", label: t.nav.about },
    { href: "#service", label: t.nav.service },
    { href: "#drivers", label: t.nav.drivers },
    { href: "#restaurants", label: t.nav.restaurants },
    { href: "#download", label: t.nav.download },
    { href: "#contact", label: t.nav.contact },
  ];

  const close = () => setMobileOpen(false);

  return (
    <>
      <nav className={"nav" + (scrolled ? " scrolled" : "")}>
        <div className="nav__inner">
          <a href="#top" className="nav__brand" aria-label="Pips Technologies">
            <img src="/assets/pips_logo_tech.png" alt="Pip's Technologies" className="nav__logo-img" />
          </a>

          <ul className="nav__links" aria-label="Primary">
            {items.map((it) => (
              <li key={it.href}><a href={it.href}>{it.label}</a></li>
            ))}
          </ul>

          <div className="nav__cta">
            <div className="lang" role="group" aria-label="Language">
              <button onClick={() => setLang("fr")} className={lang === "fr" ? "active" : ""}>FR</button>
              <button onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
            </div>
            <a href="#download" className="btn btn--dark btn--sm">
              {t.nav.cta} <IcArrowRight size={16} />
            </a>
          </div>

          {/* Burger — toujours en dernier, poussé à droite */}
          <button
            className="nav__burger"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <IcMenu size={22} />
          </button>
        </div>
      </nav>

      {/* Fullscreen mobile overlay */}
      <div className={"nav__mobile" + (mobileOpen ? " nav__mobile--open" : "")} aria-hidden={!mobileOpen}>
        <div className="nav__mobile-head">
          <a href="#top" className="nav__brand" onClick={close} aria-label="Pips Technologies">
            <img src="/assets/pips_logo_tech.png" alt="Pip's Technologies" className="nav__logo-img nav__logo-img--light" />
          </a>

          {/* Croix pour fermer */}
          <button
            className="nav__mobile-close"
            onClick={close}
            aria-label="Fermer le menu"
          >
            <IcClose size={24} />
          </button>
        </div>

        <ul className="nav__mobile-links">
          {items.map((it, i) => (
            <li key={it.href} style={{ "--i": i }}>
              <a href={it.href} onClick={close}>{it.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav__mobile-footer">
          <div className="lang lang--light" role="group" aria-label="Language">
            <button onClick={() => setLang("fr")} className={lang === "fr" ? "active" : ""}>FR</button>
            <button onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
          </div>
          <a href="#download" onClick={close} className="btn btn--primary btn--lg nav__mobile-cta">
            {t.nav.cta} <IcArrowRight size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
