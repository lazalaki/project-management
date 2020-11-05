import React, { useEffect, useContext } from "react";
import { addMemberToProjectRequest } from "../../../services/api/project/projectsService";
import { useParams, Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import ButtonComp from "../../../components/button/button";
import { Fieldset } from "primereact/fieldset";
import { showMessage } from "../../../services/shared/toastService";
import { GlobalStore } from "../../../store/global-store";
import { Card } from "primereact/card";
import Moment from "react-moment";
import {
  goToProjectMembersRoute,
  myProjectsRoute,
} from "../../../shared/routes";

import "./singleProject.scss";
import Tasks from "./tasks/tasks";
import TasksModal from "./tasks/tasksModal/tasksModal";
import { useState } from "react";

const SingleProject = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    state: { user, selectedProject },
    getProject,
  } = useContext(GlobalStore);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
  });

  const { id } = useParams();

  useEffect(() => {
    getProject(id);
  }, []);

  const addMemberHandler = async () => {
    try {
      const { data } = await addMemberToProjectRequest(
        selectedProject.id,
        formik.values
      );
      if (data.error) {
        return showMessage("Warning", data.error, "warning");
      }
      formik.resetForm();
      showMessage("Success", "Member Successfuly Added", "success");
    } catch (error) {
      console.log(error);
    }
  };
  const hideAddMemberPanel = () => {
    return user.role === "user";
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };
  return (
    <div className="single">
      <div className="single__modal">
        <TasksModal
          show={showModal}
          closeModal={closeModalHandler}
          project={selectedProject}
        />
      </div>
      <div className="single__left">
        <h2>
          <a href={myProjectsRoute()}>My Projects</a> / {selectedProject?.title}
        </h2>
        <Tasks projectId={selectedProject?.id} />
        {hideAddMemberPanel() ? (
          ""
        ) : (
          <div className="left__button">
            <ButtonComp
              label={"Add Task"}
              type={"button-add"}
              onClick={openModalHandler}
            />
          </div>
        )}
      </div>

      <div className="single__right">
        <div className="single__card">
          <Card className="single__card--card">
            <h3>Project Owner: {selectedProject?.owner.username}</h3>
            <p>Owner's Email: {selectedProject?.owner.email}</p>
            <p>
              Project Started:{" "}
              <Moment fromNow>{selectedProject?.created_at}</Moment>{" "}
            </p>
            <Link
              to={goToProjectMembersRoute(selectedProject?.id)}
              className="single__card--link"
            >
              Project Members
            </Link>
          </Card>
        </div>
        <div className="single__invite">
          {hideAddMemberPanel() ? (
            ""
          ) : (
            <Fieldset className="single__panel" legend={"Add user to project"}>
              <InputText
                className="single__input"
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email address"
              />
              <ButtonComp
                label={"Add"}
                disabled={!formik.dirty}
                type={"button-add"}
                onClick={addMemberHandler}
              />
            </Fieldset>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
