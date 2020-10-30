import { SET_USER, SET_PROJECT } from "./global-types";

export const setUserAction = (user, dispatch) => {
  dispatch({
    type: SET_USER,
    payload: { user: user },
  });
};

export const setProjectAction = (project, dispatch) => {
  dispatch({
    type: SET_PROJECT,
    payload: { selectedProject: project },
  });
};
