import React from 'react';
import { useLang } from '../hooks.jsx';
import { IcInstagram, IcFacebook, IcLinkedin, IcTwitter, IcHeart } from './Icons.jsx';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand">
              <div className="brand-logo-wrap brand-logo-wrap--lg">
                <img src="/assets/logo_pipstechnologies.png" alt="Pip's Technologies" />
              </div>
              <span className="footer__brand-text">
                <span className="a">Pip's</span>
                <span className="b">TECHNOLOGIES</span>
              </span>
            </div>
            <p className="footer__about">{t.footer.about}</p>
            <div className="footer__social">
              <a href="#" aria-label="Facebook"><IcFacebook size={18} /></a>
              <a href="#" aria-label="Instagram"><IcInstagram size={18} /></a>
              <a href="#" aria-label="LinkedIn"><IcLinkedin size={18} /></a>
              <a href="#" aria-label="X"><IcTwitter size={18} /></a>
            </div>
          </div>

          {t.footer.cols.map((col) => (
            <div key={col.title} className="footer__col">
              <h5>{col.title}</h5>
              <ul>
                {col.items.map((it) => <li key={it}><a href="#">{it}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <div>{t.footer.copyright}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>{t.footer.madeIn}</span>
            <IcHeart size={14} style={{ color: "var(--orange)" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
