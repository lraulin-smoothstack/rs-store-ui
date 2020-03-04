import React, { useEffect } from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import Header from "../components/Header";
import shop from "../api/shop";

const App = () => {
  useEffect(() => {
    shop.login("customer@customer.com", "customer");
  }, []);
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
