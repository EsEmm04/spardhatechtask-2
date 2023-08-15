import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const handleLogin = (username, password) => {
    // You can implement the login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
