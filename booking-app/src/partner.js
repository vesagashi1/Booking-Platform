import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PartnerRegistration = ({ isLoggedIn }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ageConfirm: false,
    sellOption: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/api/partner', formData);

      if (response.status === 200) {
        window.location.href = '/login'; // Redirect to login page on successful registration
      } else {
        setErrorMessage('Registration failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error registering:', error);
      setErrorMessage('Registration failed. Please try again later.');
    }
  };

  if (isLoggedIn) {
    window.location.href = '/login'; // Redirect if already logged in
    return null;
  }

  return (
    <div className="container mx-auto mt-10 max-w-md bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold mb-5 text-center">Become a Partner</h2>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
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
            autoComplete="name" // Add autocomplete attribute
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
            autoComplete="email" // Add autocomplete attribute
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
            autoComplete="off" // Disable autocomplete for checkboxes if not needed
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
            autoComplete="sellOption" // Add autocomplete attribute
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
        <p>
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline focus:outline-none">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PartnerRegistration;
