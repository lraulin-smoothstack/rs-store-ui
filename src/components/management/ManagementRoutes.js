import React from "react";
import { Route, Redirect } from "react-router-dom";

import { ProductList } from "./ProductList";
import { CouponList } from "./CouponList";
import { Taxes } from "./Taxes";
import { Reports } from "./Reports";

import ProductStore from "../../flux/stores/productStore";
import CouponStore from "../../flux/stores/couponStore";
import OrderStore from "../../flux/stores/orderStore";
import { connect } from "react-redux";
import { getRole } from "../../reducers";

class ManagementRoutes extends React.Component {
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
    console.log("<<<<<<<<<<<<<<<<ROLE>>>>>>>>>>>>>>>>>>>");
    console.log(this.props.role);
    return (
      <>
        <Route
          path="/products"
          render={props =>
            this.props.role === 2 || this.props.role === 4 ? (
              <ProductList {...props} product={this.state.product} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/coupons"
          render={props =>
            this.props.role === 2 || this.props.role === 4 ? (
              <CouponList {...props} coupon={this.state.coupon} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/taxes"
          render={props =>
            this.props.role >= 3 ? (
              <Taxes {...props} taxes={this.state.taxes} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/reports"
          render={props =>
            this.props.role >= 3 ? (
              <Reports {...props} report={this.state.report} />
            ) : (
              <Redirect to="/" />
            )
          }
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

const mapStateToProps = state => ({
  role: getRole(state),
});

export default connect(mapStateToProps)(ManagementRoutes);
