import { get, post, patch } from "../../httpService";

const projectBaseUrl = () => `/projects`;
const projectsRequestUrl = (id) => `/users${projectBaseUrl()}/${id}`;
const createProjectUrl = () => `${projectBaseUrl()}/create`;
const singleProjectUrl = (id) => `${projectBaseUrl()}/${id}`;
const addMemberToProjectUrl = (id) => `${projectBaseUrl()}/${id}/invitation`;
const updateProjectUrl = (id) => `${projectsRequestUrl(id)}/update`;
const getAllTasksUrl = (id) => `${projectBaseUrl()}/${id}/tasks`;
const createTaskUrl = (id) => `${getAllTasksUrl(id)}/create`;

export const projectsRequest = (id) => get(projectsRequestUrl(id));
export const createProjectRequest = (body) => post(createProjectUrl(), body);
export const getSingleProjectRequest = (id) => get(singleProjectUrl(id));
export const deleteProjectRequest = (id) => post(projectsRequestUrl(id));
export const addMemberToProjectRequest = (id, body) =>
  post(addMemberToProjectUrl(id), body);
export const updateProjectRequest = (id, body) =>
  patch(updateProjectUrl(id), body);
export const getAllTasksRequest = (id) => get(getAllTasksUrl(id));
export const createTaskRequest = (id, body) => post(createTaskUrl(id), body);
