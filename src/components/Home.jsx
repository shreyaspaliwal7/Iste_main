import React from 'react';
import Hero from './Hero/Hero';
import AboutPage from './About Us/Aboutus';
import Events from './Events';
import Sponsors from './Sponsors';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Events />
      <Sponsors />
    </div>
  );
};

export default Home;