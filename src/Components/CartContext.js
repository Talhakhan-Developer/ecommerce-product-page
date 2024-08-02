// CartContext.js
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (count) => {
    setCartCount((prevCount) => prevCount + count);
  };

  const removeCartCount = () => {
    setCartCount(0);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
