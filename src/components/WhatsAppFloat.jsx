import React from 'react';
import { IcWhatsapp } from './Icons.jsx';

export default function WhatsAppFloat() {
  return (
    <a href="https://wa.me/237693569912" target="_blank" rel="noopener" className="wa-float" aria-label="WhatsApp">
      <IcWhatsapp size={28} />
    </a>
  );
}
