import React from 'react';
import { useLang, Reveal } from '../hooks.jsx';
import { IcAppleStore, IcGooglePlay, IcShield } from './Icons.jsx';

// ============================================================
// PIPS TECHNOLOGIES — Download section
// ============================================================

export default function Download() {
  const { t } = useLang();

  const StoreBtn = ({ store, label, action, dark }) => (
    <a className="app-store" href="#waitlist" style={dark ? { background: "var(--cocoa)", color: "white" } : undefined}>
      <span className="ico">{store === "apple" ? <IcAppleStore size={20} /> : <IcGooglePlay size={20} />}</span>
      <span className="col">
        <span className="top">{label}</span>
        <span className="bot">{action}</span>
      </span>
    </a>
  );

  return (
    <section className="section download" id="download">
      <div className="download__pattern" aria-hidden="true"></div>
      <div className="container download__inner">
        <div>
          <Reveal>
            <span className="pill pill--cocoa">{t.download.eyebrow}</span>
            <h2 className="headline h2" style={{ marginTop: 18 }}>
              {t.download.title1}{" "}
              <span className="script" style={{ color: "white" }}>{t.download.titleScript}</span>{" "}
              {t.download.title2}
            </h2>
            <p style={{ color: "rgba(42, 20, 10, 0.78)", fontSize: 18, lineHeight: 1.55, marginTop: 18, maxWidth: 520 }}>
              {t.download.lead}
            </p>
          </Reveal>

          <Reveal delay={1} className="app-versions" style={{ marginTop: 36 }}>
            <div className="app-ver">
              <div className="ttl">
                <span className="script">{t.download.appClient.script}</span>
                <span className="who">{t.download.appClient.who}</span>
              </div>
              <div className="desc">{t.download.appClient.desc}</div>
              <div className="stores">
                <StoreBtn store="play" label="GET IT ON" action="Google Play" />
                <StoreBtn store="apple" label="DOWNLOAD ON" action="App Store" />
              </div>
            </div>
            <div className="app-ver lime">
              <div className="ttl">
                <span className="script" style={{ color: "var(--cream)" }}>{t.download.appDriver.script}</span>
                <span className="who">{t.download.appDriver.who}</span>
              </div>
              <div className="desc">{t.download.appDriver.desc}</div>
              <div className="stores">
                <StoreBtn store="play" label="GET IT ON" action="Google Play" dark />
                <StoreBtn store="apple" label="DOWNLOAD ON" action="App Store" dark />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1} className="download__phone-wrap">
          <div className="download__phone">
            <div className="scrn">
              <div className="top-card">
                <div className="l">{t.download.cardLabel}</div>
                <div className="b">{t.download.cardOrder}</div>
              </div>
              <div className="grid">
                <div className="gtile" style={{ backgroundImage: 'url("/assets/food/chicken-square.jpg")' }}>
                  <div className="nm">Poulet DG</div>
                </div>
                <div className="gtile" style={{ backgroundImage: 'url("/assets/food/feast-wide.webp")' }}>
                  <div className="nm">Famille</div>
                </div>
                <div className="gtile" style={{ backgroundImage: 'url("/assets/food/wrap-wide.webp")' }}>
                  <div className="nm">Wraps</div>
                </div>
                <div className="gtile" style={{ backgroundImage: 'url("/assets/food/spread-wide.webp")' }}>
                  <div className="nm">Spécial</div>
                </div>
              </div>
              <div className="cta">
                <IcShield size={14} />
                <span>{t.download.cardCta}</span>
              </div>
            </div>
          </div>

          <div className="qr-card">
            <div className="qr"></div>
            <div className="l">{t.download.qrLabel}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
