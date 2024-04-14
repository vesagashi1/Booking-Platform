import React from 'react';

function AboutUs() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="max-w-3xl px-8 py-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg text-gray-800 text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to BOOKit! Your all-in-one platform for hassle-free booking experiences. Whether it's hotels, apartments, or houses, we've got you covered.
        </p>
        <p className="text-lg mb-6">
          Explore a wide range of accommodations and rentals, all in one place. With our user-friendly interface, booking your next stay has never been easier.
        </p>
        <p className="text-lg mb-6">
          Thank you for choosing BOOKit for all your booking needs. We're here to make your booking experience seamless and enjoyable.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
