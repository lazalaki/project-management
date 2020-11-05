import { SET_USER, SET_PROJECT, SET_TASKS } from "./global-types";
import { getFromStorage } from "../services/shared/localStorageService";

export const initialGlobalState = {
  user: getFromStorage("user") || null,
  selectedProject: null,
  tasks: null,
};

export const globalReducer = (state = initialGlobalState, action) => {
  switch (action.type) {
    case SET_USER:
    case SET_PROJECT:
    case SET_TASKS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
