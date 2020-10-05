import { get } from "../../httpService";

const projectBaseUrl = () => "/projects";

export const projectsRequest = () => get(projectBaseUrl());
