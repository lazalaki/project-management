import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";
import axios from "axios";
import "./spinner.scss";
import { getFromStorage } from "../../services/shared/localStorageService";

const Spinner = () => {
  const override = css`
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-color: red;
    z-index: 1500;
  `;
  const [loading, setLoading] = useState(false);

  const token = getFromStorage("token");

  useEffect(() => {
    axios.interceptors.request.use((req) => {
      setLoading(true);
      if (!token) {
        setLoading(false);
      }
      return req;
    });

    axios.interceptors.response.use((resp) => {
      console.log("OVO JE RESPONSE");
      setLoading(false);
      return resp;
    });
  });

  if (!loading) return null;

  return (
    <>
      <div className="app__spinner" />

      <div className="spinner__body">
        <h1 className="spinner__text">Loading...</h1>
        <ScaleLoader
          css={override}
          height={170}
          width={10}
          radius={4}
          margin={8}
          color={"white"}
          loading={loading}
        />
      </div>
    </>
  );
};

export default Spinner;
