// import Google from '/google.png';
// import Facebook from '/facebook.png';
/* import Github from "../img/github.png"; */
import Navbar from '../../components/navbar/Navbar';
import './register.css';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [info, setInfo] = useState({});
  const google = () => {
    window.open('http://localhost:8800/api/auth/google', '_self');
  };

  const facebook = () => {
    window.open('http://localhost:8800/api/auth/facebook', '_self');
  };

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();

  // console.log(info);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', info);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };
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
                id="email"
                required
                type="email"
                placeholder="Nhập email"
              />
              <input
                onChange={handleChange}
                id="phone"
                required
                type="text"
                placeholder="Nhập số điện thoại"
              />
              <input
                onChange={handleChange}
                id="password"
                required
                type="password"
                placeholder="Nhập mật khẩu"
              />
              <button className="submit" onClick={handleClick}>
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
