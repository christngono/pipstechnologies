import React, { useState } from 'react';
import { useLang, Reveal } from '../hooks.jsx';
import { IcArrowRight, IcMapPin, IcMail, IcMessage, IcWhatsapp } from './Icons.jsx';

export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const cardIcons = [<IcMail size={20} />, <IcMapPin size={20} />, <IcWhatsapp size={20} />, <IcMessage size={20} />];
  const cardClasses = ["", " lime", " green", ""];
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.target.reset();
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <Reveal className="contact__copy">
          <div className="eyebrow" style={{ color: "var(--orange-2)" }}>
            <span className="dot"></span>{t.contact.eyebrow}
          </div>
          <h2 className="headline h2">
            {t.contact.title1} <span className="script">{t.contact.titleScript}</span>
          </h2>
          <p>{t.contact.lead}</p>

          <div className="contact__cards">
            {t.contact.cards.map((c, i) => (
              <a key={i} href="#" className={"contact__card" + cardClasses[i]}>
                <div className="icn">{cardIcons[i]}</div>
                <div>
                  <div className="l">{c.l}</div>
                  <div className="v">{c.v}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1}>
          <form className="form" onSubmit={onSubmit}>
            <div className="form__stamp">{sent ? t.contact.f.sent : t.contact.formStamp}</div>
            <h3>{t.contact.formTitle}</h3>
            <div className="form__desc">{t.contact.formDesc}</div>

            <div className="field-row">
              <div className="field">
                <label>{t.contact.f.name}</label>
                <input type="text" required placeholder="Aïssatou Mbappé" />
              </div>
              <div className="field">
                <label>{t.contact.f.email}</label>
                <input type="email" required placeholder="vous@email.com" />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label>{t.contact.f.phone}</label>
                <input type="tel" placeholder="+237 6XX XXX XXX" />
              </div>
              <div className="field">
                <label>{t.contact.f.role}</label>
                <select>
                  {t.contact.f.roles.map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>
            </div>
            <div className="field">
              <label>{t.contact.f.message}</label>
              <textarea required placeholder={t.contact.f.messagePh}></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--lg" style={{ width: "100%" }}>
              {t.contact.f.send} <IcArrowRight size={18} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
