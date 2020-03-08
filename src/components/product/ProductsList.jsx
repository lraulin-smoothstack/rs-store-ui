import React from "react";
import PropTypes from "prop-types";

const ProductsList = ({ children }) => (
  <div style={{ marginTop: "52px", marginLeft: "8px" }}>{children}</div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default ProductsList;
