import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import Header from "../components/Header";

const App = () => (
  <div>
    <Header />
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
);

export default App;