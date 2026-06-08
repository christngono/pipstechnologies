import React, { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setHiding(true), 1800);
    const removeTimer = setTimeout(() => setVisible(false), 2400);
    return () => { clearTimeout(fadeTimer); clearTimeout(removeTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div className={"splash" + (hiding ? " splash--out" : "")}>
      <div className="splash__inner">
        <img src="/assets/pips_logo_tech.png" alt="Pip's Technologies" className="splash__logo" />
        <div className="splash__bar">
          <div className="splash__progress" />
        </div>
      </div>
    </div>
  );
}
