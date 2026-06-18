import React, { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [phase, setPhase] = useState('entering'); // 'entering' | 'visible' | 'closing'
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Fin de l'entrée → visible avec heartbeat
    const visibleTimer = setTimeout(() => setPhase('visible'), 900);
    // Début de la fermeture
    const closeTimer   = setTimeout(() => setPhase('closing'), 2600);
    // Retrait du DOM
    const removeTimer  = setTimeout(() => setMounted(false), 3500);
    return () => { clearTimeout(visibleTimer); clearTimeout(closeTimer); clearTimeout(removeTimer); };
  }, []);

  if (!mounted) return null;

  return (
    <div className={"splash splash--" + phase}>
      <div className="splash__inner">
        <div className="splash__logo-wrap">
          <div className="splash__logo-circle">
            <img src="/assets/logo_pipstechnologies.png" alt="Pip's Technologies" className="splash__logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
