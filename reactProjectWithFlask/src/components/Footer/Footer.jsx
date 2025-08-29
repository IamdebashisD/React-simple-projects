import React from 'react';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="p-6 text-white bg-gray-800">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3"> {/* Responsive grid layout */}
        {/* Section 1: Company Info */}
        <div>
          <h5 className="mb-4 text-xl font-bold">Your Company</h5>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        {/* Section 2: Navigation Links */}
        <div>
          <h5 className="mb-4 text-xl font-bold">Navigation</h5>
          <ul className="space-y-2">
            <li><Link to="/About" className="text-gray-400 hover:text-white">About Us</Link></li> {/* Hover effect */}
            <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li><Link to="/Contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            <li><Link to="" className="text-gray-400 hover:text-white">Home</Link></li>
          </ul>
        </div>

        {/* Section 3: Social Media */}
        <div>
          <h5 className="mb-4 text-xl font-bold">Follow Us</h5>
          <div className="flex space-x-4">
            {/* Add social media icons here (e.g., using react-icons) */}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
