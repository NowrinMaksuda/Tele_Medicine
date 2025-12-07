const steps = [
  {
    step: '1',
    title: 'Create Account',
    desc: 'Sign up for free and complete your personal health profile.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828466.png',
  },
  {
    step: '2',
    title: 'Book Appointment',
    desc: 'Choose a doctor, select a schedule, and confirm your booking.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
  },
  {
    step: '3',
    title: 'Start Consultation',
    desc: 'Consult via video/audio call and receive digital prescription.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3209/3209265.png',
  },
];

const Works = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-primary">
          How It Works
        </h2>
        <p className="text-gray-600 text-center mt-3 mb-12">
          Only 3 simple steps to get medical help
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
            >
              <img src={step.icon} className="w-16 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-center text-primary">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
