import React from 'react';

function ServicesPage() {
  return (
    <div className="services-page font-sans">
      <div className="header bg-gray-800 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Our Services</h1>
      </div>

      <div className="services flex flex-wrap justify-center mt-8">
        <div className="service-card bg-white shadow-lg rounded-lg m-4 p-6 max-w-sm">
          <h2 className="text-xl font-bold mb-4">Property Listings</h2>
          <p className="text-gray-700">Explore a wide range of properties available for rent or purchase.</p>
        </div>

        <div className="service-card bg-white shadow-lg rounded-lg m-4 p-6 max-w-sm">
          <h2 className="text-xl font-bold mb-4">Booking Management</h2>
          <p className="text-gray-700">Effortlessly manage your property bookings and reservations.</p>
        </div>

        <div className="service-card bg-white shadow-lg rounded-lg m-4 p-6 max-w-sm">
          <h2 className="text-xl font-bold mb-4">Property Management</h2>
          <p className="text-gray-700">Manage your properties, including maintenance, inspections, and more.</p>
        </div>

        <div className="service-card bg-white shadow-lg rounded-lg m-4 p-6 max-w-sm">
          <h2 className="text-xl font-bold mb-4">User Support</h2>
          <p className="text-gray-700">Get assistance from our dedicated support team whenever you need help.</p>
        </div>
      </div>

      <div className="footer bg-gray-800 text-white py-4 text-center mt-8">
        <p>&copy; 2024 Real Estate Booking App</p>
      </div>
    </div>
  );
}

export default ServicesPage;
