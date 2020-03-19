import Dispatcher from "../dispatcher/appDispatcher";
import axios from "axios";

const backend = "https://0ogofj3z44.execute-api.us-east-1.amazonaws.com/dev";
const OrderActions = {
  readReports: function() {
    Dispatcher.dispatch({
      actionType: "read_reports_started",
    });
    console.log(backend + "/orders/reports");
    axios
      .get(backend + "/orders/reports")
      .then(result => {
        Dispatcher.dispatch({
          actionType: "read_reports_successful",
          data: result.data,
        });
      })
      .catch(error => {
        console.log(error);
        Dispatcher.dispatch({
          actionType: "read_reports_failure",
        });
      });
  },

  readTaxes: function() {
    Dispatcher.dispatch({
      actionType: "read_taxes_started",
    });
    console.log(backend + "/orders/taxes");
    axios
      .get(backend + "/orders/taxes")
      .then(result => {
        Dispatcher.dispatch({
          actionType: "read_taxes_successful",
          data: result.data,
        });
      })
      .catch(error => {
        console.log(error);
        Dispatcher.dispatch({
          actionType: "read_taxes_failure",
        });
      });
  },
};

export default OrderActions;
