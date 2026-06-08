import React, { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [phase, setPhase] = useState('visible'); // 'visible' | 'closing'
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const closeTimer  = setTimeout(() => setPhase('closing'), 2200);
    const removeTimer = setTimeout(() => setMounted(false), 3000);
    return () => { clearTimeout(closeTimer); clearTimeout(removeTimer); };
  }, []);

  if (!mounted) return null;

  return (
    <div className={"splash" + (phase === 'closing' ? " splash--closing" : "")}>
      <div className="splash__inner">
        {/* Wrapper pour le pop-in, image pour le heartbeat */}
        <div className="splash__logo-wrap">
          <img src="/assets/pips_logo_tech.png" alt="Pip's Technologies" className="splash__logo" />
        </div>
        <div className="splash__bar">
          <div className="splash__progress" />
        </div>
      </div>
    </div>
  );
}
