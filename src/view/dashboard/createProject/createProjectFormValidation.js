import React from "react";
import * as Yup from "yup";

const CreateProjectFormValidation = () =>
  Yup.object().shape({
    title: Yup.string().required("Title Required"),
    description: Yup.string().required("Desscription Required"),
  });

export default CreateProjectFormValidation;
