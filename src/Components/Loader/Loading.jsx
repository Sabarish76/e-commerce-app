import React from "react";
import Loader from "../../Loader.json";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div className="loading-container">
      <Lottie animationData={Loader} className="lottie-animation" />
    </div>
  );
};

export default Loading;
