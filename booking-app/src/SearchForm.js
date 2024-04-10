import React from 'react';
import './App.css';

const SearchForm = () => {
  return (
    <div className="search-form-container p-2 bg-opacity-70 rounded-lg  w-3/4 h-2/4 mx-auto m10 style={{ height: '40vh' }}">
      <div className="form-group mb-4">
        <label htmlFor="location" className="block text-sm mb-1">Where are you going?</label>
        <input type="text" id="location" placeholder="Enter a location" className="form-input w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400" />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="check-in" className="block text-sm mb-1">Check-In</label>
        <input type="date" id="check-in" className="form-input w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400" />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="check-out" className="block text-sm mb-1">Check-Out</label>
        <input type="date" id="check-out" className="form-input w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400" />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="adults" className="block text-sm mb-1">Number of Adults:</label>
        <input type="number" id="adults" min="1" placeholder="Enter number of adults" className="form-input w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400" />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="children" className="block text-sm mb-1">Number of Children:</label>
        <input type="number" id="children" min="0" placeholder="Enter number of children" className="form-input w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400" />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="rooms" className="block text-sm mb-1">Number of Rooms:</label>
        <input type="number" id="rooms" min="1" placeholder="Enter number of rooms" className="form-input w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400" />
      </div>
      <button type="submit" className="btn btn-primary py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Search</button>
    </div>
  );
};

export default SearchForm;
