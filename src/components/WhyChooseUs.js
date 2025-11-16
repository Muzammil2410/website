import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '⭐',
      title: 'Proven Excellence',
      description: 'Years of experience delivering exceptional results for clients across industries.'
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Our team consists of industry-leading professionals with deep expertise.'
    },
    {
      icon: '🎯',
      title: 'Client-Focused',
      description: 'We prioritize your success and work closely with you to achieve your goals.'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Efficient processes ensure timely delivery without compromising quality.'
    },
    {
      icon: '💼',
      title: 'Comprehensive Solutions',
      description: 'End-to-end services covering all aspects of your business needs.'
    },
    {
      icon: '🔐',
      title: 'Trusted Partner',
      description: 'Reliable, secure, and committed to maintaining the highest standards.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="why-us" className="why-choose-us">
      <div className="why-container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Discover what sets us apart and makes us the perfect partner for your success
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

