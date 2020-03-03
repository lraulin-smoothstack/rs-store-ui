import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const Product = ({
  id = 0,
  name = "[Product Name]",
  description = "[Description]",
  department = "[Department Name]",
  photo_url = "http://placekitten.com/200/300?image=",
  retail_price_cents = 0,
}) => (
  <Card>
    <Card.Img variant="top" src={photo_url + (id % 16)} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <strong>{department}</strong>
        <br />
        {description}
        <br />${(retail_price_cents / 100).toFixed(2)}
      </Card.Text>
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
