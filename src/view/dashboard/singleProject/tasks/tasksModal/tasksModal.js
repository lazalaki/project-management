import React from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import ButtonComp from "../../../../../components/button/button";
import { createTaskRequest } from "../../../../../services/api/project/projectsService";
import { Dropdown } from "primereact/dropdown";
import { taskModalValidation } from "./taskModalValidation";

import "./tasksModal.scss";
import { useContext } from "react";
import { GlobalStore } from "../../../../../store/global-store";

const TasksModal = ({ show, closeModal, project }) => {
  const { getAllTasks } = useContext(GlobalStore);
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      email: "",
    },
    validationSchema: taskModalValidation(),
  });
  const createTaskHandler = async () => {
    try {
      await createTaskRequest(project?.id, formik.values);
      closeModal();
      getAllTasks(project?.id);
    } catch (error) {
      console.log(error);
    }
  };

  if (!show) return null;
  if (!project) return null;

  const members = Object.keys(project.members).map(
    (key) => project.members[key]["email"]
  );
  return (
    <>
      <div className="overall" onClick={closeModal} />
      <div className="modal">
        <div className="modal__body">
          <h2>Create Task</h2>
          <div className="task__input">
            <InputText
              name={"title"}
              placeholder={"Title..."}
              value={formik.values.title}
              onChange={formik.handleChange}
              className={"input__text"}
            />
          </div>

          <div className="task__input">
            <InputTextarea
              name={"description"}
              placeholder={"Description..."}
              rows={10}
              cols={15}
              value={formik.values.description}
              onChange={formik.handleChange}
              className={"input__text"}
            />
          </div>

          <div className="task__input">
            <Dropdown
              name={"email"}
              placeholder={"Select Email"}
              value={formik.values.email}
              onChange={formik.handleChange}
              options={members}
              className={"input__text"}
            />
          </div>
          <div className="modal__buttons">
            <ButtonComp
              label={"Create"}
              disabled={!formik.dirty}
              type={"button-primary"}
              onClick={createTaskHandler}
            />
            <ButtonComp
              label={"Cancel"}
              type={"button-primary"}
              onClick={closeModal}
            />
          </div>
          <div className="task__errors">
            {formik.errors["title"] ? <p>{formik.errors["title"]}</p> : ""}
            {formik.errors["description"] ? (
              <p>{formik.errors["description"]}</p>
            ) : (
              ""
            )}
            {formik.errors["email"] ? <p>{formik.errors["email"]}</p> : <></>}
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksModal;
