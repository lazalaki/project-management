import React, { useReducer, createContext, useEffect } from "react";
import { globalReducer, initialGlobalState } from "./global-reducer";
import {
  storeInStorage,
  removeFromStorage,
} from "../services/shared/localStorageService";
import { setUserAction, setProjectAction } from "./global-actions";
import { getSingleProjectRequest } from "../services/api/project/projectsService";

export const GlobalStore = createContext({});

export const GlobalStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialGlobalState);

  useEffect(() => {
    const url = window.location.pathname;
    const id = url.split("/")[3];
    getProject(id);
  }, [window.location.pathname]);

  const setUser = (userData) => {
    storeInStorage("user", userData.user);
    storeInStorage("token", userData.token);
    setUserAction(userData.user, dispatch);
  };

  const logout = () => {
    removeFromStorage();
    setUserAction(null, dispatch);
  };

  const setProject = (project) => {
    setProjectAction(project, dispatch);
  };

  const getProject = async (id) => {
    try {
      const { data } = await getSingleProjectRequest(id);
      setProject(data.project);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalStore.Provider value={{ state, setUser, logout, getProject }}>
      {children}
    </GlobalStore.Provider>
  );
};
