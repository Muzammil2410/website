import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import serviceImageA from '../assets/images/a.png';
import serviceImageB from '../assets/images/b.png';
import serviceImageC from '../assets/images/c.png';
import serviceImageD from '../assets/images/d.png';
import serviceImageE from '../assets/images/e.png';
import serviceImageF from '../assets/images/f.png';
import contactImage from '../assets/images/9.png';
import bgSvg from '../assets/images/Bg.svg';
import dotSvg from '../assets/images/Dot.svg';
import './ServicesPage.css';

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: 'Risk Management',
      image: serviceImageA,
      description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
      path: '/services/risk-management'
    },
    {
      id: 2,
      title: 'Bonds & Commodities',
      image: serviceImageB,
      description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'
    },
    {
      id: 3,
      title: 'Assurance & Audits',
      image: serviceImageC,
      description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'
    },
    {
      id: 4,
      title: 'Tax and Trusts',
      image: serviceImageD,
      description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'
    },
    {
      id: 5,
      title: 'Financial Advisor',
      image: serviceImageE,
      description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'
    },
    {
      id: 6,
      title: 'Statistic Advisors',
      image: serviceImageF,
      description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'
    }
  ];

  return (
    <div className="services-page">
      <Header />
      <div className="services-page-content">
        {/* Services Hero Section */}
        <section className="services-hero-section">
          <div className="services-page-container">
            <h1 className="services-page-title">Our Services</h1>
            <div className="services-breadcrumbs">
              <span>Home</span> <span className="breadcrumb-separator">></span> <span className="breadcrumb-services">Services</span>
            </div>
          </div>
        </section>

        {/* Intro Title Section */}
        <section className="services-intro-section">
          <div className="services-page-container">
            <h2 className="services-intro-title">We Provide The Solutions<br />To Grow Your Business Faster</h2>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="services-grid-section">
          <div className="services-page-container">
            <div className="services-grid">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="service-card"
                  onClick={() => service.path && navigate(service.path)}
                  style={{ cursor: service.path ? 'pointer' : 'default' }}
                >
                  <h3 className="service-title">{service.title}</h3>
                  <div className="service-image-wrapper">
                    <img src={service.image} alt={service.title} className="service-image" />
                    <div className="service-image-border"></div>
                  </div>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pagination Section */}
        <section className="services-pagination-section">
          <div className="services-page-container">
            <div className="pagination">
              <button className="pagination-btn pagination-prev">Prev</button>
              <div className="pagination-numbers">
                <span className="pagination-number pagination-active">1</span>
                <span className="pagination-number">2</span>
              </div>
              <button className="pagination-btn pagination-next">Next</button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="services-contact-section">
          <div className="services-page-container">
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
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;

