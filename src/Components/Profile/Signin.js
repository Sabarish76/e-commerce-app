import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../../URL";

export const Signin = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [data, Setdata] = useState([]);
  const navigate = useNavigate();

  const Callapi = async () => {
    try {
      const resp = await axios.get(API_URL);
      Setdata(resp.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const authen = () => {
    let userFound = false;
    data.forEach((user) => {
      if (email === user.email && password === user.password) {
        userFound = true;

        // Store user data in localStorage
        const userData = {
          name: user.name,
          mobile: user.mobile,
          email: user.email,
          avatar: user.avatar,
        };
        localStorage.setItem("userData", JSON.stringify(userData));

        // Navigate to the User component
        navigate("/user");
      }
    });

    if (!userFound) {
      alert("User Not Found");
    }
  };

  useEffect(() => {
    Callapi();
  }, []);
  return (
    <div className="h-fit min-h-screen">
      <main className="w-[90%] mx-auto md:w-[50%] lg:w-[35%] border leading-10 text-lg my-5 border-slate-600 shadow-2xl rounded-xl">
        <div className="text-center my-3">
          <h1>Sign In</h1>
        </div>
        <div className="flex flex-col mx-5 my-5">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            placeholder="Enter Your Email"
            className=" shadow-lg rounded-lg px-5 py-3 text-lg"
          />
        </div>
        <div className="flex flex-col mx-5 my-5">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            placeholder="Enter Your Password"
            className=" shadow-lg rounded-lg px-5 py-3 text-lg"
          />
        </div>
        <div className="mx-5 my-5 flex justify-between">
          <Link to="/signup">
            <h1>Don't Have An Account?</h1>
          </Link>
          <p>Forgot Password?</p>
        </div>
        <div className="mx-5">
          <button
            onClick={() => authen()}
            className="mb-5 border bg-blue-600 w-full text-white rounded-lg shadow-sm"
          >
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
};
