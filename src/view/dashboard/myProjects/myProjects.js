import React from "react";
import { useEffect } from "react";
import { projectsRequest } from "../../../services/api/project/projectsService";
import { useContext } from "react";
import { GlobalStore } from "../../../store/global-store";
import { useState } from "react";
import { Panel } from "primereact/panel";

import "./myProjects.scss";

const MyProjects = () => {
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

  return (
    <div className="project__container">
      <div className="project__text">
        <h1>My Projects</h1>
      </div>
      <div className="project__cards">
        {projects.map((project) => {
          return (
            <div className="project__card" key={project.id}>
              <Panel className="project__panel" header={project.title}>
                <p>{project.description}</p>
              </Panel>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
