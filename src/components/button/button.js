import React from "react";
import { Button } from "primereact/button";

import "./button.scss";

const ButtonComp = ({ label, onClick, disabled = null, type }) => {
  return (
    <Button
      label={label}
      className={disabled ? "p-button-primary--disabled" : type}
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export default ButtonComp;
