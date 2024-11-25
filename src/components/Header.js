import React, { useState, useEffect } from 'react';
import { FaBars, FaShoppingCart, FaUser, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { auth, monitorAuthState } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ toggleSidebar }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    monitorAuthState((user) => {
      setIsLoggedIn(!!user);
    });
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <header className="bg-light shadow-sm py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <button onClick={toggleSidebar} className="btn btn-outline-secondary">
            <FaBars size={24} />
          </button>
        </div>
        <div className="text-center">
          <Link to="/" className="text-decoration-none text-dark">
            <h1 className="h3 font-weight-bold">Shope.In</h1>
          </Link>
        </div>
        <div className="d-flex align-items-center">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn btn-outline-secondary mx-1">
              <FaSignOutAlt size={24} />
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-secondary mx-1">
                <FaUser size={24} />
              </Link>
              <Link to="/register" className="btn btn-outline-secondary mx-1">
                <FaUserPlus size={24} />
              </Link>
            </>
          )}
          <Link to="/cart" className="btn btn-outline-secondary mx-1">
            <FaShoppingCart size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
