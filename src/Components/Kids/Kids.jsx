import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import AddToCartButton from "../Context/AddToCartButton";
// import Footer from "../Footer/Footer";
import { Kidsproducts } from "../Json/Kidsjson";

const Kids = () => {
  const [products, Setproducts] = useState(Kidsproducts);
  const [list, SetList] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [animation, SetAnimation] = useState(false);

  const FilterResult = (data) => {
    const result = Kidsproducts.filter((e) => {
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
              Kids Wear
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
            } flex sm:flex flex-col sm:flex-row justify-center gap-7 my-6 sm:my-2 sm:gap-14 border w-[60%] mx-auto sm:h-16 font-bold py-5
         shadow-xl ${animation ? "fade-down" : ""}`}
            // data-aos="fade-left"
            // // data-aos-easing="linear"
            // data-aos-duration="1000"
          >
            <button
              onClick={() => {
                FilterResult("Boy's Set");
              }}
            >
              Boys
            </button>
            <button
              onClick={() => {
                FilterResult("Girls's Set");
              }}
            >
              Girls
            </button>
            <button
              onClick={() => {
                Setproducts(Kidsproducts);
              }}
            >
              All
            </button>
            {/* <button
              onClick={() => {
                FilterResult("Jacket");
              }}
            >
              Jackets
            </button>
            <button
              onClick={() => {
                Setproducts(Kidsproducts);
              }}
            >
              All
            </button> */}
          </div>
        </div>
        <div className="w-[75%] h-fit  mx-auto my-6 lg:my-10 leading-10 sm:grid grid-cols-2 gap-10 lg:grid-cols-3 lg:gap-14 lg:w-[80%]">
          {products.map((e) => {
            const { id, image, Desc, title, Price } = e;

            return (
              <div
                key={id}
                className=" my-10 border shadow-2xl "
                data-aos="fade-right"
                // data-aos-easing="linear"
                data-aos-duration="1000"
              >
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

                <div>
                  <AddToCartButton item={e} />
                </div>
              </div>
            );
          })}
        </div>
      </main>
      {/* <div>
        <Footer />
      </div> */}
    </>
  );
};

export default Kids;
