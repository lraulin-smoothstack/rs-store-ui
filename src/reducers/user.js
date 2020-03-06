import { LOGIN } from "../constants/ActionTypes";

const initialState = {
  email: "",
  jwt: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        email: action.email,
        jwt: action.jwt,
      };
    default:
      return state;
  }
};

export default user;
