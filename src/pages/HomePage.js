import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CallbackForm from '../components/CallbackForm';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import SuccessStory from '../components/SuccessStory';
import MeetingPhoto from '../components/MeetingPhoto';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="App">
      <Header />
      <div style={{ position: 'relative' }}>
        <Hero />
        <CallbackForm />
      </div>
      <AboutUs />
      <Services />
      <SuccessStory />
      <MeetingPhoto />
      <Partners />
      <Footer />
    </div>
  );
};

export default HomePage;

