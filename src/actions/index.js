import shop from "../api/shop";
import mock from "../api/mock";
import * as types from "../constants/ActionTypes";

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const getAllProducts = () => dispatch => {
  shop.getProducts().then(products => {
    dispatch(receiveProducts(products));
  });
};

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId,
});

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].stock > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState();

  dispatch({
    type: types.CHECKOUT_REQUEST,
  });
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart,
    });
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  });
};

export const setDepartment = department => dispatch => {
  dispatch({
    type: types.SET_DEPARTMENT,
    department,
  });
};

export const setSearchString = searchString => dispatch => {
  dispatch({
    type: types.SET_SEARCH_STRING,
    searchString,
  });
};

export const login = ({ email, password }) => dispatch => {
  console.log("Login action: calling login api");
  mock.login({ email, password }).then(jwt => {
    console.log("Login action: jwt = " + jwt);
    localStorage.setItem("jwt", jwt);
    console.log("Dispatching login action...");
    dispatch({
      type: types.LOGIN,
      email,
      jwt,
    });
  });
};
