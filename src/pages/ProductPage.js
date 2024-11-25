import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = { id, name: 'Kaos', price: 100000, image: '/path/to/image1.jpg' };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2 className="display-4">{product.name}</h2>
          <p className="lead">Rp {product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary mt-3"
          >
            Masukkan ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
