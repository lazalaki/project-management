import * as Yup from "yup";

export const loginFormValidation = () =>
  Yup.object().shape({
    email: Yup.string().email("Must be email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Minimum 6 characters")
      .max(50, "Maximum 50 characters"),
  });
