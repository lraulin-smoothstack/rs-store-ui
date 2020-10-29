import {
  LOGIN,
  RECOVER_LOGIN,
  LOGOUT,
  REGISTER,
  UPDATE_USER_DETAILS,
} from "../constants";

const initialState = {
  _id: 0,
  username: "",
  firstName: "",
  lastName: "",
  phone: "",
  address: {
    street: "",
    city: "",
    state: "",
    zip: "",
  },
  token: "",
};

export const getUser = (state) => state;

const user = (state = initialState, action) => {
  const { type, user } = action;
  switch (type) {
    case LOGIN:
    case REGISTER:
    case RECOVER_LOGIN:
    case UPDATE_USER_DETAILS:
      return { ...user };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default user;
