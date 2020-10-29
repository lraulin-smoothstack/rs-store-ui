import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout, removeItem, updateQuantity } from "../actions";
import {
  getTotal,
  getCartProducts,
  getTotalItems,
  getQuantityById,
  getUser,
} from "../reducers";
import Checkout from "../components/cart/Checkout";
import Payment from "../components/cart/Payment";
import Address from "../components/cart/Address";

const CheckoutContainer = ({
  user,
  products,
  total,
  checkout,
  totalItems,
  getQuantityById,
  removeItem,
  updateQuantity,
}) => {
  return (
    <div>
      <Checkout
        products={products}
        total={total}
        totalItems={totalItems}
        onCheckoutClicked={() => checkout(products)}
        getQuantityById={getQuantityById}
        removeItem={removeItem}
        updateQuantity={updateQuantity}
      />
      <Address address={user.address} />
      <Payment />
    </div>
  );
};

CheckoutContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photo_url: PropTypes.string.isRequired,
      retail_price_cents: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  totalItems: getTotalItems(state),
  user: getUser(state),
  getQuantityById: getQuantityById(state),
});

const mapDispatchToProps = {
  removeItem,
  updateQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
