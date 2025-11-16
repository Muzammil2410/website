import React, { useState } from 'react';
import './CallbackForm.css';

const CallbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Financial consulting'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will call you back soon.');
    setFormData({ name: '', email: '', phone: '', service: 'Financial consulting' });
  };

  return (
    <div className="callback-form-container">
      <div className="callback-form">
        <div className="callback-form-header">
          Request a call back
        </div>
        <div className="callback-form-content">
          <p className="callback-form-intro">
            Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <form onSubmit={handleSubmit} className="callback-form-fields">
            <div className="form-field">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Financial consulting">Financial consulting</option>
                <option value="Tax and Trusts">Tax and Trusts</option>
                <option value="Risk Management">Risk Management</option>
                <option value="Assurance & Audits">Assurance & Audits</option>
              </select>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallbackForm;

