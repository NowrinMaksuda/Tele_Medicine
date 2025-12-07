import React from 'react';

const AboutHero = () => {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/2206482871/photo/medical-technology-healthcare-and-medicine-concept-online-health-network-medical-stethoscope.jpg?b=1&s=612x612&w=0&k=20&c=RnCtSWhjwKa251R7UrhtaLfIy6XEK1mJi8xNY3Tpgns=')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          About Our Telemedicine System
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          A modern digital healthcare service connecting patients and doctors
          anytime, anywhere.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
