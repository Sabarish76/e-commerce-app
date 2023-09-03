import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { Sling as Hamburger } from "hamburger-react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [animation, SetAnimation] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const MobileMenu = () => {
    setMobile(!mobile);
    SetAnimation(!mobile);
  };

  return (
    <header className="w-full h-fit mx-auto text-xl sticky top-0 bg-white z-50">
      <nav className="flex w-[95%] sm:w-[100%] lg:w-[90%] sm:justify-evenly sm:items-center relative ">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="sm:hidden absolute right-0 mt-5">
          <button onClick={MobileMenu}>
            {" "}
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
        <div
          className={`${
            mobile ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row sm:items-center justify-evenly mt-16 sm:mt-0 relative ${
            animation ? "fade-down" : ""
          }`}
        >
          <Link to="/">
            <p className="mx-5 my-5 sm:my-0">Home</p>
          </Link>
          <Link to="/mens">
            <p className="mx-5 my-5 sm:my-0">Mens</p>
          </Link>
          <Link to="/womens">
            <p className="mx-5 my-5 sm:my-0">Womens</p>
          </Link>
          <Link to="/electronics">
            <p className="mx-5 my-5 sm:my-0">Electronics</p>
          </Link>
        </div>
        <div className="flex items-center text-lg mx-16 sm:mx-0 absolute top-7 sm:top-0 right-0 sm:relative">
          <Link to="/user">
            <CgProfile size={30} className="mx-3" />
          </Link>
          <Link to="/cart">
            <BsFillCartCheckFill size={30} className="mx-3" />
          </Link>
          <Link to="/signin">
            <BiLogIn size={30} className="mx-3" />
          </Link>
        </div>
      </nav>
    </header>
  );
};
