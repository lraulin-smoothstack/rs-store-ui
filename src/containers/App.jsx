import React, { useEffect } from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import Header from "../components/Header";
import shop from "../api/shop";

const App = () => {
  return (
    <div>
      <Header />
      <br />
      <ProductsContainer />
    </div>
  );
};

export default App;
