import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Info = () => {
  return (
    <div className="container mt-4">
      <h1 className="display-4 mb-4">Info Toko</h1>
      <div className="d-flex flex-column align-items-center">
        <img 
          src="https://asw-psi.vercel.app/static/media/idincuy.9511c2489191a858eb96.jpg" 
          alt="Logo" 
          className="img-fluid rounded-circle mb-4" 
          style={{ width: '8rem', height: '8rem' }} 
        />
        <h2 className="h4 font-weight-bold">Idin Iskandar S.kom </h2>
        <p className="text-muted mb-4">Developer Web</p>
        <p className="text-center mb-4">
          Selamat datang di toko kami! Kami menyediakan berbagai macam produk berkualitas tinggi dengan harga terjangkau. 
          Jangan ragu untuk menghubungi kami melalui media sosial di bawah ini untuk informasi lebih lanjut.
        </p>
        <div className="d-flex gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-primary" size={32} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-info" size={32} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-danger" size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
