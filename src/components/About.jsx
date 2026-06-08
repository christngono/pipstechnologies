import React from 'react';
import { useLang, Reveal } from '../hooks.jsx';
import { IcGlobe, IcHeart, IcSparkles } from './Icons.jsx';

// ============================================================
// PIPS TECHNOLOGIES — About section (values + mission strip)
// ============================================================

export default function About() {
  const { t } = useLang();
  const icons = [<IcGlobe size={26} />, <IcSparkles size={26} />, <IcHeart size={26} />];

  return (
    <section className="section section--cream" id="about">
      <div className="container">
        <Reveal className="section__head">
          <div>
            <div className="eyebrow"><span className="dot"></span>{t.about.eyebrow}</div>
            <h2 className="headline h2">
              {t.about.title1} <span className="script">{t.about.titleScript}</span>
            </h2>
          </div>
          <p className="lead">{t.about.lead}</p>
        </Reveal>

        <div className="values">
          {t.about.values.map((v, i) => (
            <Reveal key={v.num} delay={i + 1} className="value">
              <div className="value__num">{v.num}</div>
              <div className="value__icon">{icons[i]}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mission">
          <div
            className="mission__visual"
            style={{ backgroundImage: 'url("/assets/food/platter.webp")' }}
          />
          <div className="mission__copy">
            <span className="pill">{t.about.missionPill}</span>
            <h2>
              {t.about.missionTitle1}
              <br />
              <span className="script">{t.about.missionTitleScript}</span>
            </h2>
            <p>{t.about.missionBody}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
