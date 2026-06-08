// ============================================================
// PIPS TECHNOLOGIES — Hooks & utility components
// ============================================================
import React, { useContext, useEffect, useRef } from 'react';
import { LangContext } from './i18n.jsx';

// ----- useLang -----
export const useLang = () => useContext(LangContext);

// ----- Reveal-on-scroll hook -----
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.06 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// ----- Reveal wrapper -----
export function Reveal({ children, delay = 0, scale = false, as: As = 'div', className = '', ...rest }) {
  const ref = useReveal();
  const cls = `reveal${scale ? ' reveal--scale' : ''}${delay ? ` reveal-d-${delay}` : ''}${className ? ' ' + className : ''}`;
  return <As ref={ref} className={cls} {...rest}>{children}</As>;
}

// ----- HTML helper -----
export const Html = ({ html, as: As = 'span', ...rest }) => (
  <As dangerouslySetInnerHTML={{ __html: html }} {...rest} />
);
