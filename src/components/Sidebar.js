import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = React.forwardRef(({ toggleSidebar }, ref) => {
  return (
    <div ref={ref} className="bg-light shadow-sm p-3 position-fixed" style={{ width: '16rem', height: '100%', zIndex: 1050 }}>
      <button onClick={toggleSidebar} className="btn btn-outline-secondary mb-3">
        Tutup
      </button>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none text-dark" onClick={toggleSidebar}>
            Home
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/kaos" className="text-decoration-none text-dark" onClick={toggleSidebar}>
            Kaos
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/celana" className="text-decoration-none text-dark" onClick={toggleSidebar}>
            Celana
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/info" className="text-decoration-none text-dark" onClick={toggleSidebar}>
            Info Toko
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/infoweb" className="text-decoration-none text-dark" onClick={toggleSidebar}>
            Info Web
          </Link>
        </li>
      </ul>
    </div>
  );
});

export default Sidebar;
