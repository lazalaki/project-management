import React, { useReducer, createContext } from "react";
import { globalReducer, initialGlobalState } from "./global-reducer";
import {
  storeInStorage,
  removeFromStorage,
} from "../services/shared/localStorageService";
import {
  setUserAction,
  setProjectAction,
  setTasksAction,
} from "./global-actions";
import {
  getSingleProjectRequest,
  getAllTasksRequest,
} from "../services/api/project/projectsService";

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

  const setAllTasks = async (tasks) => {
    setTasksAction(tasks, dispatch);
  };

  const getAllTasks = async (id) => {
    try {
      const { data } = await getAllTasksRequest(id);
      setAllTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalStore.Provider
      value={{ state, setUser, logout, getProject, getAllTasks }}
    >
      {children}
    </GlobalStore.Provider>
  );
};
