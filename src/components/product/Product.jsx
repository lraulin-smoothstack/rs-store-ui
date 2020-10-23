import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Badge } from "react-bootstrap";

const Product = ({
  id = 0,
  name = "[Product Name]",
  description = "[Description]",
  department = "[Department Name]",
  photo_url = "http://placekitten.com/200/200?image=" + (id % 16),
  retail_price_cents = 0,
}) => {
  const badgeVariant = {
    Men: "success",
    Women: "danger",
    Kids: "warning",
  };
  return (
    <Card>
      <Card.Img variant="top" src={photo_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
          <br />
          <Badge variant={badgeVariant[department]}>{department}</Badge>
          <Badge variant="info">${(retail_price_cents / 100).toFixed(2)}</Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  photo_url: PropTypes.string,
  retail_price_cents: PropTypes.number,
  stock: PropTypes.number,
};

export default Product;
