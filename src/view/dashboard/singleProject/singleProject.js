import React, { useState, useEffect } from "react";
import {
  getSingleProjectRequest,
  addMemberToProjectRequest,
} from "../../../services/api/project/projectsService";
import { useParams } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import ButtonComp from "../../../components/button/button";
import { Fieldset } from "primereact/fieldset";

import "./singleProject.scss";
import { showMessage } from "../../../services/shared/toastService";

const SingleProject = () => {
  const [project, setProject] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
  });

  useEffect(() => {
    fetchProject();
  }, []);

  const { id } = useParams();

  const fetchProject = async () => {
    try {
      const { data } = await getSingleProjectRequest(id);
      setProject(data.project);
    } catch (error) {
      console.log(error);
    }
  };
  const addMemberHandler = async () => {
    try {
      const { data } = await addMemberToProjectRequest(
        project.id,
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

  return (
    <div className="single">
      <div className="single__project">
        <p>{project?.title}</p>
        <p>{project?.description}</p>
      </div>
      <div className="single__invite">
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
      </div>
    </div>
  );
};

export default SingleProject;
