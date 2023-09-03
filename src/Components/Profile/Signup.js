import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../../URL";
import axios from "axios";
export const Signup = () => {
  const [name, SetName] = useState("");
  const [mobile, SetMobile] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();

  const postData = async () => {
    try {
      await axios.post(API_URL, {
        name,
        password,
        mobile,
        email,
      });

      // Store user data in localStorage
      const userData = { name, mobile, email };
      localStorage.setItem("userData", JSON.stringify(userData));

      // Navigate to the User component
      navigate("/signin");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <main className="w-[90%] mx-auto md:w-[50%] lg:w-[35%] border leading-10 text-lg my-5 border-slate-600 shadow-2xl rounded-xl">
        <div className="text-center my-3">
          <h1>Sign Up</h1>
        </div>
        <div className="flex flex-col mx-5 my-5">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => SetName(e.target.value)}
            placeholder="Enter Your Name"
            className=" shadow-lg rounded-lg px-5 py-2 text-lg"
          />
        </div>
        <div className="flex flex-col mx-5 my-5">
          <label>Mobile:</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => SetMobile(e.target.value)}
            placeholder="Enter Your Mobile Number"
            className=" shadow-lg rounded-lg px-5 py-2 text-lg"
          />
        </div>
        <div className="flex flex-col mx-5 my-5">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            placeholder="Enter Your Email"
            className=" shadow-lg rounded-lg px-5 py-2 text-lg"
          />
        </div>
        <div className="flex flex-col mx-5 my-5">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            placeholder="Enter Your Password"
            className=" shadow-lg rounded-lg px-5 py-2 text-lg"
          />
        </div>
        <div className="mx-5 my-5 flex justify-between">
          <Link to="/signin">
            <h1>Already Have An Account?</h1>
          </Link>
          <p>Forgot Password?</p>
        </div>
        <div className="mx-5">
          <button
            onClick={() => postData()}
            className="mb-5 border bg-blue-600 w-full text-white rounded-lg shadow-sm"
          >
            Sign In
          </button>
        </div>
      </main>
    </>
  );
};
