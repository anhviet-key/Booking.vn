import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './navbar.css';

const Navbar = ({ user: userx }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    window.open('http://localhost:8800/api/auth/logout', '_self');
    navigate(1);
  };

  const handleClick = () => {
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload(false);
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">BOOKING.VN</span>
        </Link>
        {user || userx ? (
          <div className="navItems">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span>
                <img
                  src={
                    user !== null
                      ? 'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814050_960_720.png'
                      : userx.img
                  }
                  alt="not found"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 5,
                    border: '2px solid #fff',
                  }}
                />
              </span>
              {user !== null
                ? user.username
                : userx !== null
                ? userx.username
                : ''}
              {user ? (
                <button className="navButton" onClick={handleClick}>
                  Đăng xuất
                </button>
              ) : (
                <button className="navButton" onClick={logout}>
                  Đăng xuất
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Đăng ký</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Đăng Nhập</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
