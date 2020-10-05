import React from "react";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import Input from "../../../components/input/input";
import Butoon from "../../../components/button/button";
import { nameLabel, passwordLabel, emailLabel } from "../onboardingTranslation";
import { loginRoute } from "../../../shared/routes";
import Logo from "../../../images/scrum-board.svg";
import { registerRequest } from "../../../services/api/auth/authService";

import "../styles.scss";
import { registerFormValidation } from "./registerFormValidation";

const Register = () => {
  const { t: translate } = useTranslation();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: registerFormValidation(),
  });

  const history = useHistory();

  const handleOnClick = async () => {
    try {
      await registerRequest(formik.values);
      history.push(loginRoute());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <div className="form__card">
        <Row className="card__image">
          <Col></Col>
        </Row>

        <div className="card__form">
          <h3>Sign Up</h3>
          <Row>
            <Col>
              <img src={Logo} alt="Logo" className="form__logo" />
            </Col>
          </Row>
          <Row className="form__input">
            <Col>
              <Input
                icon={"pi pi-user"}
                type={"text"}
                name={"username"}
                label={translate(nameLabel)}
                onChange={formik.handleChange}
                value={formik.values.username}
                error={formik.errors}
              />
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
              <Butoon
                label={"Register"}
                onClick={handleOnClick}
                disabled={!formik.dirty || !formik.isValid}
              />
            </Col>
          </Row>
          <Row className="form__text">
            <Col>
              <h5>
                Already Have Account? Please <a href={loginRoute()}>Login</a>{" "}
              </h5>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Register;
