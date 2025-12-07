const Banner = () => {
  return (
    <section className="bg-secondary min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 lg:px-20 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Text Area */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-primary">
              Digital Healthcare,
              <span className="block text-black">Anytime. Anywhere.</span>
            </h1>

            <p className="text-lg text-gray-600">
              Connect instantly with certified doctors, receive digital
              prescriptions, and manage your health from the comfort of home.
            </p>

            <div className="flex gap-4">
              <button className="btn bg-primary text-white px-8 text-lg border-none hover:bg-blue-700">
                Consult Now
              </button>
              <button className="btn btn-outline text-primary border-primary px-8 text-lg hover:bg-primary hover:text-white">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://images.pexels.com/photos/5327916/pexels-photo-5327916.jpeg"
              alt="Telemedicine Illustration"
              className="w-[85%] lg:w-[90%] drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
