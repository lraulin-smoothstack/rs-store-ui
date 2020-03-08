import { LOGIN, RECOVER_LOGIN, LOGOUT } from "../constants/ActionTypes";

const initialState = {
  address: "",
  email: "",
  first_name: "",
  jwt: "",
  last_name: "",
  role: 0,
  user_id: 0,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case RECOVER_LOGIN:
      return {
        address: action.address,
        email: action.email,
        first_name: action.first_name,
        jwt: action.jwt,
        last_name: action.last_name,
        role: action.role,
        user_id: action.id,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default user;
