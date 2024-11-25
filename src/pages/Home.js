import React, { useState } from 'react';
import Product from '../components/Product';
import products from '../data/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredProducts = category ? products.filter(product => product.category === category) : products;

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-4">
      <h1 className="display-4 mb-4">Produk Kami</h1>
      <div className="row">
        {currentProducts.map((product, index) => (
          <div key={index} className="col-md-6 mb-4">
            <Product {...product} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
