import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#021c35] text-white pt-12">
      {/* Call to Action */}
      <div className="border border-gray-600 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-10 space-y-6 md:space-y-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left">
          Contact us now to get quote
        </h2>
        <a href="tel:1234567890">
        <button className="bg-[#e30613] cursor-pointer hover:bg-[#c0000d] text-white font-bold py-3 px-6 rounded transition">
          GIVE ME FREE QUOTE
        </button>
        </a>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 inline-block">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#e30613]" /> 1-800-700-600
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#e30613]" /> info@bold-themes.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#e30613]" /> 60 East 65th Street, New York City, NY 10065
            </li>
          </ul>
          <div className="flex gap-4 mt-6 text-white text-lg">
            <a href="/"><FaFacebookF className="hover:text-[#e30613]" /></a>
            <a href="/"><FaTwitter className="hover:text-[#e30613]" /></a>
            <a href="/"><FaYoutube className="hover:text-[#e30613]" /></a>
          </div>
        </div>

        {/* Popular Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 inline-block">
            Popular Services
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>Furnace Inspection</li>
            <li>Dry Sanitation</li>
            <li>Water Filter</li>
            <li>Basic Sanitation</li>
          </ul>
        </div>

        {/* Emergency Tips */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 inline-block">
            Emergency Tips
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>Pipe Leaking</li>
            <li>Bathroom Drain Cleaning</li>
            <li>Garden Irrigation</li>
            <li>Law Drainage</li>
          </ul>
        </div>

        {/* Emergency Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 inline-block">
            Emergency Service
          </h3>
          <p className="flex items-center gap-3 text-white text-xl font-bold mt-4">
            <FaPhoneAlt className="text-[#e30613]" />
            1-800-500-333
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
