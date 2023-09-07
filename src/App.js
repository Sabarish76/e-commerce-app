import React from "react";
import "./App.css";
import { Navbar } from "./Components/NavBar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import Mens from "./Components/Mens/Mens";
import Kids from "./Components/Kids/Kids";
import { Womens } from "./Components/Womens/Womens";
import { Signup } from "./Components/Profile/Signup";
import { Signin } from "./Components/Profile/Signin";
import User from "./Components/Profile/User";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App font-primary h-fit">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
