import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { Table } from "react-bootstrap";

const Cart = ({ products, total, onCheckoutClicked, getQuantityById }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <CartItem
            id={product.id}
            name={product.name}
            retail_price_cents={product.retail_price_cents}
            key={product.id}
            getQuantityById={getQuantityById}
          />
        ))}
      </tbody>
    </Table>
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div>
      <h3>Your Cart</h3>
      {nodes}
      <p>Total: &#36;{total}</p>
      <button
        onClick={onCheckoutClicked}
        disabled={hasProducts ? "" : "disabled"}
      >
        Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
};

export default Cart;
