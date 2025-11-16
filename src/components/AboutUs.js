import React from 'react';
import signatureImage from '../assets/images/signature.png';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-container">
        <div className="about-content">
          <div className="about-subtitle">ABOUT US</div>
          <h2 className="about-title">We have 40 years experience</h2>
          <p className="about-quote">
            "We have over 25 years of experience providing expert financial advice to both businesses and individuals."
          </p>
          <p className="about-description">
            Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
          </p>
          <div className="about-signature">
            <img src={signatureImage} alt="Signature" className="signature-image" />
            <div className="signature-name">Tina Fox - CEO & Founder</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

