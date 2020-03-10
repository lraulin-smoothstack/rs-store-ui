import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({
  id = 0,
  name = "Product Name",
  description = "Lorem ipsum",
  department = "Men's",
  photo_url = "http://placekitten.com/200/300?image=",
  retail_price_cents = 0,
}) => {
  return (
    <Card style={{ width: "18rem", float: "left" }}>
      <Card.Img variant="top" src={photo_url + (id % 16)} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {department} {description}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
