import React from 'react';
import heroImage from '../assets/images/hero.png';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            We bring success to you
          </h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur, adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>
          <button 
            className="btn-contact"
            onClick={() => scrollToSection('contact')}
          >
            Contact us
          </button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Professional woman" className="hero-image-main" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
