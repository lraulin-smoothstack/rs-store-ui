import Dispatcher from "../dispatcher/appDispatcher";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

let _orderStore = {
  report: {
    reportList: [],
    readState: {
      pending: false,
      success: false,
      failure: false
    },
    error: ""
  },
  taxes: {
      taxesList: [],
      readState: {
          pending: false,
          success: false,
          failure: false
      },
      error: ""
  }
};

class OrderStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAllReports() {
    console.log("Getting All Reports");
    return _orderStore.report;
  }

  getAllTaxes() {
      console.log("Getting All Taxes");
      return _orderStore.taxes;
  }

  resetReportReadState() {
    _orderStore.report.readState = {
      pending: false,
      success: false,
      failure: false
    };
  }

  resetTaxesReadState() {
    _orderStore.taxes.readState = {
      pending: false,
      success: false,
      failure: false
    };
  }
}

const OrderStore = new OrderStoreClass();

Dispatcher.register(action => {
  console.log(action);
  switch (action.actionType) {
    //Read Orders Cases
    case "read_reports_successful": {
      OrderStore.resetReportReadState();
      _orderStore.report.reportList = action.data;
      _orderStore.report.readState.success = true;
      OrderStore.emitChange();
      break;
    }
    case "read_reports_failure": {
      OrderStore.resetReportReadState();
      _orderStore.report.readState.failure = true;
      OrderStore.emitChange();
      break;
    }
    case "read_reports_started": {
      OrderStore.resetReportReadState();
      _orderStore.report.readState.pending = true;
      OrderStore.emitChange();
      break;
    }

    //Read Orders Cases
    case "read_taxes_successful": {
      OrderStore.resetTaxesReadState();
      _orderStore.taxes.taxesList = action.data;
      _orderStore.taxes.readState.success = true;
      OrderStore.emitChange();
      break;
    }
    case "read_taxes_failure": {
      OrderStore.resetTaxesReadState();
      _orderStore.taxes.readState.failure = true;
      OrderStore.emitChange();
      break;
    }
    case "read_taxes_started": {
      OrderStore.resetTaxesReadState();
      _orderStore.taxes.readState.pending = true;
      OrderStore.emitChange();
      break;
    }
    default:
      return;
  }
});

export default OrderStore;
