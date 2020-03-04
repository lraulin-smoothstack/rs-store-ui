import cart, * as fromCart from "./cart";
import products, * as fromProducts from "./products";
import filter, * as fromFilter from "./filter";
import { combineReducers } from "redux";

export default combineReducers({ cart, products, filter });

const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

export const getTotalItems = state =>
  getAddedIds(state).reduce((total, id) => total + getQuantity(state, id), 0);

export const getTotal = state =>
  (
    getAddedIds(state).reduce(
      (total, id) =>
        total +
        getProduct(state, id).retail_price_cents * getQuantity(state, id),
      0,
    ) / 100
  ).toFixed(2);

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id),
  }));

export const getVisibleProducts = state => {};
export const getDepartment = state => state.filter.department;
export const getSearchString = state => state.filter.searchString;
