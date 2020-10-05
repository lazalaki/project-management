import { post } from "../../httpService";

const authBaseUrl = () => "/auth";
const registerRequestUrl = () => `${authBaseUrl()}/register`;
const loginRequestUrl = () => `${authBaseUrl()}/login`;

export const registerRequest = (body) => post(registerRequestUrl(), body);
export const loginRequest = (body) => post(loginRequestUrl(), body);
