import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      <img src={user.avatar} alt="avatar" />
      <p>Name: {user.name}</p>
      <p>Mobile: {user.mobile}</p>
      <p>Email: {user.email}</p>

      {/* Add more user details as needed */}
    </div>
  );
};

export default User;
