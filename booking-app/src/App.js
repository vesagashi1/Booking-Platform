import React from 'react';
import './App.css';
import viewImage from './images/view.jpg';
import SearchForm from './SearchForm'; 


const Navbar = () => {
  return (
    <nav className="navbar">
       <div className="navbar-brand montserrat-alternates-regular">BOOKit</div>
      <ul className="navbar-nav">
        {/* <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/about">About</a></li>*/}
        <li className="nav-item p"><a href="/partner">Become a partner</a></li> 
        <li className="nav-item c"><a href="/register">Register</a></li>
        <li className="nav-item c"><a href="/logIn">Log In</a></li>
      </ul>
    </nav>
    
  );
};

const SecondNavbar = () =>{
  return(
    <div className="second-navbar">
      <ul className='second-nav'>
      <li className="nav-items"><a href="/">Home</a></li>
      <li className="nav-items"><a href="/about">About Us</a></li>
      <li className="nav-items"><a href="/services">Services</a></li>
      </ul>
    </div>
  );
};

const ViewImage = () => {
  return(
    <div className="image-cont">
      <img src={viewImage} alt="homeImage" className='fotoja' />
    </div>
  );
};

const UnderImageDiv = () =>{
  return(
    <div className="under">
    </div>
  );
};

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <Navbar />
        <SecondNavbar /> 
      </header>
      <div className="image-container">
        <ViewImage /> {/* Render the image */}
        <div className="search-form-container">
          <SearchForm /> {/* Render the search form */}
        </div>
      </div>
      <UnderImageDiv/>
     
    </div>
  );
}

export default App;
