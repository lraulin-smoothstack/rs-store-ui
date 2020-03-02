import cart, * as fromCart from "./cart";
import products, * as fromProducts from "./products";
import filter, * as fromFilter from "./filter";

export default (state = {}, action) => ({
  cart: cart(state.cart, action),
  filter: filter(state.filter, action),
  products: products(state.products, { ...action, ...filter }),
});

const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);
const getDepartment = state => fromFilter.getDepartment(state.filter);
const getSearchString = state => fromFilter.getSearchString(state.filter);

export const getTotal = state =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total + getProduct(state, id).price * getQuantity(state, id),
      0,
    )
    .toFixed(2);

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id),
  }));

export const getVisibleProducts = state => {};
