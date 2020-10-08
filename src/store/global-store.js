import React from "react";
import { useReducer, createContext } from "react";
import { globalReducer, initialGlobalState } from "./global-reducer";
import {
  storeInStorage,
  removeFromStorage,
} from "../services/shared/localStorageService";
import { setUserAction } from "./global-actions";

export const GlobalStore = createContext({});

export const GlobalStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialGlobalState);

  const setUser = (userData) => {
    storeInStorage("user", userData.user);
    storeInStorage("token", userData.token);
    setUserAction(userData.user, dispatch);
  };

  const logout = () => {
    removeFromStorage();
    setUserAction(null, dispatch);
  };

  return (
    <GlobalStore.Provider value={{ state, setUser, logout }}>
      {children}
    </GlobalStore.Provider>
  );
};
