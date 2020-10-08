import Axios from "axios";
import { getFromStorage } from "./shared/localStorageService";

Axios.interceptors.request.use((req) => {
  const requestUrl = req.url;

  if (isAuthRoute(requestUrl)) {
    return req;
  }

  const token = getFromStorage("token");

  req.headers["Authorization"] = `Bearer ${token}`;

  return req;
});

Axios.interceptors.response.use(
  (data) => data,
  async (error) => {
    return Promise.reject(error.response.data.message);
  }
);

const isAuthRoute = (url) => url.includes("auth");
