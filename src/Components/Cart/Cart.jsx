import React from "react";
import { useCart } from "../Context/CartContext";
import { IoCloseSharp } from "react-icons/io5";

const Cart = () => {
  const { cartItems, RemoveFromItem, updateQuantity, totalItems, totalAmount } =
    useCart();

  const increaseQuantity = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      RemoveFromItem(item);
    }
  };

  const handleCheckout = () => {
    cartItems.forEach((item) => RemoveFromItem(item));

    alert("Your Order Booked Succesfully!.");
  };
  return (
    <>
      <main>
        <h2 className="my-8 text-center text-3xl font-bold">
          {totalItems > 0
            ? `Your Cart Items : ${totalItems}`
            : "Your Cart Is Empty"}
        </h2>
        <div className="w-[65%] sm:w-[70%] mx-auto ">
          <ul className="flex flex-col leading-10">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="my-10 border flex flex-col sm:flex-row w-[90%] mx-auto items-center justify-between rounded-lg shadow-2xl"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <div className="ml-5 mt-3 text-slate-300 hover:text-slate-400 ">
                  <button onClick={() => RemoveFromItem(item)}>
                    <IoCloseSharp size={40} />
                  </button>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt="img"
                    className="h-80 sm:h-40 w-80 sm:w-40 rounded-sm shadow-sm"
                  />
                </div>
                <div className="font-bold capitalize text-2xl my-3 sm:my-0">
                  {" "}
                  {item.title}{" "}
                </div>
                <div className="flex gap-10">
                  <div>
                    <button
                      className="border px-3 bg-slate-300 hover:bg-slate-400 rounded-md"
                      onClick={() => increaseQuantity(item)}
                    >
                      +
                    </button>
                  </div>
                  <div>{item.quantity}</div>
                  <div>
                    {" "}
                    <button
                      className="border px-3 bg-slate-300 hover:bg-slate-400 rounded-md"
                      onClick={() => decreaseQuantity(item)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="mr-5 text-xl">
                  {" "}
                  <h1>R.s.{item.Price * item.quantity}</h1>{" "}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="w-[65%] sm:w-[70%] mx-auto flex flex-col sm:flex-row sm:justify-around text-center leading-10 my-8 items-center "
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="text-3xl font-bold">
            <h1>{totalItems > 0 && `Total Amount: R.s.${totalAmount}`}</h1>
          </div>
          <div>
            {totalItems > 0 && (
              <button
                className="border px-3 bg-slate-300 hover:bg-slate-400 rounded-md my-3 sm:my-0"
                onClick={handleCheckout}
              >
                Check Out
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
