import Dispatcher from "../dispatcher/appDispatcher";
import axios from "axios";

const backend = "https://0ogofj3z44.execute-api.us-east-1.amazonaws.com/dev";
const CouponActions = {
  createCoupon: function(body) {
    Dispatcher.dispatch({
      actionType: "create_coupons_started",
    });
    axios
      .post(backend + "/coupons", body)
      .then(() => {
        console.log(body);
        Dispatcher.dispatch({
          actionType: "create_coupons_successful",
          data: body,
        });
      })
      .catch(error => {
        console.log(error);
        Dispatcher.dispatch({
          actionType: "create_coupons_failure",
        });
      });
  },

  readCoupons: function() {
    Dispatcher.dispatch({
      actionType: "read_coupons_started",
    });
    console.log(backend + "/coupons");
    axios
      .get(backend + "/coupons")
      .then(result => {
        Dispatcher.dispatch({
          actionType: "read_coupons_successful",
          data: result.data,
        });
      })
      .catch(error => {
        console.log(error);
        Dispatcher.dispatch({
          actionType: "read_coupons_failure",
        });
      });
  },

  updateCoupon: function(coupon) {
    Dispatcher.dispatch({
      actionType: "update_coupons_started",
    });
    const body = {
      code: coupon.code,
      expiration_date: coupon.expiration_date,
      discount: coupon.discount,
    };
    axios
      .put(backend + "/coupons/" + coupon.code, body)
      .then(() => {
        Dispatcher.dispatch({
          actionType: "update_coupons_successful",
          data: coupon,
        });
      })
      .catch(error => {
        console.log(error);
        Dispatcher.dispatch({
          actionType: "update_coupons_failure",
        });
      });
  },

  deleteCoupon: function(code) {
    Dispatcher.dispatch({
      actionType: "delete_coupons_started",
    });
    console.log(backend + "/coupons/" + code);
    axios
      .delete(backend + "/coupons/" + code)
      .then(() => {
        Dispatcher.dispatch({
          actionType: "delete_coupons_successful",
          data: code,
        });
      })
      .catch(error => {
        console.log("deleteCoupon Error: " + error);
        Dispatcher.dispatch({
          actionType: "delete_coupons_failure",
        });
      });
  },
};

export default CouponActions;
