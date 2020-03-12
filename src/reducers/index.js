import cart, * as fromCart from "./cart";
import products, * as fromProducts from "./products";
import filter from "./filter";
import user from "./user";

export default (state = {}, action) => ({
  cart: cart(state.cart, action),
  products: products(state.products, { ...action, prevFilter: state.filter }),
  filter: filter(state.filter, action),
  user: user(state.user, action),
});

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

export const getDepartment = state => state.filter.department;
export const getSearchString = state => state.filter.searchString;
export const getEmail = state => state.user.email;
export const getFirstName = state => state.user.first_name;
export const getLastName = state => state.user.last_name;
export const getAddress = state => state.user.address;
export const getPhone = state => state.user.phone;
