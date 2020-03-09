import shop from "../api/shop";
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
  const { cart, user } = getState();
  console.log("CHECKOUT ACTION");
  console.log(cart);

  dispatch({
    type: types.CHECKOUT_REQUEST,
  });

  const orders = cart.addedIds.map(productId => ({
    user_id: user.user_id,
    product_id: productId,
    quantity: cart.quantityById[productId],
    coupon_code: null,
  }));

  shop.buyProducts(orders, () => {
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
  shop.login({ email, password }).then(result => {
    console.log("LOGIN RESULT");
    localStorage.setItem("jwt", result.jwt);
    dispatch({
      type: types.LOGIN,
      ...result,
    });
  });
};

export const register = ({ email, password }) => dispatch => {
  shop.register({ email, password }).then(result => {
    console.log("REGISTER RESULT");
    localStorage.setItem("jwt", result.jwt);
    dispatch({
      type: types.REGISTER,
      ...result,
    });
  });
};

export const logout = () => dispatch => {
  localStorage.removeItem("email");
  localStorage.removeItem("jwt");
  dispatch({ type: types.LOGOUT });
};

export const recoverLogin = () => dispatch => {
  const [email, jwt] = [
    localStorage.getItem("email"),
    localStorage.getItem("jwt"),
  ];

  if (email && jwt) {
    console.log("User login recovered from local storage.");
    dispatch({
      type: types.RECOVER_LOGIN,
      email,
      jwt,
    });
  }
};
