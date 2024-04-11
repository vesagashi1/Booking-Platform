// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white text-gray-700 p-2">
      <div className="navbar-brand font-bold text-xl">BOOKit</div>
      <ul className="flex">
        <li className="mr-4">
          <a href="/register" className="text-gray-800 no-underline px-2 py-1 rounded transition duration-400 ease-in hover:bg-gray-300 hover:border-gray-500">
            Register
          </a>
        </li>
        {/* Shtoni elementet e tjera të navbar-it këtu */}
      </ul>
    </nav>
  );
};

export default Navbar;
