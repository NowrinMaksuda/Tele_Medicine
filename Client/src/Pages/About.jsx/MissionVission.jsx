import React from 'react';

const MissionVision = () => {
  return (
    <section
      className="py-16 px-6 mx-auto"
      style={{ backgroundColor: 'var(--color-secondary)' }}
    >
      <h2
        className="text-3xl font-bold text-center mb-10"
        style={{ color: 'var(--color-primary)' }}
      >
        Our Mission & Vision
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div
          className="p-8 bg-white rounded-xl shadow-md border"
          style={{ borderColor: 'var(--color-primary)' }}
        >
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Mission
          </h3>
          <p className="text-gray-700">
            To provide a user-friendly online platform where patients can
            consult certified doctors remotely, ensuring accessible and
            affordable healthcare for everyone.
          </p>
        </div>

        <div
          className="p-8 bg-white rounded-xl shadow-md border"
          style={{ borderColor: 'var(--color-primary)' }}
        >
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Vision
          </h3>
          <p className="text-gray-700">
            To build a digital healthcare ecosystem that reduces hospital
            crowding and improves nationwide healthcare accessibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
