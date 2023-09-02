import React from "react";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cartItems, RemoveFromItem } = useCart();

  return (
    <>
      <main>
        <h2 className="my-8 text-center text-3xl font-bold">
          Your Cart Items : 0
        </h2>
        <div className="w-[50%] mx-auto ">
          <ul className="flex flex-col">
            {cartItems.map((item) => (
              <li key={item.id} className="my-10">
                <div>
                  <img src={item.image} alt="img" className="h-60 w-60" />
                </div>
                <div> {item.title} </div>
                <div className="flex gap-10 justify-center">
                  <button>+</button>
                  <p>0</p>
                  <button>-</button>
                </div>
                <div>
                  {" "}
                  <h1>{item.Price}</h1>{" "}
                </div>
                <div>
                  <button onClick={() => RemoveFromItem(item)}>remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Cart;
