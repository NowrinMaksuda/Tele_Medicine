const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 mt-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">TeleMed</h2>
            <p className="text-gray-200">
              A trusted telemedicine platform providing digital healthcare
              solutions anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a className="hover:text-white cursor-pointer">Home</a>
              </li>
              <li>
                <a className="hover:text-white cursor-pointer">Doctors</a>
              </li>
              <li>
                <a className="hover:text-white cursor-pointer">About</a>
              </li>
              <li>
                <a className="hover:text-white cursor-pointer">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Instant Consultation</li>
              <li>Digital Prescription</li>
              <li>Video Call Support</li>
              <li>Health Monitoring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Email: support@telemed.com</li>
              <li>Phone: +880 123 456 789</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-5 text-center text-gray-200">
          © {new Date().getFullYear()} TeleMed — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
