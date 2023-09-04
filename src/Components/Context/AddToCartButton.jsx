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
      <button
        onClick={() => handleAddToCart(item)}
        className=" shadow-xl h-10 flex items-center justify-center text-lg mx-auto my-2 bg-slate-300 hover:bg-slate-400 rounded-md w-[90%]"
      >
        Add to Cart
      </button>
      {/* <div className="absolute top-0">
        <ToastContainer />
      </div> */}
    </div>
  );
}

export default AddToCartButton;
