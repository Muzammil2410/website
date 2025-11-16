import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Success Stories', href: '#success' },
      { name: 'Partners', href: '#partners' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Support', href: '#support' },
      { name: 'FAQ', href: '#faq' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <p className="footer-copyright">
            © Onatrix. All Rights Reserved. Credits to <span className="footer-credits">Themesflat</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

