const doctors = [
  {
    name: 'Dr. Sarah Rahman',
    specialty: 'Cardiologist',
    img: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg',
  },
  {
    name: 'Dr. Ahmed Hasan',
    specialty: 'Dermatologist',
    img: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg',
  },
  {
    name: 'Dr. Maria Jahan',
    specialty: 'Pediatrician',
    img: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg',
  },
];

const Doctors = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-primary">
          Our Top Doctors
        </h2>
        <p className="text-gray-600 text-center mt-3 mb-12">
          Consult with our certified and experienced specialists
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="bg-secondary p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img src={doc.img} alt="" className="rounded-xl h-60 object-cover w-full" />
              <h3 className="text-xl font-bold mt-4 text-primary text-center">
                {doc.name}
              </h3>
              <p className="text-gray-700 text-center">{doc.specialty}</p>

              <div className="flex justify-center mt-4">
                <button className="btn bg-primary text-white border-none hover:bg-blue-700">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
