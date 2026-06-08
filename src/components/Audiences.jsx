import React from 'react';
import { useLang, Reveal } from '../hooks.jsx';
import { IcArrowRight, IcClock, IcDashboard, IcEye, IcSparkles, IcStore, IcTruck, IcWallet, IcZap } from './Icons.jsx';

// ============================================================
// PIPS TECHNOLOGIES — Drivers + Restaurants (audience blocks)
// ============================================================

export function Drivers() {
  const { t } = useLang();
  const icons = [<IcClock size={18} />, <IcWallet size={18} />, <IcSparkles size={18} />, <IcDashboard size={18} />];
  return (
    <section className="section" id="drivers">
      <div className="container">
        <div className="audience">
          <Reveal scale className="audience__visual">
            <span className="badge"><span className="dot" style={{ background: "var(--lime-deep)" }}></span>{t.drivers.badge}</span>
            <img src="/assets/food/chicken-portrait.jpg" alt="Driver Pip's Eat" />
            <div className="stat-card lime">
              <div className="icn"><IcZap size={20} /></div>
              <div>
                <div className="v">{t.drivers.statValue}</div>
                <div className="l">{t.drivers.statLabel}</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} className="audience__copy">
            <span className="pill pill--lime">{t.drivers.tape}</span>
            <h2 className="headline h2">
              {t.drivers.title1} <span className="script" style={{ color: "var(--lime-deep)" }}>{t.drivers.title2}</span> {t.drivers.title3}
            </h2>
            <p>{t.drivers.body}</p>
            <div className="benefits">
              {t.drivers.benefits.map((b, i) => (
                <div key={i} className={"benefit" + (i % 2 === 0 ? " lime" : "")}>
                  <div className="icn">{icons[i]}</div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
            <a href="#download" className="btn btn--dark btn--lg">
              {t.drivers.cta} <IcArrowRight size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Restaurants() {
  const { t } = useLang();
  const icons = [<IcEye size={18} />, <IcTruck size={18} />, <IcWallet size={18} />, <IcDashboard size={18} />];
  return (
    <section className="section section--cream" id="restaurants">
      <div className="container">
        <div className="audience audience--reverse">
          <Reveal scale className="audience__visual">
            <span className="badge"><span className="dot" style={{ background: "var(--orange)" }}></span>{t.restaurants.badge}</span>
            <img src="/assets/food/spread-wide.webp" alt="Restaurant partenaire" />
            <div className="stat-card orange">
              <div className="icn"><IcStore size={20} /></div>
              <div>
                <div className="v">{t.restaurants.statValue}</div>
                <div className="l">{t.restaurants.statLabel}</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} className="audience__copy">
            <span className="pill pill--orange">{t.restaurants.tape}</span>
            <h2 className="headline h2">
              {t.restaurants.title1}
              <br />
              <span className="script">{t.restaurants.title2}</span>
            </h2>
            <p>{t.restaurants.body}</p>
            <div className="benefits">
              {t.restaurants.benefits.map((b, i) => (
                <div key={i} className={"benefit" + (i % 2 === 0 ? " orange" : "")}>
                  <div className="icn">{icons[i]}</div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn--dark btn--lg">
              {t.restaurants.cta} <IcArrowRight size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
