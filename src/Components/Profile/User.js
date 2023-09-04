import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Retrieve user data from localStorage
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (userData) {
        setUser(userData);
      }
    } catch (err) {
      setError("Error parsing user data");
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {user && (
        <div className="h-fit min-h-screen">
          <div>
            {" "}
            <h1 className="my-8 text-center text-3xl font-bold">
              User Details
            </h1>
          </div>
          <section
            className="flex flex-col items-center leading-10 w-[90%] mx-auto border shadow-2xl lg:w-[60%] text-lg"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div>
              {" "}
              <img src={user.avatar} alt="avatar" className="w-64" />
            </div>
            <div>
              {" "}
              <p>Name: {user.name}</p>
            </div>
            <div>
              <p>Mobile: {user.mobile}</p>
            </div>
            <div>
              <p>Email: {user.email}</p>
            </div>
          </section>
        </div>
      )}

      {/* Add more user details as needed */}
    </div>
  );
};

export default User;
