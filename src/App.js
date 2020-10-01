import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import View from "./view";

function App() {
  return (
    <BrowserRouter>
      <View />
    </BrowserRouter>
  );
}

export default App;
