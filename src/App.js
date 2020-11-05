import React from "react";
import "./App.css";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { GlobalStoreProvider } from "./store/global-store";
import View from "./view";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Spinner from "./components/spinner/spinner";

function App() {
  return (
    <div className="app">
      <Spinner />
      <GlobalStoreProvider>
        <ReactNotification />
        <View />
      </GlobalStoreProvider>
    </div>
  );
}

export default App;
