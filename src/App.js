import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import View from "./view";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <View />
      </BrowserRouter>
    </div>
  );
}

export default App;
