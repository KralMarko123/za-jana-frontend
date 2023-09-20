import React, { useState } from 'react';
import '../Form.css';
import './LoginForm.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: null,
    password: null
  });

  const onLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in with the following:
    Username: ${loginData.username}
    Password: ${loginData.password}`);
  };

  const onRegisterLink = () => {
    console.log('navigated to register page');
  };

  return (
    <div className="form-container">
      <form action="POST" className="form login">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            className="form-input"
            type="text"
            id="username"
            onChange={(e) =>
              setLoginData({
                ...loginData,
                [`${e.currentTarget.id}`]: e.currentTarget.value
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-input"
            type="text"
            id="password"
            onChange={(e) =>
              setLoginData({
                ...loginData,
                [`${e.currentTarget.id}`]: e.currentTarget.value
              })
            }
          />
        </div>

        <div className="form-actions">
          <button className="form-button" onClick={(e) => onLogin(e)}>
            Log In
          </button>
        </div>

        <div className="form-links">
          <div className="register-link">
            <p>Register {`->`}</p>
            <span onClick={() => onRegisterLink()}></span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
