import React from "react";
import { InputText } from "primereact/inputtext";

import "./input.scss";

const Input = ({ icon, name, type, label, value, onChange, error = null }) => {
  const hasError = () => {
    if (value) {
      return error && error[name];
    }
    return;
  };
  return (
    <div className="p-field p-col-12 p-md-4">
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className={icon}></i>
        </span>
        <span
          className={`p-float-label ${
            hasError() ? "p-float-label--error" : ""
          }`}
        >
          <InputText
            id="inputgroup"
            name={name}
            type={type}
            value={value}
            onChange={onChange}
          />
          <label
            htmlFor="inputgroup"
            className={`inputgroup__label ${
              hasError() ? "inputgroup__label--error" : ""
            }`}
          >
            {hasError() ? error[name] : label}
          </label>
        </span>
      </div>
    </div>
  );
};

export default Input;
