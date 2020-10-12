import React from "react";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { showMessage } from "../../../services/shared/toastService";

import Input from "../../../components/input/input";
import ButtonComp from "../../../components/button/button";
import { passwordLabel, emailLabel } from "../onboardingTranslation";
import { homepageRoute, registerRoute } from "../../../shared/routes";
import Logo from "../../../images/scrum-board.svg";
import { loginRequest } from "../../../services/api/auth/authService";
import { loginFormValidation } from "./loginFormValidation";

import "../styles.scss";
import { useContext } from "react";
import { GlobalStore } from "../../../store/global-store";

const Login = () => {
  const { t: translate } = useTranslation();

  const { setUser } = useContext(GlobalStore);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormValidation(),
  });

  const history = useHistory();

  const handleOnClick = async () => {
    try {
      const { data } = await loginRequest(formik.values);
      setUser(data);
      showMessage("Success", "You have succesfully logged in", "success");
      history.push(homepageRoute());
    } catch (error) {
      showMessage("Error", `${error}`, "danger");
    }
  };
  return (
    <div className="form">
      <div className="form__card">
        <Row className="card__image">
          <Col></Col>
        </Row>

        <div className="card__form">
          <h3>Log In</h3>
          <Row>
            <Col>
              <img src={Logo} alt="Logo" className="form__logo" />
            </Col>
          </Row>
          <Row className="form__input">
            <Col>
              <Input
                icon={"pi pi-envelope"}
                type={"email"}
                name={"email"}
                label={translate(emailLabel)}
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors}
              />
            </Col>
          </Row>
          <Row className="form__input">
            <Col>
              <Input
                icon={"pi pi-lock"}
                type={"password"}
                name={"password"}
                label={translate(passwordLabel)}
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.errors}
              />
            </Col>
          </Row>
          <Row className="form__button">
            <Col>
              <ButtonComp
                label={"Login"}
                onClick={handleOnClick}
                disabled={!formik.dirty || !formik.isValid}
              />
            </Col>
          </Row>
          <Row className="form__text">
            <Col>
              <h5>
                Don't Have Account? Please{" "}
                <a href={registerRoute()}>Register</a>{" "}
              </h5>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Login;
