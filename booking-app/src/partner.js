import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const PartnerRegistration = ({ isLoggedIn }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ageConfirm: false,
    sellOption: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData);
    // Redirect logic can be added here (e.g., using window.location.href)
    window.location.href = '/login'; // Redirect to login page after form submission
  };

  if (isLoggedIn) {
    // Redirect logic can be added here if needed
    window.location.href = '/login'; // Redirect to login page if user is logged in
    return null; // Return null to prevent rendering the registration form
  }

  return (
    <div className="container mx-auto mt-10 max-w-md bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold mb-5 text-center">Become a Partner</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-gray-300 rounded-md"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-gray-300 rounded-md"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ageConfirm" className="block text-sm font-medium text-gray-700">
            Confirm You Are 18+
          </label>
          <input
            type="checkbox"
            id="ageConfirm"
            name="ageConfirm"
            checked={formData.ageConfirm}
            onChange={handleChange}
            className="form-checkbox mt-1"
            required
          />
          <span className="ml-2 text-gray-600">I confirm that I am 18 years old or older.</span>
        </div>
        <div className="mb-4">
          <label htmlFor="sellOption" className="block text-sm font-medium text-gray-700">
            What will you sell?
          </label>
          <select
            id="sellOption"
            name="sellOption"
            value={formData.sellOption}
            onChange={handleChange}
            className="form-select mt-1 block w-full border-gray-300 rounded-md"
            required
          >
            <option value="">Select an option</option>
            <option value="propertiesForRent">Properties for Rent</option>
            <option value="propertiesForSale">Properties for Sale</option>
            <option value="propertyManagement">Property Management Services</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Register
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>Already have an account? <Link to="/login" className="text-blue-500 hover:underline focus:outline-none">Log in</Link></p>
      </div>
    </div>
  );
};

export default PartnerRegistration;
