import React, { useEffect, useState, useContext } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";

import { GlobalStore } from "../../../store/global-store";
import {
  projectsRequest,
  deleteProjectRequest,
} from "../../../services/api/project/projectsService";
import { Panel } from "primereact/panel";
import {
  goToSignleProjectRoute,
  myProjectsRoute,
} from "../../../shared/routes";
import ButtonComp from "../../../components/button/button";
import Modal from "./modal/modal";

import "./myProjects.scss";

const MyProjects = () => {
  const location = useLocation();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [singleProject, setSingleProject] = useState();
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
    history.push(goToSignleProjectRoute(id));
  };

  const deleteProjectHandler = async (event, id) => {
    event.stopPropagation();
    await deleteProjectRequest(id);
    getAllProjects();
  };

  const showButton = () => {
    return user.role === "admin" || "superAdmin";
  };

  const openModalHandler = (event, project) => {
    setSingleProject(project);
    event.stopPropagation();
    setShowModal(true);
  };
  const closeModalHandler = (id) => {
    setShowModal(false);
    history.push(myProjectsRoute());
  };

  const params = new URLSearchParams(location.search).get("id");

  return (
    <div className="project__container">
      <div className="project__modal">
        <Modal
          show={showModal}
          closeModalHandler={closeModalHandler}
          project={singleProject}
          params={params}
          allProjects={() => getAllProjects()}
        />
      </div>
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
                  <>
                    <ButtonComp
                      type={"button-delete"}
                      label={"Delete"}
                      onClick={(event) =>
                        deleteProjectHandler(event, project.id)
                      }
                    />

                    {/* <Link
                      to={{
                        pathname: match.url,
                        search: "id=" + project.id,
                      }}
                      onClick={(event) => openModalHandler(event, project)}
                    > */}
                    <ButtonComp
                      type={"button-update"}
                      label={"Edit"}
                      onClick={(event) => openModalHandler(event, project)}
                    />
                    {/* </Link> */}
                  </>
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
