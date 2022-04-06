import { SUCCESS_LOGIN_REQUEST, LOGOUT } from "../constants";

const initialState = {
  general: {
    name: "",
    email: "",
    password: "",
  },
  login: {
    hasLogin: false,
  }
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOGIN_REQUEST:
      return { ...state, login: { ...state.login, hasLogin: true } };

    case LOGOUT:
      return { ...state, login: { ...state.login, hasLogin: false } };

    default:
      return state;
  }
}
