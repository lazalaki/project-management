import React from "react";
import { useReducer, createContext } from "react";
import { globalReducer, initialGlobalState } from "./global-reducer";
import {
  storeInStorage,
  removeFromStorage,
} from "../services/shared/localStorageService";
import { setUserAction, setLoggedInAction } from "./global-actions";

export const GlobalStore = createContext({});

export const GlobalStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialGlobalState);

  const setUser = (user) => {
    storeInStorage("user", user);
    setUserAction(user, dispatch);
    setLoggedInAction(true, dispatch);
  };

  const logout = () => {
    removeFromStorage();
    setUserAction(null, dispatch);
    setLoggedInAction(false, dispatch);
  };

  return (
    <GlobalStore.Provider value={{ state, setUser, logout }}>
      {children}
    </GlobalStore.Provider>
  );
};
