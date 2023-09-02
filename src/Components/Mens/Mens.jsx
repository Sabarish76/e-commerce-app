import React, { useState } from "react";
import { Mensproducts } from "../Json/Mensjson";
import { Sling as Hamburger } from "hamburger-react";
import AddToCartButton from "../Context/AddToCartButton";

export const Mens = () => {
  const [products, Setproducts] = useState(Mensproducts);
  const [list, SetList] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [animation, SetAnimation] = useState(false);

  const FilterResult = (data) => {
    const result = Mensproducts.filter((e) => {
      return data === e.title;
    });
    Setproducts(result);
  };

  const listmenu = () => {
    SetList(!list);
    SetAnimation(!animation);
  };
  return (
    <>
      <main>
        <div>
          <div>
            <h1 className="w-full text-center text-4xl font-bold my-7">
              Mens Wear
            </h1>
          </div>
          <div className="sm:hidden flex justify-center">
            <button onClick={listmenu}>
              {" "}
              <Hamburger toggled={isOpen} toggle={setOpen} className="" />
            </button>
          </div>
          <div
            className={`${
              list ? "block" : "hidden"
            } flex sm:flex flex-col sm:flex-row justify-center gap-7 my-6 sm:my-2 sm:gap-14 ${
              animation ? "fade-down" : ""
            }`}
          >
            <button
              onClick={() => {
                FilterResult("shirt");
              }}
            >
              Shirts
            </button>
            <button
              onClick={() => {
                FilterResult("tshirt");
              }}
            >
              T-Shirts
            </button>
            <button
              onClick={() => {
                FilterResult("pant");
              }}
            >
              Pants
            </button>
            <button
              onClick={() => {
                FilterResult("short");
              }}
            >
              Shots
            </button>
            <button
              onClick={() => {
                Setproducts(Mensproducts);
              }}
            >
              All
            </button>
          </div>
        </div>
        <div className="w-[75%] h-fit  mx-auto my-6 lg:my-10 leading-10 sm:grid grid-cols-2 gap-10 lg:grid-cols-3 lg:gap-14 lg:w-[80%]">
          {products.map((e) => {
            const { id, image, Desc, title, Price } = e;

            return (
              <div key={id} className=" my-10 border shadow-2xl ">
                <div className="">
                  <img src={image} alt="img" />
                </div>

                <div className="font-bold capitalize text-4xl mx-3 my-2">
                  <h1>{title}</h1>
                </div>

                <div className="font-bold capitalize text-xl mx-3 my-2">
                  <p>{Desc}</p>
                </div>

                <div className="font-bold capitalize text-lg mx-3 my-2">
                  <p>Rs.{Price}</p>
                </div>

                <div className=" shadow-xl h-10 flex items-center justify-center text-lg mx-3 my-2 bg-slate-300 hover:bg-slate-400 rounded-md">
                  <AddToCartButton item={e} />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};
