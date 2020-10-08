import { get } from "../../httpService";

const projectBaseUrl = () => `/projects`;
const projectsRequestUrl = (id) => `${projectBaseUrl()}/${id}`;

export const projectsRequest = (id) => get(projectsRequestUrl(id));
