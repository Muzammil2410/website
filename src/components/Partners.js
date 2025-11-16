import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    { name: 'FREEDOMBIRD', icon: '🐦' },
    { name: 'IDENTITY', icon: '🆔' },
    { name: 'NATURAL', icon: '🌿' },
    { name: 'simpleaf', icon: '🍃' },
    { name: 'GLOBE', icon: '🌍' },
    { name: 'FossilGroup', icon: '🦴' }
  ];

  return (
    <section id="partners" className="partners">
      <div className="partners-container">
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-icon">{partner.icon}</div>
              <div className="partner-name">{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

