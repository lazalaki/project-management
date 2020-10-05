import { SET_USER } from "./global-types";
import { getFromStorage } from "../services/shared/localStorageService";

export const initialGlobalState = {
  user: getFromStorage("user") || null,
};

export const globalReducer = (state = initialGlobalState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
