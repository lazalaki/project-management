import axios from "axios";
import "./httpConfig";

const baseUrl = "http://127.0.0.1:8000/api";

export const post = (url, body) => axios.post(`${baseUrl}${url}`, body);

export const get = (url) => axios.get(`${baseUrl}${url}`);
