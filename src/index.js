import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Loading from "./Components/Loader/Loading";
import "./index.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import { CartProvider } from "./Components/Context/CartContext";
AOS.init();

const MainApp = () => {
  const [isLoading, SetisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetisLoading(false);
    }, 3500);
  }, []);

  return (
    <React.StrictMode>
      <CartProvider>{isLoading ? <Loading /> : <App />}</CartProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp />);
