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
  const [visibleProducts, setVisibleProducts] = useState(9);
  const showMoreIncrement = 9;

  const FilterResult = (data) => {
    const result = Kidsproducts.filter((e) => {
      return data === e.title;
    });
    Setproducts(result);
    setVisibleProducts(9);
  };

  const listmenu = () => {
    SetList(!list);
    SetAnimation(!animation);
  };
  const showMoreProducts = () => {
    setVisibleProducts(visibleProducts + showMoreIncrement);
  };

  const resetProducts = () => {
    Setproducts(Kidsproducts);
    setVisibleProducts(9);
  };
  return (
    <>
      <main className="h-fit min-h-screen mt-20">
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
                Setproducts(resetProducts);
              }}
            >
              All
            </button>
          </div>
        </div>
        <div className="w-[75%] h-fit  mx-auto my-6 lg:my-10 leading-10 sm:grid grid-cols-2 gap-10 lg:grid-cols-3 lg:gap-14 lg:w-[80%]">
          {products.slice(0, visibleProducts).map((e) => {
            const { id, image, Desc, title, Price } = e;

            return (
              <div
                key={id}
                className=" my-10 border shadow-2xl "
                data-aos="fade-right"
                // data-aos-easing="linear"
                data-aos-duration="2000"
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
        <div>
          {visibleProducts < products.length && (
            <div>
              <button
                onClick={showMoreProducts}
                className="shadow-xl h-10 flex  items-center justify-center text-lg mx-auto text-center bg-slate-300 hover:bg-slate-400 rounded-md w-[60%] sm:w-[40%] md:w-[20%]"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </main>
      {/* <div>
        <Footer />
      </div> */}
    </>
  );
};

export default Kids;
