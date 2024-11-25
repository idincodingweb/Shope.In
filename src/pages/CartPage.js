import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleOrderClick = (product) => {
    navigate('/order', { state: { product } });
  };

  return (
    <div className="container mt-4">
      <h1 className="display-4 mb-4">Keranjang Belanja</h1>
      <div className="row">
        {cartItems.length === 0 ? (
          <p>Keranjang Anda kosong.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Rp {item.price}</p>
                  <button className="btn btn-primary" onClick={() => handleOrderClick(item)}>Pesan Sekarang</button>
                  <button className="btn btn-danger ml-2" onClick={() => removeFromCart(item)}>Hapus</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartPage;
