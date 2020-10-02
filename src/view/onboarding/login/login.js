import React from "react";
import { useTranslation } from "react-i18next";
import { loginLabel } from "../onboardingTranslation";
import Navbar from "../../../components/navbar/navbar";

const Login = () => {
  const { t: translate } = useTranslation();
  return (
    <div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </p>
    </div>
  );
};

export default Login;
