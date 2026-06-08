import React from 'react';
import { useLang, Reveal } from '../hooks.jsx';

export default function Partners() {
  const { t } = useLang();
  return (
    <section className="partners">
      <div className="container">
        <div className="partners__title">{t.partners.label}</div>
        <div className="partners__grid partners__grid--payment">
          <Reveal className="partner partner--img">
            <img src="/assets/mtnmoney.jpeg" alt="MTN Mobile Money" />
          </Reveal>
          <Reveal delay={1} className="partner partner--img">
            <img src="/assets/orangemoney.png" alt="Orange Money" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
