// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Login clicked with:', { email, password });
  };


  return (
    <div className = 'loginPage'>  
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to='/BusSelection' ><button>Login</button> </Link>
        
      </form>
      <p>Don't have an Account? <a href='/signup'>Sign Up </a></p>
    </div>
    </div>
    
  );
};


export default Login;




