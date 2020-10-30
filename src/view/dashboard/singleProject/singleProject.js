import React, { useState, useEffect, useContext } from "react";
import { addMemberToProjectRequest } from "../../../services/api/project/projectsService";
import { useParams, Link, useLocation, useHistory } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import ButtonComp from "../../../components/button/button";
import { Fieldset } from "primereact/fieldset";
import { showMessage } from "../../../services/shared/toastService";
import { GlobalStore } from "../../../store/global-store";
import { Card } from "primereact/card";
import Moment from "react-moment";
import moment from "moment";
import { goToProjectMembersRoute } from "../../../shared/routes";

import "./singleProject.scss";

const SingleProject = () => {
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

  //DURATION TIME
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     dateTime();
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [time]);

  // const dateTime = () => {
  //   const createdAtInSeconds = moment().diff(selectedProject?.created_at);
  //   const duration = moment.duration(createdAtInSeconds);
  //   const currentTime = duration.format("HH:mm:ss");
  //   setTime(currentTime);
  // };

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

  return (
    <div className="single">
      <div className="single__left">
        <p>{selectedProject?.title}</p>
        <p>{selectedProject?.description}</p>
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
