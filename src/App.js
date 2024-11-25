import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import OrderForm from './pages/OrderForm';
import Info from './pages/Info';
import InfoWeb from './pages/InfoWeb';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="d-flex">
          {isSidebarVisible && <Sidebar ref={sidebarRef} toggleSidebar={toggleSidebar} />}
          <div className={`flex-grow-1 ${isSidebarVisible ? 'ml-5' : ''}`}>
            <Header toggleSidebar={toggleSidebar} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/order" element={<OrderForm />} />
              <Route path="/info" element={<Info />} />
              <Route path="/infoweb" element={<InfoWeb />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/celana" element={<Home category="Celana" />} />
              <Route path="/kaos" element={<Home category="Kaos" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
