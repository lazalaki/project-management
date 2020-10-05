import Axios from "axios";

Axios.interceptors.response.use(
  (data) => data,
  async (error) => {
    return Promise.reject(error.response.data.message);
  }
);
