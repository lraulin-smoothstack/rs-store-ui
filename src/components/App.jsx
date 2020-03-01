import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import ProductsContainer from "./ProductsContainer";
import axios from "axios";

const App = () => {
  const [department, setDepartment] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://0ogofj3z44.execute-api.us-east-1.amazonaws.com/dev/products",
      )
      .then(result => {
        console.log("Fetching products....");
        console.log(result.data);
        setProducts(result.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="App">
      <Header setDepartment={d => setDepartment(d)} />
      <ProductsContainer department={department} products={products} />
    </div>
  );
};

export default App;
