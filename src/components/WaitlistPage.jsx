import React, { useState } from 'react';
import { useLang } from '../hooks.jsx';
import { IcArrowRight, IcClose } from './Icons.jsx';

const ROLES_FR = ["Un client", "Un livreur", "Un restaurateur", "Un investisseur"];
const ROLES_EN = ["A customer", "A rider", "A restaurant owner", "An investor"];

export default function WaitlistPage({ onClose }) {
  const { lang, t } = useLang();
  const roles = lang === 'fr' ? ROLES_FR : ROLES_EN;
  const isFr = lang === 'fr';

  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) {
      setError(isFr ? 'Veuillez remplir tous les champs obligatoires.' : 'Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="waitlist-overlay">
      <div className="waitlist-page">
        {/* En-tête */}
        <div className="waitlist-head">
          <a href="#top" onClick={onClose} className="nav__brand" aria-label="Pip's Technologies">
            <div className="brand-logo-wrap">
              <img src="/assets/pips_logo_tech.png" alt="Pip's Technologies" />
            </div>
            <span className="nav__brand-text">
              <span className="a">Pip's</span>
              <span className="b">TECHNOLOGIES</span>
            </span>
          </a>
          <button className="waitlist-close" onClick={onClose} aria-label="Fermer">
            <IcClose size={22} />
          </button>
        </div>

        {/* Contenu */}
        <div className="waitlist-body">
          {!submitted ? (
            <>
              <div className="waitlist-intro">
                <span className="pill pill--orange" style={{ marginBottom: 20 }}>
                  {isFr ? 'LISTE D\'ATTENTE' : 'WAITLIST'}
                </span>
                <h1 className="headline h2">
                  {isFr ? (
                    <>Soyez parmi les <span className="script" style={{ color: 'var(--orange)' }}>premiers.</span></>
                  ) : (
                    <>Be among the <span className="script" style={{ color: 'var(--orange)' }}>first.</span></>
                  )}
                </h1>
                <p className="waitlist-lead">
                  {isFr
                    ? "Pip's Eat arrive bientôt. Inscrivez-vous maintenant pour recevoir l'accès en avant-première dès le lancement."
                    : "Pip's Eat is coming soon. Sign up now to get early access as soon as we launch."}
                </p>
              </div>

              <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
                <div className="wf-row">
                  <div className="wf-field">
                    <label htmlFor="wf-name">
                      {isFr ? 'Nom complet' : 'Full name'} <span className="req">*</span>
                    </label>
                    <input
                      id="wf-name"
                      type="text"
                      placeholder={isFr ? 'Jean Dupont' : 'John Doe'}
                      value={form.name}
                      onChange={set('name')}
                      autoComplete="name"
                    />
                  </div>
                  <div className="wf-field">
                    <label htmlFor="wf-email">
                      Email <span className="req">*</span>
                    </label>
                    <input
                      id="wf-email"
                      type="email"
                      placeholder="vous@exemple.com"
                      value={form.email}
                      onChange={set('email')}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="wf-row">
                  <div className="wf-field">
                    <label htmlFor="wf-phone">
                      {isFr ? 'Numéro WhatsApp' : 'WhatsApp number'}
                    </label>
                    <input
                      id="wf-phone"
                      type="tel"
                      placeholder="+237 6XX XX XX XX"
                      value={form.phone}
                      onChange={set('phone')}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="wf-field">
                    <label htmlFor="wf-role">
                      {isFr ? 'Je suis' : 'I am'} <span className="req">*</span>
                    </label>
                    <select id="wf-role" value={form.role} onChange={set('role')}>
                      <option value="">{isFr ? '— Choisir —' : '— Select —'}</option>
                      {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                </div>

                {error && <p className="wf-error">{error}</p>}

                <button type="submit" className="btn btn--primary btn--lg wf-submit">
                  {isFr ? "Rejoindre la liste d'attente" : 'Join the waitlist'} <IcArrowRight size={18} />
                </button>

                <p className="wf-note">
                  {isFr
                    ? '🔒 Vos données restent confidentielles. Aucun spam.'
                    : '🔒 Your data stays private. No spam.'}
                </p>
              </form>
            </>
          ) : (
            <div className="waitlist-success">
              <div className="waitlist-success-icon">🎉</div>
              <h2 className="headline h2">
                {isFr ? 'Vous êtes sur la liste !' : "You're on the list!"}
              </h2>
              <p>
                {isFr
                  ? `Merci ${form.name} ! Nous vous contacterons à ${form.email} dès que Pip's Eat est disponible.`
                  : `Thanks ${form.name}! We'll reach out to ${form.email} as soon as Pip's Eat launches.`}
              </p>
              <button className="btn btn--primary btn--lg" style={{ marginTop: 32 }} onClick={onClose}>
                {isFr ? "Retour à l'accueil" : 'Back to home'} <IcArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
