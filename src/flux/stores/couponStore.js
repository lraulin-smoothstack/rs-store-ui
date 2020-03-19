import Dispatcher from "../dispatcher/appDispatcher";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

let _couponStore = {
  coupon: {
    couponList: [],
    readState: {
      pending: false,
      success: false,
      failure: false
    },
    createState: {
      pending: false,
      success: false,
      failure: false
    },
    updateState: {
      pending: false,
      success: false,
      failure: false
    },
    deleteState: {
      pending: false,
      success: false,
      failure: false
    },
    error: ""
  }
};

class CouponStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAllCoupons() {
    console.log("Getting All Coupons");
    return _couponStore.coupon;
  }

  resetCreateState() {
    _couponStore.coupon.createState = {
      pending: false,
      success: false,
      failure: false
    };
  }

  resetReadState() {
    _couponStore.coupon.readState = {
      pending: false,
      success: false,
      failure: false
    };
  }

  resetUpdateState() {
    _couponStore.coupon.updateState = {
      pending: false,
      success: false,
      failure: false
    };
  }

  resetDeleteState() {
    _couponStore.coupon.deleteState = {
      pending: false,
      success: false,
      failure: false
    };
  }
}

const CouponStore = new CouponStoreClass();

Dispatcher.register(action => {
  console.log(action);
  switch (action.actionType) {
    //Create Coupon Cases
    case "create_coupons_successful": {
      CouponStore.resetCreateState();

      const coupon = action.data;
      const couponList = _couponStore.coupon.couponList;
      couponList.push(coupon);
      _couponStore.coupon.couponList = couponList;

      _couponStore.coupon.createState.success = true;
      CouponStore.emitChange();
      break;
    }
    case "create_coupons_failure": {
      CouponStore.resetCreateState();
      _couponStore.coupon.createState.failure = true;
      CouponStore.emitChange();
      break;
    }
    case "create_coupons_started": {
      CouponStore.resetCreateState();
      _couponStore.coupon.createState.pending = true;
      CouponStore.emitChange();
      break;
    }

    //Read Coupons Cases
    case "read_coupons_successful": {
      CouponStore.resetReadState();
      _couponStore.coupon.couponList = action.data;
      _couponStore.coupon.readState.success = true;
      CouponStore.emitChange();
      break;
    }
    case "read_coupons_failure": {
      CouponStore.resetReadState();
      _couponStore.coupon.readState.failure = true;
      CouponStore.emitChange();
      break;
    }
    case "read_coupons_started": {
      CouponStore.resetReadState();
      _couponStore.coupon.readState.pending = true;
      CouponStore.emitChange();
      break;
    }

    //Update Coupons Cases
    case "update_coupons_successful": {
      CouponStore.resetUpdateState();

      const coupon = action.data;
      const couponList = _couponStore.coupon.couponList;
      const index = couponList.findIndex(
        ({ code }) => code === coupon.code
      );
      couponList[index] = coupon;

      _couponStore.coupon.couponList = couponList;
      _couponStore.coupon.updateState.success = true;
      CouponStore.emitChange();
      break;
    }
    case "update_coupons_failure": {
      CouponStore.resetUpdateState();
      _couponStore.coupon.updateState.failure = true;
      CouponStore.emitChange();
      break;
    }
    case "update_coupons_started": {
      CouponStore.resetUpdateState();
      _couponStore.coupon.updateState.pending = true;
      CouponStore.emitChange();
      break;
    }

    //Delete Coupons Cases
    case "delete_coupons_successful": {
      CouponStore.resetDeleteState();
      const delete_code = action.data;
      const today = new Date();
      const couponList = _couponStore.coupon.couponList;
      const index = couponList.findIndex(
        ({ code }) => code === delete_code
      );
      couponList[index].expiration_date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0') + "T00:00:00.000Z";
      _couponStore.coupon.couponList = couponList;
      _couponStore.coupon.deleteState.success = true;
      CouponStore.emitChange();
      break;
    }
    case "delete_coupons_failure": {
      CouponStore.resetDeleteState();
      _couponStore.coupon.deleteState.failure = true;
      CouponStore.emitChange();
      break;
    }
    case "delete_coupons_started": {
      CouponStore.resetDeleteState();
      _couponStore.coupon.deleteState.pending = true;
      CouponStore.emitChange();
      break;
    }
    default:
      return;
  }
});

export default CouponStore;
