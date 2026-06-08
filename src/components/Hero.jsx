import React, { useState, useEffect } from 'react';
import { useLang } from '../hooks.jsx';
import { IcArrowRight } from './Icons.jsx';

export default function Hero() {
  const { t } = useLang();
  const slides = t.hero.slides;
  const images = [
    "/assets/image_banniere.png",
    "/assets/food/chicken-portrait.jpg",
    "/assets/food/feast-wide.webp",
    "/assets/food/wrap-wide.webp",
    "/assets/food/spread-wide.webp",
  ];
  const [active, setActive] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [wordAnim, setWordAnim] = useState('in'); // 'in' | 'out'
  const slideCount = slides.length;
  const words = t.hero.titleWords;

  // Carousel images
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slideCount), 5000);
    return () => clearInterval(id);
  }, [slideCount]);

  // Word flip — exit → change → enter
  useEffect(() => {
    const interval = setInterval(() => {
      setWordAnim('out');
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % words.length);
        setWordAnim('in');
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  const currentSlide = slides[active];

  return (
    <section className="hero" id="top">
      <div className="hero__carousel" aria-hidden="true">
        {images.map((src, i) => (
          <div
            key={i}
            className={"hero__slide" + (i === active ? " active" : "")}
            style={{ backgroundImage: `url("${src}")` }}
          />
        ))}
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          {t.hero.eyebrow && (
            <div className="hero__eyebrow">
              <span className="pulse"></span>
              <span>{t.hero.eyebrow}</span>
            </div>
          )}

          <h1 className="hero__title">
            {t.hero.title1}{" "}
            <span
              key={wordIdx}
              className={"script hero__word hero__word--" + wordAnim}
            >
              {words[wordIdx]}
            </span>
            <br />
            {t.hero.title2}
          </h1>

          <p className="hero__sub">{t.hero.sub}</p>

          <div className="hero__cta">
            <a href="#waitlist" className="btn btn--primary btn--lg">
              {t.hero.ctaPrimary} <IcArrowRight size={18} />
            </a>
            <a href="#about" className="btn btn--ghost-light btn--lg">
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <div className="v">{t.hero.meta1Value}</div>
              <div className="l">{t.hero.meta1Label}</div>
            </div>
            <div className="hero__meta-item">
              <div className="v">{t.hero.meta2Value}</div>
              <div className="l">{t.hero.meta2Label}</div>
            </div>
            <div className="hero__meta-item">
              <div className="v">{t.hero.meta3Value}</div>
              <div className="l">{t.hero.meta3Label}</div>
            </div>
          </div>
        </div>

        <div className="hero__card" key={active}>
          <div className="hero__card-head">
            <span className="live"></span>
            <span>{currentSlide.tag}</span>
          </div>
          <div className="hero__card-name">{currentSlide.title}</div>
          <div className="hero__card-meta">{currentSlide.sub}</div>
          <div className="hero__card-eta">
            <div>
              <div className="lab">{t.hero.cardEtaLabel}</div>
              <div style={{ fontWeight: 600, fontSize: 13, opacity: 0.85, marginTop: 4 }}>
                Bonapriso → Akwa
              </div>
            </div>
            <div className="v">28 min</div>
          </div>
        </div>
      </div>

      <div className="hero__controls">
        {slides.map((_, i) => (
          <button
            key={i}
            className={"hero__dot" + (i === active ? " active" : "")}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero__cue">
        <span>SCROLL</span>
        <span className="line"></span>
      </div>
    </section>
  );
}
