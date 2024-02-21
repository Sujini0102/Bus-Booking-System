


// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using React Router
import './Home.css'; // Import your CSS file

const Home = () => {
  return (
    <div className="home-container">
      <header className="text-center mt-3">
        <h1>URBAN ROAMER</h1>
      </header>
    <div className='content'>
      <main className="text-center ">
        <p><h2>Welcome to our Travels!</h2><br></br><h2>Please login or sign up to get started.</h2></p>
        <div className="buttons-container">
          <Link to="/login" className="button login-button"> Login </Link>
          <Link to="/Signup" className="button signup-button"> Sign Up </Link>
          <Link to="/About" className="button About-button"> About </Link>
        </div>
      </main>
    </div>
    </div>
  );
};

export default Home;


