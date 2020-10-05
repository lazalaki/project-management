import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { GlobalStoreProvider } from "./store/global-store";
import View from "./view";

function App() {
  return (
    <div className="app">
      <GlobalStoreProvider>
        <ReactNotification />
        <BrowserRouter>
          <View />
        </BrowserRouter>
      </GlobalStoreProvider>
    </div>
  );
}

export default App;
