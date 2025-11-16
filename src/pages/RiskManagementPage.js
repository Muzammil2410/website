import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import riskImage1 from '../assets/images/risk 1.png';
import riskImage2 from '../assets/images/risk 2.png';
import riskImage3 from '../assets/images/risk 3.png';
import contactImage from '../assets/images/9.png';
import bgSvg from '../assets/images/Bg.svg';
import './RiskManagementPage.css';

const RiskManagementPage = () => {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setEmail('');
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', question: '' });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="risk-management-page">
      <Header />
      <div className="risk-management-content">
        {/* Page Header */}
        <section className="risk-management-hero">
          <div className="risk-management-container">
            <h1 className="risk-management-title">Risk Management</h1>
            <div className="breadcrumbs">
              <span>Home</span> <span className="breadcrumb-separator">{'>'}</span> 
              <span>Services</span> <span className="breadcrumb-separator">{'>'}</span> 
              <span className="breadcrumb-current">Risk Management</span>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="risk-management-main">
          <div className="risk-management-container">
            <div className="risk-management-layout">
              {/* Sidebar */}
              <aside className="risk-management-sidebar">
                {/* About Us Section */}
                <div className="sidebar-about-section">
                  <h3 className="sidebar-about-title">About us</h3>
                  <div className="sidebar-image-wrapper">
                    <img src={riskImage3} alt="About us" className="sidebar-about-image" />
                  </div>
                  <p className="sidebar-about-text">
                    Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  </p>
                </div>

                {/* Callback Form Section */}
                <div className="sidebar-callback-section">
                  <h3 className="callback-title">How can we help you?</h3>
                  <p className="callback-subtitle">help you</p>
                  <form onSubmit={handleSubmit} className="callback-form">
                    <div className="callback-input-wrapper">
                      <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="callback-email-input"
                        required
                      />
                      <span className="callback-email-icon">✉️</span>
                    </div>
                    <button type="submit" className="callback-submit-btn">Submit</button>
                  </form>
                </div>
              </aside>

              {/* Main Content */}
              <div className="risk-management-main-content">
                {/* First Image */}
                <div className="risk-image-section">
                  <img src={riskImage1} alt="Risk Management" className="risk-main-image" />
                </div>

                {/* Key Points Section */}
                <div className="key-points-section">
                  <h2 className="key-points-heading">key point</h2>
                  <ul className="key-points-list">
                    <li>
                      Financial planning is the process of helping clients meet their financial needs today and reach their dreams and goals tomorrow.
                    </li>
                    <li>
                      Pellentesque fringilla augue quis dolor dapibus semper eget non nibh. Ut lobortis, nulla sed euismod posuere, quam magna scelerisque lectus, auctor iaculis quam ligula nec augue
                    </li>
                    <li>
                      In hac habitasse platea dictumst. Aliquam felis ante, tincidunt sed magna auctor, aliquet dapibus turpis.
                    </li>
                  </ul>
                </div>

                {/* Financial Plan Section */}
                <div className="financial-plan-section">
                  <h2 className="financial-plan-heading">A financial plan is based on a personal relationship</h2>
                  <p className="financial-plan-paragraph">
                    No matter where you find yourself today or see yourself in the future, a financial planning relationship with an Ameriprise financial advisor can help you find your financial balance and bring your dreams and goals more within reach.
                  </p>
                  <p className="financial-plan-paragraph">
                    Our Confident Retirement approach to financial planning begins with a one-on-one conversation. At its core is a personal relationship with an advisor dedicated to helping you reach the future you imagine, on your own terms, in a way that is convenient for you.
                  </p>
                  <p className="financial-plan-intro">
                    The financial planning process all starts with learning about you. Your advisor will take the time to:
                  </p>
                  <ul className="financial-plan-list">
                    <li>Listen closely to you and learn what you value</li>
                    <li>Analyze your current financial situation</li>
                    <li>Understand your feelings about managing money and investments</li>
                  </ul>
                  <p className="financial-plan-paragraph">
                    Then your advisor will offer personalized advice and guidance to help you reach your financial goals. Ameriprise advisors have access to a broad array of solutions to help you plan for your confident future.
                  </p>
                  <p className="financial-plan-paragraph">
                    And once you have a plan in place, you may feel more confident knowing that your advisor will stay with you over time, helping you track your progress toward your goals and making adjustments along the way when your life or dreams change.
                  </p>
                </div>

                {/* Second Image */}
                <div className="risk-image-section">
                  <img src={riskImage2} alt="Risk Management Team" className="risk-main-image" />
                </div>

                {/* Financial Confidence Section */}
                <div className="financial-confidence-section">
                  <h2 className="financial-confidence-heading">We'll help you achieve financial confidence</h2>
                  <p className="financial-confidence-paragraph">
                    Working with a financial advisor may help you come away feeling more confident knowing that you have the support you need to help:
                  </p>
                  <ul className="financial-confidence-list">
                    <li>Cover your essentials. Essentials are the monthly expenses that keep your life running.</li>
                    <li>Ensure your lifestyle. Lifestyle is about the things that you want to do, and how you want to live, today and in the future.</li>
                    <li>Prepare for the unexpected. The unexpected are events that could derail your financial plans.</li>
                    <li>Leave a legacy. Legacy is about the impact you'll make on the people, charities and causes that are important to you.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Have a Question Section - Full Width Below Sidebar and Main Content */}
            <div className="question-section">
              <h2 className="question-heading">Have a question ?</h2>
              <form onSubmit={handleQuestionSubmit} className="question-form">
                <div className="question-form-row">
                  <div className="question-form-field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="question-input"
                      required
                    />
                  </div>
                  <div className="question-form-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="question-input"
                      required
                    />
                  </div>
                </div>
                <div className="question-form-field">
                  <textarea
                    name="question"
                    placeholder="Question"
                    value={formData.question}
                    onChange={handleFormChange}
                    className="question-textarea"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="question-submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="risk-contact-section">
          <div className="risk-management-container">
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

export default RiskManagementPage;

