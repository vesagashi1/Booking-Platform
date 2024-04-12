import React, { useState } from 'react';

function BecomePartner() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4 text-center">Become a Partner</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
         <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
          <div className="mb-4">
          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
          <select id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
            <option value="">Select Property Type</option>
            <option value="land">Land</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default BecomePartner;
