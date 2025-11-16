import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import tinaImage from '../assets/images/1.png';
import reviewImage from '../assets/images/2.png';
import teamImage3 from '../assets/images/3.png';
import teamImage4 from '../assets/images/4.png';
import teamImage5 from '../assets/images/5.png';
import teamImage6 from '../assets/images/6.png';
import teamImage7 from '../assets/images/7.png';
import teamImage8 from '../assets/images/8.png';
import contactImage from '../assets/images/9.png';
import bgSvg from '../assets/images/Bg.svg';
import dotSvg from '../assets/images/Dot.svg';
import './AboutPage.css';

const AboutPage = () => {
  // First row: 3 members (images 3, 4, 5)
  const firstRowMembers = [
    {
      name: 'Brandon Newton',
      title: 'Financial Advisor at Onatrix',
      image: teamImage3,
      width: 370,
      height: 462,
      left: 364
    },
    {
      name: 'AJ Carter',
      title: 'Financial Advisor at Onatrix',
      image: teamImage4,
      width: 370,
      height: 462,
      left: 764
    },
    {
      name: 'Aaron Lambert',
      title: 'Business Specialist at Onatrix',
      image: teamImage5,
      width: 370,
      height: 464,
      left: 1164
    }
  ];

  // Second row: 4 members (images 1, 6, 7, 8)
  const secondRowMembers = [
    {
      name: 'Tina Fox',
      title: 'CEO & Founder at Onatrix',
      image: tinaImage,
      width: 270,
      height: 356,
      left: 364
    },
    {
      name: 'Brandon Kerr',
      title: 'CFO & Co-Founder at Onatrix',
      image: teamImage6,
      width: 270,
      height: 356,
      left: 664
    },
    {
      name: 'Miranda Dayton',
      title: 'Head of HR at Onatrix',
      image: teamImage7,
      width: 270,
      height: 356,
      left: 964
    },
    {
      name: 'Kevin Gardner',
      title: 'Banking Advisor at Swedbank',
      image: teamImage8,
      width: 270,
      height: 356,
      left: 1264
    }
  ];

  return (
    <div className="about-page">
      <Header />
      <div className="about-page-content">
        {/* Page Header */}
        <section className="about-page-header">
          <div className="about-page-container">
            <h1 className="about-page-title">About Us</h1>
            <div className="breadcrumbs">
              <span>Home</span> <span className="breadcrumb-separator">></span> <span className="breadcrumb-about">About</span>
            </div>
          </div>
        </section>

        {/* Main About Content */}
        <section className="about-main-content">
          <div className="about-page-container">
            <div className="about-content-grid">
              <div className="about-image-column">
                <img 
                  src={tinaImage} 
                  alt="Tina Fox - CEO & Founder at Onatrix" 
                  className="about-tina-image"
                />
                <div className="image-label">Tina Fox - CEO & Founder at Onatrix</div>
              </div>
              <div className="about-text-column">
                <p className="about-text-quote">
                  "We have over 25 years of experience providing expert financial advice to both businesses and individuals."
                </p>
                <p className="about-text-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus a massa lobortis sollicitudin. 
                  Cras ut nulla quam. Maecenas tempus felis quis lorem malesuada vehicular.
                </p>
                <p className="about-text-paragraph">
                  Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. 
                  Nullam sit amet enim. Lorem ipsum dolor sit amet, consect etuer adipiscing elit. Orci magna rhoncus neque, 
                  id pulvinar odio lorem non turpis.
                </p>
                <p className="about-text-paragraph">
                  Cras auctor, metus id ultricies dictum, enim diam tincidunt nisi, quis malesuada nunc nisl at magna. 
                  Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. 
                  Nulla porta dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
                </p>
                <p className="about-text-paragraph">
                  Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet mollis 
                  tortor congue. Sed quis mauris sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada in, 
                  tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat magna tempus veroeros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Great Reviews Section */}
        <section className="great-reviews-section">
          <div className="about-page-container">
            <div className="review-testimonial">
              <div className="review-text-content">
                <div className="reviews-subtitle">GREAT REVIEWS FOR OUR SERVICES</div>
                <h2 className="reviews-title">
                  Trusted by some<br />Biggest Names
                </h2>
                <p className="review-text">
                  Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. 
                  Holistically pontificate installed base portals.
                </p>
                <div className="review-stars">
                  <span>★★★★★</span>
                </div>
                <div className="review-author">
                  <div className="review-author-name">Kevin Gardner</div>
                  <div className="review-author-company">Swebank</div>
                </div>
              </div>
              <div className="review-image-column">
                <img 
                  src={reviewImage} 
                  alt="Kevin Gardner working on laptop" 
                  className="review-image-main"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="our-team-section">
          <div className="about-page-container">
            <div className="team-header">
              <div className="team-subtitle">OUR EXPERT</div>
              <h2 className="team-title">A team of professionals<br />with years of experience</h2>
            </div>
            <div className="team-grid">
              {/* First Row - 3 members with larger images */}
              <div className="team-row team-row-first">
                {firstRowMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="team-member-card team-member-large"
                    style={{
                      width: `${member.width}px`
                    }}
                  >
                    <div 
                      className="team-member-image"
                      style={{ height: `${member.height}px` }}
                    >
                      <img src={member.image} alt={member.name} className="member-image" />
                    </div>
                    <div className="team-member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-title">{member.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Second Row - 4 members with smaller images */}
              <div className="team-row team-row-second">
                {secondRowMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="team-member-card team-member-small"
                    style={{
                      width: `${member.width}px`
                    }}
                  >
                    <div 
                      className="team-member-image"
                      style={{ height: `${member.height}px` }}
                    >
                      <img src={member.image} alt={member.name} className="member-image" />
                    </div>
                    <div className="team-member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-title">{member.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="about-contact-section">
          <div className="about-page-container">
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

export default AboutPage;

