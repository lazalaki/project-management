import { get, post } from "../../httpService";

const allUsersUrl = () => "/users";
const setRoleUrl = () => "/users";

export const allUsersRequest = () => get(allUsersUrl());
export const setRoleRequest = (id, body) => post(`${setRoleUrl()}/${id}`, body);
