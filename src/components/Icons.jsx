import React from 'react';

// ============================================================
// PIPS TECHNOLOGIES — Icon set (custom SVG, no emoji)
// All icons use stroke=currentColor and inherit size from `size` prop.
// ============================================================

export const Icon = ({ children, size = 24, strokeWidth = 1.8, className = "", ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);

export const IcArrowRight = (p) => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></Icon>;
export const IcArrowDown = (p) => <Icon {...p}><line x1="12" y1="5" x2="12" y2="19" /><polyline points="6 13 12 19 18 13" /></Icon>;
export const IcArrowLeft = (p) => <Icon {...p}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="11 6 5 12 11 18" /></Icon>;
export const IcChevronDown = (p) => <Icon {...p}><polyline points="6 9 12 15 18 9" /></Icon>;
export const IcPlus = (p) => <Icon {...p}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></Icon>;
export const IcCheck = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12" /></Icon>;
export const IcClose = (p) => <Icon {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Icon>;
export const IcMenu = (p) => <Icon {...p}><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></Icon>;

export const IcClock = (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></Icon>;
export const IcMapPin = (p) => <Icon {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></Icon>;
export const IcMail = (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></Icon>;
export const IcPhone = (p) => <Icon {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.9 9.7a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" /></Icon>;
export const IcMessage = (p) => <Icon {...p}><path d="M21 11.5a8.4 8.4 0 0 1-9.5 8.5c-.7 0-1.4-.1-2-.3L4 21l1.3-5.5A8.5 8.5 0 1 1 21 11.5z" /></Icon>;
export const IcWhatsapp = (p) => (
  <Icon {...p} strokeWidth={0} fill="currentColor">
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.93 9.93 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zM12.04 20.15h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.17-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29z" />
  </Icon>
);

export const IcInstagram = (p) => <Icon {...p}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.4a4 4 0 1 1-4.7-4.7 4 4 0 0 1 4.7 4.7z" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></Icon>;
export const IcFacebook = (p) => <Icon {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></Icon>;
export const IcLinkedin = (p) => <Icon {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></Icon>;
export const IcTwitter = (p) => <Icon {...p}><path d="M22 4.01s-2 1-2.5 1.2A4.4 4.4 0 0 0 16 3c-2.5 0-4.5 2-4.5 4.5v1A10.7 10.7 0 0 1 3 4s-4 9 5 13c-2 1.4-4 1.9-7 1.9 9 5 20 0 20-11.5 0-.3 0-.6-.1-.9C21 5.5 22 4 22 4z" /></Icon>;

export const IcSparkles = (p) => <Icon {...p}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" /><path d="M19 14l.7 2.1L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-.9z" /><path d="M5 17l.5 1.4L7 19l-1.5.6L5 21l-.5-1.4L3 19l1.5-.6z" /></Icon>;
export const IcZap = (p) => <Icon {...p}><polygon points="13 2 4 14 11 14 10 22 19 10 12 10 13 2" /></Icon>;
export const IcStar = (p) => <Icon {...p}><polygon points="12 2 15.1 8.5 22 9.5 17 14.4 18.2 21.3 12 18 5.8 21.3 7 14.4 2 9.5 8.9 8.5" /></Icon>;
export const IcHeart = (p) => <Icon {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.6 1.1-1.1a5.5 5.5 0 0 0 0-7.7z" /></Icon>;
export const IcGlobe = (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><line x1="3" y1="12" x2="21" y2="12" /><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" /></Icon>;

export const IcBike = (p) => <Icon {...p}><circle cx="6" cy="17" r="4" /><circle cx="18" cy="17" r="4" /><path d="M6 17l3-9h5l3 9" /><path d="M9 8l3-3h2" /><path d="M14 8l2-3" /></Icon>;
export const IcStore = (p) => <Icon {...p}><path d="M3 9l1-5h16l1 5" /><path d="M3 9v11h18V9" /><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /><path d="M10 20v-5h4v5" /></Icon>;
export const IcBag = (p) => <Icon {...p}><path d="M6 7h12l-1 13H7z" /><path d="M9 7a3 3 0 0 1 6 0" /></Icon>;
export const IcUtensils = (p) => <Icon {...p}><path d="M4 2v8a3 3 0 0 0 6 0V2" /><line x1="7" y1="10" x2="7" y2="22" /><path d="M17 2v20" /><path d="M14 2c0 4 3 4 3 9" /></Icon>;
export const IcChef = (p) => <Icon {...p}><path d="M6 17h12v3H6z" /><path d="M18 17V13a4 4 0 1 0-2.5-7.4 4 4 0 0 0-7 0A4 4 0 1 0 6 13v4" /></Icon>;
export const IcTruck = (p) => <Icon {...p}><rect x="1" y="6" width="13" height="11" rx="1" /><path d="M14 9h4l3 4v4h-7" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></Icon>;

export const IcShield = (p) => <Icon {...p}><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z" /><polyline points="9 12 11 14 15 10" /></Icon>;
export const IcWallet = (p) => <Icon {...p}><path d="M3 7v11a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" /><path d="M21 9h-4a3 3 0 0 0 0 6h4z" /><path d="M3 7c0-1.7 1.3-3 3-3h13v6" /></Icon>;
export const IcDashboard = (p) => <Icon {...p}><rect x="3" y="3" width="8" height="11" rx="1" /><rect x="13" y="3" width="8" height="6" rx="1" /><rect x="3" y="17" width="8" height="4" rx="1" /><rect x="13" y="12" width="8" height="9" rx="1" /></Icon>;
export const IcEye = (p) => <Icon {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></Icon>;
export const IcGear = (p) => <Icon {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></Icon>;

export const IcSearch = (p) => <Icon {...p}><circle cx="11" cy="11" r="7" /><line x1="20" y1="20" x2="16.5" y2="16.5" /></Icon>;
export const IcAppleStore = (p) => (
  <Icon {...p} strokeWidth={0} fill="currentColor">
    <path d="M18.7 17.4a10.4 10.4 0 0 1-1 1.9c-.7 1.1-1.2 1.7-1.9 1.7-.6 0-1-.2-1.7-.5-.6-.3-1.2-.5-1.9-.5s-1.3.2-1.9.5c-.7.3-1.1.5-1.7.5-.7 0-1.2-.7-1.9-1.7-2.1-3-2.4-7.4 0-9.9a4.6 4.6 0 0 1 3.5-2c.7 0 1.5.2 2.1.5.5.3.9.5 1.4.5.4 0 .9-.2 1.6-.5.7-.3 1.2-.5 1.7-.4 1.2 0 2.4.7 3.2 1.8-2.8 1.6-2.3 5.7.5 6.6zM15.2 4a4.4 4.4 0 0 1-1.2 3.2c-.7.8-1.9 1.3-2.8 1.3a4.6 4.6 0 0 1 1.3-3.3A4.6 4.6 0 0 1 15.2 4z"/>
  </Icon>
);
export const IcGooglePlay = (p) => (
  <Icon {...p} strokeWidth={0} fill="currentColor">
    <path d="M3.6 2.1A1.5 1.5 0 0 0 3 3.3v17.4c0 .4.2.9.6 1.2l9.3-9.4-9.3-10.4zM14.4 13.5l3.3 1.9 2.4-1.4c.5-.3.8-.9.8-1.5 0-.6-.3-1.2-.9-1.5l-2.3-1.3-3.3 1.9 0 1.9zM13.4 12.5l-9.3 10.3a1.5 1.5 0 0 0 1.5.1L17 16.2l-3.6-3.7zM5.7 1.1a1.5 1.5 0 0 0-1.5.1l9.3 10.3 3.6-3.7L5.7 1.1z"/>
  </Icon>
);

export const IcQuoteOpen = (p) => (
  <Icon {...p} strokeWidth={0} fill="currentColor">
    <path d="M4 18h6V9H6a3 3 0 0 1 3-3V3a6 6 0 0 0-6 6v8c0 .6.5 1 1 1zM14 18h6V9h-4a3 3 0 0 1 3-3V3a6 6 0 0 0-6 6v8c0 .6.5 1 1 1z" />
  </Icon>
);

export const IcLogo = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
    {/* Outer lime arc */}
    <circle cx="50" cy="50" r="46" fill="none" stroke="#9DC74F" strokeWidth="3.5" strokeDasharray="180 320" strokeDashoffset="60" strokeLinecap="round" transform="rotate(-90 50 50)" />
    {/* Brown badge */}
    <circle cx="50" cy="50" r="42" fill="#3D1F14" />
    {/* Microchip pins */}
    <g stroke="#FBF6EE" strokeWidth="1.4" strokeLinecap="round">
      <line x1="42" y1="22" x2="42" y2="26" />
      <line x1="46" y1="22" x2="46" y2="26" />
      <line x1="50" y1="22" x2="50" y2="26" />
      <line x1="54" y1="22" x2="54" y2="26" />
      <line x1="58" y1="22" x2="58" y2="26" />
      <line x1="42" y1="44" x2="42" y2="48" />
      <line x1="46" y1="44" x2="46" y2="48" />
      <line x1="50" y1="44" x2="50" y2="48" />
      <line x1="54" y1="44" x2="54" y2="48" />
      <line x1="58" y1="44" x2="58" y2="48" />
    </g>
    {/* Chip body */}
    <rect x="38" y="26" width="24" height="18" rx="2.5" fill="#E97817" stroke="#FBF6EE" strokeWidth="1.5" />
    <rect x="42" y="30" width="16" height="10" rx="1.5" fill="#3D1F14" />
    <circle cx="50" cy="35" r="1.5" fill="#9DC74F" />
    {/* Pip's script */}
    <text x="50" y="68" textAnchor="middle" fill="#FBF6EE" fontFamily="Pacifico, cursive" fontSize="20" fontStyle="italic">Pip's</text>
    {/* TECHNOLOGIES */}
    <text x="50" y="82" textAnchor="middle" fill="#9DC74F" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="6.2" fontWeight="800" letterSpacing="1.6">TECHNOLOGIES</text>
  </svg>
);
