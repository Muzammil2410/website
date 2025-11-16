import React from 'react';
import { useNavigate } from 'react-router-dom';
import serviceImageA from '../assets/images/a.png';
import serviceImageB from '../assets/images/b.png';
import serviceImageC from '../assets/images/c.png';
import serviceImageD from '../assets/images/d.png';
import serviceImageE from '../assets/images/e.png';
import serviceImageF from '../assets/images/f.png';
import './Services.css';

const Services = () => {
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
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <div className="section-subtitle-label">OUR SERVICES</div>
          <h2 className="section-title">
            We Provide The Solutions<br />To Grow Your Business Faster
          </h2>
        </div>
        
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
              </div>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

