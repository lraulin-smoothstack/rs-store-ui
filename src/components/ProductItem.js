import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20, width: "18rem", float: "left" }}>
    <Product
      name={product.name}
      retail_price_cents={product.retail_price_cents}
      description={product.description}
      quantity={product.quantity}
    />
    <button
      onClick={onAddToCartClicked}
      disabled={product.stock > 0 ? "" : "disabled"}
    >
      {product.stock > 0 ? "Add to cart" : "Sold Out"}
    </button>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo_url: PropTypes.string.isRequired,
    retail_price_cents: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
};

export default ProductItem;
