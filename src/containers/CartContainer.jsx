import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout, removeItem, updateQuantity } from "../actions";
import {
  getTotal,
  getCartProducts,
  getTotalItems,
  getQuantityById,
} from "../reducers";
import CartHeader from "../components/cart/CartHeader";

const CartContainer = ({
  products,
  total,
  checkout,
  totalItems,
  getQuantityById,
  removeItem,
  updateQuantity,
}) => (
  <CartHeader
    products={products}
    total={total}
    totalItems={totalItems}
    onCheckoutClicked={() => checkout(products)}
    getQuantityById={getQuantityById}
    removeItem={removeItem}
    updateQuantity={updateQuantity}
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
  getQuantityById: getQuantityById(state),
});

const mapDispatchToProps = {
  checkout,
  removeItem,
  updateQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
