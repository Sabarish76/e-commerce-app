import React from "react";
import { useCart } from "./CartContext";

function AddToCartButton({ item }) {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    if (item) {
      addToCart(item);
    } else {
      console.error("Item is undefined:", item);
    }
  };

  return <button onClick={() => handleAddToCart(item)}>Add to Cart</button>;
}

export default AddToCartButton;
