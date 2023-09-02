import React from "react";
import { useLocation } from "react-router-dom";

export const User = () => {
  const location = useLocation();
  const { datas } = location.state;

  return (
    <div>
      <h1>Name: {datas.name}</h1>
      <h1>Email: {datas.email}</h1>
      <h1>Mobile: {datas.mobile}</h1>
    </div>
  );
};
