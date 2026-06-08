import React, { useState } from 'react';
import { useLang, Reveal, Html } from '../hooks.jsx';
import { IcClose, IcPlus } from './Icons.jsx';

// ============================================================
// PIPS TECHNOLOGIES — FAQ section
// ============================================================

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className={"faq__item" + (open ? " open" : "")}>
      <button className="faq__q" onClick={onToggle} aria-expanded={open}>
        <span>{q}</span>
        <span className="icn">{open ? <IcClose size={16} /> : <IcPlus size={16} />}</span>
      </button>
      <div className="faq__a">
        <Html as="div" className="faq__a-inner" html={a} />
      </div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="section section--cream" id="faq">
      <div className="container container--narrow">
        <Reveal className="section__head section__head--center">
          <div>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="dot"></span>{t.faq.eyebrow}
            </div>
            <h2 className="headline h2" style={{ textAlign: "center" }}>
              {t.faq.title1} <span className="script">{t.faq.titleScript}</span>
            </h2>
            <p className="lead" style={{ marginTop: 20 }}>{t.faq.lead}</p>
          </div>
        </Reveal>

        <Reveal className="faq__list">
          {t.faq.items.map((item, i) => (
            <FaqItem
              key={i}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
