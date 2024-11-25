import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({ name, price, description, image }) => {
  const { addToCart, isLoggedIn } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({ name, price, description, image });
  };

  const handleOrderNow = () => {
    if (!isLoggedIn) {
      alert('Anda harus login dulu');
      navigate('/login');
      return;
    }
    navigate('/order', { state: { product: { name, price, description, image } } });
  };

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Rp {price}</p>
        <button onClick={handleAddToCart} className="btn btn-primary">Masukan Ke <FaShoppingCart size={24} /></button>
        <button onClick={handleOrderNow} className="btn btn-success ml-2">Pesan Sekarang</button>
      </div>
    </div>
  );
};

export default Product;
