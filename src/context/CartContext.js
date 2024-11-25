import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, monitorAuthState } from '../firebase';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    monitorAuthState((user) => {
      setIsLoggedIn(!!user);
    });
  }, []);

  const addToCart = (product) => {
    if (!isLoggedIn) {
      alert('Anda harus login dulu');
      return;
    }
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter(item => item.name !== product.name));
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    isLoggedIn,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
