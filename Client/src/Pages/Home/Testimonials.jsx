const reviews = [
  {
    name: 'Rafiul Islam',
    text: 'The consultation was quick and the doctor was very friendly!',
    img: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg',
  },
  {
    name: 'Nusrat Jahan',
    text: 'Got my prescription instantly. Very helpful service!',
    img: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg',
  },
  {
    name: 'Tanvir Ahmed',
    text: 'Best telemedicine service I have ever used.',
    img: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-primary">
          What Our Patients Say
        </h2>
        <p className="text-gray-600 text-center mt-3 mb-12">
          Real experiences from people who trust our service
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-secondary rounded-xl p-8 shadow hover:shadow-lg transition"
            >
              <img
                src={rev.img}
                alt=""
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 text-center italic">“{rev.text}”</p>
              <h4 className="text-center font-bold text-primary mt-3">
                {rev.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
