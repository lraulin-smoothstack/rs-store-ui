import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout } from "../actions";
import { getTotal, getCartProducts } from "../reducers";
import Cart from "../components/Cart";

const CartContainer = ({ products, total, checkout }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
  />
);

CartContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photo_url: PropTypes.string.isRequired,
      retail_price_cents: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
    }),
  ).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state),
});

export default connect(mapStateToProps, { checkout })(CartContainer);