import React from 'react';
import { FaClock, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const OurOffice = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 py-5 h-[600px]">
      {/* Left: Info Section with Background */}
      <div
        className="relative bg-cover bg-center text-white flex items-center px-10"
        style={{
          backgroundImage: "url('https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/10/inner_office.jpg')"
        }}
      >
        {/* Overlay */}
        <div className="bg-black/0 p-6 rounded-lg w-full max-w-xl space-y-6">
          <h2 className="text-4xl font-bold">Our <span className="text-blue-400">Office</span></h2>
          <p className="text-lg">Our company provides warehousing and distribution from our HQ.</p>

          {/* Details */}
          <div className="space-y-4 text-sm">
            {/* Working Hours */}
            <div className="flex items-start space-x-3 group">
              <FaClock className="text-blue-400 text-xl group-hover:text-white transition" />
              <div>
                <p className="font-bold">WORKING HOURS</p>
                <p>Mon - Sat 8.00 - 18.00<br />Sunday CLOSED</p>
              </div>
            </div>

            {/* Call Center */}
            <div className="flex items-start space-x-3 group">
              <FaPhoneAlt className="text-blue-400 text-xl group-hover:text-white transition" />
              <div>
                <p className="font-bold">CALL CENTER</p>
                <p>1-800-700-600<br />Give us a call 24/7</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-3 group">
              <FaMapMarkerAlt className="text-blue-400 text-xl group-hover:text-white transition" />
              <div>
                <p className="font-bold">LOCATION</p>
                <p>1010 Avenue, New York<br />NY 10018 US</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3 group">
              <FaEnvelope className="text-blue-400 text-xl group-hover:text-white transition" />
              <div>
                <p className="font-bold">WRITE US</p>
                <p>
                  <a href="mailto:info@bold-themes.com" className="hover:underline">
                    info@bold-themes.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Map Section */}
      <div className="h-full">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.967407185314!2d-104.96309138468654!3d39.752609679446846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d58bfe559f%3A0x7c5d67cdb169c8ef!2sFive%20Points%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1630628620472!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default OurOffice;
