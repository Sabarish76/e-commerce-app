import React from "react";
import { useCart } from "../Context/CartContext";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Cart = () => {
  const { cartItems, RemoveFromItem } = useCart();

  return (
    <>
      <main>
        <h2 className="my-8 text-center text-3xl font-bold">
          {`Your Cart Items : ${cartItems.length}`}
        </h2>
        <div className="w-[65%] sm:w-[70%] mx-auto  ">
          <ul className="flex flex-col leading-10">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="my-10 border flex flex-col sm:flex-row w-[90%] mx-auto items-center justify-between rounded-lg shadow-2xl"
              >
                <div>
                  <img
                    src={item.image}
                    alt="img"
                    className="h-80 sm:h-40 w-80 sm:w-40 rounded-lg shadow-sm"
                  />
                </div>
                <div className="font-bold capitalize text-2xl my-3 sm:my-0">
                  {" "}
                  {item.title}{" "}
                </div>
                <div className="flex gap-10">
                  <div>
                    <button className="border px-3 bg-slate-300 hover:bg-slate-400 rounded-md">
                      +
                    </button>
                  </div>
                  <div>
                    <p>0</p>
                  </div>
                  <div>
                    {" "}
                    <button className="border px-3 bg-slate-300 hover:bg-slate-400 rounded-md">
                      -
                    </button>
                  </div>
                </div>
                <div>
                  {" "}
                  <h1>R.s.{item.Price}</h1>{" "}
                </div>
                <div className="mx-5 mt-3 text-slate-300 hover:text-slate-400 ">
                  <button onClick={() => RemoveFromItem(item)}>
                    <RiDeleteBin5Fill size={40} />
                  </button>
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
