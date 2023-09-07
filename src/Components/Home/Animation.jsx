import React from "react";
import Home from "../../Home.json";
import Lottie from "lottie-react";

const Animation = () => {
  return (
    <div>
      <Lottie animationData={Home} />
    </div>
  );
};

export default Animation;
