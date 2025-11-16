import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import contactImage from '../assets/images/9.png';
import bgSvg from '../assets/images/Bg.svg';
import mapImage from '../assets/images/map.png';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact-page-content">
        {/* Contact Hero Section */}
        <section className="contact-hero-section">
          <div className="contact-page-container">
            <h1 className="contact-page-title">Contact Us</h1>
            <div className="contact-breadcrumbs">
              <span>Home</span> <span className="breadcrumb-separator">></span> <span className="breadcrumb-contact">Contact</span>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="contact-info-section">
          <div className="contact-page-container">
            <div className="contact-content-grid">
              <div className="contact-image-column">
                <div className="contact-image-wrapper">
                  <img src={bgSvg} alt="" className="contact-triangle-svg" />
                  <img src={contactImage} alt="Professional man" className="contact-image-main" />
                </div>
              </div>
              <div className="contact-info-column">
                <h2 className="contact-title">Let us know about<br />your next project</h2>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <div className="contact-details">
                      <div className="contact-label">Office location</div>
                      <div className="contact-value">Klarabergsviadukten 90, 111 52 Stockholm</div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <div className="contact-details">
                      <div className="contact-label">Phone number</div>
                      <div className="contact-value">+46 8 123 456 75</div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <div className="contact-details">
                      <div className="contact-label">E-mail address</div>
                      <div className="contact-value">sales@onatrix.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section" style={{ backgroundImage: `url(${mapImage})` }}>
          <div className="contact-form-container">
            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <div className="form-subtitle">REQUEST A CALL BACK</div>
                <h2 className="form-title">Let us know about your<br />next project</h2>
                <p className="form-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Maecenas consectetur, ligula semper sagittis lobortis, eros metus efficitur purus
                </p>
              </div>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <select name="service" className="form-select">
                      <option value="Financial consulting">Financial consulting</option>
                      <option value="Tax and Trusts">Tax and Trusts</option>
                      <option value="Risk Management">Risk Management</option>
                      <option value="Assurance & Audits">Assurance & Audits</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="form-submit-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <Partners />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;

