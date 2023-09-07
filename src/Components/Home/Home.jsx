import React from "react";
import Footer from "../Footer/Footer";
import Animation from "./Animation";
export const Home = () => {
  return (
    <>
      <main className="h-fit min-h-screen my-10 ">
        <div className="flex flex-col ">
          <div className="w-[90%] mx-auto my-7">
            <h1 className="text-center my-3 font-bold text-2xl">
              Discover Your Perfect Style
            </h1>
            <p className="text-center my-3 font-thin text-sm text-slate-700">
              Welcome to Style Shop, where fashion meets convenience. Dive into
              a world of elegance and sophistication as we bring you the latest
              trends in women's dresses.
            </p>
            <button className="">Shop Now</button>
          </div>
          <div className="w-[90%] mx-auto border shadow-2xl">
            {" "}
            <Animation />
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
};
