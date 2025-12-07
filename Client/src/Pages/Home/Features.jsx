const features = [
  {
    title: 'Instant Consultation',
    desc: 'Connect with certified doctors anytime, anywhere within minutes.',
    icon: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
  },
  {
    title: 'Secured & Encrypted',
    desc: 'Your personal health data is protected using advanced encryption.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2889/2889676.png',
  },
  {
    title: 'Digital Prescription',
    desc: 'Get digitally signed prescriptions after every consultation.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png',
  },
  {
    title: '24/7 Availability',
    desc: 'Doctors available round the clock to serve you whenever needed.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827504.png',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Why Choose Us</h2>
          <p className="text-gray-600 mt-3">
            Your trusted digital healthcare partner
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-secondary p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img src={item.icon} alt="" className="w-16 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-center text-primary">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
