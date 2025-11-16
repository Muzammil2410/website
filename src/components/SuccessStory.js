import React from 'react';
import teamImage from '../assets/images/11.png';
import './SuccessStory.css';

const SuccessStory = () => {
  return (
    <section id="success" className="success-story">
      <div className="success-top-section">
        <div className="success-top-container">
          <h2 className="success-main-title">We are trusted by more than</h2>
          <div className="success-client-count">4.000+ clients</div>
          <p className="success-top-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis molestie nulla. 
            Nam accumsan porttitor arcu, ac tincidunt lectus tincidunt sed.
          </p>
          <button className="btn-read-story">Read our story</button>
        </div>
      </div>
      
      <div className="success-team-section">
        <div className="success-team-container">
          <img src={teamImage} alt="Business professionals" className="success-team-image" />
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
