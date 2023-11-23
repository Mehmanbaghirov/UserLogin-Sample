import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../UserLogin.css';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!email.endsWith('.ru')) {
      setEmailError('Yalnız .ru domenlərinə icazə verilir.');
    }

    // Password validation
    if (password.length < 8) {
      setPasswordError('Ən azı 8 simvol.');
    }
  };

  return (
    <div className="login-container">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};



export default UserLogin;