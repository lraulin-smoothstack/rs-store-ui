import {
  LOGIN,
  RECOVER_LOGIN,
  LOGOUT,
  REGISTER,
  UPDATE_USER_DETAILS,
} from "../constants/ActionTypes";

const initialState = {
  address: "",
  email: "",
  first_name: "",
  jwt: "",
  last_name: "",
  role: 0,
  id: 0,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
    case RECOVER_LOGIN:
    case UPDATE_USER_DETAILS:
      return {
        address: action.address,
        email: action.email,
        first_name: action.first_name,
        jwt: action.jwt,
        last_name: action.last_name,
        role: action.role,
        id: action.id,
        phone: action.phone,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default user;
