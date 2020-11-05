import * as Yup from "yup";

export const taskModalValidation = () =>
  Yup.object().shape({
    title: Yup.string().required("Title required!"),
    description: Yup.string().required("Description required!"),
    email: Yup.string().required("Email required!"),
  });
