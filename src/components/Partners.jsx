import React from 'react';
import { useLang, Reveal } from '../hooks.jsx';

export default function Partners() {
  const { t } = useLang();
  return (
    <section className="partners">
      <div className="container">
        <div className="partners__title">{t.partners.label}</div>
        <div className="partners__grid">
          <Reveal className="partner mtn"><div className="nm">MTN<span className="s">MoMo</span></div></Reveal>
          <Reveal delay={1} className="partner orange-tel"><div className="nm">orange<span className="s">Money</span></div></Reveal>
          <Reveal delay={2} className="partner"><div className="nm">Camtel<span className="s">Connectivity</span></div></Reveal>
          <Reveal delay={3} className="partner"><div className="nm">Express Union<span className="s">Finance</span></div></Reveal>
          <Reveal delay={4} className="partner"><div className="nm">Afriland<span className="s">First Bank</span></div></Reveal>
          <Reveal delay={4} className="partner"><div className="nm">CCIMA<span className="s">Douala</span></div></Reveal>
        </div>
      </div>
    </section>
  );
}
