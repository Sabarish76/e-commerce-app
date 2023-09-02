import React from "react";
import logo from "../../assets/images/Logo.png";
export const Logo = () => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        className="h-fit w-1/3 mx-5 sm:w-2/4 md:w-[30%]"
      />
    </>
  );
};
