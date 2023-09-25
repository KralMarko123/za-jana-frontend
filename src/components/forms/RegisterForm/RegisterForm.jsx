import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { ROUTES } from '../../../constants/ROUTES';
import UsersService from '../../../api/UserService';
import { isNonEmptyString } from '../../../util/helperFunctions';
import './RegisterForm.css';
import '../Form.css';

const RegisterForm = () => {
  const { login } = useAuth();
  const [registerData, setRegisterData] = useState({
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    sectorId: 0,
    password: '',
    confirmPassword: ''
  });
  const usernameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const noEmptyFields = () => {
    return Object.values(registerData).every((v) => isNonEmptyString(v));
  };

  const checkErrors = () => {
    if (registerData.userName.length === 0)
      usernameRef.current.classList.add('error');
    else usernameRef.current.classList.remove('error');

    if (registerData.password.length === 0)
      passwordRef.current.classList.add('error');
    else passwordRef.current.classList.remove('error');
  };

  const onRegister = async (e) => {
    e.preventDefault();
    checkErrors();

    if (noEmptyFields()) {
      await UsersService.saveUser(registerData).then((response) =>
        console.log(response)
      );
    }
  };

  return (
    <div className="form-container">
      <form action="POST" className="form register">
        <div className="form-group">
          <label htmlFor="userName" className="form-label">
            Username
          </label>
          <input
            className="form-input"
            type="text"
            id="userName"
            ref={usernameRef}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                [`${e.currentTarget.id}`]: e.currentTarget.value
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            className="form-input"
            type="text"
            ref={firstNameRef}
            id="firstName"
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                [`${e.currentTarget.id}`]: e.currentTarget.value
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            className="form-input"
            type="text"
            ref={lastNameRef}
            id="lastName"
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                [`${e.currentTarget.id}`]: e.currentTarget.value
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-input"
            type="text"
            ref={emailRef}
            id="email"
            onChange={(e) =>
              setRegisterData({
                ...registerData,
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
            ref={passwordRef}
            id="password"
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                [`${e.currentTarget.id}`]: e.currentTarget.value
              })
            }
          />
        </div>

        <div className="form-actions">
          <button className="form-button" onClick={(e) => onRegister(e)}>
            Register
          </button>
        </div>

        <div className="form-links">
          <div className="login-link">
            <p>Log In {`->`}</p>
            <span onClick={() => navigate(ROUTES.LOGIN)}></span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
