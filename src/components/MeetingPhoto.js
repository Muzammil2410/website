import React from 'react';
import meetingImage from '../assets/images/12.png';
import './MeetingPhoto.css';

const MeetingPhoto = () => {
  return (
    <section className="meeting-photo">
      <div className="meeting-photo-container">
        <div className="meeting-photo-header">
          <div className="meeting-photo-subtitle">SUCCESS STORIES</div>
          <h2 className="meeting-photo-title">Success story</h2>
        </div>
        
        <div className="meeting-stats-grid">
          <div className="meeting-stat-item">
            <div className="meeting-stat-number">689</div>
            <div className="meeting-stat-description">More than 100 customers has been served</div>
          </div>
          <div className="meeting-stat-item">
            <div className="meeting-stat-number">370</div>
            <div className="meeting-stat-description">More than 370 projects has been completed</div>
          </div>
          <div className="meeting-stat-item">
            <div className="meeting-stat-number">125</div>
            <div className="meeting-stat-description">More than 125 branches has been established in Europe and America</div>
          </div>
        </div>

        <div className="meeting-image-wrapper">
          <img src={meetingImage} alt="Business professionals meeting" className="meeting-image" />
        </div>
      </div>
    </section>
  );
};

export default MeetingPhoto;

