import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Doctors from './Doctors';
import Works from './Works';
import Testimonials from './Testimonials';
import CTA from './CTA';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Doctors></Doctors>
      <Works></Works>
      <Testimonials></Testimonials>
      <CTA></CTA>
    </div>
  );
};

export default Home;