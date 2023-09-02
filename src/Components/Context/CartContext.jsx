import React from "react";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, SetcartItems] = useState([]);

  const addToCart = (item) => {
    SetcartItems((prevCartItems) => [...prevCartItems, item]);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
