import React from "react";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            Q 2<div> {item.title} </div>
            <div>
              {" "}
              <h1>{item.Price}</h1>{" "}
            </div>
            <div className="">
              <img src={item.image} alt="img" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
