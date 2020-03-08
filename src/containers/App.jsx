import React, { useEffect } from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import Header from "../components/header/Header";
import shop from "../api/shop";

const App = () => {
  return (
    <div>
      <Header />
      <hr />
      <ProductsContainer />
      <hr />
      <CartContainer />
    </div>
  );
};

export default App;
