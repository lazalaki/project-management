import React, { useEffect } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import ButtonComp from "../../../../components/button/button";
import { updateProjectRequest } from "../../../../services/api/project/projectsService";

import "./modal.scss";

const Modal = ({ show, closeModalHandler, project, allProjects }) => {
  useEffect(() => {
    if (project) {
      formik.setValues({
        title: project.title,
        description: project.description,
        notes: project.notes || "",
      });
    }
  }, [project]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      notes: "",
    },
  });

  const updateProjectHandler = async () => {
    try {
      await updateProjectRequest(project.id, formik.values);
      closeModalHandler();
      allProjects();
    } catch (error) {
      console.log(error);
    }
  };
  if (!show) return null;
  return (
    <>
      <div className="overall" onClick={closeModalHandler} />
      <div className="modal">
        <div className="modal__body">
          <h2>Update Your Project</h2>
          <InputText
            name={"title"}
            placeholder={"Title..."}
            value={formik.values.title}
            onChange={formik.handleChange}
            className={"modal__input"}
            // className={hasErrors("title") ? "inputtext__error" : "project__input"}
          />
          <InputTextarea
            name={"description"}
            placeholder={"Description..."}
            rows={10}
            cols={15}
            value={formik.values.description}
            onChange={formik.handleChange}
            className={"modal__textarea"}
          />
          <InputTextarea
            name={"notes"}
            placeholder={"Notes..."}
            rows={5}
            cols={15}
            value={formik.values?.notes}
            onChange={formik.handleChange}
            className={"modal__textarea"}
          />
          <div className="modal__buttons">
            <ButtonComp
              label={"Update"}
              disabled={!formik.dirty}
              type={"button-primary"}
              onClick={updateProjectHandler}
            />
            <ButtonComp
              label={"Cancel"}
              disabled={!formik.dirty}
              type={"button-primary"}
              onClick={closeModalHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
