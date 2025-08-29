import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-screen bg-center bg-cover"
        style={{ backgroundImage: "url('https://static.wixstatic.com/media/74f558_66357e0ecfea4c86b2ea0bce6e8a9447~mv2.jpg/v1/fill/w_1500,h_533,fp_0.50_0.50,q_85,enc_avif,quality_auto/74f558_66357e0ecfea4c86b2ea0bce6e8a9447~mv2.jpg')" }}
      >
        {/* Overlay (optional, for better text readability) */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content within the hero section */}
        <div className="z-10 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Welcome to Our Website
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Discover amazing things with us.
          </p>
          <Link to="/home" className="px-8 py-3 font-bold text-white transition duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700">
            Learn More
          </Link>
        </div>
      </section>

      {/* Placeholder for other page sections (features, testimonials, etc.) */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Add more content here as needed */}
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Our Key Features
          </h2>
          {/* ... feature blocks, etc. */}
        </div>
      </section>

      {/* Footer (assuming you have a separate Footer component) */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;