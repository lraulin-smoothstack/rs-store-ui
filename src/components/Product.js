import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const Product = ({
  id = 0,
  name = "Product Name",
  description = "Lorem ipsum",
  department = "Men's",
  photo_url = "http://placekitten.com/200/300?image=",
  retail_price_cents = 0,
}) => (
  <Card style={{ width: "18rem", float: "left" }}>
    <Card.Img variant="top" src={photo_url + (id % 16)} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <em>{department}</em>
        {description}
        <br />${retail_price_cents / 100}
      </Card.Text>
      <Button variant="primary">Add to Cart</Button>
    </Card.Body>
  </Card>
);

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  photo_url: PropTypes.string,
  retail_price_cents: PropTypes.number,
  stock: PropTypes.number,
};

export default Product;
