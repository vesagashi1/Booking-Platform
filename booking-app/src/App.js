import React from 'react';
import './App.css';
import viewImage from './images/view.jpg';
import SearchForm from './SearchForm';
import ServicesPage from './Services';

function App() {
  return (
    <div className="App min-h-screen flex flex-col bg-gray-100">
      <header className="flex-shrink-0">
        <nav className="flex justify-between items-center bg-white text-gray-700 p-2">
          <div className="navbar-brand font-bold text-xl">BOOKit</div>
          <ul className="flex">
            <li className="mr-4"><a href="/partner" className="text-gray-800 no-underline px-2 py-1 rounded transition duration-400 ease-in hover:bg-blue-200 hover:border-gray-500">Become a partner</a></li>
            <li className="mr-4"><a href="/register" className="text-gray-800 no-underline px-2 py-1 rounded transition duration-400 ease-in hover:bg-gray-300 hover:border-gray-500">Register</a></li>
            <li><a href="/logIn" className="text-gray-800 no-underline px-2 py-1 rounded transition duration-400 ease-in hover:bg-gray-300 hover:border-gray-500">Log In</a></li>
          </ul>
        </nav>
        <div className="second-navbar bg-blue-200 text-white h-16 flex justify-center items-center">
          <ul className="flex">
            <li className="mr-8"><a href="/" className='hover:text-gray-800'>Home</a></li>
            <li className="mr-8"><a href="/about" className='hover:text-gray-800'>About Us</a></li>
            <li><a href="/services"  className='hover:text-gray-800'>Services</a></li>
          </ul>
        </div>
      </header>
      <main className="flex-grow">
        <div className="image-container relative w-full h-screen">
          <img src={viewImage} alt="homeImage" className="w-full h-full object-cover" />
          <div className="search-form-container absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-128 max-w-md p-2 bg-white bg-opacity-80 rounded-lg shadow-md z-10">
                <SearchForm />
             </div>


        </div>
        <div className="under bg-lightblue w-full h-20"></div>
      </main>
      <ServicesPage /> {/* Render the ServicesPage component */}
    </div>
  );
}

export default App;
