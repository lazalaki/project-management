import React from "react";
import { Button } from "primereact/button";

import "./button.scss";

const Butoon = ({ label, onClick, disabled }) => {
  return (
    <Button
      label={label}
      className={disabled ? "p-button-primary--disabled" : "p-button-primary"}
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export default Butoon;
