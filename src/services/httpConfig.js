import Axios from "axios";
import {
  getFromStorage,
  removeFromStorage,
} from "./shared/localStorageService";
import history from "../shared/history";
import { loginRoute } from "../shared/routes";
import { showMessage } from "./shared/toastService";

Axios.interceptors.request.use((req) => {
  console.log(req);
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
    if (error.response.status === 401) {
      removeFromStorage();
      showMessage(
        "Warning",
        "Your time on site has expired. Log in to continue.",
        "warning"
      );
      history.push(loginRoute());
    }

    return Promise.reject(error.response.data.message);
  }
);

const isAuthRoute = (url) => url.includes("auth");
