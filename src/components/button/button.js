import React from "react";
import { Button } from "primereact/button";

import "./button.scss";

const ButtonComp = ({ label, onClick, disabled = null, type, children }) => {
  return (
    <Button
      label={label}
      className={disabled ? "p-button-primary--disabled" : type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ButtonComp;
