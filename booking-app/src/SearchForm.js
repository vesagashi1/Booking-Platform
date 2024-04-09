import './App.css'; 
import React from 'react';


const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="form-group">
        <label htmlFor="location">Where are you going?</label>
        <input type="text" id="location" placeholder="Enter a location" />
      </div>
      <div className="form-group">
        <label htmlFor="check-in">Check-In</label>
        <input type="date" id="check-in" />
      </div>
      <div className="form-group">
        <label htmlFor="check-out">Check-Out</label>
        <input type="date" id="check-out" />
      </div>
      <div className="form-group">
        <label htmlFor="adults">Number of Adults:</label>
        <input type="number" id="adults" min="1" placeholder="Enter number of adults" />
      </div>
      <div className="form-group">
        <label htmlFor="children">Number of Children:</label>
        <input type="number" id="children" min="0" placeholder="Enter number of children" />
      </div>
      <div className="form-group">
        <label htmlFor="rooms">Number of Rooms:</label>
        <input type="number" id="rooms" min="1" placeholder="Enter number of rooms" />
      </div>
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchForm;
