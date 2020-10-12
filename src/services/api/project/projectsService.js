import { get, post } from "../../httpService";

const projectBaseUrl = () => `/projects`;
const projectsRequestUrl = (id) => `${projectBaseUrl()}/${id}`;
const createProjectUrl = () => `${projectBaseUrl()}/create`;

export const projectsRequest = (id) => get(projectsRequestUrl(id));
export const createProjectRequest = (body) => post(createProjectUrl(), body);
