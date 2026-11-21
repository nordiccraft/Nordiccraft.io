import React from 'react';

const MARQUEE_ITEMS = [
  'SWIFTUI & APPKIT',
  'NEXT.JS & TYPESCRIPT',
  'DIGITAL SIGNAGE MDM',
  'MICROSOFT GRAPH',
  'REAL-TIME WEBSOCKETS',
  'RASPBERRY PI OVERLAYFS',
  'LIQUID GLASS UI',
  'SMART-QR KIOSKS',
  'AZURE COSMOS DB',
  'TOUCHSCREEN GAMES',
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="marquee-shell" aria-hidden="true">
      <div className="marquee-track">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <span key={idx} className="marquee-item">
            <span className={`marquee-dot ${idx % 3 === 0 ? 'copper' : ''}`} />
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
