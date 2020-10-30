import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./shared/history";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "./i18n";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.Fragment>
    <Router history={history}>
      <App />
    </Router>
  </React.Fragment>,
  document.getElementById("root")
);
