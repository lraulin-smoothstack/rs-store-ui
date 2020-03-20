import React from "react";
import PropTypes from "prop-types";
import OrderActions from "../../flux/actions/orderActions";

export class Taxes extends React.Component {
  componentDidMount() {
    OrderActions.readTaxes();
  }

  render() {
    let content = "";
    let taxes = 0;

    if (this.props.taxes.readState.pending) {
      content = (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    if (this.props.taxes.readState.success) {
      taxes = this.props.taxes.taxesList[0].taxes_cents / 100.0;
      content = <h4 align="center">$ {taxes}</h4>;
    }

    if (this.props.taxes.readState.failure) {
      content = (
        <div className="alert alert-danger" role="alert">
          Error while loading taxes!
        </div>
      );
    }

    return (
      <div>
        <h1 align="center">Taxes</h1>
        {content}
      </div>
    );
  }
}

Taxes.propTypes = {
  taxes: PropTypes.object.isRequired,
};
