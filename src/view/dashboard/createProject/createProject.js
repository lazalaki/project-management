import React from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import { Row, Col } from "react-grid-system";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import ButtonComp from "../../../components/button/button";

import { createProjectRequest } from "../../../services/api/project/projectsService";
import { showMessage } from "../../../services/shared/toastService";
import CreateProjectFormValidation from "./createProjectFormValidation";

import "./createProject.scss";

const CreateProject = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      notes: "",
    },
    validationSchema: CreateProjectFormValidation(),
  });

  const createProjectHandler = async () => {
    try {
      await createProjectRequest(formik.values);
      showMessage("Success", "You have succesfully created project", "success");
    } catch (error) {
      console.log(error);
    }
  };

  const hasErrors = (name) => {
    return formik.errors && formik.errors[name];
  };

  return (
    <div className="project__create">
      <h1>Create Project</h1>
      <div className="create__card">
        <Row>
          <Col>
            <InputText
              name={"title"}
              placeholder={"Title..."}
              value={formik.values.title}
              onChange={formik.handleChange}
              className={hasErrors("title") ? "inputtext__error" : ""}
            />
          </Col>
        </Row>
        <Row className="label">
          <Col>
            {hasErrors("title") ? (
              <label className="label__error">{formik.errors.title}</label>
            ) : (
              ""
            )}
          </Col>
        </Row>

        <Row>
          <Col>
            <InputTextarea
              name={"description"}
              placeholder={"Description..."}
              rows={5}
              cols={15}
              value={formik.values.description}
              onChange={formik.handleChange}
              className={hasErrors("description") ? "inputtext__error" : ""}
            />
          </Col>
        </Row>
        <Row className="label">
          <Col>
            {hasErrors("description") ? (
              <label className="label__error">
                {formik.errors.description}
              </label>
            ) : (
              ""
            )}
          </Col>
        </Row>

        <Row>
          <Col>
            <InputTextarea
              name={"notes"}
              placeholder={"Notes..."}
              rows={5}
              cols={15}
              value={formik.values.notes}
              onChange={formik.handleChange}
            />
          </Col>
        </Row>
        <Row className="create__button">
          <Col>
            <ButtonComp
              label={"Create"}
              onClick={createProjectHandler}
              disabled={!formik.dirty}
            />
            <ButtonComp
              label={"Cancel"}
              onClick={() => formik.resetForm(formik.initialValues)}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CreateProject;
