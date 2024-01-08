import React, { useState } from 'react';
import './Login.css';
import smartserv from './smartserv.jpg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (password === 'SmartServTest@123') {
      navigate('/dashboard');
    } else {
      console.log('Login unsuccessful');
      setError('Invalid email or password');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@]*$/;

    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must contain an uppercase letter, a number, and only @ as a special character.');
      return;
    }
  };
  const handleForgotPassword = () => {
    window.location.href = 'mailto:support@smartserv.io?subject=Password%20Reset&body=Please%20reset%20my%20password.';
  };


  return (
    <div className="login-box">
      <img src={smartserv} alt="Company Logo" className="logo" />
      <h2>Login</h2>
      <div className="input-container">
        <input type="text" value={email} onChange={handleEmailChange} />
      </div>
      <div className="input-container">
        <input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} />
        <span className="password-toggle" onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show Password'}
        </span>
      </div>
      <div className="error-message">{error}</div>
      <button onClick={handleLogin}>Login</button>
      <div className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</div>
    </div>
  );
};

export default Login;
