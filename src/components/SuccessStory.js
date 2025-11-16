import React from 'react';
import './SuccessStory.css';

const SuccessStory = () => {
  return (
    <section id="success" className="success-story">
      <div className="success-top-section">
        <div className="success-top-container">
          <p className="success-top-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis molestie nulla. 
            Nam accumsan porttitor arcu, ac tincidunt lectus tincidunt sed.
          </p>
          <button className="btn-read-story">Read our story</button>
          <div className="success-team-photo">
            <div className="team-photo-placeholder">
              <div className="photo-placeholder-text">Team Photo - 10 Business Professionals</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="success-stats-section">
        <div className="success-stats-container">
          <div className="success-stats-header">
            <div className="success-stats-subtitle">SUCCESS STORIES</div>
            <h2 className="success-stats-title">Success story</h2>
          </div>
          <div className="success-stats-grid">
            <div className="stat-item">
              <div className="stat-number">689</div>
              <div className="stat-description">More than 100 customers has been served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">370</div>
              <div className="stat-description">More than 370 projects has been completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">125</div>
              <div className="stat-description">More than 125 branches has been established in Europe and America</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
