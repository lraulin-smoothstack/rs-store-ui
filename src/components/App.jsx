import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import ProductsContainer from "./ProductsContainer";
import { getProducts } from "../api";

const App = () => {
  const [department, setDepartment] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="App">
      <Header setDepartment={d => setDepartment(d)} />
      <ProductsContainer department={department} products={products} />
    </div>
  );
};

export default App;
