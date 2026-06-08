import React from 'react';
import { useLang, Reveal } from '../hooks.jsx';
import { IcBike, IcCheck, IcClock, IcMapPin, IcSearch, IcStar, IcUtensils, IcWallet } from './Icons.jsx';

// ============================================================
// PIPS TECHNOLOGIES — Pip's Eat showcase + "How it works"
// ============================================================

function Phones() {
  return (
    <div className="phones">
      <div className="phone phone-a" aria-hidden="true">
        <div className="scrn">
          <div className="head">BONSOIR</div>
          <div className="greet">Aïssatou</div>
          <div className="scrn-search">
            <IcSearch size={12} />
            <span>Que voulez-vous manger ?</span>
          </div>
          <RestaurantCard pic="/assets/food/chicken-square.jpg" name="Chez Maman Rose" meta="Poulet DG · 12 min" badge="-15%" />
          <RestaurantCard pic="/assets/food/spread-wide.webp" name="Le Ndolé Royal" meta="Ndolé · 18 min" />
          <RestaurantCard pic="/assets/food/wrap-wide.webp" name="Burger Spot 237" meta="Cheeseburger · 22 min" />
          <RestaurantCard pic="/assets/food/feast-wide.webp" name="Akwa Bowl" meta="Salades · 15 min" badge="NEW" />
        </div>
      </div>

      <div className="phone phone-b" aria-hidden="true">
        <div className="scrn">
          <div className="head">DRIVER · EN COURSE</div>
          <div className="driver-map">
            <svg className="route" viewBox="0 0 240 200" preserveAspectRatio="none">
              <path d="M 30 170 C 60 130, 100 150, 130 100 S 200 60, 210 30"
                stroke="#E97817" strokeWidth="3" strokeDasharray="6 4" fill="none" />
              <circle cx="30" cy="170" r="6" fill="#9DC74F" stroke="#FBF6EE" strokeWidth="2" />
              <circle cx="210" cy="30" r="6" fill="#E97817" stroke="#FBF6EE" strokeWidth="2" />
              <g transform="translate(125 90)">
                <circle r="14" fill="#3D1F14" />
                <g stroke="#FBF6EE" strokeWidth="1.5" fill="none">
                  <circle cx="-4" cy="3" r="3" />
                  <circle cx="5" cy="3" r="3" />
                  <path d="M -4 3 L 0 -4 L 4 -1 L 5 3" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
            </svg>
          </div>
          <div className="order-card">
            <div className="ttl">Nouvelle commande</div>
            <div className="route-info">
              <IcMapPin size={11} /> Bonapriso → Akwa
            </div>
            <div className="pay">1 500 F · 2,4 km</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RestaurantCard({ pic, name, meta, badge }) {
  return (
    <div className="restaurant-card">
      <div className="pic" style={{ backgroundImage: `url("${pic}")` }}></div>
      <div>
        <div className="name">{name}</div>
        <div className="meta">{meta}</div>
      </div>
      {badge && <div className="badge">{badge}</div>}
    </div>
  );
}

export default function PipsEat() {
  const { t } = useLang();
  const stepIcons = [
    <IcUtensils size={20} />,
    <IcWallet size={20} />,
    <IcBike size={20} />,
    <IcCheck size={20} />,
  ];
  const statIcons = [
    <IcMapPin size={18} />,
    <IcWallet size={18} />,
    <IcClock size={18} />,
    <IcStar size={18} />,
  ];

  return (
    <section className="section section--cocoa" id="service">
      <div className="container">
        <Reveal className="section__head">
          <div>
            <div className="eyebrow"><span className="dot"></span>{t.pipseat.eyebrow}</div>
            <h2 className="headline h2">
              {t.pipseat.title1} <span className="script">{t.pipseat.titleScript}</span>
              {t.pipseat.title3 ? <> {t.pipseat.title3}</> : null}
            </h2>
          </div>
          <p className="lead">{t.pipseat.lead}</p>
        </Reveal>

        <div className="pipseat__intro">
          <Reveal className="pipseat__copy">
            <span className="pill pill--orange">{t.pipseat.copyTitle1} {t.pipseat.copyTitle2} {t.pipseat.copyTitle3}</span>
            <h3 className="headline h3" style={{ marginTop: 18, color: "white" }}>
              {t.pipseat.copyTitle1} <span className="script" style={{ color: "var(--orange-2)" }}>{t.pipseat.copyTitle2}</span> {t.pipseat.copyTitle3}
            </h3>
            <p style={{ marginTop: 18 }}>{t.pipseat.copyBody}</p>

            <div className="pipseat__stats" style={{ marginTop: 32 }}>
              {t.pipseat.stats.map((s, i) => (
                <div key={i} className="pipseat__stat">
                  <div className="icn">{statIcons[i]}</div>
                  <div className="v">{s.v}</div>
                  <div className="l">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={1} scale><Phones /></Reveal>
        </div>

        <div className="how">
          <Reveal as="h3" className="how__title">
            {t.pipseat.howTitle1} <span className="script">{t.pipseat.howTitleScript}</span>
          </Reveal>
          <Reveal as="p" delay={1} className="how__sub">{t.pipseat.howSub}</Reveal>

          <div className="how__steps">
            {t.pipseat.steps.map((s, i) => (
              <Reveal key={s.num} delay={i + 1} className="how__step">
                <div className="num">{s.num}</div>
                <div className="icn">{stepIcons[i]}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
