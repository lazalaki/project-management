import { SET_USER, SET_LOGGED_IN } from "./global-types";

export const setUserAction = (user, dispatch) => {
  dispatch({
    type: SET_USER,
    action: { user: user },
  });
};

export const setLoggedInAction = (status, dispatch) => {
  dispatch({
    type: SET_LOGGED_IN,
    payload: { status: status },
  });
};
