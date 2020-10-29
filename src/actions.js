import shop from "./api/shop";
import * as types from "./constants";

const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const getAllProducts = () => (dispatch) => {
  shop.getProducts().then((products) => {
    dispatch(receiveProducts(products));
  });
};

const addToCartUnsafe = (productId) => ({
  type: types.ADD_TO_CART,
  productId,
});

export const addToCart = (productId) => (dispatch, getState) => {
  if (getState().products.byId[productId].stock > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

export const checkout = (products) => (dispatch, getState) => {
  const { cart, user } = getState();
  dispatch({
    type: types.CHECKOUT_REQUEST,
  });

  const orders = cart.addedIds.map((productId) => ({
    id: user.id,
    product_id: productId,
    quantity: cart.quantityById[productId],
    coupon_code: null,
  }));

  shop.buyProducts(orders, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart,
    });
  });
};

export const setDepartment = (department) => (dispatch) => {
  dispatch({
    type: types.SET_DEPARTMENT,
    department,
  });
};

export const setSearchString = (searchString) => (dispatch) => {
  dispatch({
    type: types.SET_SEARCH_STRING,
    searchString,
  });
};

export const login = ({ username, password }) => async (dispatch) => {
  const login = await shop.login({ username, password });
  if (login) {
    const { user, token } = login;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

    dispatch({
      type: types.LOGIN,
      user,
    });
  }
};

export const register = ({ username, password }) => async (dispatch) => {
  const { user, token } = shop.register({ username, password });
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);

  dispatch({
    type: types.REGISTER,
    user,
  });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  dispatch({ type: types.LOGOUT });
};

export const recoverLogin = () => (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("RECOVERING LOGIN", user);
  if (user) {
    dispatch({
      type: types.RECOVER_LOGIN,
      user,
    });
  }
};

export const updateUserDetails = (user) => async (dispatch) => {
  await shop.updateUser(user);

  dispatch({
    type: types.UPDATE_USER_DETAILS,
    user,
  });
};

export const updateQuantity = (itemId, quantity) => (dispatch) => {
  dispatch({
    type: types.UPDATE_QUANTITY,
    itemId,
    quantity,
  });
};

export const removeItem = (itemId) => (dispatch) => {
  dispatch({
    type: types.REMOVE_ITEM,
    itemId,
  });
};
