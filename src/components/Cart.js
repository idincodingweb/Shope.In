import React from 'react';

const Cart = ({ items }) => {
  return (
    <div>
      <h2 className="display-4 mb-4">Keranjang Belanja</h2>
      {items.length === 0 ? (
        <p>Keranjang Anda kosong.</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li key={index} className="list-group-item d-flex align-items-center mb-2">
              <img src={item.image} alt={item.name} className="img-thumbnail mr-4" style={{ width: '64px', height: '64px' }} />
              <div>
                <span className="font-weight-bold">{item.name}</span> - <span>Rp {item.price}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
