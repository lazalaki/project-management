import { SET_USER } from "./global-types";

export const setUserAction = (user, dispatch) => {
  dispatch({
    type: SET_USER,
    payload: { user: user },
  });
};
