import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product || {};
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Nama: ${formData.name}\nAlamat: ${formData.address}\nPesan: ${formData.message}\n\nProduk:\n- ${product.name} (Rp ${product.price})`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    navigate('/cart');
  };

  return (
    <div className="container mt-4">
      <h1 className="display-4 mb-4">Formulir Pesanan</h1>
      <h2 className="h4 mb-3">Pesanan untuk {product.name}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nama</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Alamat</label>
          <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Pesan</label>
          <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleInputChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-success mt-3">Kirim</button>
      </form>
    </div>
  );
};

export default OrderForm;
