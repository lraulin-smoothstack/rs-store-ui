import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout } from "../actions";
import { getTotal, getCartProducts, getTotalItems } from "../reducers";
import CartHeader from "../components/cart/CartHeader";

const CartContainer = ({ products, total, checkout, totalItems }) => (
  <CartHeader
    products={products}
    total={total}
    totalItems={totalItems}
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
  totalItems: getTotalItems(state),
});

export default connect(mapStateToProps, { checkout })(CartContainer);
