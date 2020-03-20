import React from "react";
import PropTypes from "prop-types";
import ModalForm from "./Modal";
import CouponActions from "../../flux/actions/couponActions";

export class CouponList extends React.Component {
  createCouponRow(coupon) {
    return (
      <tr key={coupon.code}>
        <td> {coupon.code} </td>
        <td> {coupon.expiration_date} </td>
        <td> {coupon.discount} </td>
        <td>
          <ModalForm buttonLabel="Edit" type="Coupon" item={coupon} />
          <ModalForm buttonLabel="Delete" type="Coupon" code={coupon.code} />
        </td>
      </tr>
    );
  }

  componentDidMount() {
    CouponActions.readCoupons();
  }

  render() {
    let content = "";

    if (
      this.props.coupon.readState.pending ||
      this.props.coupon.createState.pending ||
      this.props.coupon.updateState.pending ||
      this.props.coupon.deleteState.pending
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
      this.props.coupon.readState.success ||
      this.props.coupon.createState.success ||
      this.props.coupon.updateState.success ||
      this.props.coupon.deleteState.success
    ) {
      content = (
        <table className="table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Expiration Date</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            {this.props.coupon.couponList.map(this.createCouponRow, this)}
          </tbody>
        </table>
      );
    }

    if (this.props.coupon.createState.failure) {
      content = (
        <div className="alert alert-danger" role="alert">
          Error while adding coupons!
        </div>
      );
    }

    if (this.props.coupon.readState.failure) {
      content = (
        <div className="alert alert-danger" role="alert">
          Error while loading coupons!
        </div>
      );
    }

    if (this.props.coupon.updateState.failure) {
      content = (
        <div className="alert alert-danger" role="alert">
          Error while updating coupons!
        </div>
      );
    }

    if (this.props.coupon.deleteState.failure) {
      content = (
        <div className="alert alert-danger" role="alert">
          Error while deleting coupons!
        </div>
      );
    }

    return (
      <div>
        <h1>Coupons</h1>
        <ModalForm type="Coupon" buttonLabel="Add Coupon" />
        {content}
      </div>
    );
  }
}

CouponList.propTypes = {
  coupon: PropTypes.object.isRequired,
};
