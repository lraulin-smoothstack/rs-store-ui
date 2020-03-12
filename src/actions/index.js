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
  dispatch({
    type: types.CHECKOUT_REQUEST,
  });

  const orders = cart.addedIds.map(productId => ({
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

const storeAllLocally = object => {
  for (const [key, value] of Object.entries(object)) {
    localStorage.setItem(key, value);
  }
};

export const login = ({ email, password }) => dispatch => {
  shop.login({ email, password }).then(userDetails => {
    console.log("LOGIN");
    console.log(userDetails);
    storeAllLocally(userDetails);

    dispatch({
      type: types.LOGIN,
      ...userDetails,
    });
  });
};

export const register = ({ email, password }) => dispatch => {
  shop.register({ email, password }).then(userDetails => {
    storeAllLocally(userDetails);

    dispatch({
      type: types.REGISTER,
      ...userDetails,
    });
  });
};

const userFields = [
  "id",
  "email",
  "address",
  "first_name",
  "last_name",
  "role",
  "phone",
  "jwt",
];

export const logout = () => dispatch => {
  userFields.forEach(x => localStorage.removeItem(x));
  dispatch({ type: types.LOGOUT });
};

export const recoverLogin = () => dispatch => {
  const userDetails = userFields.reduce((object, key) => {
    object[key] = localStorage.getItem(key);
    return object;
  }, {});

  if (userDetails.email && userDetails.jwt) {
    dispatch({
      type: types.RECOVER_LOGIN,
      ...userDetails,
    });
  }
};

export const updateUserDetails = ({
  email,
  first_name,
  last_name,
  address,
  phone,
}) => (dispatch, getState) => {
  console.log("UPDATE USER DETAILS ACTION");
  const { user } = getState();
  const { id, jwt } = user;

  console.log("CALLING UPDATE USER FROM ACTIONS");
  shop
    .updateUser({ id, email, first_name, last_name, address, phone, jwt })
    .then(response => {
      if (response && response.affectedRows) {
        console.log("User successfully updated!");
        localStorage.setItem("id", id);
        localStorage.setItem("email", email);
        localStorage.setItem("first_name", first_name);
        localStorage.setItem("last_name", last_name);
        localStorage.setItem("address", address);
        localStorage.setItem("phone", phone);
        localStorage.setItem("jwt", jwt);

        dispatch({
          type: types.UPDATE_USER_DETAILS,
          id,
          email,
          first_name,
          last_name,
          address,
          phone,
          jwt,
        });
      } else {
        console.log("Error updating user!");
        console.log(response);
      }
    });
};
