import { get, post, patch } from "../../httpService";

const projectBaseUrl = () => `/projects`;
const projectsRequestUrl = (id) => `${projectBaseUrl()}/${id}`;
const createProjectUrl = () => `${projectBaseUrl()}/create`;
const singleProjectUrl = (id) => `${projectBaseUrl()}/project/${id}`;
const addMemberToProjectUrl = (id) => `${projectBaseUrl()}/${id}/invitation`;
const updateProjectUrl = (id) => `${projectsRequestUrl(id)}/update`;

export const projectsRequest = (id) => get(projectsRequestUrl(id));
export const createProjectRequest = (body) => post(createProjectUrl(), body);
export const getSingleProjectRequest = (id) => get(singleProjectUrl(id));
export const deleteProjectRequest = (id) => post(projectsRequestUrl(id));
export const addMemberToProjectRequest = (id, body) =>
  post(addMemberToProjectUrl(id), body);
export const updateProjectRequest = (id, body) =>
  patch(updateProjectUrl(id), body);
