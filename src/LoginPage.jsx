// src/LoginPage.jsx
import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const LoginPage = () => {
  const handleLogin = (username, password) => {
    // Implement login logic
    console.log('Login - Username:', username, 'Password:', password);
  };

  const handleSignUp = (userData) => {
    // Implement sign-up logic
    console.log('Sign Up - User Data:', userData);
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <div className="form">
          <h1>Login</h1>
          <LoginForm handleLogin={handleLogin} />
        </div>
        <div className="form">
          <h1>Sign Up</h1>
          <SignUpForm handleSignUp={handleSignUp} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
