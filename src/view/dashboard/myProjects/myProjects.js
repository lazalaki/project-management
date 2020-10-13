import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { GlobalStore } from "../../../store/global-store";
import {
  projectsRequest,
  deleteProjectRequest,
} from "../../../services/api/project/projectsService";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";

import "./myProjects.scss";

const MyProjects = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const {
    state: { user },
  } = useContext(GlobalStore);

  useEffect(() => {
    getAllProjects(user.id);
  }, []);

  const getAllProjects = async () => {
    const { data } = await projectsRequest(user.id);
    setProjects(data.projects);
    setIsLoading(false);
  };

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  const showProjectHandler = (id) => {
    history.push(`/dashboard/projects/${id}`);
  };

  const deleteProjectHandler = async (event, id) => {
    event.stopPropagation();
    await deleteProjectRequest(id);
    getAllProjects();
  };

  const showButton = () => {
    return user.role === "admin";
  };

  return (
    <div className="project__container">
      <div className="project__text">
        <h1>My Projects</h1>
      </div>
      <div className="project__cards">
        {projects.map((project) => {
          return (
            <div
              className="project__card"
              key={project.id}
              onClick={() => showProjectHandler(project.id)}
            >
              <Panel className="project__panel" header={project.title}>
                <p>{project.description}</p>
                {showButton() ? (
                  <Button
                    className="project__delete"
                    label={"Delete"}
                    onClick={(event) => deleteProjectHandler(event, project.id)}
                  />
                ) : (
                  ""
                )}
              </Panel>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
