import React from "react";
import { useCart } from "./CartContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function AddToCartButton({ item }) {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    if (item) {
      addToCart(item);
    } else {
      console.error("Item is undefined:", item);
    }
    // toast("Item Added To Cart");
    alert("Item Added To Cart");
  };

  return (
    <div>
      <button onClick={() => handleAddToCart(item)}>Add to Cart</button>;
      {/* <ToastContainer /> */}
    </div>
  );
}

export default AddToCartButton;
