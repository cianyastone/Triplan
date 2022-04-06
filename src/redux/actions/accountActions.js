import { SUCCESS_LOGIN_REQUEST, LOGOUT } from "../constants";

export const login = () => (dispatch) => {
  dispatch({
    type: SUCCESS_LOGIN_REQUEST,
  });
}

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
}