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

  const items = [
    { href: "#about", label: t.nav.about },
    { href: "#service", label: t.nav.service },
    { href: "#drivers", label: t.nav.drivers },
    { href: "#restaurants", label: t.nav.restaurants },
    { href: "#download", label: t.nav.download },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" aria-label="Pips Technologies">
          <span className="nav__brand-logo"><IcLogo size={44} /></span>
          <span className="nav__brand-text">
            <span className="a">Pip's</span>
            <span className="b">TECHNOLOGIES</span>
          </span>
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
          <button className="nav__burger" aria-label="Menu" onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <IcClose size={20} /> : <IcMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile flyout */}
      {mobileOpen && (
        <div className="nav__mobile" style={{
          position: "absolute", top: "100%", left: 8, right: 8, marginTop: 8,
          background: "white", borderRadius: 20, padding: 16,
          boxShadow: "0 20px 50px -10px rgba(26, 15, 8, 0.25)",
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {items.map((it) => (
            <a key={it.href} href={it.href} onClick={() => setMobileOpen(false)} style={{
              padding: "12px 16px", borderRadius: 12, color: "var(--ink-2)",
              fontWeight: 600, fontSize: 15,
            }}>{it.label}</a>
          ))}
          <a href="#download" onClick={() => setMobileOpen(false)} className="btn btn--primary" style={{ marginTop: 8 }}>
            {t.nav.cta} <IcArrowRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
}
