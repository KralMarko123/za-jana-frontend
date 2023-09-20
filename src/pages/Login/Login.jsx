import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Main from '../../layout/Main/Main';
import LoginForm from '../../components/forms/LoginForm/LoginForm';
import '../page.css';
import './Login.css';

const Login = () => {
  return (
    <div className="login page">
      <Header />
      <Main>
        <LoginForm />
      </Main>
      <Footer />
    </div>
  );
};

export default Login;
