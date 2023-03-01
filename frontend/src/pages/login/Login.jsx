import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { AuthContext } from '../../context/AuthContext';
import './login.css';

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const handleChange = (e) => {
    setCredentials((pre) => ({ ...pre, [e.target.id]: e.target.value })); // Return username : value from(pre) password : value
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
      navigate(-1);
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
    }
  };

  const google = () => {
    window.open('http://localhost:8800/api/auth/google', '_self');
  };

  const facebook = () => {
    window.open('http://localhost:8800/api/auth/facebook', '_self');
  };

  //   console.log(credentials);

  //   console.log(user);
  return (
    <>
      <Navbar />
      <div className="login">
        <h1 className="loginTitle">Chọn phương thức đăng ký, đăng nhập</h1>
        <div className="wrapper">
          <div className="left">
            <div className="loginButton google" onClick={google}>
              <img src="/google.png" alt="not found" className="icon" />
              Google
            </div>
            <div className="loginButton facebook" onClick={facebook}>
              <img src="/facebook.png" alt="not found" className="icon" />
              Facebook
            </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">Hoặc</div>
          </div>
          <div className="right">
            <form action="" className="right">
              <input
                onChange={handleChange}
                id="username"
                required
                type="text"
                placeholder="Nhập tên"
              />
              <input
                onChange={handleChange}
                id="password"
                required
                type="password"
                placeholder="Nhập mật khẩu"
              />
              <button
                className="submit"
                onClick={handleClick}
                disabled={loading}>
                Đăng nhập
              </button>
            </form>
            {error && <span style={{ color: 'red' }}>{error.message}</span>}
          </div>
        </div>
      </div>
    </>
  );
};
