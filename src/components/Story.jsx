import React from 'react';
import { useLang, Reveal } from '../hooks.jsx';
import { IcZap } from './Icons.jsx';

// ============================================================
// PIPS TECHNOLOGIES — Story section
// ============================================================

export default function Story() {
  const { t } = useLang();
  return (
    <section className="section">
      <div className="container">
        <div className="story">
          <Reveal scale className="story__visual">
            <div className="story__badge">
              <span className="dot"></span>
              <span>{t.story.badge}</span>
            </div>
            <img src="/assets/food/chicken-square.jpg" alt="Cuisine locale" />
            <div className="story__stats">
              <div className="icn"><IcZap size={20} /></div>
              <div>
                <div className="v">{t.story.statValue}</div>
                <div className="l">{t.story.statLabel}</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} className="story__copy">
            <div className="eyebrow"><span className="dot"></span>{t.story.eyebrow}</div>
            <h2 className="headline h2">
              {t.story.title1} <span className="script">{t.story.titleScript}</span>
            </h2>
            <p>{t.story.body1}</p>
            <p>{t.story.body2}</p>
            <p>
              {t.story.body3Pre}
              <strong>{t.story.body3Bold}</strong>
              {t.story.body3Post}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
