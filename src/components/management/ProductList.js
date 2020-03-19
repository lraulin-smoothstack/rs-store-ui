"use strict";

import React from "react";
import PropTypes from "prop-types";
import ModalForm from "./Modal";
import ProductActions from "../../flux/actions/productActions";

export class ProductList extends React.Component {
  createProductRow(product) {
    return (
      <tr key={product.id}>
        <td> {product.id} </td>
        <td> {product.name} </td>
        <td> {product.stock} </td>
        <td>
          <ModalForm buttonLabel="Edit" type="Product" item={product} />
          <ModalForm buttonLabel="Delete" type="Product" id={product.id} />
        </td>
      </tr>
    );
  }

  componentDidMount() {
    ProductActions.readProducts();
  }

  render() {
    let content = "";

    if (
      this.props.product.readState.pending ||
      this.props.product.createState.pending ||
      this.props.product.updateState.pending ||
      this.props.product.deleteState.pending
    ) {
      content = (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    if (
      this.props.product.readState.success ||
      this.props.product.createState.success ||
      this.props.product.updateState.success ||
      this.props.product.deleteState.success
    ) {
      content = (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.product.productList.map(this.createProductRow, this)}
          </tbody>
        </table>
      );
    }

    if (this.props.product.createState.failure) {
      content = (
        <div className="alert alert-danger" role="alert">
          Error while adding products!
        </div>
      );
    }

    if (this.props.product.readState.failure) {
      content = (
        <div className="alert alert-danger" role="alert">
          Error while loading products!
        </div>
      );
    }

    if (this.props.product.updateState.failure) {
      content = (
        <div className="alert alert-danger" role="alert">
          Error while updating products!
        </div>
      );
    }

    if (this.props.product.deleteState.failure) {
      content = (
        <div className="alert alert-danger" role="alert">
          Error while deleting products!
        </div>
      );
    }

    return (
      <div>
        <h1>Products</h1>
        <ModalForm type="Product" buttonLabel="Add Product" />
        {content}
      </div>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.object.isRequired,
};
