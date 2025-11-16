import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Risk Management',
      description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
      image: '👥'
    },
    {
      title: 'Bonds & Commodities',
      description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
      image: '📊'
    },
    {
      title: 'Assurance & Audits',
      description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
      image: '📋'
    },
    {
      title: 'Tax and Trusts',
      description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
      image: '💼'
    },
    {
      title: 'Financial Advisor',
      description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
      image: '💡'
    },
    {
      title: 'Statistic Advisors',
      description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
      image: '📈'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <div className="section-subtitle-label">OUR SERVICES</div>
          <h2 className="section-title">
            We Provide <span className="gradient-text">The Solutions</span> To Grow Your <span className="gradient-text">Business Faster</span>
          </h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">{service.image}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

