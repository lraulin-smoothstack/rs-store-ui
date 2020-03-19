"use strict";

import React from "react";
import { Switch, Route } from "react-router-dom";

import { ProductList } from "./ProductList";
import { CouponList } from "./CouponList";
import { Taxes } from "./Taxes";
import { Reports } from "./Reports";

import ProductStore from "../../flux/stores/productStore";
import CouponStore from "../../flux/stores/couponStore";
import OrderStore from "../../flux/stores/orderStore";

export class ManagementRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        productList: [],
        readState: {
          pending: false,
          success: false,
          failure: false,
        },
        createState: {
          pending: false,
          success: false,
          failure: false,
        },
        updateState: {
          pending: false,
          success: false,
          failure: false,
        },
        deleteState: {
          pending: false,
          success: false,
          failure: false,
        },
        error: "",
      },
      coupon: {
        couponList: [],
        readState: {
          pending: false,
          success: false,
          failure: false,
        },
        createState: {
          pending: false,
          success: false,
          failure: false,
        },
        updateState: {
          pending: false,
          success: false,
          failure: false,
        },
        deleteState: {
          pending: false,
          success: false,
          failure: false,
        },
        error: "",
      },
      report: {
        reportList: [],
        readState: {
          pending: false,
          success: false,
          failure: false,
        },
        error: "",
      },
      taxes: {
        taxesList: [],
        readState: {
          pending: false,
          success: false,
          failure: false,
        },
        error: "",
      },
    };
  }

  render() {
    return (
      <>
        <Route
          path="/products"
          render={props => (
            <ProductList {...props} product={this.state.product} />
          )}
        />
        <Route
          path="/coupons"
          render={props => <CouponList {...props} coupon={this.state.coupon} />}
        />
        <Route
          path="/taxes"
          render={props => <Taxes {...props} taxes={this.state.taxes} />}
        />
        <Route
          path="/reports"
          render={props => <Reports {...props} report={this.state.report} />}
        />
      </>
    );
  }

  componentDidMount() {
    ProductStore.addChangeListener(this._onProductChange.bind(this));
    CouponStore.addChangeListener(this._onCouponChange.bind(this));
    OrderStore.addChangeListener(this._onOrderChange.bind(this));
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._onProductChange.bind(this));
    CouponStore.removeChangeListener(this._onCouponChange.bind(this));
    OrderStore.addChangeListener(this._onOrderChange.bind(this));
  }

  componentDidUpdate() {
    this._onProductChange.bind(this);
    this._onCouponChange.bind(this);
    this._onOrderChange.bind(this);
  }

  _onProductChange() {
    this.setState({ product: ProductStore.getAllProducts() });
  }

  _onCouponChange() {
    this.setState({ coupon: CouponStore.getAllCoupons() });
  }

  _onOrderChange() {
    this.setState({ report: OrderStore.getAllReports() });
    this.setState({ taxes: OrderStore.getAllTaxes() });
  }
}
