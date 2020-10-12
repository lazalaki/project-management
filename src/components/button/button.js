import React from "react";
import { Button } from "primereact/button";

import "./button.scss";

const ButtonComp = ({ label, onClick, disabled }) => {
  return (
    <Button
      label={label}
      className={disabled ? "p-button-primary--disabled" : "p-button-primary"}
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export default ButtonComp;
