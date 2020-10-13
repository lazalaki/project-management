import { get, post } from "../../httpService";

const projectBaseUrl = () => `/projects`;
const projectsRequestUrl = (id) => `${projectBaseUrl()}/${id}`;
const createProjectUrl = () => `${projectBaseUrl()}/create`;
const singleProjectUrl = (id) => `${projectBaseUrl()}/project/${id}`;

export const projectsRequest = (id) => get(projectsRequestUrl(id));
export const createProjectRequest = (body) => post(createProjectUrl(), body);
export const getSingleProjectRequest = (id) => get(singleProjectUrl(id));
export const deleteProjectRequest = (id) => post(projectsRequestUrl(id));
