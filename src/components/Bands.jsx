import React, { Fragment } from 'react';
import { useLang } from '../hooks.jsx';

// ============================================================
// PIPS TECHNOLOGIES — Trust band (under hero) + cuisines grid + marquee
// ============================================================

export function TrustBand() {
  const { t } = useLang();
  return (
    <div className="trust">
      <div className="container">
        <div className="trust__inner">
          <span className="trust__label">{t.trust.label}</span>
          <img
            src="/assets/touchpay.png"
            alt="TouchPay"
            className="trust__logo"
          />
        </div>
      </div>
    </div>
  );
}

export function CuisineStrip() {
  const items = [
    "Poulet braisé", "Ndolé", "Riz jollof", "Burgers",
    "Wraps", "Eru", "Plantain", "Achu", "Pizza",
    "Petit déjeuner", "Brochettes", "Salades",
  ];
  const row = (key) => (
    <span className="cuisine-strip__item" key={key}>
      {items.map((it, i) => (
        <Fragment key={i}>
          <span>{it}</span>
          <span className="dot"></span>
        </Fragment>
      ))}
    </span>
  );
  return (
    <div className="cuisine-strip" aria-hidden="true">
      <div className="cuisine-strip__track">
        {row("a")}{row("b")}
      </div>
    </div>
  );
}
