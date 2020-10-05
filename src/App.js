import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import View from "./view";

function App() {
  return (
    <div className="app">
      <ReactNotification />
      <BrowserRouter>
        <View />
      </BrowserRouter>
    </div>
  );
}

export default App;
