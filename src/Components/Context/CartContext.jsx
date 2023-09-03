import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, SetcartItems] = useState(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    return storedCartItems;
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    SetcartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const RemoveFromItem = (item) => {
    SetcartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, RemoveFromItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
