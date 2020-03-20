import React from "react";
import PropTypes from "prop-types";
import OrderActions from "../../flux/actions/orderActions";

export class Reports extends React.Component {
  componentDidMount() {
    OrderActions.readReports();
  }

  render() {
    let content = "";

    if (this.props.report.readState.pending) {
      content = (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    if (this.props.report.readState.success) {
      console.log(this.props.report.reportList);
      content = (
        <table align="center">
          <tbody>
            <tr key="gross_sales">
              <td>Gross Sales:</td>
              <td align="center">
                $ {this.props.report.reportList[0][0].gross_sales_cents / 100.0}
              </td>
            </tr>
            <tr key="instore_sales">
              <td>In-store Sales:</td>
              <td align="center">
                {this.props.report.reportList[1][0].instore_sales}
              </td>
            </tr>
            <tr key="online_sales">
              <td>Online Sales:</td>
              <td align="center">
                {this.props.report.reportList[2][0].online_sales}
              </td>
            </tr>
          </tbody>
        </table>
      );
    }

    if (this.props.report.readState.failure) {
      content = (
        <div className="alert alert-danger" role="alert">
          Error while loading reports!
        </div>
      );
    }

    return (
      <div>
        <h1 align="center" border="1">
          Reports
        </h1>
        {content}
      </div>
    );
  }
}

Reports.propTypes = {
  report: PropTypes.object.isRequired,
};
