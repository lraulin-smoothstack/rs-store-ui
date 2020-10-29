import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

const Cart = ({ children, hasProducts, total, onCheckoutClicked }) => {
  const nodes = hasProducts ? (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div>
      <h3>Your Cart</h3>
      {nodes}
      <p>Total: &#36;{total}</p>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
};

export default Cart;
