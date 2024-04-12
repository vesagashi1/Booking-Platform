import React from 'react';
import './App.css'

const Login = () => {
  return (
    <div className="container mx-auto mt-10 max-w-md bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold mb-5 text-center">Log In</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input mt-1 block w-full border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input mt-1 block w-full border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Log In
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>Don't have an account? <button className="text-blue-500 hover:underline focus:outline-none">Register</button></p>
      </div>
    </div>
  );
};

export default Login;