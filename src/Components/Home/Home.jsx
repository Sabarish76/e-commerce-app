import React from "react";
// import Footer from "../Footer/Footer";
import Animation from "./Animation";
import Mens from "../Mens/Mens";
import Womens from "../Womens/Womens";
import Kids from "../Kids/Kids";
export const Home = () => {
  return (
    <>
      <main className="h-fit min-h-screen my-10 ">
        <div className="flex flex-col sm:flex-row items-center  ">
          <div
            className="w-[90%] mx-auto my-7 sm:my-0 sm:w-[40%]"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h1 className="text-center my-3 font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Discover Your Perfect Style
            </h1>
            <p className="text-center my-3 sm:my-5 font-thin text-sm text-slate-700">
              Welcome to Style Shop, where fashion meets convenience. Dive into
              a world of elegance and sophistication as we bring you the latest
              trends in women's dresses.Whether you're searching for the perfect
              evening gown, a casual sundress, or something in between, we've
              got you covered.
            </p>
            <button className="shadow-xl h-10 sm:h-14 flex items-center justify-center text-lg mx-auto my-3 bg-slate-300 hover:bg-slate-400 rounded-md w-[70%] sm:w-[50%]">
              Shop Now
            </button>
          </div>
          <div
            className="w-[90%] sm:w-[50%]  mx-auto border shadow-2xl sm:border-none sm:shadow-none"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            {" "}
            <Animation />
          </div>
        </div>
        <div>
          <Mens />
        </div>
        <div>
          <Womens />
        </div>
        <div>
          <Kids />
        </div>
      </main>
    </>
  );
};
